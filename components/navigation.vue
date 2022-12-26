<template>
    <section class="bg-[#23261E]">
        <nav class="absolute -translate-x-full md:translate-x-0 md:flex items-center md:static w-3/4 md:w-full h-screen bg-[#23261E] md:bg-inherit duration-200  shadow-black md:shadow-none rounded-xl z-10 md:z-0">
            <button @click="click" class="w-8 h-8 ml-4 md:hidden">
                <img class="w-8" src="../assets/img/menu_open.svg" alt="" srcset="">
                </button>
            <ul class="h-24 md:h-full mt-6 md:mt-0 flex flex-col md:flex-col justify-between font-Quicksand text-xl md:text-base text-[#DDE6CD]">
                <li class="px-4 py-2 rounded-full flex items-center md:flex-col" v-bind:class="{'bg-tertiary': $route.path === '/'}"><img class="w-8" src="../assets/img/home.svg" alt="" srcset=""><router-link class="w-full" to="/">Home</router-link></li>
                <li class="px-4 h-10 rounded-full flex items-center md:flex-col" v-bind:class="{'bg-tertiary': $route.path === '/blog'}"><img class="w-8 mr-2" src="../assets/img/pages.svg" alt="" srcset=""><router-link class="w-full" to="/blog">Blog</router-link></li>
            </ul>
        </nav>
    </section>
</template>
<script>
    export default {
    data() {
        return {
        }
    },
    methods: {
        click() {
            const nav = document.getElementById('nav')
            nav.classList.toggle('-translate-x-full')
            nav.classList.toggle('shadow-2xl')
        }
    }
    }
</script>