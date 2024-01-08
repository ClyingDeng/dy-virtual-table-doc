# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

<demo-block>
::: slot source
<table-test1></table-test1>
:::

当`dy-table`元素中注入`data`对象数组后，在`dy-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。

:::slot highlight

```html
<dy-table :columns="columns1" :data="data1"></dy-table>
<script>
  export default {
    data() {
      return {
        columns1: [
          {
            title: "Name",
            key: "name",
          },
          {
            title: "Age",
            key: "age",
          },
          {
            title: "Address",
            key: "address",
          },
          {
            title: "date",
            key: "date",
          },
        ],
        data1: [
          {
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park",
            date: "2016-10-03",
          },
          {
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park",
            date: "2016-10-01",
          },
          {
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park",
            date: "2016-10-02",
          },
          {
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park",
            date: "2016-10-04",
          },
        ],
      };
    },
  };
</script>
```

:::
</demo-block>
