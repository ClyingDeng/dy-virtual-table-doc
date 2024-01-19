<!-- 基础 -->
<script setup lang="ts">
import { ref } from 'vue'

const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    align: 'left',
    width: 100,
  },
  {
    label: '性别2',
    prop: 'sex',
    align: 'center',
    width: 100,
  },
  {
    label: '年龄3',
    prop: 'age',
    align: 'right',
    width: 100,
  },
  {
    label: '地址4',
    prop: 'address',
    // width: 260
  },
])

const tableData = ref([
  {
    name: 'clying1',
    sex32: '女',
    sex: '女',
    age: '1',
    address: '上海市青浦区',
  },
  {
    name: '第二',
    sex: '女',
    age: '2',

    address: '上海市华新镇',
  },
  {
    name: 'deng',
    sex: '女',

    age: '3',
    address: '2',
  },
  {
    name: 'clying',
    sex: '女',
    age: '4',
    address: '上海市镇朱长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '6',
    address: '1',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '1',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '1',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '19',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'clying1',
    sex: '女',
    age: '21',
    address: '上海市青浦区华新镇',
  },
  {
    name: '第二',
    sex: '女',
    age: '22',
    address: '上海市青浦区华新镇',
  },
])
</script>

<template>
<ClientOnly>
  <dy-virtual-table
    :height="400"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</ClientOnly>
</template>
