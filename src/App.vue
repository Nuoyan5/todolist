<template>
  <el-card class="main" shadow="never">
    <Header />
    <List :todos="todoList.todos" />
    <Footer :countSelected="countSelected" :alllength="todoList.todos.length" />
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, provide, reactive } from "vue";
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
        // },
        // {
        //   id: 2,
        //   isSelected: false,
        //   content: "宝马",
        // },
        // {
        //   id: 3,
        //   isSelected: false,
        //   content: "奥迪",
        // },
      ],
    });

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

    // const countSelected = computed<number>(()=>{
    //   todoList.todos.reduce((total,item)
    //      total+item.isSelected?1:0
    //   )
    // })
    const countSelected = computed(() => {
      return todoList.todos.reduce(
        (total, item, ind) => total + (item.isSelected ? 1 : 0),
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
