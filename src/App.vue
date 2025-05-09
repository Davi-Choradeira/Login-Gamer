<template>
  <FundoEstrelado></FundoEstrelado> <!-- 🔥 Mantendo as estrelas no login -->
  <Inicializacao v-if="!telaCarregada"></Inicializacao>
  <LoginGamer v-if="telaCarregada && !acessoLiberado" @login-sucesso="redirecionar"></LoginGamer>
  <router-view v-if="acessoLiberado"></router-view> <!-- Exibe a página de acesso quando o login for confirmado -->
</template>

<script setup>
import { ref, onMounted } from 'vue' // 🔥 Agora `ref` está corretamente importado!
import { useRouter } from 'vue-router'
import FundoEstrelado from './components/FundoEstrelado.vue'
import Inicializacao from './components/Inicializacao.vue'
import LoginGamer from './components/LoginGamer.vue'

const telaCarregada = ref(false)
const acessoLiberado = ref(localStorage.getItem('acessoLiberado') === 'true') // 🔥 Persistindo estado
const router = useRouter()

onMounted(() => {
  telaCarregada.value = false
  setTimeout(() => {
    telaCarregada.value = true
  }, 7000)
})

function redirecionar() {
  console.log("✅ Evento recebido! Redirecionando para /access-granted...")
  acessoLiberado.value = true
  localStorage.setItem('acessoLiberado', 'true') // 🔥 Estado persiste mesmo após reload
  router.push('/access-granted')
}
</script>