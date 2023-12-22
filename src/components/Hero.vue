<template>
    <section class="w-10/12 lg:w-4/12 lg:ml-8 mt-10 lg:mt-6 xl:mt-16 xl:pl-16">
        <h1 class="font-extrabold text-2xl 2xl:text-4xl">Discover innovative ways to decorate</h1>

        <p class="mt-4 text-DarkGray font-medium 2xl:text-lg">
            We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function to bring your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.            
        </p>
        <a href="#" class="hero--anchor w-fit flex items-center uppercase font-bold tracking-[9px] mt-8 lg:mt-4 xl:mt-12 hover:text-DarkGray duration-300">
            Shop now 
            <svg class="ml-6 hero--svg-arrow" width="40" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill-rule="nonzero"/>
            </svg>
        </a>
    </section>
</template>

<style scoped>
    .hero--anchor:hover .hero--svg-arrow {
        animation: hoverArrow 1s infinite;
    }

    @keyframes hoverArrow {
        0% { transform: translateX(0%); }
        50% { transform: translateX(20%); }
        100% { transform: translateX(0%); }
    }

    .hero--anchor:hover svg path {
        fill: hsl(0, 0%, 63%);
        transition: fill 300ms;
    }
</style>
