<template>
    <div class="bg-principal">
        <header class="m-auto w-11/12 h-16 flex justify-between items-center">
            <button @click="click" class="w-8 h-8 md:hidden">
                <img class="w-8" src="../assets/img/menu.svg" alt="" srcset="">
            </button>
            <div class="w-max-1/6">
                <h1 class="font-secundaria text-base"><mark class="bg-[#E5E3DD] py-2 px-1">FRAME</mark></h1>
            </div>
                <nav id="nav" class="absolute -translate-x-full md:hidden items-center md:static w-3/4 h-screen bg-[#23261E] p-6 top-0 left-0 duration-200  shadow-black rounded-xl z-10">
                    <button @click="click" class="w-8 h-8 ml-4">
                        <img class="w-8" src="../assets/img/menu_open.svg" alt="" srcset="">
                     </button>
                    <ul class="h-24 flex-col justify-between font-Quicksand text-xl text-[#DDE6CD]">
                        <li class="px-4 h-10 rounded-full flex items-center" v-bind:class="{'bg-[#324F10]': $route.path === '/'}"><img class="w-6 mr-2" src="../assets/img/home.svg" alt="" srcset=""><router-link class="w-full" to="/">Home</router-link></li>
                        <li class="px-4 h-10 rounded-full flex items-center" v-bind:class="{'bg-[#324F10]': $route.path === '/blog'}"><img class="w-6 mr-2" src="../assets/img/pages.svg" alt="" srcset=""><router-link class="w-full" to="/blog">Blog</router-link></li>
                    </ul>
                </nav>
                <button class="md:hidden w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#292A26] active:bg-[#33342F]">
                    <img class="w-6" src="../assets/img/light_mode.svg" alt="">
                </button>
        </header>
        <hr class="border-b- border-tertiary">
    </div>
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