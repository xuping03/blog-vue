<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref, reactive} from 'vue';
const res = reactive({
    data: [
        {
            name: '欢迎回来！',
            path: '/home',
        },
        {
            name: '缝纫小记',
            path: '/home2',
        },
        {
            name: '编织小记',
            path: '/home3',
        },
        {
            name: '读书小记',
            path: '/home4',
        },
        {
            name: '户外生活',
            path: '/home5',
        },
        {
            name: '登录',
            path: '/login',

        },
    ]
});
</script>

<template>
  <div class="app">
    <div class="navigage">
      <RouterLink :to="{path: list.path}" active-class="active"
        v-for="list,index in res.data" :key="index">{{list.name }}
      </RouterLink>
    </div>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.navigage {
  display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: .6rem;
    font-size: .16rem;
    box-shadow: 0 .01rem .1rem #ccc;
    border-radius: 0 0 .2rem .2rem;
}
.active {
  color: red;
}
</style>
