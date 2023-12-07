<script setup>
import TheHeader from './TheHeader.vue'
import TheSideBar from './TheSideBar.vue'
</script>

<template>
  <div>
    <div class="container-scroller">
      <TheHeader />
      <div class="container-fluid page-body-wrapper">
        <TheSideBar />
        <main class="main-panel">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
