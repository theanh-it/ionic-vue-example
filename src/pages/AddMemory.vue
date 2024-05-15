<script lang="ts" setup>
import BaseLayout from "@/components/base/BaseLayout.vue";
import CreateMemoryForm from "@/components/memories/CreateMemoryForm.vue";

import { useMemoriesStore } from "@/stores/memories";

import { Memory } from "@/types";

const memoriesStore = useMemoriesStore();

const createMemory = (memory: Memory) => {
  console.log("create", memory);
};
</script>

<template>
  <base-layout page-title="Add memory" page-default-back-link="/memories">
    <create-memory-form @submit="createMemory" />
  </base-layout>
</template>

<style lang="scss" scoped></style>
