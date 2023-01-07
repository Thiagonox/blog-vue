<template>
    <section class="bg-[#272E23]">
        <nav class="h-screen flex flex-col items-center justify-between py-3">
            <ul class="w-full h-36 flex flex-col items-center justify-between text-text font-principal">
                <li>
                    <router-link class="flex flex-col items-center" to="/">
                        <img class="w-10 p-2 rounded-xl" src="../assets/img/home.svg" alt="" srcset="" v-bind:class="{'bg-[#3E4A36]': $route.path === '/'}">
                        <p class="text-sm">Home</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="flex flex-col items-center" to="/blog">
                        <img class="w-10 p-2 rounded-xl" src="../assets/img/pages.svg" alt="" srcset="" v-bind:class="{'bg-[#3E4A36]': $route.path === '/blog'}">
                        <p class="text-sm">Blog</p>
                    </router-link>
                </li>
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