<script setup lang="ts">
    const { isDarkMode } = useDarkMode();
</script>

<template>
  <div :style="isDarkMode ? {background: 'black'} : null">
    <DarkModeNav />
    <DarkModeHeading />
    <DarkModeCards />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>