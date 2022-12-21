<template>
    <div class="bg-principal">
        <header class="m-auto w-11/12 h-16 flex justify-between items-center">
            <button onclick="menu()" class="w-6 h-6">
                <div class="border-t-4 mb-1 border-secundario"></div>
                <div class="border-t-4 mb-1 border-secundario"></div>
                <div class="border-t-4 mb-1 border-secundario"></div>
            </button>
            <div class="w-max-1/6">
                <h1 class="font-secundaria text-xl"><mark class="bg-secundaria py-2 px-1">FRAME</mark></h1>
            </div>
                <nav id="nav" class="hidden">
                    <ul class="flex-col justify-between font-Quicksand text-xl text-branco">
                        <li class=""><router-link to="/">HOME</router-link></li>
                        <li class=""><router-link to="/blog">BLOG</router-link></li>
                    </ul>
                </nav>
                <div class="w-10 h-10 flex justify-center items-center rounded-full">
                    <img class="w-6" src="../assets/img/light_mode.svg" alt="">
                </div>
        </header>
    </div>
</template>
<script>
  export default {};
  function menu() {
    const nav = document.getElementById('nav');
    nav.classList.add('absolute top-16 left-0 w-11/12 h-32 bg-principal flex justify-center items-center');
  }
</script>