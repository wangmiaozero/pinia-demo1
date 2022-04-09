<template>
  <div>{{ userStore.name }}</div>
  <button @click="handleUpdateName">
    改变
  </button>
  <br />
  <div>{{userStore.fullName}}</div>
  <br />
  <button @click="handleLogin">
    异步action
  </button>
</template>

<script  setup>
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const handleUpdateName = () =>{
  userStore.updateName('李四')
}
const handleLogin  = () =>{
  userStore.login('李四','admin123')
}

</script>
