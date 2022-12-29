<template>
    <div class=" rounded-2xl mt-4 p-6 bg-[#23261E] overflow-hidden text-ellipsis">
        <h1 class="text-text text-3xl font-principal mb-2 truncate">{{ titulo }}</h1>
        <h2 class="text-text/50 text-lg font-secundaria mb-2">{{ tag }}</h2>
        <p class="h-28 mb-6 text-text text-xl font-principal overflow-hidden text-ellipsis">{{ resumo }}</p>
        <nuxt-link :to="`/${href}`"><img class="w-6" src="../assets/img/open.svg" alt="">
        </nuxt-link>
    </div>
</template>
<script>

export default {
  name: 'Article',
  props: {
    titulo: String,
    tag: String,
    resumo: String,
    href: String
  }
}
</script>