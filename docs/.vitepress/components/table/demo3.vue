<!-- 边框 -->
<script setup lang="ts">
import { ref } from 'vue'

const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    width: 100,
  },
  {
    label: '性别2',
    prop: 'sex',
    width: 100,
  },
  {
    label: '年龄3',
    prop: 'age',
    width: 100,
  },
  {
    label: '地址4',
    prop: 'address',
    width: 260,
  },
  {
    label: '职业5',
    prop: 'duty',
    width: 100,
  },
  {
    label: '单位6',
    prop: 'unit',
    width: 80,
  },
  {
    label: '日期7',
    prop: 'date7',
    width: 100,
  },
  {
    label: '日期8',
    prop: 'date8',
    width: 80,
  },
  {
    label: '地址9',
    prop: 'address9',
    width: 260,
  },
  {
    label: '职业10',
    prop: 'duty10',
    width: 100,
  },
  {
    label: '单位11',
    prop: 'unit11',
    width: 80,
  },
  {
    label: '日期12',
    prop: 'date12',
    width: 100,
  },
  {
    label: '日期13',
    prop: 'date13',
    width: 80,
  },
  {
    label: '地址14',
    prop: 'address14',
    width: 260,
  },
  {
    label: '职业15',
    prop: 'duty15',
    width: 100,
  },
  {
    label: '单位16',
    prop: 'unit16',
    width: 80,
  },
  {
    label: '日期17',
    prop: 'date17',
    width: 100,
  },
  {
    label: '日期18',
    prop: 'date18',
    width: 80,
  },
  {
    label: '地址19',
    prop: 'address19',
    width: 260,
  },
  {
    label: '职业20',
    prop: 'duty20',
    width: 100,
  },
  {
    label: '姓名21',
    prop: 'name21',
    width: 100,
  },
  {
    label: '性别22',
    prop: 'sex22',
    width: 100,
  },
  {
    label: '年龄23',
    prop: 'age23',
    width: 100,
  },
  {
    label: '地址24',
    prop: 'address24',
    width: 260,
  },
  {
    label: '职业25',
    prop: 'duty25',
    width: 100,
  },
  {
    label: '单位26',
    prop: 'unit26',
    width: 80,
  },
  {
    label: '日期27',
    prop: 'date27',
    width: 100,
  },
  {
    label: '日期28',
    prop: 'date28',
    width: 80,
  },
  {
    label: '地址29',
    prop: 'address29',
    width: 260,
  },
  {
    label: '职业30',
    prop: 'duty30',
    width: 100,
  },
  {
    label: '姓名31',
    prop: 'name31',
    width: 100,
  },
  {
    label: '性别32',
    prop: 'sex32',
    width: 100,
  },
  {
    label: '年龄33',
    prop: 'age33',
    width: 100,
  },
])

const tableData = ref([
  {
    name: 'clying1',
    sex32: '女',
    sex: '女',
    age: '1',
    address: '上海市青浦区华新镇',
  },
  {
    name: '第二',
    sex: '女',
    age: '2',

    address: '上海市青浦区华新镇',
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
    address: '上海市青浦区华新镇朱长村',
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
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '上海市青浦区华新镇',
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
  {
    name: 'deng',
    sex: '女',
    age: '23',
    address:
      '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇',
  },
  {
    name: 'clying',
    sex: '女',
    age: '24',
    address: '上海市青浦区华新镇朱长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '25',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '26',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '27',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '28',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'join',
    sex: '男',
    age: '29',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '30',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '31',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '32',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'deng',
    sex: '女',
    age: '33',
    address:
      '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇',
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇',
  },
])
</script>

<template>
  <ClientOnly>
    <dy-virtual-table
      :border="false"
      :height="400"
      :data="tableData"
      :columns="tHeaderConfig"
    ></dy-virtual-table>
  </ClientOnly>
</template>
