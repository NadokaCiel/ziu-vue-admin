<template>
  <div class="menu-container">
    <div class="menu-text">name: {{ name }}</div>
    <div class="menu-text">role: {{ role }}</div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      name: '',
      role: '',
    }
  },
  created() {
    this.name = this.$localStorage.get('name');
    this.role = this.$localStorage.get('role');
  },
};
</script>

<style lang="scss" scoped>
.menu {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
