<script setup lang="ts">
import BlackKey from "@/components/BlackKey.vue";
import A3 from "../components/A/A3.vue";
import A4 from "../components/A/A4.vue";
import A5 from "../components/A/A5.vue";
import B2 from "../components/B/B2.vue";
import B4 from "../components/B/B4.vue";
import B5 from "../components/B/B5.vue";
import C3 from "../components/C/C3.vue";
import C4 from "../components/C/C4.vue";
import C5 from "../components/C/C5.vue";
import C6 from "../components/C/C6.vue";
import D2 from "../components/D/D2.vue";
import D4 from "../components/D/D4.vue";
import D5 from "../components/D/D5.vue";
import E2 from "../components/E/E2.vue";
import E3 from "../components/E/E3.vue";
import E4 from "../components/E/E4.vue";
import E5 from "../components/E/E5.vue";
import F2 from "../components/F/F2.vue";
import F3 from "../components/F/F3.vue";
import F4 from "../components/F/F4.vue";
import F5 from "../components/F/F5.vue";
import G2 from "../components/G/G2.vue";
import G3 from "../components/G/G3.vue";
</script>

<template>
  <main>
    <ul className="set">
      <D2 />
      <BlackKey />
      <E2 />
      <F2 />
      <BlackKey />
      <G2 />
      <BlackKey />
      <B2 />
      <C3 />
      <BlackKey />
      <E3 />
      <BlackKey />
      <F3 />
      <BlackKey />
      <G3 />
      <A3 />
      <BlackKey />
      <C4 />
      <BlackKey />
      <D4 />
      <E4 />
      <BlackKey />
      <F4 />
      <BlackKey />
      <A4 />
      <BlackKey />
      <B4 />
      <C5 />
      <BlackKey />
      <D5 />
      <BlackKey />
      <E5 />
      <F5 />
      <BlackKey />
      <A5 />
      <BlackKey />
      <B5 />
      <BlackKey />
      <C6 />
    </ul>
  </main>
</template>

<style scoped>
ul {
  height: 19em;
  width: 160em;
  position: relative;
}

.set {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1px;
}
</style>
