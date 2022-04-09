<script>

export default {
  name:"App",
  setup(){
    
  }
}
</script>

<template>
  <div class="router-view-container">
     <router-view></router-view>
  </div>
 
  <footer>
    <a href="https://pinia.vuejs.org/">Pinia</a>
  </footer>
</template>

<style>
.routerArr{
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
 
}
 .routerArr a{
    margin-right: 5px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-view-container{
  height: 92vh;
}
footer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
