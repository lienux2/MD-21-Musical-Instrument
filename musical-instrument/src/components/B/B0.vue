<script setup lang="ts">
import { ref } from "vue";
import B0 from "../../assets/B0.mp3";

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
    <audio :src="`${B0}`" ref="audioRef"></audio>
  </li>
</template>

<style scoped></style>
