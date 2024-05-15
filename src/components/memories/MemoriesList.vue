<script lang="ts" setup>
import { defineProps } from "vue";

import { IonList } from "@ionic/vue";
import MemoryListItem from "@/components/memories/MemoryListItem.vue";

import { Memory } from "@/types";

const { memories } = defineProps<{
  memories: Memory[];
}>();
</script>

<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    />
  </ion-list>
</template>
