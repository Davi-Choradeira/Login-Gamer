<template>
  <div class="login-container">
    <div class="avatar-container">
      <img 
        :style="{ borderColor: avatarGlow, boxShadow: `0px 0px 15px ${avatarGlow}` }" 
        src="/avatar-gamer.png" 
        alt="Avatar Gamer" 
      />
    </div>

    <h2>🔥 Login Gamer 🔥</h2>
    <input type="text" v-model="username" placeholder="👤 Usuário" @input="trackMovement" />
    <input type="password" v-model="password" placeholder="🔒 Senha" @input="trackMovement" />
    <button @click="login">🎮 Entrar</button>

    <div v-if="errorMessage" class="error-alert">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const avatarGlow = ref('#00ffcc') // Cor inicial do brilho do avatar
const emit = defineEmits(['login-sucesso']) // Define o evento de sucesso

function login() {
  if (username.value === 'Choradeira2025' && password.value === '360360') {
    console.log("✅ Senha correta! Emitindo evento...");
    emit('login-sucesso'); // 🚀 Emite o evento para o App.vue
  } else {
    errorMessage.value = "⚠️ Senha incorreta! Tente novamente.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 2000);
  }
}

function trackMovement(event) {
  avatarGlow.value = event.target.type === 'text' ? '#0077ff' : '#ff007f';
}
</script>

<style>
.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  width: 320px;
  text-align: center;
  color: white;
  animation: fadeIn 1s ease-in-out;
}

.avatar-container {
  text-align: center;
}

@keyframes pulseNeon {
  0% { box-shadow: 0px 0px 10px var(--avatarGlow); }
  50% { box-shadow: 0px 0px 20px var(--avatarGlow); }
  100% { box-shadow: 0px 0px 10px var(--avatarGlow); }
}

.avatar-container img {
  width: 120px;
  border-radius: 50%;
  border: 3px solid #00ffcc;
  animation: pulseNeon 2s infinite alternate;
}

.error-alert {
  color: red;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 0, 0, 0.3);
  margin-top: 10px;
}

input {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 2px solid #ff007f;
  border-radius: 5px;
  background: black;
  color: white;
  transition: 0.3s;
}

input:focus {
  border-color: #00ffcc;
}

button {
  width: 100%;
  background: linear-gradient(45deg, #ff007f, #00ffcc);
  color: white;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: linear-gradient(45deg, #ff0055, #0077ff);
  transform: scale(1.05);
}
</style>