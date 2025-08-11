<script setup>
import HeaderBar from './components/HeaderBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div id="app">
    <HeaderBar />
    <main>
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  min-height: calc(100vh - 140px); /* Adjust based on header/footer height */
}

/* Global app styling */
body {
  font-family: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>
