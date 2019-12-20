<template>
  <div
    style="padding: 0 15px;"
    @click="toggleClick"
  >
    <i
      class="hamburger"
      :class="[{'el-icon-s-fold': isActive}, {'el-icon-s-unfold': !isActive}]"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick');
    },
  },
};
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  font-size: 20px;
}
</style>
