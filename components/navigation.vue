<template>
    <section class="bg-[#232420]">
        <nav class="h-screen flex flex-col items-center ">
            <ul class="w-full h-1/5 flex flex-col items-center justify-between pt-3 text-text font-principal">
                <li class="p-2 rounded-xl" v-bind:class="{'bg-[#2B4C4A]': $route.path === '/'}"><router-link class="w-full" to="/"><img class="w-7" src="../assets/img/home.svg" alt="" srcset=""></router-link></li>
                <li class="p-2 rounded-xl" v-bind:class="{'bg-[#2B4C4A]': $route.path === '/blog'}"><router-link class="w-full" to="/blog"><img class="w-7" src="../assets/img/pages.svg" alt="" srcset=""></router-link></li>
            </ul>
            <button class="m-auto w-10 h-10 rounded-full hover:bg-tertiary active:bg-[#33342F]">
                    <img class="w-7 m-auto" src="../assets/img/light_mode.svg" alt="">
            </button>
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