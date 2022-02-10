<template>
  <div class="container">
    <ListItem
      v-for="(item, ind) in todos"
      :key="item.id"
      :data="item"
      :ind="ind"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListItem from "components/ListItem.vue";

export default defineComponent({
  name: "List",
  components: {
    ListItem,
  },

  props: {
    todos: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="less" scoped>
.container {
  margin-top: 15px; /* no */
}
</style>
