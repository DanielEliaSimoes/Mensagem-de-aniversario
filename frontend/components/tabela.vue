<template>
  <v-data-table
    :headers="headers"
    :items="names"
    :items-per-page="10"
    class="elevation-1"
  />
</template>

<script>
import api from '~api'
export default {
  data () {
    return {
      names: [],
      headers: [
        {
          text: 'Nome',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Telefone', value: 'phone' },
        { text: 'Data de Aniversário', value: 'date' },
        { text: 'Mensagem', value: 'nova_mensagem' }
      ]
    }
  },
  created () {
    api.list_names().then(response => {
      this.names = response
    })
  }
}
</script>
