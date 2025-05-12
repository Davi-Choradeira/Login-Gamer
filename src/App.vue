<template>
  <FundoEstrelado /> <!-- 🔥 Mantendo as estrelas no fundo -->

  <!-- Exibe tela de inicialização antes de carregar login -->
  <Inicializacao v-if="mostrarInicializacao" class="fade" />

  <!-- Exibe login somente após a tela inicial -->
  <LoginGamer v-if="!mostrarInicializacao && !acessoLiberado" @login-sucesso="redirecionar" class="fade" />

  <!-- Exibe a página de acesso após login bem-sucedido -->
  <router-view v-if="acessoLiberado" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import FundoEstrelado from './components/FundoEstrelado.vue'
import Inicializacao from './components/Inicializacao.vue'
import LoginGamer from './components/LoginGamer.vue'

const mostrarInicializacao = ref(true)
const acessoLiberado = ref(localStorage.getItem('acessoLiberado') === 'true') // 🔥 Estado persistente
const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    mostrarInicializacao.value = false;
  }, 7000); // 🔥 Agora espera 9 segundos antes de exibir o login
})

function redirecionar() {
  console.log("✅ Login bem-sucedido! Redirecionando para /access-granted...")
  acessoLiberado.value = true
  localStorage.setItem('acessoLiberado', 'true') // 🔥 Estado persiste mesmo após reload
  router.push('/access-granted')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>