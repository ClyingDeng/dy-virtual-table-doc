<script setup lang="ts">
import { ref } from 'vue'

const tHeaderConfig = ref([
  {
    label: '姓名1',
    prop: 'name',
    align: 'left',
    width: 100
  },
  {
    label: '性别2',
    prop: 'sex',
    align: 'center',
    width: 100
  },
  {
    label: '年龄3',
    prop: 'age',
    align: 'right',
    width: 100
  },
  {
    label: '地址4',
    prop: 'address',
    // width: 260
  }
])

const tableData = ref([
  {
    name: 'clying1',
    sex32: '女',
    sex: '女',
    age: '1',
    address: '上海市青浦区华新镇'
  },
  {
    name: '第二',
    sex: '女',
    age: '2',

    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',

    age: '3',
    address: '2'
  },
  {
    name: 'clying',
    sex: '女',
    age: '4',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
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
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '19',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying1',
    sex: '女',
    age: '21',
    address: '上海市青浦区华新镇'
  },
  {
    name: '第二',
    sex: '女',
    age: '22',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'deng',
    sex: '女',
    age: '23',
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '24',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '25',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '26',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '27',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '28',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'join',
    sex: '男',
    age: '29',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '30',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '31',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'join',
    sex: '男',
    age: '32',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路'
  },
  {
    name: 'deng',
    sex: '女',
    age: '33',
    address: '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇'
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区华新镇朱长村'
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区华新镇'
  }
])
</script>


<template>
<dy-virtual-table :border="false" :height="300" :data="tableData" :columns="tHeaderConfig"></dy-virtual-table>
</template>