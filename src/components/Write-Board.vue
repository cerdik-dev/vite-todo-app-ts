<script lang="ts" setup>
import { computed } from "vue";

const emits = defineEmits<{
  (event: "close"): void;
  (event: "save"): void;
  (event: "update:title", e: string): void;
  (event: "update:data", e: string): void;
}>();

const props = withDefaults(
  defineProps<{
    title?: string;
    data?: string;
    event?: "add" | "update" | null;
  }>(),
  {
    title: "",
    data: "",
    event: null,
  }
);

const _title = computed({
  get: () => props.title,
  set: (e: string) => emits("update:title", e),
});
const _data = computed({
  get: () => props.data,
  set: (e: string) => emits("update:data", e),
});
</script>
<template>
  <div id="write_board">
    <button class="btn_close" @click="emits('close')">x</button>
    <section class="title_box">
      <label for="title" class="title_label">
        <input
          placeholder="input your title"
          type="text"
          id="title"
          v-model="_title"
        />
      </label>
    </section>
    <section class="board_box_text">
      <textarea id="desc_text" v-model="_data" />
    </section>
    <button class="btn_save" @click="emits('save')">S</button>
    <p>{{props.event}}</p>
  </div>
</template>
<style lang="sass">
#write_board
    @apply fixed inset-8 border border-yellow-400 rounded-md bg-yellow-600/30 backdrop-filter backdrop-blur-md py-6 flex flex-col gap-y-3 items-center
    & .btn_close
        @apply absolute w-7 h-7 rounded-full bg-green-700 flex justify-center items-center -top-2 -right-3 ring ring-yellow-400/80 text-yellow-300
    & .title_box
        @apply w-[calc(100%-10%)]
        & #title
            @apply rounded-lg px-2 py-1 bg-dark-300/70 backdrop-filter backdrop-blur-sm mx-auto w-full focus:(outline-none ring-1 ring-fuchsia-800 bg-dark-300/80 text-gray-200)
    & .board_box_text
        @apply w-[calc(100%-10%)]
        & #desc_text
            @apply rounded-lg px-2 py-1 bg-dark-300/70 backdrop-filter backdrop-blur-sm w-full mx-auto focus:(outline-none border border-fuchsia-700 bg-dark-300/80 text-gray-200)
    & .btn_save
      @apply w-10 h-10 rounded-full bg-green-400 ring ring-yellow-400 absolute bottom-10 right-10
</style>
