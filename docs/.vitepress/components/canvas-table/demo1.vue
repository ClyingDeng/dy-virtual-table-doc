<script setup lang="ts">
import { ref } from 'vue'

const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    // align: 'left',
    width: 100
  },
  {
    label: '性别2',
    prop: 'sex'
  },
  {
    label: '年龄3',
    prop: 'age',
    // align: 'center',
    width: 100
  },
  {
    label: '地址4',
    prop: 'address',
    width: 260
  }
])

const tableData = ref([
  {
    name: 'clying1',
    sex: '女',
    age: '1',
    address: 'address14address14'
  },
  {
    name: '第二',
    sex: '女',
    sex32: '女',
    age: '2',
    unit16: 'unit16',
    date17: 'date17',
    date18: 'date18',
    address19: 'address19',
    duty20: '2duty20',
    name21: '2name21',
    sex22: '2sex22',
    age23: '2age23',
    address24: '2address24address24address24address24',
    duty25: '2duty25',
    unit26: '2unit26',
    date27: 'date27',
    date28: '2date28',
    address29: 'address29',
    duty30: '2hhh30',
    age33: '2hhh30age33',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    sex32: '女',
    age: '3',
    address: '2'
  },
  {
    name: 'clying',
    sex: '女',
    sex32: '女',
    age: '4',
    duty15: '4duty15',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    sex32: '女',
    age: '5',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '6',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '8',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '9',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    sex32: '女',
    age: '10',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    sex32: '女',
    age: '11',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '12',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '13',
    address: '13'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '14',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '15',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '16',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  }
])

</script>


<template>
<canvas-table :height="200" :data="tableData" :columns="tHeaderConfig"></canvas-table>
</template>
<style>

</style>