<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { onMounted, nextTick } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

onMounted(async () => {
  await nextTick();
  document.documentElement.setAttribute(
    "data-bs-theme",
    themeStore.isDark ? "dark" : "light"
  );
});
</script>
<style>
@import "~/public/style.css";
</style>
