<script setup lang="ts">
import LayerList from "./components/Layer-List.vue";
import WriteBoard from "./components/Write-Board.vue";
import { useTodoAppStore } from "./store";

const todoStore = useTodoAppStore();
</script>
<template>
  <LayerList />
  <WriteBoard
    v-if="todoStore.writeBoard"
    @close="todoStore.onShowAndCloseWriteBoard"
    v-model:title="todoStore.writingTodo.title"
    v-model:data="todoStore.writingTodo.data"
    @save="todoStore.onSaveTodo"
    :event="todoStore.eventWriteState"
  
  />
  <button
    v-if="!todoStore.writeBoard"
    class="add"
    @click="todoStore.onShowAndCloseWriteBoard('add')"
  >
    add
  </button>
</template>

<style lang="sass">
#app
  @apply w-screen h-screen bg-gradient-to-tr from-purple-500 to-purple-300
  & .add
    @apply fixed bottom-12 right-12 bg-green-400 rounded-full w-14 h-14 border-2 border-yellow-500 shadow shadow-red-600 shadow-md
</style>
