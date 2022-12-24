<template>
    <div class="bg-principal pb-6">
        <header></header>
        <main class="">
            <div class="w-full m-auto pt-4 px-2">
                <h1 class="md:w-1/2 absolute ml-6 mt-6 text-text text-5xl font-principal">
                    Um blog para quem gosta de plantas e decoração
                </h1>
                <img class="w-full md:h-60 md:object-cover rounded-3xl" src="https://photo-cdn2.icons8.com/_yZJWIh2uk3UDtFzvPrapRNHPJxnI8PBXwCVVHm2Pu8/rs:fit:1608:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5l/eHRlcm5hbC9hMmE0/Mi83YjExYzc0MGYz/MWY0NzgwOTdjNGY0/Nzc0NmU0YWI4MC5q/cGc.jpg" alt="">
            </div>
            <div class="w-11/12 mx-auto mt-6">
                <h2 class="ml-6 text-text text-5xl font-principal">
                    Artigos
                </h2>
                <div id="artigos" class="">
                    <Article></Article>
                    <Article></Article>
                    <Article></Article>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      titulos: ""
    }
  },
  methods: {
    created() {
  axios.get('https://xkzindqijuvrqfqhtfdy.supabase.co/rest/v1/Artigo?select=titulo')
    .then(response => {
      this.titulos = response.data
    })
}
  }
}
</script>