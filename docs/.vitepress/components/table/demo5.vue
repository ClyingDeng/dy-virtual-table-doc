<script setup lang="ts">
import { ref } from 'vue'

const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    width: 100
  },
  {
    label: '性别2',
    prop: 'sex',
    width: 100
  },
  {
    label: '年龄3',
    prop: 'age',
    width: 100
  },
  {
    label: '地址4',
    prop: 'address',
    width: 260
  },
  {
    label: '职业5',
    prop: 'duty',
    width: 100
  },
  {
    label: '单位6',
    prop: 'unit',
    width: 80
  },
  
])

const tableData = ref([
  {
    name: 'clying1',
    sex: '女',
    age: '1',
    duty: ';;;;;;;',
    unit: '6',
    address: '上海市青浦区华新镇'
  },
  {
    name: '第二',
    sex: '女',
    age: '2',
    duty: ';;;dddd;;;;',
    unit: '6',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    age: '2',
    duty: ';;;dddd;;;;',
    unit: '6',
    address: '上海市青浦区徐泾镇徐泾北城'
  },
  {
    name: 'clying',
    sex: '女',
    age: '2',
    duty: ';;;dddd;;;;',
    unit: '6',
    address: '上海市浦东新区'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上海市黄浦区'
  },


])

</script>


<template>
<canvas-table :border="false" :height="100" :data="tableData" :columns="tHeaderConfig"></canvas-table>
</template>