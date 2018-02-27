<template>
  <div class="warp">
      <router-view></router-view>
      <tab-view :tabList="tabList"></tab-view>
  </div>
</template>

<script>
import tabView from '@/components/tabView'
export default {
  components: {
    'tab-view': tabView
  },
  data () {
    return {
      tabList: [
        {
          id: '1',
          text: '首页'
        },
        {
          id: '2',
          text: '会员杂锦'
        },
        {
          id: '3',
          text: '分类'
        },
        {
          id: '4',
          text: '购物车'
        },
        {
          id: '5',
          text: '我的'
        }
      ]
    }
  }
}
</script>

<style>
 .warp {
     height: 100%;
     width:100%;
 }
</style>
