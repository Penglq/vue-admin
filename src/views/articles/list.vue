<template>
  <div>
    <el-row :gutter="20">
      <!--<el-col :span="1">-->
      <!--<div class="grid-content bg-purple"></div>-->
      <!--</el-col>-->
      <!--<el-col :span="20">-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="ID" width="180">
          <template scope="scope">
            <el-icon name="el-icon-caret-right"></el-icon>
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="姓名" width="180"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">预览</el-button>
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--</el-col>-->
    </el-row>
    <el-row>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page.sync="currentPage1" :page-size="100" :total="1000" layout="total, prev, pager, next" >
        </el-pagination>
      </div>
    </el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  export default {
    name: 'list',
    components: { ElRow },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    },
    data() {
      return {
        tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    }
  }
</script>

<style scoped>

</style>
