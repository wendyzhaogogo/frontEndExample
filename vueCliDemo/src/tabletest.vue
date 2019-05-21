<template>
  <el-table :data="tableData"
            style="width: 100%">

    <el-table-column width="100px"
                     show-overflow-tooltip
                     :label="item.columnLabel"
                     :key="item.columnKey"
                     v-for="item in configArr"
                     :prop="item.columnKey">
      <template slot="header"
                slot-scope="{column:{label}}">
        <el-tooltip class="item"
                    effect="dark"
                    :content="label"
                    placement="top">
          <div class="headerclass">{{label}}</div>
        </el-tooltip>
      </template>
      <template slot-scope="{row,column:{property},$index}">{{row[property]}}</template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      configArr: [{
        columnKey: 'date',
        columnLabel: 'date1date1date1date1date1'
      },
      {
        columnKey: 'name',
        columnLabel: 'name1name1name1name1name1name1'
      },
      {
        columnKey: 'address',
        columnLabel: 'address1'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>
<style >
.headerclass {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
</style>
