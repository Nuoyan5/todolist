<template>
  <div class="footer">
    <el-checkbox class="show" :label="text" size="large"></el-checkbox>

    <el-button class="clear" type="success">清空已完成任务</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
    countSelected: {
      type: Number,
      required: true,
    },
    alllength: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    return {
      text: computed(
        () => `已完成${props.countSelected}/全部${props.alllength}`
      ),
    };
  },
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
