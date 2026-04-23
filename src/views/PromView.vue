<script setup lang="ts">
import { computed, onMounted, type ComputedRef, ref } from 'vue'
import { bezier } from '@/utils/bezier'
import { useAnimate } from '@/utils/useAnimate'
import BackgroundImage from '@/components/prom/BackgroundImage.vue'

const rate = 0.01
const scale = bezier(0.5, 0, 1, 0.5)

const animation = useAnimate(rate, scale)

// REQUIRED FIX: safe reactive window height
const innerHeight = ref(0)

// REQUIRED FIX: define computed immediately (NOT in onMounted)
const y = computed(() => animation.progress.value * innerHeight.value)

const askY = computed(() => {
      if (animation.progress.value < 0.8) {
            return 0
      } else {
            return y.value - innerHeight.value * 0.8
      }
})

onMounted(() => {
      innerHeight.value = window.innerHeight
})
</script>

<template>
      <div class="wrapper">
            <div class="intro" :style="`transform: translateY(-${askY}px);`">
                  <!-- TODO make this look better -->
                  <h1 class="intro-header">At prom...</h1>
                  <button class="reveal-button" @click="animation.start">uh huh?</button>
            </div>

            <!-- gradient changes  -->
            <!-- your look BAMBOOzles me! -->

            <div class="reveal" :style="`transform: translateY(-${y}px);`">
                  <BackgroundImage class="background" />
                  <div class="reveal-content">
                        <h1 style="top: -40px; left: 10%; font-size: 85px">You'll</h1>
                        <h2 style="top: 27%; left: 5%; font-size: 30px">BAMBOOzle me...</h2>
                        <p style="bottom: 32%; left: 12%; font-size: 30px">with your looks!!!</p>
                        <img src="/assets/images/riding.jpeg" class="riding" />
                        <img src="/assets/images/bamboo1.png" class="bamboo1" />
                        <img src="/assets/images/tounge.jpeg" class="tounge" />
                        <img src="/assets/images/cute.jpeg" class="cute" />
                        <img src="/assets/images/dentist.jpeg" class="dentist" />
                        <img src="/assets/images/leola.jpeg" class="leola" />
                  </div>
            </div>
      </div>
</template>

<style scoped>
.reveal-button {
      all: unset;
      background-color: #52bf90;
      border-radius: 10px;
      position: absolute;
      text-align: center;
      transform-origin: 50% 120%;

      transition: transform 0.1s ease;

      width: 200px;
      height: 40px;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%);
}

.reveal-button:active {
      transform: translate(-50%) scale(0.8);
}

.intro-header {
      text-align: center;
      padding: 100px 0px;
      margin: 0;
      font-size: 50px;
}

.reveal {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
}

.intro {
      position: relative;
      width: 100%;
      height: 100vh;
      background-color: var(--color-initial);
}

.leola {
      width: 90px;
      animation-timing-function: ease-in;
      animation: leola 2s infinite;
      position: absolute;
      right: 3%;
      transform: rotate(-15deg);
      bottom: 42%;
}

@keyframes leola {
      0% {
            transform: rotate(-15deg);
      }
      50% {
            transform: rotate(-15deg);
      }
      100% {
            transform: rotate(calc(360deg - 15deg));
      }
}

.dentist {
      width: 75px;
      animation-timing-function: linear;
      animation: rotate-o 1s infinite;
      animation-delay: 0.1s;
      transform-origin: -50px 100px;
      position: absolute;
      left: -1%;
      bottom: 0%;
}

@keyframes rotate-o {
      0% {
            transform: rotate(-5deg);
      }
      50% {
            transform: rotate(5deg);
      }
      100% {
            transform: rotate(-5deg);
      }
}

.cute {
      width: 150px;
      animation: shakelight 0.75s infinite;
      animation-delay: 0.1s;
      animation-timing-function: steps(2);
      position: absolute;
      right: 30%;
      bottom: 9%;
}

.bamboo1 {
      width: 100px;
      animation: shake 1s infinite;
      animation-timing-function: steps(2);
      position: absolute;
      right: 5%;
      top: 20%;
}

.riding {
      width: 90px;
      top: 40%;
      left: 10%;
      animation: oscilate 1.5s infinite;
      animation-timing-function: ease-in-out;
}

.tounge {
      width: 110px;
      bottom: -50px;
      right: -30px;
      transform: rotate(30deg);
}

@keyframes shakelight {
      from {
            transform: rotate(-5deg);
      }
      to {
            transform: rotate(10deg);
      }
}

@keyframes shake {
      from {
            transform: rotate(-15deg);
      }
      to {
            transform: rotate(30deg);
      }
}

@keyframes oscilate {
      0% {
            transform: translateY(-5px);
      }
      50% {
            transform: translateY(5px);
      }
      100% {
            transform: translateY(-5px);
      }
}

.reveal-content {
      z-index: 9;
}

.reveal-content > * {
      position: absolute;
}

/* .reveal-content > h1, h2, div {
	background-color: white;
      border-radius: 10px;
      padding: 10px;
} */

.background {
      z-index: -9;
}

@font-face {
      font-family: 'font';
      src: url('fonts/comicsans.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
}

.wrapper {
      font-family: font;
      width: 100%;
      height: 100vh;
      position: absolute;
      overflow: hidden;
      left: 0;
      top: 0;
      --color-initial: white;
}
</style>
