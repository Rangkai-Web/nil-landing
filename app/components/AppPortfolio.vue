<template>
  <section id="gallery">
    <div class="container">
      <div class="gallery-header">
        <div>
          <div class="section-label reveal">Portfolio</div>
          <h2 class="gallery-h2 reveal d1">Our Work</h2>
        </div>
        <a href="#" class="gallery-link reveal d2">Lihat Semua →</a>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item reveal d1">
          <div class="img-ph gi-tall" style="height:450px">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="8" width="32" height="24" rx="2" stroke="#7d0516" stroke-width="1.5"></rect><circle cx="20" cy="20" r="7" stroke="#888" stroke-width="1.2"></circle></svg>
            <span>Wedding — Photobooth</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d2">
          <div class="img-ph gi-h" style="height:220px">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="14" stroke="#7d0516" stroke-width="1.5"></circle><ellipse cx="18" cy="18" rx="6" ry="14" stroke="#888" stroke-width="1.2"></ellipse></svg>
            <span>360 Videobooth</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d3">
          <div class="img-ph gi-h" style="height:220px">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="8" width="28" height="20" rx="2" stroke="#7d0516" stroke-width="1.5"></rect><path d="M14 8V5a4 4 0 018 0v3" stroke="#888" stroke-width="1.2"></path></svg>
            <span>Corporate Event</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d4">
          <div class="img-ph gi-h" style="height:220px">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18 4l3 9h9l-7.5 5.5 3 9L18 23l-7.5 4.5 3-9L6 13h9z" stroke="#7d0516" stroke-width="1.5"></path></svg>
            <span>Birthday Party</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d2" style="grid-column: span 2">
          <div class="img-ph gi-wide" style="height:220px">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="4" y="10" width="32" height="22" rx="2" stroke="#7d0516" stroke-width="1.5"></rect><circle cx="20" cy="21" r="8" stroke="#888" stroke-width="1.2"></circle><circle cx="20" cy="21" r="3" fill="#7d0516" opacity="0.4"></circle></svg>
            <span>Brand Activation — Full Setup</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d3">
          <div class="img-ph gi-h" style="height:220px">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><rect x="4" y="8" width="28" height="20" rx="2" stroke="#7d0516" stroke-width="1.5"></rect><circle cx="18" cy="18" r="6" stroke="#888" stroke-width="1.2"></circle></svg>
            <span>Festival Event</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
        <div class="gallery-item reveal d4">
          <div class="img-ph gi-h" style="height:220px">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="14" stroke="#7d0516" stroke-width="1.5"></circle><path d="M10 18 Q18 10 26 18" stroke="#888" stroke-width="1.2" fill="none"></path></svg>
            <span>Private Event</span>
          </div>
          <div class="gallery-overlay"><span>View</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#gallery { background: var(--cream2); padding: 120px 0; }
.gallery-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 52px; }
.gallery-h2 {
  font-family: var(--ff-head);
  font-size: clamp(38px, 4.5vw, 62px); font-weight: 400; color: var(--black);
}
.gallery-link {
  font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--burg); border-bottom: 1px solid var(--burg); padding-bottom: 2px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 8px;
}
.gallery-item {
  overflow: hidden; cursor: pointer; position: relative;
  transition: transform 0.4s;
}
.gallery-item:hover { transform: scale(0.98); }
.gallery-item:hover .gallery-overlay { opacity: 1; }
.gallery-item .img-ph { transition: transform 0.6s var(--ease); }
.gallery-item:hover .img-ph { transform: scale(1.05); }

.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(125,5,22,0.4);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.4s;
}
.gallery-overlay span { color: white; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; }

@media (max-width: 768px) {
  .gallery-grid { grid-template-columns: 1fr 1fr; }
  .gallery-item:nth-child(1) { grid-row: span 1; }
  .gallery-item:nth-child(5) { grid-column: span 1; }
}
</style>
