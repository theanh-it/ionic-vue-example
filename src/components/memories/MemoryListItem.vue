<script lang="ts" setup>
import { defineProps } from "vue";

import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

import { Memory } from "@/types";

defineProps<{
  memory: Memory;
}>();
</script>

<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" alt="item.name" />
    </ion-thumbnail>
    <ion-label>{{ memory.name }}</ion-label>
  </ion-item>
</template>
