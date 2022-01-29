<script setup lang="ts">
import { useTodoAppStore } from "../store";

const todoStore = useTodoAppStore();
</script>
<template>
  <div id="layer_list">
    <div class="list" v-for="(item, idx) in todoStore.data" :key="idx">
      <span class="message">
        {{ item.data }}
      </span>
      <section class="btn_box">
        <button class="remove" @click="todoStore.onRemoveTodo(idx)">R</button>
        <button
          class="remove"
          @click="todoStore.onUpdateTodo(item)"
        >
          U
        </button>
        <button class="done" @click="todoStore.onDoneTodo(idx)">
          {{ item.isDone ? "Done" : "unDone" }}
        </button>
      </section>
    </div>
  </div>
</template>

<style lang="sass">
#layer_list
  @apply bg-red-400/30 backdrop-filter backdrop-blur-md shadow shadow-dark-900 w-[calc(100vw-5%)] mx-auto px-2 py-1 rounded-lg absolute inset-3 flex flex-col gap-y-2 overflow-y-auto
  & .list
    @apply bg-black/40 p-1 rounded-full flex justify-between items-center
    & .message
      @apply ml-2
    & .btn_box
      & .remove
        @apply bg-green-400 rounded-2xl px-2 py-1 mr-1
      & .done
        @apply bg-green-400 rounded-2xl px-2 py-1
</style>
