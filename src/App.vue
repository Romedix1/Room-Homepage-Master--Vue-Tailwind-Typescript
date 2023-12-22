<script setup lang="ts">
    import Nav from './components/Nav.vue'
    import Slider from './components/Slider.vue'
    import Hero from './components/Hero.vue'
    import About from './components/About.vue'
</script>

<template>
    <Nav />
    <main class="grid justify-items-center">
        <div class="grid justify-items-center lg:flex">
            <Slider />
            <Hero />         
        </div>

        <About />
    </main>
</template>
