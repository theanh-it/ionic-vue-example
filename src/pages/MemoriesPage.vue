<script lang="ts" setup>
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
import MemoriesList from "@/components/memories/MemoriesList.vue";

import { useMemoriesStore } from "@/stores/memories";
import { storeToRefs } from "pinia";

const memoriesStore = useMemoriesStore();
const { memories } = storeToRefs(memoriesStore);
</script>

<template>
  <base-layout page-title="Memories Page">
    <template #action-end>
      <ion-button router-link="/add-memory">
        <ion-icon slot="icon-only" :icon="add" />
      </ion-button>
    </template>
    <memories-list :memories="memories" class="memories-component" />
  </base-layout>
</template>

<style lang="scss" scope>
.memories-component {
  padding: 12px 0px;
}
</style>
