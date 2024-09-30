<template>
    <ul class="header">
        <li v-for="list,index in res.data" :key="index"><span>{{ list.name}}</span></li>
    </ul>
</template>

<script lang="ts" setup>
import {ref, reactive} from 'vue';
const res = reactive({
    data: [
        {
            name: '欢迎回来！',
        },
        {
            name: '缝纫小记',
        },
        {
            name: '编织小记',
        },
        {
            name: '读书小记',
        },
        {
            name: '户外生活',
        },
        {
            name: '登录',
        },
    ]
});
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: .6rem;
    font-size: .16rem;
    box-shadow: 0 .01rem .1rem #ccc;
    border-radius: 0 0 .2rem .2rem;
}
.header li {    
    font-weight: bolder;
    color: gray;
}
</style>