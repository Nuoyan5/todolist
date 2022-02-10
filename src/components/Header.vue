<template>
  <el-input
    :clearable="true"
    v-model="input"
    placeholder="请输入你的任务名称，按下回车确认"
    @keydown.enter="addTodo"
  />
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: "Header",

  setup(props) {
    let input = ref<string>("");

    const addTodoFun = inject("addTodo") as Function;
    const addTodo = () => {
      addTodoFun(input.value);
      input.value = "";
    };
    return {
      input,
      addTodo,
    };
  },
});
</script>

<style></style>
