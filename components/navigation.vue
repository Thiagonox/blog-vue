<template>
    <section class="bg-[#23261E]">
        <nav class="h-screen ">
            <ul class="w-full h-full flex flex-col items-center justify-around">
                <li class="p-2 rounded-xl" v-bind:class="{'bg-tertiary': $route.path === '/'}"><router-link class="w-full" to="/"><img class="w-8" src="../assets/img/home.svg" alt="" srcset=""></router-link></li>
                <li class="" v-bind:class="{'bg-tertiary': $route.path === '/blog'}"><router-link class="w-full" to="/blog"><img class="w-8 mr-2" src="../assets/img/pages.svg" alt="" srcset=""></router-link></li>
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