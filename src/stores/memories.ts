import { ref } from "vue";
import { defineStore } from "pinia";
import { faker } from "@faker-js/faker";
import { Memory } from "@/types";

const createMemories = (count: number) => {
  const createMemory = () => ({
    id: faker.number.int(),
    name: faker.company.name(),
    image: faker.image.url(),
    detail: faker.lorem.paragraph({ min: 3, max: 6 }),
  });

  return faker.helpers.multiple(createMemory, { count });
};

export const useMemoriesStore = defineStore("memories", () => {
  const memories = ref<Memory[]>(createMemories(20));

  const getMemoryById = (id: number) => {
    return memories.value.find((memory) => memory.id === id);
  };

  const addMemory = (memory: Memory) => {
    memories.value.push(memory);
  };

  return { memories, getMemoryById, addMemory };
});
