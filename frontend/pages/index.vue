<template>
  <v-layout justify-center align-center>
    <v-btn elevation="3" rounded icon x-large outlined color="success" :to="{name: 'nova_mensagem'}">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <tabela />
  </v-layout>
</template>

<script>
import Tabela from '../components/tabela.vue'
export default {
  components: {
    Tabela
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
