<script setup>
import { onMounted, onUnmounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const elements = [];

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
};

const handleScroll = () => {
  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('aos-init', 'aos-animate');
    } else {
      el.classList.remove('aos-init', 'aos-animate');
    }
  });
};

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false, // we control animation manually
  });

  // Get all elements with data-aos
  const els = document.querySelectorAll('[data-aos]');
  els.forEach((el) => elements.push(el));

  // Initial check
  handleScroll();

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleScroll);
});
</script>

<template>
  <!-- No visible output needed -->
  <div></div>
</template>
