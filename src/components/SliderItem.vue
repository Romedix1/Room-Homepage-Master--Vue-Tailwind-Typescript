<template>
    
<TransitionGroup :name="direction">
       <div v-show="currentSlide === index" class="md:hidden absolute top-0 left-0 right-0" v-for="(slide, index) in sliderImages" :key="index">
            <img :src='getImageUrl(slide)' alt="slider image" class="w-full"/>
        </div> 
</TransitionGroup>

<TransitionGroup :name="direction">
       <div v-show="currentSlide === index" class="hidden md:block absolute top-0 left-0 right-0" v-for="(slide, index) in sliderImagesDesktop" :key="index">
            <img :src='getImageUrl(slide)' alt="slider image" class="w-full"/>
        </div> 
</TransitionGroup>

</template>

<script lang="ts">
    export default {
        props: ['currentSlide', 'sliderImages', 'sliderImagesDesktop', 'direction'],
    
        methods: {
            getImageUrl(name: string) {
                return new URL(`../assets/images/${name}.jpg`, import.meta.url).href
            }
        }
    }
</script>

<style scoped>
.left-enter-active {
  animation: leftInAnimation .5s ease;
}
.left-leave-active
{
  animation: leftOutAnimation .5s ease;
}

@keyframes leftInAnimation {
  from { transform: translateX(-100%); }
  to { transform: translateX(0%); }
}

@keyframes leftOutAnimation {
  from { transform: translateX(0%); }
  to { transform: translateX(100%); }
}

.right-enter-active {
  animation: rightInAnimation .5s ease;
}
.right-leave-active
{
  animation: rightOutAnimation .5s ease;
}

@keyframes rightInAnimation {
  from { transform: translateX(100%); }
  to { transform: translateX(0%); }
}

@keyframes rightOutAnimation {
  from { transform: translateX(0%); }
  to { transform: translateX(-100%); }
}
</style>