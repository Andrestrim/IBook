// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public:{
      baseURL: process.env.BASE_URL || 'http://localhost:3333/',
    },
  },
  css: ['normalize.css/normalize.css','@/assets/scss/base.scss'],
  app:{
    head:{
      title:'iBook',
      htmlAttrs: {
        lang:'pt-br'
      },
      meta: [
        {charset:'utf-8'},
        {name:'viewport', content:'width=device-width, initial-scale=1'},
        {
          hid:'description',
          name:'description',
          content:'Uma nova maneira de ler livros online!'
        }
      ],
      link:[{rel:'icon',type:'image/x-icon',href:'/favicon.ico'}]
    }
  },
  modules: ['@pinia/nuxt'],
  pinia:{
    storesDirs: ['./store/**']
  }
})
