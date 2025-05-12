<template>
  <div v-if="mostrarTela" class="intro-screen">
    <h1 class="intro-title">INICIALIZANDO SISTEMA...</h1>
    <p class="intro-subtitle">Carregando</p>
    <div class="progress-bar">
      <div class="progress" :style="{ width: `${progress}%` }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mostrarTela = ref(true);
const progress = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value >= 100) {
      progress.value = 100; // 🔥 Força o valor final da barra
      clearInterval(interval);
      setTimeout(() => mostrarTela.value = false, 7000); // 🔥 Espera 4 segundos antes de remover a tela
    } else {
      progress.value += Math.random() * 5; // 🔥 Ajustando a velocidade da barra
    }
  }, 300);
});
</script>

<style scoped>
.intro-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  color: #00ffcc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', monospace;
}

.intro-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.intro-subtitle {
  font-size: 18px;
  margin-top: 10px;
}

.progress-bar {
  width: 80%;
  height: 10px;
  background: #222;
  border: 2px solid #00ffcc;
  margin-top: 20px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #00ffcc, #ff007f);
  transition: width 0.3s ease-in-out;
}
</style>