<template>
    <div class="bg-principal">
        <header class="m-auto w-11/12 h-16 flex justify-between items-center">
            <div id="menu" class="w-6 h-6">
                <div class="border-t-4 mb-1 border-branco"></div>
                <div class="border-t-4 mb-1 border-branco"></div>
                <div class="border-t-4 mb-1 border-branco"></div>
            </div>
            <div class="w-max-1/6">
                <h1 class="font-Quicksand text-xl"><mark class="bg-[#C9EC9E] py-2 px-1">FRAME</mark></h1>
            </div>
                <nav class="hidden">
                    <ul class="flex justify-between font-Quicksand text-xl text-branco">
                        <li class=""><router-link to="/">HOME</router-link></li>
                        <li class="ml-6"><router-link to="/blog">BLOG</router-link></li>
                    </ul>
                </nav>
                <div class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#DDE6CD]">
                    <img class="w-6" src="../assets/img/dark_mode.svg" alt="">
                </div>
        </header>
    </div>
</template>
<script>

</script>