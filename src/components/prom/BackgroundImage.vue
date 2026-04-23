<script setup lang="ts">
import BackgroundWave1 from "./images/BackgroundWave1.vue"
import BackgroundWave2 from "./images/BackgroundWave2.vue";
import BackgroundWave3 from "./images/BackgroundWave3.vue";
</script>

<template>
	<div class="wrapper">
		<BackgroundWave1 class="wave1" fill="#52bf90"/>
            <BackgroundWave2 class="wave2" fill="#419873"/>
            <BackgroundWave3 class="wave3" fill="#317256"/>
	</div>
</template>
<style lang="css" scoped>
.wrapper {
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      /* background-color: white; */
}

.wave1 {
      position:absolute;
      left: 0;
      top: 10vh;
}

.wave2 {
      position:absolute;
      left: 0;
      top: 42vh;
}

.wave3 {
      position:absolute;
      left: 0;
      top: 70vh;
}

</style>
