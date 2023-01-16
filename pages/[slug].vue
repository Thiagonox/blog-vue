<template>
    <div class="bg-principal pt-6">
        <main class="w-11/12 m-auto">
            <div class="w-full m-auto mb-10">
                <img class="w-full md:h-60 md:object-cover rounded-3xl" src="https://photo-cdn2.icons8.com/0dh5qMhiZOUyICiSo6i_ZZ9zjKsqIsl0QvfSGUp7tN4/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8xNDY4ZDQyNDBh/YjM0MmUzODNjY2M0/ZTI0YzkxNTg1Mi5q/cGc.jpg" alt="">
                
            </div>
            <div class="w-full -mt-20 md:grid md:grid-cols-8 md:gap-8">
              <h1 class="md:col-span-5  text-4xl font-principal">
                  <mark class="bg-text">
                    {{ post.titulo }}
                  </mark>
              </h1>
              <h2 class="md:col-span-5 text-text/50 text-2xl font-secundaria">{{ post.tag }}</h2>
              <div class="md:col-span-5">
                  <h2 class="text-text text-xl font-secundaria mb-6"><b>{{ post.resumo }}</b></h2>
                  <p class="text-text text-xl leading-8 font-principal mb-6">{{ post.conteudo1 }}</p>
              </div>
              <div class="hidden md:block md:col-span-3">
                  <Article v-for="artigo in artigo.slice(4, 6)" :titulo="artigo.titulo" :tag="artigo.tag" :resumo="artigo.resumo" :link="artigo.id.toString()"/>
              </div>
            </div>
        </main>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: [],
      artigo: []
    }
  },
   mounted() {
    axios.get(`https://d0xguy57.directus.app/items/Post`)
      .then(response => {
        this.artigo = response.data.data;
      })
    axios.get(`https://d0xguy57.directus.app/items/Post${this.$route.path}`)
      .then(response => {
        this.post = response.data.data;
      })    
  },
}
</script>