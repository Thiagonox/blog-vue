<template>
    <div class="w-full rounded-2xl mt-4 p-6 bg-[#23261E] hover:bg-[#3E4A36] duration-200 overflow-hidden text-ellipsis">
        <h1 class="text-text text-2xl font-principal mb-2 truncate">{{ titulo }}</h1>
        <h2 class="mr-3 text-text/50 text-lg font-secundaria mb-2">{{ tag }}</h2>
        <p class=" h-28 mb-6 text-text text-lg font-principal overflow-hidden text-ellipsis">{{ resumo }}</p>
        <nuxt-link :to="`/${link}`"><img class="w-6" src="../assets/img/open.svg" alt="">
        </nuxt-link>
    </div>
</template>
<script>

export default {
 
  props: {
    titulo: String,
    tag: String,
    resumo: String,
    link: String
  }
}
</script>