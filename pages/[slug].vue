<template>
    <div class="bg-principal pt-6">
        <main class="w-11/12 m-auto pb-6">
            <div class="w-full m-auto mb-10">
                <img class="w-full md:h-60 md:object-cover rounded-3xl" src="https://photo-cdn2.icons8.com/0dh5qMhiZOUyICiSo6i_ZZ9zjKsqIsl0QvfSGUp7tN4/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi8xNDY4ZDQyNDBh/YjM0MmUzODNjY2M0/ZTI0YzkxNTg1Mi5q/cGc.jpg" alt="">
                
                <h1 class="-mt-20 text-4xl font-principal">
                    <mark class="bg-text">
                       {{ post.titulo }}
                    </mark>
                </h1>
            </div>
            <h2 class="text-text/50 text-lg font-secundaria ml-4">{{ post.tag }}</h2>
            <div class="md:w-3/5">
              <h2 class="text-text text-xl font-secundaria mb-6"><b>{{ post.resumo }}</b></h2>
              <p class=" text-text text-xl leading-7 font-principal mb-6">{{ post.conteudo1 }}</p>
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
    }
  },
  async created() {
    
    const response = await axios.get(`https://d0xguy57.directus.app/items/Post${this.$route.path}`);
    this.post = response.data.data;
  },
}
</script>