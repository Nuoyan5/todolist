<template>
  <el-card class="main" shadow="never">
    <Header />
    <List :todos="todoList.todos" />
    <Footer :countSelected="countSelected" :alllength="todoList.todos.length" />
  </el-card>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  provide,
  reactive,
  watch,
  onBeforeUnmount,
} from "vue";
import Header from "components/Header.vue";
import List from "components/List.vue";
import Footer from "components/Footer.vue";

import { todo } from "./types/todo";

export default defineComponent({
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },

  setup() {
    const todoList = reactive<{ todos: todo[] }>({
      todos: [
        // {
        //   id: 1,
        //   isSelected: true,
        //   content: "奔驰",
        // }
      ],
    });

    onMounted(() => {
      const todosData = localStorage.getItem("TODOSDATA");
      if (todosData) {
        todoList.todos = JSON.parse(todosData);
      }
    });
    watch(
      todoList,
      () => {
        localStorage.setItem("TODOSDATA", JSON.stringify(todoList.todos));
      },
      { deep: true }
    );
    // onBeforeUnmount(() => {
    //   console.log("要销毁组件了==============");

    //   localStorage.setItem("TODOSDATA", JSON.stringify(todoList.todos));
    // });

    const addTodo = (content: string) => {
      todoList.todos.unshift({
        id: Date.now(),
        isSelected: false,
        content: content,
      });
    };
    provide("addTodo", addTodo);

    const deleteTodo = (ind: number) => {
      todoList.todos.splice(ind, 1);
    };
    provide("deleteTodo", deleteTodo);

    const changeTodo = (ind: number, val: string) => {
      todoList.todos[ind].content = val;
    };
    provide("changeTodo", changeTodo);

    const handleAllSelected = (flag: boolean) => {
      todoList.todos.forEach((item) => {
        item.isSelected = flag;
      });
    };
    provide("handleAllSelected", handleAllSelected);

    const handleClearCompleteMission = () => {
      let newList: todo[] = [];
      todoList.todos.forEach((item) => {
        if (!item.isSelected) {
          newList.push(item);
        }
      });
      todoList.todos = newList;
    };
    provide("handleClearCompleteMission", handleClearCompleteMission);

    const countSelected = computed<number>(() => {
      return todoList.todos.reduce(
        (total, item) => total + (item.isSelected ? 1 : 0),
        0
      );
    });

    return {
      todoList,
      countSelected,
    };
  },
});
</script>

<style lang="less">
.main {
  width: 600px;
  margin: 20px auto 0; /* no */
}
</style>
