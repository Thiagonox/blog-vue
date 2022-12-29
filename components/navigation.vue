<template>
    <section class="bg-[#232420]">
        <nav class="h-screen flex flex-col items-center justify-between py-3">
            <ul class="w-full h-48 flex flex-col items-center justify-between text-text font-principal">
                <li class="p-2 rounded-xl" v-bind:class="{'bg-[#324F10]': $route.path === '/'}"><router-link class="w-full" to="/"><img class="w-6" src="../assets/img/home.svg" alt="" srcset=""></router-link></li>
                <li class="p-2 rounded-xl" v-bind:class="{'bg-[#324F10]': $route.path === '/blog'}"><router-link class="w-full" to="/blog"><img class="w-6" src="../assets/img/pages.svg" alt="" srcset=""></router-link></li>
                <li class="p-2 rounded-xl" v-bind:class="{'bg-[#324F10]': $route.path === '/forum'}"><router-link class="w-full" to="/forum"><img class="w-6" src="../assets/img/forum.svg" alt="" srcset=""></router-link></li>
            </ul>
            <button class="mx-auto w-12 h-12 border border-white/40 rounded-full hover:bg-tertiary active:bg-[#33342F]">
                    <img class="w-6 m-auto" src="../assets/img/light_mode.svg" alt="">
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