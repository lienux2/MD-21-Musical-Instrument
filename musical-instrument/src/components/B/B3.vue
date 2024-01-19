<script setup lang="ts">
import { ref } from "vue";
import B3 from "../../assets/B3.mp3";

const audioRef = ref<HTMLAudioElement>();

const playAudio = () => {
  if (audioRef.value) {
    audioRef.value.currentTime = 0;

    if (!audioRef.value.paused) {
      audioRef.value.pause();
    }

    audioRef.value.play();
  }
};
</script>

<template>
  <li class="white" @click="playAudio">
    <audio :src="`${B3}`" ref="audioRef"></audio>
  </li>
</template>

<style scoped></style>
