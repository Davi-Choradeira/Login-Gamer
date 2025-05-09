<template>
  <div class="welcome-container">
    <div class="card">
      <h1 class="title">Bem-vindo!</h1>
      <p class="subtitle">Você entrou no universo tecnológico do Vue!</p>
      <button @click="goBack" class="back-button">Voltar</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()

function goBack() {
  localStorage.setItem('acessoLiberado', 'false'); // 🔥 Resetando corretamente ao voltar
  router.push('/');
}

onMounted(() => {
  const botao = document.querySelector(".back-button")
  if (botao) {
    botao.style.opacity = "1"
    botao.style.transition = "0.5s ease-in-out"
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');

.welcome-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at center, #000000 70%, #0a0a0a);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Orbitron', sans-serif;
}

.card {
  background: #000000cc;
  padding: 40px;
  border: 2px solid #00ffcc;
  border-radius: 20px;
  box-shadow: 0 0 25px #00ffcc55;
  text-align: center;
  max-width: 400px;
}

.title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #00ffcc;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 30px;
  color: #ccc;
}

/* 🔙 Botão com ativação garantida */
.back-button {
  opacity: 0; /* Começa invisível */
  padding: 12px 24px;
  font-size: 16px;
  background: transparent;
  color: #00ffcc;
  border: 2px solid #00ffcc;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #00ffcc;
  color: #000;
  transform: scale(1.05);
}
</style>