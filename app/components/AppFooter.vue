<script setup lang="ts">
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Instagram', icon: 'ig', url: '#' },
  { name: 'TikTok', icon: 'tt', url: '#' },
  { name: 'YouTube', icon: 'yt', url: '#' },
  { name: 'WhatsApp', icon: 'wa', url: '#' }
]
</script>

<template>
  <footer>
    <!-- Decorative Background -->
    <div class="footer-decor">
      <TextureLines class="opacity-10 text-[#890015]" />
      <DoubleCircle :size="500" position-class="absolute -top-50 -left-50 opacity-10 text-[#890015]" />
    </div>

    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">NIL <span>Entertain</span></div>
          <!-- <div class="footer-logo-sub">Premiere Event Documentation · Bali</div> -->
          <p class="footer-brand-desc">
            Abadikan setiap tawa dan momen berharga Anda dengan teknologi Photobooth dan Videobooth360 terbaik di Bali. Estetika, kemewahan, dan kenangan abadi.
          </p>
          <div class="footer-socials">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" class="footer-social" :title="social.name">
              <span v-if="social.icon === 'ig'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </span>
              <span v-else-if="social.icon === 'yt'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </span>
              <span v-else-if="social.icon === 'wa'">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </span>
              <span v-else>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
            </a>
          </div>
        </div>

        <div class="footer-nav">
          <div class="footer-col">
            <div class="footer-col-title">Services</div>
            <ul class="footer-links">
              <li><a href="/#spesialisasi">Photobooth Bali</a></li>
              <li><a href="/#spesialisasi">Videobooth 360</a></li>
              <li><a href="/#spesialisasi">Spinbox Experience</a></li>
              <li><a href="/#paket">Corporate Activation</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-links">
              <li><a href="/#tentang">Tentang Kami</a></li>
              <li><a href="/#gallery">Portfolio Gallery</a></li>
              <li><a href="/#testimoni">Client Stories</a></li>
              <li><a href="/#faq">Pertanyaan Umum</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Contact Us</div>
            <ul class="footer-links">
              <li><a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></li>
              <li><a href="mailto:hello@nilentertain.com">hello@nilentertain.com</a></li>
              <li><a href="">Seminyak, Bali</a></li>
              <li><a href="/reservation" class="footer-book-btn">Book Your Event</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copy">
          &copy; {{ currentYear }} <span>NIL Entertain</span>. Premiere Event Services.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #0a0807;
  padding: 100px 0 40px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-decor {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 80px;
  margin-bottom: 80px;
}

.footer-logo {
  font-family: var(--ff-head);
  font-size: 36px;
  font-weight: 300;
  color: var(--white);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.footer-logo span {
  font-weight: 600;
  color: var(--burg);
}

.footer-logo-sub {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--burg-light);
  margin-bottom: 24px;
}

.footer-brand-desc {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.8;
  max-width: 360px;
  margin-bottom: 32px;
}

.footer-socials {
  display: flex;
  gap: 16px;
}

.footer-social {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: 50%;
  transition: all 0.4s var(--ease);
}

.footer-social:hover {
  background: var(--burg);
  border-color: var(--burg);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(125, 5, 22, 0.2);
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.footer-col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 28px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.footer-links a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: var(--burg-light);
  transform: translateX(5px);
}

.footer-book-btn {
  color: var(--burg-light) !important;
  font-weight: 600;
  margin-top: 10px;
}

.footer-bottom {
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copy {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  letter-spacing: 0.05em;
}

.footer-copy span {
  color: var(--burg-light);
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal a {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--white);
}

@media (max-width: 1024px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  .footer-brand {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer-brand-desc {
    max-width: 450px;
  }
}

@media (max-width: 768px) {
  footer {
    padding: 80px 0 30px;
  }
  .footer-nav {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  .footer-legal {
    justify-content: center;
  }
}
</style>

