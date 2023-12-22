<template>
    <nav class="absolute flex bg-transparent py-5 px-6 justify-between items-center w-screen mt-6 z-40 md:justify-start md:pl-16">
        <div class="relative">
            <label id="hamburger-menu" class="z-30 flex relative md:hidden">
                <input id="hamburger-menu-input" type="checkbox"/>
            </label>

            <section class="nav--overlay hidden absolute z-10 -top-11 -left-6 md:hidden">
                <div class="fixed md:hidden w-screen h-screen bg-Black top-0 left-0 opacity-40"></div>
                <div class="nav--overlay-top md:hidden flex items-center justify-end overflow bg-White w-screen h-[104px] absolute">
                    <ul class="flex mr-4">
                        <li class="mx-2 font-bold hover:text-DarkGray duration-300">home</li>
                        <li class="mx-2 font-bold hover:text-DarkGray duration-300">shop</li>
                        <li class="mx-2 font-bold hover:text-DarkGray duration-300">about</li>
                        <li class="mx-2 font-bold hover:text-DarkGray duration-300">contact</li>
                    </ul>
                </div>
            </section>
        </div>
        
        <div class="w-[55%] md:w-fit">
            <img src="../assets/images/logo.svg" />
        </div>

        <div class="hidden md:block">
            <ul class="flex ml-16">
                <li class="mx-2 xl:mx-4 text-White font-bold border-b-2 border-solid hover:border-White border-transparent duration-300"><a href="">home</a></li>
                <li class="mx-2 xl:mx-4 text-White font-bold border-b-2 border-solid hover:border-White border-transparent duration-300"><a href="">shop</a></li>
                <li class="mx-2 xl:mx-4 text-White font-bold border-b-2 border-solid hover:border-White border-transparent duration-300"><a href="">about</a></li>
                <li class="mx-2 xl:mx-4 text-White font-bold border-b-2 border-solid hover:border-White border-transparent duration-300"><a href="">contact</a></li>
            </ul>
        </div>
    </nav>
</template>



<style scoped>
    *
    {
        --line-width: 30px;
        --line-height: 2px;
        --line-gap: 6px;
    }

    #hamburger-menu
    {
        flex-direction: column;
        gap: var(--line-gap);
        cursor: pointer;
    }

    #hamburger-menu::before,
    #hamburger-menu::after,
    #hamburger-menu input
    {
        content: "";
        width: var(--line-width);
        height: var(--line-height);
        background-color: #ffffff;
        border-radius: 999px;
        transition: opacity .2s ease, width .2s ease, rotate .2s ease, translate .2s ease;
        transform-origin: left center;
    }

    #hamburger-menu input
    {
        appearance: none;
        margin: 0;
        padding: 0;
        outline: none;
    }
    #hamburger-menu input:checked
    {
        opacity: 0;
        width: 0;
    }

    #hamburger-menu:has(input:checked)::before 
    {
        rotate: 45deg;
        width: calc((var(--line-height) * 3 + var(--line-gap) * 2)*1.41421356237);
        translate: 0 calc(var(--line-height)/-2);
        background-color: #a1a1a1;
    }

    #hamburger-menu:has(input:checked)::after 
    {
        rotate: -45deg;
        width: calc((var(--line-height) * 3 + var(--line-gap) * 2)*1.41421356237);
        translate: 0 calc(var(--line-height)/2);
        background-color: #a1a1a1;
    }
    #hamburger-menu:has(input:checked) + .nav--overlay
    {
        display: block;
    }
    .nav--overlay .nav--overlay-top
    {
        transform: translateX(-100%);
    }
    #hamburger-menu:has(input:checked) + .nav--overlay .nav--overlay-top
    {
        animation: showNav .4s linear;
        transform: translateX(0%);
    }

    @keyframes showNav {
        from {transform: translateX(-100%);}
        to {transform: translateX(0%);}
    }
</style>
