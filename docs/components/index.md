# Table 表格

对 table 进行二次封装，用于展示多条结构类似的数据，可对表格进行列对齐等操作。

## 基础表格

表格二次封装，基础的表格展示用法。

<script setup>
</script>

<demo-block>

<template #source>
<table-demo1></table-demo1>
</template>


当`dy-virtual-table`元素中注入`tableData`对象数组后，在`table`的配置项中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。



```vue
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
  <dy-virtual-table
    :height="400"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</template>

```


</demo-block>

## 表格对齐方式

<demo-block>

<template #source>
<table-demo2></table-demo2>
</template>


在表格配置项中，`align` 是每列的对齐方式，可以是`left / center / right`，设置列左对齐、居中对齐、右对齐。



```vue
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
    address: '上海市青浦区华新镇',
  },
  {
    name: '第二',
    sex: '女',
    age: '2',

    address: '上海市青新镇',
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
    address: '上海市长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '6',
    address: 'w',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '19',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区',
  },
  {
    name: 'clying1',
    sex: '女',
    age: '21',
    address: '上海市青浦区',
  },
  {
    name: '第二',
    sex: '女',
    age: '22',
    address: '上海市新镇',
  },
  {
    name: 'deng',
    sex: '女',
    age: '23',
    address: '9',
  },
  {
    name: 'clying',
    sex: '女',
    age: '24',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '25',
    address: '上海市青浦区',
  },
  {
    name: 'join',
    sex: '男',
    age: '26',
    address: '1',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '27',
    address: '上海市青浦区华新镇',
  },
])
</script>

<template>
  <dy-virtual-table
    :height="300"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</template>

```

</demo-block>

## 边框表格

<demo-block>

<template #source>
<table-demo3></table-demo3>
</template>


在表格 `dy-virtual-table` 中，`border` 设置表格是否存在边框。


```vue
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
  <dy-virtual-table
    :border="false"
    :height="400"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</template>

  
```


</demo-block>



## 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

stripe 可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。


<demo-block>

<template #source>
<table-demo4></table-demo4>
</template>



```vue
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

    address: '上海市青新镇',
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
    address: '上海市长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '5',
    address: '上华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '6',
    address: 'w',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '7',
    address: '上海市青浦区',
  },
  {
    name: 'join',
    sex: '男',
    age: '8',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '9',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'Mark',
    sex: '男',
    sex32: '女',
    age: '10',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'Mark',
    sex: '男',
    sex32: '女',
    age: '11',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    sex32: '女',
    age: '12',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'deng',
    sex: '女',
    sex32: '女',
    age: '13',
    address:
      '上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇上海市青浦区华新镇',
  },
  {
    name: 'clying',
    sex: '女',
    age: '14',
    address: '上海市青浦区华新镇朱长村',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '15',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'join',
    sex: '男',
    age: '16',
    address:
      '上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路上海市青浦区华新镇朱长村花之路',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '17',
    address: '上海市青浦区华新镇',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '18',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '19',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '20',
    address: '上海市青浦区',
  },
  {
    name: 'clying1',
    sex: '女',
    age: '21',
    address: '上海市青浦区',
  },
  {
    name: '第二',
    sex: '女',
    age: '22',
    address: '上海市新镇',
  },
  {
    name: 'deng',
    sex: '女',
    age: '23',
    address: '9',
  },
  {
    name: 'clying',
    sex: '女',
    age: '24',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '25',
    address: '上海市青浦区',
  },
  {
    name: 'join',
    sex: '男',
    age: '26',
    address: '1',
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
    address: '2',
  },
  {
    name: 'join',
    sex: '男',
    age: '29',
    address: '3',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '30',
    address: '1',
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
    address: '1',
  },
  {
    name: 'deng',
    sex: '女',
    age: '33',
    address: '2',
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '2',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区',
  },
  {
    name: 'clying',
    sex: '女',
    age: '34',
    address: '上海市青浦区',
  },
  {
    name: 'Mark',
    sex: '男',
    age: '35',
    address: '上海市青浦区',
  },
])
</script>

<template>
  <dy-virtual-table
    stripe
    :border="false"
    :height="100"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</template>

  
```


</demo-block>



## 虚拟表格
在前端开发领域，表格一直都是一个高频出现的组件，尤其是在中后台和数据分析场景。 但是，对于 Table V1来说，当一屏里超过 1000 条数据记录时，就会出现卡顿等性能问题，体验不是很好。

通过虚拟化表格组件，超大数据渲染将不再是一个头疼的问题。


<demo-block>

<template #source>
<table-demo5></table-demo5>
</template>


在表格 `dy-virtual-table` 中，`border` 设置表格是否存在边框。

```vue
<script setup lang="ts">
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    prop: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    label: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-',
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      },
    )
  })

const tHeaderConfig = generateColumns(10)
const tableData = generateData(tHeaderConfig, 1000)
</script>

<template>
  <dy-virtual-table
    :height="100"
    :data="tableData"
    :columns="tHeaderConfig"
  ></dy-virtual-table>
</template>

  
```


</demo-block>
