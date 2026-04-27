<script setup lang="ts">
import TextureLines from './svg-icon/TextureLines.vue'
import DoubleCircle from './svg-icon/DoubleCircle.vue'
</script>

<template>
  <section id="contact">
    <!-- Decorative Background -->
    <div class="decor-wrapper">
      <TextureLines class="opacity-40 text-[#890015]" />
      <DoubleCircle :size="500" position-class="absolute top-0 right-0 opacity-40 text-[#890015] hidden xl:block" />
    </div>

    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <div class="section-label reveal">Get in Touch</div>
          <h2 class="contact-h2 reveal d1">Ayo Buat Momen<br>Tak <em>Terlupakan</em> Bersama</h2>
          
          <div class="contact-items reveal d2">
            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="item-details">
                <div class="contact-item-label">Email Kami</div>
                <div class="contact-item-val"><a href="mailto:hello@nilentertain.com">hello@nilentertain.com</a></div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0012 20.1986 21.9441 20.4743 21.8525 20.7302C21.7608 20.9861 21.6365 21.2168 21.4871 21.4082C21.3378 21.5996 21.1666 21.7476 20.9839 21.8431C20.8013 21.9386 20.6111 21.9796 20.42 21.963C17.3117 21.6253 14.3243 20.563 11.75 28.847C9.37346 17.3751 7.18534 15.4283 5.3 12.922C3.59312 10.6613 2.4132 8.0581 1.83 5.33C1.8134 5.13886 1.85442 4.94859 1.94991 4.76587C2.04539 4.58315 2.19323 4.412 2.38461 4.26258C2.57599 4.11317 2.80665 3.98877 3.06253 3.89694C3.3184 3.80512 3.59404 3.74787 3.87249 3.72851L6.87 3.72851C7.35133 3.72403 7.81846 3.89437 8.18 4.20452C8.54154 4.51467 8.775 4.94273 8.84 5.41C8.96 6.32 9.18 7.21 9.5 8.07C9.63583 8.42398 9.6705 8.80806 9.60018 9.17942C9.52986 9.55078 9.35749 9.89435 9.1 10.17L7.83 11.44C9.06 13.6 10.84 15.38 13 16.61L14.27 15.34C14.5457 15.0825 14.8892 14.9101 15.2606 14.8398C15.6319 14.7695 16.016 14.8042 16.37 14.94C17.23 15.26 18.12 15.48 19.03 15.6C19.5023 15.6667 19.934 15.9044 20.2442 16.2713C20.5544 16.6382 20.7225 17.1102 20.7175 17.595L20.7175 19.92" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="item-details">
                <div class="contact-item-label">WhatsApp</div>
                <div class="contact-item-val"><a href="https://wa.me/6281234567890" target="_blank">+62 812-3456-7890</a></div>
              </div>
            </div>

            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="item-details">
                <div class="contact-item-label">Lokasi Studio</div>
                <div class="contact-item-val">Bali, Indonesia</div>
              </div>
            </div>
          </div>

          <div class="contact-ctas reveal d3">
            <a href="https://wa.me/6281234567890" target="_blank" class="btn-burg-fill">Konsultasi Gratis</a>
            <!-- <a href="mailto:hello@nilentertain.com" class="btn-dark-outline">Email Inquiry</a> -->
            <a href="https://maps.app.goo.gl/J3yJmJ8w8H9X9Z9X9" target="_blank" class="btn-dark-outline">Get Direction</a>
          </div>
        </div>

        <div class="contact-right reveal-right d2">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.382607148!2d115.1542322!3d-8.6704582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23ef832d25089%3A0x6335132338f08146!2sDenpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1714115000000!5m2!1sid!2sid" 
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="map-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background: var(--cream);
  color: var(--black);
  padding: 160px 0;
  position: relative;
  overflow: hidden;
}

.decor-wrapper {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

.contact-h2 {
  font-family: var(--ff-head);
  font-size: clamp(42px, 5vw, 68px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--black);
  margin-bottom: 48px;
}

.contact-h2 em {
  font-style: italic;
  color: var(--burg);
  font-weight: 400;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 52px;
}

.contact-item {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.contact-item-icon {
  width: 52px;
  height: 52px;
  background: var(--white);
  border: 1px solid rgba(125, 5, 22, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--burg);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-item:hover .contact-item-icon {
  background: var(--burg);
  color: var(--white);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(125, 5, 22, 0.1);
}

.contact-item-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 6px;
}

.contact-item-val {
  font-size: 18px;
  color: var(--black);
  font-weight: 500;
}

.contact-item-val a {
  color: inherit;
  transition: color 0.3s ease;
}

.contact-item-val a:hover {
  color: var(--burg);
}

.contact-ctas {
  display: flex;
  gap: 16px;
}

.btn-burg-fill {
  padding: 18px 36px;
  background: var(--burg);
  color: var(--white);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.4s var(--ease);
}

.btn-burg-fill:hover {
  background: var(--burg-light);
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(125, 5, 22, 0.2);
}

.btn-dark-outline {
  padding: 18px 36px;
  border: 1px solid var(--black);
  color: var(--black);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.4s var(--ease);
}

.btn-dark-outline:hover {
  background: var(--black);
  color: var(--white);
  transform: translateY(-5px);
}

.map-wrapper {
  height: 650px;
  width: 100%;
  /* border-radius: 30px; */
  overflow: hidden;
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.map-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.05);
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 80px;
  }
  .contact-left {
    text-align: center;
  }
  .contact-items {
    align-items: center;
  }
  .contact-item {
    text-align: left;
    width: 100%;
    max-width: 400px;
  }
  .contact-ctas {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  #contact {
    padding: 100px 0;
  }
  .contact-item-val {
    font-size: 16px;
  }
  .map-wrapper {
    height: 400px;
  }
  .contact-ctas {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-burg-fill, .btn-dark-outline {
    text-align: center;
  }
}
</style>

