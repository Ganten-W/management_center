<template>
  <div class="info-manage">
    <el-row>
      <el-col :span="8">
        <span>所属专业</span>
        <el-select v-model="form.major" placeholder="专业名称" size="small" clearable>
          <el-option
            v-for="item in majorOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>

        </el-select>
      </el-col>
      <el-col :span="8">
        <span>年级</span>
        <el-select v-model="form.grade" placeholder="年级名称" size="small" clearable>
          <el-option
            v-for="item in gradeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <span>班级</span>
        <el-select v-model="form.class" placeholder="班级名称" size="small" clearable>
          <el-option
            v-for="item in classOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <span>院系或部门</span>
        <el-select v-model="form.department" placeholder="全部" size="small" clearable>
          <el-option
            v-for="item in departmentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <span>学号</span>
        <el-input v-model="form.num" placeholder="输入学号" clearable size="small"></el-input>
      </el-col>
      <el-col :span="8">
        <span>姓名</span>
        <el-input v-model="form.name" placeholder="输入姓名" clearable size="small"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23" style="text-align: right;padding-right: 19px;">
        <el-button type="primary" size="small" @click="demand()">查询</el-button>
        <el-button type="info" size="small">导入学生</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="22" :offset="1">
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column type="selection" width="30px">
          </el-table-column>
          <el-table-column
            label="学号"
            prop="num">
          </el-table-column>
          <el-table-column
            label="姓名"
            prop="name">
          </el-table-column>
          <el-table-column
            label="学院"
            prop="department">
          </el-table-column>
          <el-table-column
            label="专业"
            prop="major">
          </el-table-column>
          <el-table-column
            label="年级"
            prop="grade">
          </el-table-column>
          <el-table-column
            label="班级"
            prop="class">
          </el-table-column>
          <el-table-column
            label="性别"
            prop="sex">
          </el-table-column>
          <el-table-column
            label="政治面貌"
            prop="zzmm">
          </el-table-column>
          <el-table-column
            label="身份证号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="联系电话"
            prop="phone">
          </el-table-column>

          <el-table-column label="操作" width="170px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          major: '',
          grade: '',
          class: '',
          department: '',
          num: '',
          name: ''
        },
        majorOptions:[
          {label:'计算机软件',value:'jsj'},
          {label:'物流管理',value:'wl'},
          {label:'市场营销',value:'sc'},
          {label:'电子商务',value:'dz'}
        ],
        gradeOptions:[
          {label:'2018级',value:'2018'},
          {label:'2017级',value:'2017'},
          {label:'2016级',value:'2016'},
          {label:'2015级',value:'2015'}
        ],
        classOptions:[
          {label:'计算机1001',value:'1001'},
          {label:'计算机1002',value:'1002'},
          {label:'计算机1003',value:'1003'},
          {label:'计算机1004',value:'1004'}
        ],
        departmentOptions:[
          {label:'理工学院',value:'lg'},
          {label:'文管学院',value:'wg'},
          {label:'海洋学院',value:'hy'}
        ],
        tableData:[{
          num:'1001',
          name:'wr',
          department:'理工学院',
          major:'制药工程',
          grade:'2015级',
          class:'1003',
          sex:'男',
          zzmm:'队员',
          id:'1955',
          phone:'666666'
        },
          {
            num:'1002',
            name:'wr2',
            department:'理工学院',
            major:'制药工程',
            grade:'2015级',
            class:'1003',
            sex:'男',
            zzmm:'队员',
            id:'1955',
            phone:'666666'
          },
          {
            num:'1003',
            name:'wr3',
            department:'理工学院',
            major:'制药工程',
            grade:'2015级',
            class:'1003',
            sex:'男',
            zzmm:'队员',
            id:'1955',
            phone:'666666'
          },
          {
            num:'1004',
            name:'wr4',
            department:'理工学院',
            major:'制药工程',
            grade:'2015级',
            class:'1003',
            sex:'男',
            zzmm:'队员',
            id:'1955',
            phone:'666666'
          }
        ]
      }
    },
    methods: {
      demand() {
        if (this.form.major && this.form.grade && this.form.class && this.form.department && this.form.num && this.form.name) {
          alert(this.form.name)
        } else {
          this.$message.error('请填写完整信息')
        }
      },
      handleDelete(parm1, parm2) {
        this.tableData.splice(parm1, 1);
        this.$message.success('删除成功')
      },
      handleEdit(parm1,parm2){
        alert(parm2.name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info-manage {
    .el-col {
      margin-top: 20px;
    }

    .el-input {
      display: inline-block;
      width: 209px;
    }

  }
</style>
