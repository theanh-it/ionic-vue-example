<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { IonImg, IonContent } from "@ionic/vue";

import { useMemoriesStore } from "@/stores/memories";

const route = useRoute();
const memoriesStore = useMemoriesStore();

const memory = computed(() => {
  return memoriesStore.getMemoryById(+route.params.id);
});
</script>

<template>
  <base-layout page-title="Memory detail">
    <ion-content>
      <ion-img :src="memory?.image" />
      <h2>{{ memory?.name }}</h2>
      <p>{{ memory?.detail }}</p>
    </ion-content>
  </base-layout>
</template>

<style lang="scss" scope></style>
