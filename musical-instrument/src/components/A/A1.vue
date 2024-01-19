<script setup lang="ts">
import { ref } from "vue";
import A1 from "../../assets/A1.mp3";

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
    <audio :src="`${A1}`" ref="audioRef"></audio>
  </li>
</template>

<style scoped></style>
