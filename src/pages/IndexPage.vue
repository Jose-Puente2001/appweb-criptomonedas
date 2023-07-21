<template>
  <q-page class="flex flex-center">
    <div class="container">
    <h1 class="title">CrytoStatus</h1>
    <img src="../assets/logo.png" />
  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>


<style>

.container{
  display: grid;
  align-items: center;
 
}

.title{
  font-size: 60px;
}

</style>