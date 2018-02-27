<template>
  <div class="tab" :class="[ fix === true? fixed:'' ]">
      <div v-for="(item, key) in tabList" :key="key" class="tab-item">
          {{item.text}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
    .tab {
        height: 49px;
        background-color: #fff;
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: center;
    }
    .tab-item {
        flex: 1;
    }
</style>
