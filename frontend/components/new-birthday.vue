<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :counter="30"
            label="Nome do aniversariante"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="phone"
            :rules="phoneRules"
            :counter="15"
            label="Celular"
            required
          />
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="date"
            :rules="dateRules"
            label="Dia de aniversário"
            required
          />
        </v-col>
        <v-select
          v-model="select"
          :items="items"
          label="Mensagens salvas"
          @change="onSelectChange()"
        />
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            :disabled="!select"
            color="info"
            class="mr-4"
            @click="modifica_mensagem"
          >
            Modificar mensagem
          </v-btn>
          <v-btn
            color="info"
            class="mr-4"
            @click="salva_mensagem"
            :disabled="!nova_mensagem"
          >
            Salvar nova mensagem
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-textarea
            :rules="textRules"
            color="teal"
            label="Nova mensagem"
            v-model="nova_mensagem"
            required
          />
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="salva_aniversario"
          >
            Salvar
          </v-btn>
          <v-btn
            color="error"
            class="mr-4"
            @click="reset"
          >
            Cancelar
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import api from '~api'
export default {
  data: () => ({
    valid: false,
    name: '',
    nova_mensagem: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters'
    ],
    textRules: [
      v => !!v || 'Message is required'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Celular é obrigatório',
      v => (v && v.length <= 15 && v.length >= 10) || 'Phone must be like this +5511999999999'
    ],
    date: '',
    dateRules: [
      v => !!v || 'Date is required',
      v => (v && v.length === 5) || 'Date must be like this 05/06. Não esqueça da barra!!!'
    ],
    items: [],
    select: '',
    actionFunc: null
  }),
  mounted () {
    api.list_messages().then(response => {
      this.items = response
    })
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    onSelectChange () {
      this.nova_mensagem = this.select
    },
    salva_aniversario () {
      const {name, phone, date, nova_mensagem} = this
      const aniversario = {name, phone, date, nova_mensagem}
      api.aniversario_salva(aniversario).then(() => {
        this.$router.push({name: 'index'})
      })
    },
    salva_mensagem () {
      const message = this.nova_mensagem
      api.message_salva(message).then(() => {
        this.$router.push(api.menssagenssalvas)
      })
      this.select = this.nova_mensagem
    },
    modifica_mensagem () {
    // todo
    }
  }
}

</script>
