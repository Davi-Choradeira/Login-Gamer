<template>
  <div class="background">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  if (!canvas.value) return;
  const ctx = canvas.value.getContext("2d");

  // Define o tamanho inicial do canvas
  function resizeCanvas() {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Gera estrelas com profundidade
  const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.value.width,
    y: Math.random() * canvas.value.height,
    speed: Math.random() * 3 + 1,
    size: Math.random() * 2,
    depth: Math.random() * 1.5 + 0.5, // Variando profundidade
  }));

  function animate() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
    
    stars.forEach(star => {
      star.y += star.speed * star.depth;
      star.x += Math.sin(Date.now() / 1000) * 0.5 * star.depth; // Movimento sutil lateral

      if (star.y > canvas.value.height) {
        star.y = 0;
        star.x = Math.random() * canvas.value.width;
      }

      ctx.fillStyle = `rgba(255, 255, 255, ${star.depth})`; // Variação de brilho
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  
  animate();
});
</script>

<style>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
}
</style>