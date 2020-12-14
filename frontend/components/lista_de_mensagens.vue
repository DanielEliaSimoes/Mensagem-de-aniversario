<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{messages}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import api from '~api'

export default {
  data () {
    return {
      messages: []
    }
  },
  created () {
    api.list_messages().then(result => {
      this.messages = result
    })
  }
}
</script>
