<template>
  <div class="footer">
    <el-checkbox class="show" label="已完成0/全部5" size="large"></el-checkbox>

    <el-button class="clear" type="success">清空已完成任务</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="less" scoped>
.footer {
  position: relative;
  margin-top: 25px; /*no*/
  .show {
    margin-left: 16px; /*no*/
    ::v-deep .el-checkbox__label {
      margin-left: 10px; /*no*/
    }
  }
  .clear {
    position: absolute;
    right: 0;
  }
}
</style>
