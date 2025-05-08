<template>
    <div class="background">
      <canvas id="starCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const canvas = document.getElementById('starCanvas')
    const ctx = canvas.getContext('2d')
  
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  
    const stars = []
  
    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: 0,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 1
      }
    }
  
    function updateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach((star, index) => {
        star.y += star.speed
        if (star.y > canvas.height) stars[index] = createStar()
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()
      })
      requestAnimationFrame(updateStars)
    }
  
    for (let i = 0; i < 100; i++) {
      stars.push(createStar())
    }
  
    updateStars()
  })
  </script>
  
  <style>
  .background {
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: fixed; /* Fixado na tela */
    top: 0;
    left: 0;
    overflow: hidden; /* Sem scroll */
  }
  </style>