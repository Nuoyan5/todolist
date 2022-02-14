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
      class="edit"
      type="primary"
      @click="editTodo"
      >编辑</el-button
    >

    <el-button
      v-show="deleteButtonIsShow"
      class="delete"
      type="info"
      @click="deleteTodo"
      >删除</el-button
    >
  </el-card>

  <el-dialog
    title="编辑"
    v-model="dialogVisible"
    width="30%"
    @close="handleClose"
  >
    <el-input v-model="input"></el-input>

    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleChangeToDo">确 定</el-button>
      </span>
    </template>
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span> -->
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";

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

    const dialogVisible = ref(false);
    const input = ref("");
    const handleClose = () => {
      dialogVisible.value = false;
    };
    const editTodo = () => {
      dialogVisible.value = true;
      input.value = props.data.content;
    };
    const changeTodoFun = inject("changeTodo") as Function;
    const handleChangeToDo = () => {
      changeTodoFun(props.ind, input.value);
      dialogVisible.value = false;
    };

    const deleteTodoFun = inject("deleteTodo") as Function;
    const deleteTodo = () => {
      deleteTodoFun(props.ind);
    };
    return {
      deleteButtonIsShow,
      deleteTodo,
      editTodo,

      dialogVisible,
      handleClose,
      input,
      handleChangeToDo,
    };
  },
});
</script>

<style lang="less" scoped>
.missionItem {
  margin-top: 5px;
  .edit {
    position: absolute;
    right: 80px; /* no */
    top: 5px; /* no */
  }
  .delete {
    position: absolute;
    right: 6px; /* no */
    top: 5px; /* no */
  }
}
</style>
