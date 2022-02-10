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
import { ElMessage } from "element-plus";

export default defineComponent({
  name: "Header",

  setup(props) {
    let input = ref<string>("");

    const warning = (info) => {
      ElMessage({
        showClose: true,
        message: info,
        type: "warning",
      });
    };
    const addTodoFun = inject("addTodo") as Function;
    const addTodo = () => {
      if (input.value) {
        addTodoFun(input.value);
      } else {
        warning("输入内容不能为空，请输入");
      }

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
