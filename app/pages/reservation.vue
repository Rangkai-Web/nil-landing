<template>
  <div class="relative min-h-screen bg-black text-cream overflow-hidden">
    <!-- Background System -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        class="w-full h-full object-cover opacity-20 brightness-[0.3] fixed"
        alt="Sewa Photobooth & Videobooth 360 Bali - NIL Entertainment"
        width="1920"
        height="1080"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black"
      ></div>
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(137,0,21,0.15),transparent_70%)]"
      ></div>

      <!-- Decorative SVGs -->
      <TextureLines class="opacity-20 text-burg" />
      <DoubleCircle
        :size="800"
        position-class="absolute -top-100 -left-100 opacity-20 text-burg"
      />
      <DoubleCircle
        :size="600"
        position-class="absolute -bottom-60 -right-60 opacity-20 text-burg"
      />

      <!-- Cinematic Grain -->
      <div
        class="absolute inset-0 opacity-[0.03] pointer-events-none"
        style="
          background-image: url(&quot;https://grainy-gradients.vercel.app/noise.svg&quot;);
          filter: contrast(150%) brightness(150%);
        "
      ></div>
    </div>

    <section class="app-container relative z-10 py-24! lg:py-40!">
      <div class="reveal mb-16! text-center lg:text-left">
        <h1
          class="font-[Cormorant_Garamond] text-[clamp(48px,6vw,84px)] font-light leading-[1.1] mt-2.5!"
        >
          Booking Photobooth &<br />
          <em class="not-italic text-burg-light font-normal"
            >Videobooth 360 Bali</em
          >
        </h1>
        <p class="mt-6! text-lg text-cream/60 mb-3!">
          Pilih jadwal yang tersedia dan konfirmasi pesanan Anda melalui langkah
          mudah di bawah ini untuk layanan dokumentasi event premium.
        </p>
      </div>

      <div
        class="flex flex-col lg:flex-row bg-white/2 backdrop-blur-[30px] border border-white/8 rounded-lg overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] reveal d1"
      >
        <!-- Left Panel: Info & Instructions -->
        <div
          class="flex-none lg:w-[35%] bg-linear-to-br from-burg to-[#4a020d] p-12! lg:p-16! flex flex-col"
        >
          <div class="text-center lg:text-left">
            <h2
              class="font-[Cormorant_Garamond] text-3xl mb-10! tracking-wider"
            >
              How It Works
            </h2>
            <div class="flex flex-col gap-8">
              <div
                class="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left"
              >
                <div
                  class="font-[Cormorant_Garamond] text-sm font-bold text-burg-light bg-white w-8 h-8 flex items-center justify-center rounded-full shrink-0"
                >
                  01
                </div>
                <div class="step-text">
                  <h3 class="text-base font-bold mb-1!">Pilih Jadwal</h3>
                  <p class="text-sm text-white/70 leading-relaxed">
                    Lihat ketersediaan slot pada kalender interaktif kami.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left"
              >
                <div
                  class="font-[Cormorant_Garamond] text-sm font-bold text-burg-light bg-white w-8 h-8 flex items-center justify-center rounded-full shrink-0"
                >
                  02
                </div>
                <div class="step-text">
                  <h3 class="text-base font-bold mb-1!">Isi Detail</h3>
                  <p class="text-sm text-white/70 leading-relaxed">
                    Lengkapi data diri Anda di Google Calendar Appointment.
                  </p>
                </div>
              </div>
              <div
                class="flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left"
              >
                <div
                  class="font-[Cormorant_Garamond] text-sm font-bold text-burg-light bg-white w-8 h-8 flex items-center justify-center rounded-full shrink-0"
                >
                  03
                </div>
                <div class="step-text">
                  <h3 class="text-base font-bold mb-1!">Konfirmasi</h3>
                  <p class="text-sm text-white/70 leading-relaxed">
                    Isi form di bawah kalender untuk aktivasi instan via
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div
              class="mt-8! pt-8! border-t border-white/10 text-center lg:text-left"
            >
              <span
                class="block text-xs uppercase tracking-[0.2em] text-white/50 mb-3!"
                >Need Assistance?</span
              >
              <NuxtLink
                :to="contactStore.whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center lg:justify-start gap-3 text-xl font-bold hover:opacity-80 transition-opacity"
              >
                <Icon name="mdi:whatsapp" class="size-6" />
                <span>{{ contactStore.whatsapp.label }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Panel: Calendar & Form -->
        <div class="flex-1 flex flex-col">
          <!-- Calendar Iframe Container -->
          <div class="relative h-[600px] bg-white">
            <div
              v-if="isLoading"
              class="absolute inset-0 bg-white flex flex-col items-center justify-center gap-4 text-[#666] z-5"
            >
              <div
                class="w-10 h-10 border-3 border-[#7d0516]/10 border-t-[#7d0516] rounded-full animate-spin"
              ></div>
              <span>Preparing Calendar...</span>
            </div>
            <iframe
              :src="calendarUrl"
              class="w-full h-full"
              frameborder="0"
              title="NIL Entertainment Booking Calendar"
              @load="isLoading = false"
            ></iframe>
          </div>

          <!-- Confirmation Form -->
          <div class="p-8! lg:p-12! bg-white/10 border-t border-white/50">
            <h3 class="text-base font-semibold mb-6! text-burg-light">
              Sudah memilih jadwal? Konfirmasi Sekarang:
            </h3>

            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8!"
            >
              <div class="flex flex-col gap-2">
                <label
                  for="name"
                  class="text-xs uppercase tracking-widest text-[#888480]"
                  >Nama Lengkap</label
                >
                <input
                  id="name"
                  v-model="confirmForm.name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  class="bg-white/[0.03] border border-cream/10 p-4! text-cream text-sm w-full h-[50px] outline-hidden focus:border-burg-light focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label
                  for="bookingDate"
                  class="text-xs uppercase tracking-widest text-[#888480]"
                  >Tanggal & Waktu</label
                >
                <ClientOnly>
                  <VueDatePicker
                    uid="bookingDate"
                    v-model="confirmForm.bookingDate"
                    :enable-time-picker="true"
                    :min-date="new Date()"
                    :format-locale="idLocale"
                    format="dd MMMM yyyy, HH:mm"
                    placeholder="Pilih Tanggal & Waktu"
                    auto-apply
                    :dark="true"
                    input-class-name="datepicker-custom"
                  />
                  <template #fallback>
                    <input
                      id="bookingDate"
                      type="datetime-local"
                      class="bg-white/3 border border-cream/10 p-4 text-cream text-sm w-full h-[50px]"
                    />
                  </template>
                </ClientOnly>
              </div>

              <div class="flex flex-col gap-2">
                <label
                  for="package"
                  class="text-xs uppercase tracking-widest text-[#888480]"
                  >Pilihan Layanan</label
                >
                <select
                  id="package"
                  v-model="confirmForm.package"
                  class="bg-white/3 border border-cream/10 p-4! text-cream text-sm w-full h-[50px] outline-hidden focus:border-burg-light focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
                >
                  <option value="" class="bg-[#1c1917]">Pilih Layanan</option>
                  <option value="qr-files-only" class="bg-[#1c1917]">
                    Photobooth - QR Files Only
                  </option>
                  <option value="2d-frame-limited" class="bg-[#1c1917]">
                    Photobooth - 2D Frame Limited
                  </option>
                  <option value="2d-frame-unlimited" class="bg-[#1c1917]">
                    Photobooth - 2D Frame Unlimited
                  </option>
                  <option value="video-360-silver" class="bg-[#1c1917]">
                    Video 360 - Silver Package
                  </option>
                  <option value="video-360-gold" class="bg-[#1c1917]">
                    Video 360 - Gold Package
                  </option>
                </select>
              </div>
            </div>

            <button
              @click="confirmViaWhatsApp"
              :disabled="!confirmForm.name || !confirmForm.bookingDate"
              class="w-full bg-burg text-white p-4.5! flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:not-disabled:bg-burg-light hover:not-disabled:-translate-y-0.5 hover:not-disabled:shadow-[0_10px_30px_rgba(125,5,22,0.3)] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Icon name="mdi:whatsapp" class="text-lg" />
              <span>Konfirmasi via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { id as idLocale } from "date-fns/locale";
import { useContactStore } from "~/stores/contactStore";

const contactStore = useContactStore();

useSeoMeta({
  title: "Reservasi Photobooth & Videobooth 360 Bali - NIL Entertainment",
  description:
    "Booking layanan sewa photobooth dan videobooth 360 premium di Bali secara online. Proses reservasi cepat, mudah, dan terpercaya untuk segala jenis event.",
  ogTitle: "Reservasi Photobooth & Videobooth 360 Bali - NIL Entertainment",
  ogDescription:
    "Amankan jadwal dokumentasi event Anda dengan NIL Entertainment. Layanan photobooth premium di Bali.",
  ogImage:
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
  keywords:
    "reservasi photobooth bali, booking videobooth 360 bali, sewa photobox bali, dokumentasi event bali",
});

// JSON-LD for SEO
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Photobooth & Videobooth 360 Rental",
        provider: {
          "@type": "LocalBusiness",
          name: "NIL Entertainment",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Tukad Batanghari VII No.2A",
            addressLocality: "Denpasar",
            addressRegion: "Bali",
            postalCode: "80225",
            addressCountry: "ID",
          },
          telephone: `+${contactStore.whatsapp.number}`,
        },
        areaServed: {
          "@type": "State",
          name: "Bali",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Dokumentasi Event",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Photobooth Bali",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Videobooth 360 Bali",
              },
            },
          ],
        },
      }),
    },
  ],
});

const isLoading = ref(true);
const calendarUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VD4wMfbp3vD2dCm2PABg14ucMOEnMAmUVICPMrF9GJ2YeBmsN2tyvqCVdorvhNHwJxJPwQVwT?gv=true";

const confirmForm = reactive({
  name: "",
  bookingDate: null as Date | null,
  package: "",
});

const confirmViaWhatsApp = () => {
  const formatDate = (dateValue: Date | null) => {
    if (!dateValue) return "-";
    return dateValue.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const message = `Halo NIL Entertainment! 👋

Saya ingin melakukan konfirmasi booking yang telah saya buat di Google Calendar.

📋 *Detail Reservasi:*
• Nama: ${confirmForm.name}
• Layanan: ${confirmForm.package || "Not specified"}
• Jadwal: ${formatDate(confirmForm.bookingDate)}

Mohon bantuannya untuk proses selanjutnya. Terima kasih! 🙏`;

  const whatsappUrl = `https://wa.me/${contactStore.whatsapp.number}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  // Reset form
  confirmForm.name = "";
  confirmForm.bookingDate = null;
  confirmForm.package = "";
};
</script>

<style scoped>
/* Custom Datepicker Styles - Still needed for external component styling */
:deep(.dp__input) {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(233, 231, 221, 0.1) !important;
  padding: 12px 16px 12px 32px !important;
  color: #e9e7dd !important;
  font-size: 14px !important;
  border-radius: 0 !important;
  width: 100% !important;
  height: 50px !important;
}

:deep(.dp__theme_dark) {
  --dp-background-color: #1c1917;
  --dp-text-color: #e9e7dd;
  --dp-hover-color: #2d2a28;
  --dp-hover-text-color: #ffffff;
  --dp-column-header-text-color: #888480;
  --dp-primary-color: #7d0516;
  --dp-primary-text-color: #ffffff;
  --dp-secondary-color: #2d2a28;
  --dp-border-color: rgba(233, 231, 221, 0.1);
  --dp-menu-border-color: rgba(233, 231, 221, 0.1);
  --dp-font-family: "Manrope", sans-serif;
}
</style>
