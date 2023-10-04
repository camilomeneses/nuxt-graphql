// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client', '@nuxt/ui'],

  runtimeConfig: {
    public: {
      GQL_HOST: 'http://localhost:9091/graphql',
    },
  },
});



