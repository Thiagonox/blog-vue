<template>
    <div class="bg-principal">
        <header class="m-auto w-11/12 h-16 flex justify-between items-center">
            <button @click="click" class="w-8 h-8">
                <img class="w-8" src="../assets/img/menu.svg" alt="" srcset="">
            </button>
            <div class="w-max-1/6">
                <h1 class="font-secundaria text-xl"><mark class="bg-secundaria py-2 px-1">FRAME</mark></h1>
            </div>
                <nav id="nav" class="absolute w-3/4 h-screen bg-[#23261E] p-6 top-0 left-0 duration-00 shadow-2xl shadow-black rounded-xl">
                    <button @click="click" class="w-8 h-8 ml-4">
                        <img class="w-8" src="../assets/img/menu_open.svg" alt="" srcset="">
                     </button>
                    <ul class="h-32 flex flex-col justify-around font-Quicksand text-xl text-[#fff]">
                        <li class="pl-4 h-10 rounded-full flex items-center" v-bind:class="{'bg-tertiary': $route.path === '/'}"><router-link class="w-full" to="/">Home</router-link></li>
                        <li class="pl-4 h-10 rounded-full flex items-center" v-bind:class="{'bg-tertiary': $route.path === '/blog'}"><router-link class="w-full" to="/blog">Blog</router-link></li>
                    </ul>
                </nav>
                <button class="w-12 h-12 flex justify-center items-center rounded-full hover:bg-[#292A26] active:bg-[#33342F]">
                    <img class="w-6" src="../assets/img/light_mode.svg" alt="">
                </button>
        </header>
        <hr class="border-b-2 border-tertiary">
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
        }
    }
    }
</script>