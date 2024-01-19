<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    <h1 class="choose">Select piano size:</h1>
  </div>
  <div class="navigation">
    <RouterLink to="/big-keyboard">
      <h1>
        Big Keyboard
      </h1>
    </RouterLink>
    <RouterLink to="/small-keyboard">
      <h1>
        Small Keyboard
      </h1></RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 50px;
}

a {
  text-decoration: none;
  color: yellowgreen;
}

.choose {
  display: flex;
  justify-content: center;
  align-items: center;
  color: yellowgreen;
  margin: 50px;
  font-size: 50px;
}
</style>
