import { acceptHMRUpdate, defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";

export interface DataTodoItem {
  title: string;
  isDone: boolean;
  data: any;
}

export const useTodoAppStore = defineStore("todo_app", () => {
  const eventWriteState = ref<"add" | "update" | null>(null);

  const state = reactive({
    data: <DataTodoItem[]>[
      {
        isDone: false,
        data: "tes",
      },
      {
        isDone: false,
        data: "tes",
      },
    ],
    writeBoard: false,
    writingTodo: {
      title: "",
      data: "",
    },
    eventWriteState,
  });

  const onUpdateTodo = (v: DataTodoItem) => {
    eventWriteState.value = "update";
    state.writeBoard = true;
    if (eventWriteState.value === "update") {
      state.writingTodo.title = v.title;
      state.writingTodo.data = v.data;
    }
  };

  const onRemoveTodo = (idx: number) => {
    state.data.splice(idx, 1);
  };

  const onDoneTodo = (idx: number) => {
    state.data[idx].isDone = !state.data[idx].isDone;
  };

  const onSaveTodo = () => {
    switch (eventWriteState.value) {
      case "update":
        {
          if ((state.writingTodo.title || state.writingTodo.data) !== "") {
            const findIdx = state.data.findIndex((e) => e === e);
            state.data[findIdx] = {
              title: state.writingTodo.title,
              data: state.writingTodo.data,
              isDone: false,
            };
            state.writeBoard = !state.writeBoard;
          }
        }
        break;
      case "add": {
        if ((state.writingTodo.title || state.writingTodo.data) !== "") {
          state.data.push({
            isDone: false,
            data: state.writingTodo.data,
            title: state.writingTodo.title,
          });
          state.writingTodo.title = "";
          state.writingTodo.data = "";
          state.writeBoard = false;
        }
      }
    }
  };

  const onShowAndCloseWriteBoard = (event?: typeof eventWriteState.value) => {
    state.writeBoard = !state.writeBoard;
    eventWriteState.value = event ?? null;
    switch (event) {
      case "add": {
        state.writingTodo.title = "";
        state.writingTodo.data = "";
      }
    }
  };

  return {
    ...toRefs(state),
    onSaveTodo,
    onUpdateTodo,
    onRemoveTodo,
    onDoneTodo,
    onShowAndCloseWriteBoard,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoAppStore, import.meta.hot));
}
