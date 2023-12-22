<template>
    <section class="w-screen lg:w-7/12 relative flex h-[96vw] md:h-[63.5vw] lg:h-[37.1vw] 2xl:h-[36vw] ">
        <div class="lg:overflow-hidden w-full relative flex">
            <SliderItem :currentSlide="currentSlide" :sliderImages="sliderImages" :sliderImagesDesktop="sliderImagesDesktop" :direction="direction"/>
        </div>

        <div class="absolute bottom-0 right-0 flex lg:-right-[7.5rem]">
            <button class="bg-Black hover:bg-VeryDarkGray duration-300 px-6 py-4" @click="prevSlide()">
                <img src="../assets/images/icon-angle-left.svg" class="w-3"/>
            </button>
            <button class="bg-Black hover:bg-VeryDarkGray duration-300 px-6 py-4" @click="nextSlide()">
                <img src="../assets/images/icon-angle-right.svg" class="w-3"/>
            </button>
        </div>
    </section>
</template>

<script lang="ts">
    import SliderItem from './SliderItem.vue'

    export default {
        data() {
            return {
                currentSlide: 0,
                sliderImages: [
                    "mobile-image-hero-1",
                    "mobile-image-hero-2",
                    "mobile-image-hero-3",
                ],
                sliderImagesDesktop: [
                    "desktop-image-hero-1",
                    "desktop-image-hero-2",
                    "desktop-image-hero-3",
                ],
                direction: "left"
            }
            
        },
        components: {
            SliderItem
        },
        methods: {
            nextSlide() {

                if(this.currentSlide>=this.sliderImages.length - 1)
                {
                    this.currentSlide=0
                } else {
                    this.currentSlide++
                }

                this.direction = "right"
                console.log(this.direction)
            },
            prevSlide() {

                if(this.currentSlide<=0)
                {
                    this.currentSlide = 2
                } else {
                    this.currentSlide--
                }

                this.direction = "left"
                console.log(this.direction)
            }
        }
    }
</script>

<style scoped>

</style>