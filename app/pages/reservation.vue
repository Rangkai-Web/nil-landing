<template>
  <div class="reservation-page">
    <section class="container relative z-10 py-24 lg:py-32">
      <div class="reservation-header reveal mb-16 text-center lg:text-left">
        <!-- <div class="section-label text-white!">Reservation</div> -->
        <h1 class="reservation-title">Secure Your <em>Moment</em></h1>
        <p class="reservation-subtitle">Pilih jadwal yang tersedia dan konfirmasi pesanan Anda melalui langkah mudah di bawah ini.</p>
      </div>

      <div class="reservation-card reveal d1">
        <!-- Left Panel: Info & Instructions -->
        <div class="info-panel">
          <div class="panel-content">
            <h2 class="panel-title">How It Works</h2>
            <div class="steps-list">
              <div class="step-item">
                <div class="step-number">01</div>
                <div class="step-text">
                  <h3>Pilih Jadwal</h3>
                  <p>Lihat ketersediaan slot pada kalender interaktif kami.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">02</div>
                <div class="step-text">
                  <h3>Isi Detail</h3>
                  <p>Lengkapi data diri Anda di Google Calendar Appointment.</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">03</div>
                <div class="step-text">
                  <h3>Konfirmasi</h3>
                  <p>Isi form di bawah kalender untuk aktivasi instan via WhatsApp.</p>
                </div>
              </div>
            </div>

            <div class="help-section mt-8! pt-8! border-t border-white/10">
              <span class="help-label">Need Assistance?</span>
              <a href="https://wa.me/6281234567890" target="_blank" class="whatsapp-link">
                <Icon name="mdi:whatsapp" class="size-6" />
                <span>+62 812 3456 7890</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Panel: Calendar & Form -->
        <div class="calendar-panel">
          <!-- Calendar Iframe Container -->
          <div class="calendar-container relative">
            <div v-if="isLoading" class="loader-overlay">
              <div class="loader"></div>
              <span>Preparing Calendar...</span>
            </div>
            <iframe
              :src="calendarUrl"
              class="calendar-iframe"
              frameborder="0"
              @load="isLoading = false"
            ></iframe>
          </div>

          <!-- Confirmation Form -->
          <div class="confirmation-form">
            <h3 class="form-title">Sudah memilih jadwal? Konfirmasi Sekarang:</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label>Nama Lengkap</label>
                <input 
                  v-model="confirmForm.name"
                  type="text" 
                  placeholder="Masukkan nama Anda"
                  class="input-field"
                />
              </div>

              <div class="form-group">
                <label>Tanggal & Waktu</label>
                <ClientOnly>
                  <VueDatePicker
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
                    <input type="datetime-local" class="input-field" />
                  </template>
                </ClientOnly>
              </div>

              <div class="form-group">
                <label>Pilihan Layanan</label>
                <select v-model="confirmForm.package" class="input-field select-field">
                  <option value="">Pilih Layanan</option>
                  <option value="photobooth">Photobooth Standard</option>
                  <option value="photobooth-360">Photobooth 360</option>
                  <option value="full-activation">Full Activation</option>
                  <option value="wedding-package">Wedding Special</option>
                  <option value="corporate-event">Corporate Event</option>
                </select>
              </div>
            </div>

            <button
              @click="confirmViaWhatsApp"
              :disabled="!confirmForm.name || !confirmForm.bookingDate"
              class="submit-btn"
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
import { id as idLocale } from 'date-fns/locale'


useSeoMeta({
  title: 'Reservation - NIL Entertain | Premium Event Documentation',
  description: 'Book your premium photobooth and documentation services online. Fast, easy, and secure reservation for your special events.',
  ogTitle: 'Reservation - NIL Entertain',
  ogDescription: 'Secure your moment with NIL Entertain. Premium photobooth reservation.',
  ogImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200',
})

const isLoading = ref(true)
const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2VD4wMfbp3vD2dCm2PABg14ucMOEnMAmUVICPMrF9GJ2YeBmsN2tyvqCVdorvhNHwJxJPwQVwT?gv=true'

const confirmForm = reactive({
  name: '',
  bookingDate: null as Date | null,
  package: ''
})

const confirmViaWhatsApp = () => {
  const formatDate = (dateValue: Date | null) => {
    if (!dateValue) return '-'
    return dateValue.toLocaleDateString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const message = `Halo NIL Entertain! 👋

Saya ingin melakukan konfirmasi booking yang telah saya buat di Google Calendar.

📋 *Detail Reservasi:*
• Nama: ${confirmForm.name}
• Layanan: ${confirmForm.package || 'Not specified'}
• Jadwal: ${formatDate(confirmForm.bookingDate)}

Mohon bantuannya untuk proses selanjutnya. Terima kasih! 🙏`

  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  
  // Reset form
  confirmForm.name = ''
  confirmForm.bookingDate = null
  confirmForm.package = ''
}
</script>

<style scoped>
.reservation-page {
  position: relative;
  min-height: 100vh;
  background-color: var(--black);
  color: var(--cream);
  overflow: hidden;
  margin-top: 10rem;
}

.reservation-title {
  font-family: var(--ff-head);
  font-size: clamp(48px, 6vw, 84px);
  font-weight: 300;
  line-height: 1.1;
  margin-top: 10px;
}

.reservation-title em {
  font-style: italic;
  color: var(--burg-light);
  font-weight: 400;
}

.reservation-subtitle {
  margin-top: 24px;
  font-size: 18px;
  color: rgba(233, 231, 221, 0.6);
  margin-bottom: 12px !important;
}

.reservation-card {
  display: flex;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6);
}

.info-panel {
  flex: 0 0 35%;
  background: linear-gradient(135deg, var(--burg), #4a020d);
  padding: 60px 48px;
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-family: var(--ff-head);
  font-size: 32px;
  margin-bottom: 40px;
  letter-spacing: 0.02em;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.step-item {
  display: flex;
  gap: 20px;
}

.step-number {
  font-family: var(--ff-head);
  font-size: 14px;
  font-weight: 700;
  color: var(--burg-light);
  background: var(--white);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.step-text h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}

.step-text p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.help-label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 12px;
}

.whatsapp-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  transition: opacity 0.3s;
}

.whatsapp-link:hover {
  opacity: 0.8;
}

.calendar-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.calendar-container {
  height: 600px;
  background: white;
}

.calendar-iframe {
  width: 100%;
  height: 100%;
}

.loader-overlay {
  position: absolute;
  inset: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: #666;
  z-index: 5;
}

.loader {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(125, 5, 22, 0.1);
  border-top-color: var(--burg);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.confirmation-form {
  padding: 48px;
  background: rgba(255, 255, 255, 0.01);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.form-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--burg-light);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray);
}

.input-field {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(233, 231, 221, 0.1);
  padding: 12px 16px;
  color: var(--cream);
  font-size: 14px;
  width: 100%;
  height: 50px;
  transition: all 0.3s;
}

.input-field:focus {
  outline: none;
  border-color: var(--burg-light);
  background: rgba(255, 255, 255, 0.06);
}

.select-field option {
  background: #1c1917;
  color: var(--cream);
}

.submit-btn {
  width: 100%;
  background: var(--burg);
  color: var(--white);
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.4s var(--ease);
}

.submit-btn:hover:not(:disabled) {
  background: var(--burg-light);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(125, 5, 22, 0.3);
}

.submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Custom Datepicker Styles */
:deep(.dp__input) {
  background: rgba(255, 255, 255, 0.03) !important;
  border: 1px solid rgba(233, 231, 221, 0.1) !important;
  padding: 12px 16px 12px 32px !important;
  color: var(--cream) !important;
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
  --dp-font-family: 'Manrope', sans-serif;
}

@media (max-width: 1024px) {
  .reservation-card {
    flex-direction: column;
  }
  .info-panel {
    flex: none;
    padding: 48px;
  }
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .py-24 {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .form-grid {
    grid-template-columns: 1fr;
  }
  .panel-content {
    text-align: center;
  }
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .step-number {
    margin-bottom: 8px;
  }
  .whatsapp-link {
    justify-content: center;
  }
  .confirmation-form {
    padding: 32px 24px;
  }
}
</style>
