<script setup lang="ts">
import IconCameraElegant from './svg-icon/IconCameraElegant.vue'
</script>

<template>
  <section id="tentang">
    <div class="container">

      <div class="about-grid">
        <!-- Left: Visual Stack -->
        <div class="about-visual reveal-left">
          <div class="image-stack">
            <div class="main-img-frame">
              <img src="/img/about/story.png" alt="NIL Entertain Photography" class="main-img">
              <div class="img-overlay"></div>
            </div>
            <div class="accent-frame"></div>
            <div class="badge-seal">
              <div class="badge-inner">
                <IconCameraElegant class="badge-icon" />
                <div class="badge-text">
                  <span>SINCE</span>
                  <strong>2021</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="about-content reveal-right">
          <div class="section-label">Tentang Kami</div>
          <h2 class="about-h2">Bali's Premier<br><em>Event Experience</em><br>Studio</h2>
          
          <div class="about-description">
            <p class="lead-p">NIL Entertain adalah layanan Photobooth &amp; Videobooth 360 premium yang menghadirkan standar estetika baru dalam dokumentasi event di Bali.</p>
            <p>Kami percaya bahwa setiap perayaan layak mendapatkan dokumentasi yang bukan sekadar gambar, melainkan sebuah karya seni. Dengan perpaduan teknologi terkini dan sentuhan kreatif profesional, kami memastikan setiap senyuman dan tawa tertangkap dalam kualitas terbaik.</p>
          </div>

          <div class="about-facts">
            <div class="fact-card">
              <div class="fact-num">200<sup>+</sup></div>
              <div class="fact-label">Event Selesai</div>
            </div>
            <div class="fact-card">
              <div class="fact-num">5.0</div>
              <div class="fact-label">Rating Client</div>
            </div>
            <div class="fact-card">
              <div class="fact-num">3<sup>+</sup></div>
              <div class="fact-label">Tahun Pengalaman</div>
            </div>
          </div>

          <div class="about-quote">
            <p>"Capture the soul of the celebration, not just the scene."</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#tentang {
  background: var(--cream);
  padding: 160px 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 100px;
  align-items: center;
}

/* Visual Stack */
.about-visual {
  position: relative;
}

.image-stack {
  position: relative;
  padding: 40px;
}

.main-img-frame {
  position: relative;
  height: 600px;
  width: 100%;
  overflow: hidden;
  box-shadow: 20px 40px 80px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

.main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease);
}

.image-stack:hover .main-img {
  transform: scale(1.05);
}

.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
}

.accent-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  border: 1px solid var(--burg);
  opacity: 0.3;
  z-index: 1;
}

.badge-seal {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 140px;
  height: 140px;
  background: var(--burg);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(125, 5, 22, 0.3);
  transform: translate(20%, 20%);
}

.badge-inner {
  text-align: center;
}

.badge-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
}

.badge-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.badge-text span {
  font-size: 8px;
  letter-spacing: 0.3em;
  font-weight: 600;
  opacity: 0.8;
}

.badge-text strong {
  font-family: var(--ff-head);
  font-size: 18px;
  letter-spacing: 0.1em;
}

/* Content */
.about-h2 {
  font-family: var(--ff-head);
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 300;
  line-height: 1.1;
  color: var(--black);
  margin-bottom: 40px;
}

.about-h2 em {
  font-style: italic;
  color: var(--burg);
  font-weight: 400;
}

.about-description {
  margin-bottom: 56px;
}

.lead-p {
  font-size: 18px;
  font-weight: 500;
  color: var(--black);
  line-height: 1.6;
  margin-bottom: 24px;
}

.about-description p:not(.lead-p) {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
}

.about-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(0,0,0,0.08);
}

.fact-card {
  text-align: left;
}

.fact-num {
  font-family: var(--ff-head);
  font-size: 40px;
  font-weight: 600;
  color: var(--burg);
  line-height: 1;
}

.fact-num sup {
  font-size: 18px;
  color: var(--burg);
}

.fact-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  margin-top: 8px;
  display: block;
}

.about-quote {
  font-family: var(--ff-head);
  font-size: 20px;
  font-style: italic;
  color: #888;
  padding-left: 24px;
  border-left: 2px solid var(--burg);
}

@media (max-width: 1024px) {
  .about-grid {
    gap: 60px;
  }
}

@media (max-width: 768px) {
  #tentang {
    padding: 100px 0;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 80px;
  }
  .main-img-frame {
    height: 400px;
  }
  .about-visual {
    max-width: 500px;
    margin: 0 auto;
  }
  .about-facts {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}
</style>

