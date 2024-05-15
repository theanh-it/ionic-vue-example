<script lang="ts" setup>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import { ref, defineEmits } from "vue";
import { Form, Field, ErrorMessage, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

import { Memory } from "@/types";

const memory = ref<Memory>({
  id: 1,
  name: "",
  image: "",
  detail: "",
});

const emit = defineEmits<{
  submit: [Memory];
}>();

const memorySchema = toTypedSchema(
  zod.object({
    name: zod
      .string()
      .min(1, { message: "Required name" })
      .max(255, { message: "Max length 255" }),
    image: zod
      .string()
      .min(1, { message: "Required image" })
      .max(255, { message: "Max length 255" }),
    detail: zod
      .string()
      .min(1, { message: "Required detail" })
      .max(255, { message: "Max length 255" }),
  })
);

const memoryForm = useForm({ validationSchema: memorySchema });

const submit = async () => {
  const vaild = await memoryForm.validate();
  console.log(vaild);
  emit("submit", memory.value);
};
</script>

<template>
  <ion-list>
    <ion-item>
      <ion-label position="stacked">Name</ion-label>
      <ion-input v-model="memory.name" name="name" type="text" />
      <ErrorMessage name="name" />
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Image</ion-label>
      <ion-input v-model="memory.image" type="url" />
    </ion-item>
    <ion-item>
      <ion-label position="stacked">Detail</ion-label>
      <ion-textarea v-model="memory.detail" :rows="5" />
    </ion-item>
    <ion-button expand="block" fill="outline" class="save" @click="submit">
      Save
    </ion-button>
  </ion-list>
</template>

<style lang="scss" scoped>
.save {
  margin: 15px;
}
</style>
