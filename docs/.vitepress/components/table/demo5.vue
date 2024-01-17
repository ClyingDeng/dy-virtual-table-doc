<!-- 虚拟 -->
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
