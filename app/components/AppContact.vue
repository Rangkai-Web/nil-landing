<template>
  <section id="contact">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-left">
          <div class="section-label reveal">Kontak</div>
          <h2 class="contact-h2 reveal d1">Siap Buat<br>Momen Tak<br>Terlupakan?</h2>
          <div class="contact-items reveal d2">
            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" stroke="#7d0516" stroke-width="1.3"></path><path d="M3 8l7 4 7-4" stroke="#7d0516" stroke-width="1.3"></path></svg>
              </div>
              <div>
                <div class="contact-item-label">Email</div>
                <div class="contact-item-val"><a href="mailto:hello@nilentertain.com">hello@nilentertain.com</a></div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 3h4l2 4-2 2a12 12 0 006 6l2-2 4 2v4a2 2 0 01-2 2C7 21 -1 13 -1 3a2 2 0 012-2z" stroke="#7d0516" stroke-width="1.3" transform="translate(1,1)"></path></svg>
              </div>
              <div>
                <div class="contact-item-label">WhatsApp</div>
                <div class="contact-item-val">+62 812-3456-7890</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-item-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="9" r="3" stroke="#7d0516" stroke-width="1.3"></circle><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="#7d0516" stroke-width="1.3"></path></svg>
              </div>
              <div>
                <div class="contact-item-label">Lokasi</div>
                <div class="contact-item-val">Bali, Indonesia</div>
              </div>
            </div>
          </div>
          <div class="contact-ctas reveal d3">
            <a href="https://wa.me/6281234567890" target="_blank" class="btn-burg-solid">Chat WhatsApp</a>
            <a href="mailto:hello@nilentertain.com" class="btn-black-outline">Kirim Email</a>
          </div>
        </div>
        <div class="contact-map reveal-right d2">
          <div class="img-ph" style="height:420px">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="24" r="10" stroke="#7d0516" stroke-width="1.5"></circle><path d="M28 14v-6M28 34v6M18 24h-6M44 24h-6" stroke="#888" stroke-width="1.2"></path><path d="M28 48s-14-14-14-24a14 14 0 0128 0c0 10-14 24-14 24z" stroke="#7d0516" stroke-width="1.5" fill="none"></path></svg>
            <span>Google Maps — Bali, Indonesia</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background: var(--cream); color: var(--black);
  padding: 120px 0;
}
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }

.contact-h2 {
  font-family: var(--ff-head);
  font-size: clamp(38px, 4.5vw, 58px); font-weight: 400; line-height: 1.1;
  color: var(--black); margin-bottom: 32px;
}

.contact-items { display: flex; flex-direction: column; gap: 24px; margin-bottom: 40px; }
.contact-item { display: flex; gap: 16px; align-items: flex-start; }
.contact-item-icon {
  width: 40px; height: 40px; border: 1px solid rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  color: var(--burg);
}
.contact-item-label { font-size: 10px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin-bottom: 4px; }
.contact-item-val { font-size: 15px; color: var(--black); font-weight: 500; }

.contact-ctas { display: flex; gap: 12px; }

.contact-map {
  height: 420px; border: 1px solid rgba(0,0,0,0.08);
  overflow: hidden; position: relative;
}
.contact-map .img-ph { height: 100%; }

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
