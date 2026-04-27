<script setup lang="ts">
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const onScroll = () => {
  isScrolled.value = window.scrollY > 40
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="navbar-wrapper" :class="{ 'is-floating': isScrolled }">
    <nav id="navbar" :class="{ 'scrolled': isScrolled }">
      <div class="nav-inner">
        <NuxtLink to="/" class="nav-logo">
          NIL Entertain
        </NuxtLink>
        
        <ul class="nav-links">
          <li><a href="/#tentang">Tentang</a></li>
          <li><a href="/#spesialisasi">Layanan</a></li>
          <li><a href="/#paket">Paket</a></li>
          <li><a href="/#gallery">Portfolio</a></li>
          <li><a href="/#faq">FAQ</a></li>
          <li><a href="/#contact">Kontak</a></li>
        </ul>

        <div class="nav-ctas">
          <a href="/reservation" class="btn-burg">Book Now</a>
        </div>

        <button class="nav-hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="isMenuOpen" class="mobile-menu">
          <ul class="mobile-nav-links">
            <li><a href="/#tentang" @click="isMenuOpen = false">Tentang</a></li>
            <li><a href="/#spesialisasi" @click="isMenuOpen = false">Layanan</a></li>
            <li><a href="/#paket" @click="isMenuOpen = false">Paket</a></li>
            <li><a href="/#gallery" @click="isMenuOpen = false">Portfolio</a></li>
            <li><a href="/#faq" @click="isMenuOpen = false">FAQ</a></li>
            <li><a href="/#contact" @click="isMenuOpen = false">Kontak</a></li>
          </ul>
          <div class="mobile-ctas">
            <a href="/reservation" @click="isMenuOpen = false" class="btn-burg">Book Now</a>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 24px 40px;
  transition: padding 0.5s var(--ease), transform 0.5s var(--ease);
  pointer-events: none;
}

.navbar-wrapper.is-floating {
  padding: 10px;
}

#navbar {
  width: 100%;
  max-width: 1240px;
  background: transparent;
  border-radius: 0;
  transition: all 0.5s var(--ease);
  pointer-events: auto;
  position: relative;
}

#navbar.scrolled {
  background: rgba(12, 9, 7, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(233, 231, 221, 0.6);
  /* border-radius: 100px; */
  /* border-bottom-left-radius: 20px; */
  /* border-bottom-right-radius: 20px; */
  padding: 6px 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 60px;
}

.nav-logo {
  font-family: var(--ff-head);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--cream);
  line-height: 1;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-links a {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #fff;
  /* color: rgba(233, 231, 221, 0.6); */
  transition: all 0.3s;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--burg);
  transition: all 0.3s var(--ease);
  transform: translateX(-50%);
}

.nav-links a:hover {
  color: var(--cream2);
}

.nav-links a:hover::after {
  width: 40px;
}

.nav-ctas {
  display: flex;
  align-items: center;
}

.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  z-index: 1001;
}

.nav-hamburger span {
  display: block;
  width: 24px;
  height: 1px;
  background: var(--cream);
  transition: all 0.3s var(--ease);
}

.nav-hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-hamburger.active span:nth-child(2) {
  opacity: 0;
}

.nav-hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 12px;
  background: rgba(12, 9, 7, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(233, 231, 221, 0.1);
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-nav-links a {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--cream);
  display: block;
  padding: 10px 0;
}

.mobile-ctas .btn-burg {
  display: block;
  text-align: center;
  width: 100%;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s var(--ease), transform 0.3s var(--ease);
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .nav-links {
    display: none;
  }
  .nav-ctas {
    display: none;
  }
  .nav-hamburger {
    display: flex;
  }
}

@media (max-width: 768px) {
  .navbar-wrapper {
    padding: 16px 20px;
  }
  .navbar-wrapper.is-floating {
    padding: 10px;
  }
}
</style>

