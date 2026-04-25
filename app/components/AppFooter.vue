<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">NIL Entertain</div>
          <div class="footer-logo-sub">Photobooth · Videobooth360 · Bali</div>
          <p class="footer-brand-desc">Menghadirkan momen tak terlupakan dalam setiap event spesial Anda di Bali.</p>
          <div class="footer-socials">
            <a href="#" class="footer-social">in</a>
            <a href="#" class="footer-social">ig</a>
            <a href="#" class="footer-social">fb</a>
            <a href="#" class="footer-social">yt</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Layanan</div>
          <ul class="footer-links">
            <li><a href="#spesialisasi">Photobooth</a></li>
            <li><a href="#spesialisasi">Videobooth360</a></li>
            <li><a href="#spesialisasi">Event Activation</a></li>
            <li><a href="#paket">Paket &amp; Harga</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Navigasi</div>
          <ul class="footer-links">
            <li><a href="#tentang">Tentang Kami</a></li>
            <li><a href="#gallery">Portfolio</a></li>
            <li><a href="#testimoni">Testimoni</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">Kontak</div>
          <ul class="footer-links">
            <li><a href="https://wa.me/6281234567890">WhatsApp</a></li>
            <li><a href="mailto:hello@nilentertain.com">Email</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Reservasi Online</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2024 <span>NIL Entertain</span>. All rights reserved. Photobooth &amp; Videobooth360 Bali.</div>
        <div class="footer-copy">Crafted with ♥ for luxury events</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #070504; padding: 72px 0 32px;
  border-top: 1px solid var(--border);
}
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 60px; }

.footer-logo { font-family: var(--ff-head); font-size: 30px; font-weight: 600; color: var(--cream); margin-bottom: 4px; }
.footer-logo-sub { font-size: 9px; font-family: var(--ff-body); font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--burg); margin-bottom: 16px; }
.footer-brand-desc { font-size: 13px; color: var(--gray); line-height: 1.8; max-width: 240px; margin-bottom: 24px; }

.footer-socials { display: flex; gap: 12px; }
.footer-social {
  width: 36px; height: 36px; border: 1px solid var(--border);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; color: var(--gray); transition: all 0.3s;
}
.footer-social:hover { border-color: var(--burg); color: var(--burg); }

.footer-col-title {
  font-size: 10px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--cream); margin-bottom: 20px;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a { font-size: 13px; color: var(--gray); transition: color 0.3s; }
.footer-links a:hover { color: var(--cream); }

.footer-bottom {
  padding-top: 32px; border-top: 1px solid var(--border);
  display: flex; justify-content: space-between; align-items: center;
}
.footer-copy { font-size: 11px; color: rgba(136,132,128,0.6); letter-spacing: 0.08em; }
.footer-copy span { color: var(--burg); }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
