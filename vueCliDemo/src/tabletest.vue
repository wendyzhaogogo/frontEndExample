<template>
  <div><a-input v-model="a" />
    <a-table
      :columns="columns"
      :row-key="record => record.name"
      :data-source="data"
      :pagination="false"
      :loading="loading">
      <template v-slot:operate="operate,obj">
        <a-button
          type="link"
          @click="del(obj)">删除</a-button>
      </template>
      <template v-slot:fieldName="fieldName,obj">
        <a-input v-model="obj.name" />
      </template>
      <template v-slot:sourceField="sourceField,obj">

        <a-select
          v-model="obj.sourceMappingName"  
          style="width:100%;"
          size="default">
          <a-select-option
            v-for="{fieldName} in sourceFields_set"
            :key="fieldName">
            {{ fieldName }}
          </a-select-option>
        </a-select>

      </template>
      <template v-slot:rule="rule,obj">
        <a-select
          v-model="obj.transform"
          style="width:100%;"
          size="default">
          <a-select-option
            v-for="{ruleName,id} in scriptList"
            :key="id">
            {{ ruleName }}
          </a-select-option>
        </a-select>
      </template>

      <template v-slot:is_sync="is_sync,obj">
        <a-switch
          v-model="obj.syn"
          default-checked />
      </template>
    </a-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: '1',
      data: [{},{},{},{}], 
      columns: [
     
        {
          title: '同步',
          dataIndex: 'is_sync',
          width: 100,
          // sorter: true,

          scopedSlots: { customRender: 'is_sync' }
        },
        {
          title: '字段名称',
          dataIndex: 'fieldName',
          // sorter: true,
          width: 150,
          scopedSlots: { customRender: 'fieldName' }
        },
        {
          title: '清洗规则',
          dataIndex: 'rule',
          // sorter: true,

          scopedSlots: { customRender: 'rule' }
        },
        {
          title: '对应原字段',
          dataIndex: 'sourceField',
          // sorter: true,

          scopedSlots: { customRender: 'sourceField' }
        },
        {
          title: '操作',
          dataIndex: 'handle',
          // sorter: true,

          scopedSlots: { customRender: 'operate' }
        }
      ]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
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
