<template>
  <v-app-bar color="green" dark fixed app clipped-right>
    <v-spacer /><v-toolbar-title><router-link to="/"><v-btn x-large text>Mensagens de aniversário</v-btn></router-link></v-toolbar-title>
    <v-spacer />
    <v-btn v-if="!logged_user" text dark ripple class="ma-0 ml-5" @click="open_login_dialog($event)">Login</v-btn>

    <!-- <template v-slot:activator="{ on }"><v-btn v-on="on"> -->
    <v-menu v-if="logged_user" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="ma-0 ml-5">
          <v-avatar size="36px">
            <img src="https://i.pinimg.com/originals/c6/96/7c/c6967c59c58349015de4a745ebfd2fcb.jpg">
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar>
                <img src="https://i.pinimg.com/originals/c6/96/7c/c6967c59c58349015de4a745ebfd2fcb.jpg">
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-item-title>
              <v-list-item-subtitle>{{logged_user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <!-- <v-app-bar-nav-icon @click.stop="state.drawerRight = !state.drawerRight" /> -->
    <login-dialog ref="login_dialog" />
  </v-app-bar>
</template>

<script>
import loginDialog from '~/components/login-dialog.vue'
import Snacks from '~/helpers/Snacks.js'
import api from '~api'

export default {
  components: {
    loginDialog
  },
  props: ['state'],
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open()
      evt.stopPropagation()
    },
    async logout () {
      await api.logout()
      this.$store.commit('auth/setCurrentUser', null)
      Snacks.show(this.$store, {text: 'Até logo!'})
    }
  }
}
</script>
