<template>
  <div class="spss">
    <el-row style="height: 40px;line-height: 40px; text-align: right;">
      <el-col :span="6" :offset="1">
        <span>年级</span>
        <el-select v-model="grade" placeholder="年级名称" size="mini" clearable>
          <el-option label="2018级" value="2018"></el-option>
          <el-option label="2017级" value="2017"></el-option>
          <el-option label="2016级" value="2016"></el-option>
          <el-option label="2015级" value="2015"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="10">
        <el-button type="primary" size="mini">开始分析</el-button>
      </el-col>
    </el-row>
    <div class="zzmmfx"></div>
    <hr>
    <el-row style="height: 40px;line-height: 40px; text-align: right;">
      <el-col :span="6" :offset="1">
        <span>年级</span>
        <el-select v-model="grade" placeholder="年级名称" size="mini" clearable>
          <el-option label="2018级" value="2018"></el-option>
          <el-option label="2017级" value="2017"></el-option>
          <el-option label="2016级" value="2016"></el-option>
          <el-option label="2015级" value="2015"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6" :offset="10">
        <el-button type="primary" size="mini">开始分析</el-button>
      </el-col>
    </el-row>
    <div class="sexfx"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        grade:'',
      }
    },

    mounted() {

// 基于准备好的dom，初始化echarts实例
      var myChart = this.echarts.init(document.querySelector('.zzmmfx'));
      var myChart2 = this.echarts.init(document.querySelector('.sexfx'));
// 绘制图表
      myChart.setOption({
        title : {
          text: '全校学生政治面貌分析',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['群众','党员','团员']
        },
        series : [
          {
            name: '政治面貌分析',
            type: 'pie',
            radius : '70%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'党员'},
              {value:310, name:'团员'},
              {value:234, name:'群众'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
      myChart2.setOption({
        title : {
          text: '全校学生性别分析',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['男','女']
        },
        series : [
          {
            name: '政治面貌分析',
            type: 'pie',
            radius : '70%',
            center: ['50%', '60%'],
            data:[
              {value:335, name:'女'},
              {value:310, name:'男'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    }
  }
</script>

<style lang="scss" scoped>
  .spss{
    .zzmmfx{
      width: 400px;
      height: 400px;
      margin: 50px auto;
    }
    .sexfx{
      margin: 50px auto;
      width: 400px;
      height: 400px;
    }
  }
</style>
