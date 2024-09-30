<template>
    <div class="home-container">
        <div class="header">{{ data.title }}</div>
        <div class="content">
            <div class="summary">{{ data.content }}</div>
            <!-- 引入echarts统计最近的成果 -->
            <div class="image">占位</div>
        </div>
        <div class="test">
            hhhh
        </div>
        <div class="test2">
            hhhh222
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { reactive } from 'vue'
    const data = reactive ({
        title: '哈哈哈，你终于找到我了啊！',
        content: '你最近很棒啊！',
        imageList: [],
    })
</script>

<style scoped lang="less">
    .home-container {
        width: 100%;
        height: 100%;
        margin-top: .2rem;
        background-color: pink;

        .header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: .6rem;
        }

        .content {
            display: flex;
            justify-content: space-around;
            background-color: #bfa;

            .summary {
            }
        }
        
    }
    .test, .test2{
            display: inline-block;
            justify-self: end;
        }
</style>