<template>
  <el-card
    @mouseenter="deleteButtonIsShow = true"
    @mouseleave="deleteButtonIsShow = false"
    shadow="hover"
    class="missionItem"
    :body-style="{ padding: '2px', paddingLeft: '15px', position: 'relative' }"
  >
    <el-checkbox
      v-model="data.isSelected"
      :label="data.content"
      size="large"
    ></el-checkbox>

    <el-button
      v-show="deleteButtonIsShow"
      class="delete"
      type="info"
      @click="deleteTodo"
      >删除</el-button
    >
  </el-card>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: "ListItem",

  props: {
    data: {
      type: Object,
      required: true,
    },
    ind: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const deleteButtonIsShow = ref(false);

    const deleteTodoFun = inject("deleteTodo") as Function;
    const deleteTodo = () => {
      deleteTodoFun(props.ind);
    };
    return {
      deleteButtonIsShow,
      deleteTodo,
    };
  },
});
</script>

<style lang="less" scoped>
.missionItem {
  margin-top: 5px;
  .delete {
    position: absolute;
    right: 6px; /* no */
    top: 5px; /* no */
  }
}
</style>
