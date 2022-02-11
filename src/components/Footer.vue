<template>
  <div class="footer">
    <el-checkbox
      v-model="isAllSelected"
      class="show"
      :label="text"
      size="large"
      @change="allSelectedChange"
    ></el-checkbox>

    <el-button @click="clearCompleteMission" class="clear" type="success"
      >清空已完成任务</el-button
    >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, watchEffect } from "vue";
import { ElMessage } from "element-plus";

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
    const isAllSelected = ref(false);
    watchEffect(() => {
      if (props.countSelected === props.alllength && props.alllength > 0) {
        isAllSelected.value = true;
      } else {
        isAllSelected.value = false;
      }
    });

    const handleAllSelectedFun = inject("handleAllSelected") as Function;
    const allSelectedChange = (val) => {
      handleAllSelectedFun(val);
    };

    const warning = (info: string) => {
      ElMessage({
        showClose: true,
        message: info,
        type: "warning",
      });
    };
    const handleClearCompleteMissionFun = inject(
      "handleClearCompleteMission"
    ) as Function;
    const clearCompleteMission = () => {
      if (props.alllength > 0 && props.countSelected > 0) {
        handleClearCompleteMissionFun();
      } else {
        warning("请至少选择一项！");
      }
    };
    return {
      text: computed(
        () => `已完成${props.countSelected}/全部${props.alllength}`
      ),
      isAllSelected,
      allSelectedChange,
      clearCompleteMission,
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
