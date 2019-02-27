<template>
  <div id="container">
    <div class="nav-bar" ref="navBar" :class="{width290:showValue,width50:!showValue}">
      <div class="bar-top">
        <i class="el-icon-minus" @click="show()"></i>
      </div>
      <div class="bar-bottom">
        <div class="nav1" @click="showLeft()"
             :class="{border1:showValue,borderNone:!showValue}">
          <img src="@/assets/menu.png" alt="控制面板"></div>
        <div class="nav2" v-show="showValue">
          <img src="@/assets/home.png" alt="首页">
          <img src="@/assets/prev.png" alt="后退">
          <img src="@/assets/next.png" alt="前进">
          <img src="@/assets/playback.png" alt="回放">
        </div>
        <div class="nav3" v-show="showValue">
          <img src="@/assets/view_paint.png" alt="查看标注">
          <img src="@/assets/comment.png" alt="标注">
        </div>
        <div class="nav4" v-show="showValue"><img src="@/assets/remark.png" alt="评论及备注"></div>
      </div>
    </div>
    <div class="left-bar" :class="{left0:showL,left260:!showL}">
      <div class="header">
        <h2 class="header-name">学生管理中心</h2>
        <img class="message" src="@/assets/show_comments.png" alt="信息管理">
        <i class="el-icon-close" @click="showLeft()"></i>
      </div>
      <div class="page-name-box">
        <img src="@/assets/page_link.png" alt="链接">
        <h3 class="page-name">学生信息管理</h3>
      </div>
      <div class="pages">
        <el-row>
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#333"
              text-color="#b0b0b0"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>学生管理中心</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="1-1">
                    <template slot="title">后台管理</template>
                    <el-menu-item-group>
                      <el-submenu index="1-1-1">
                        <template slot="title">学生管理系统</template>
                        <router-link to="/info-manage" style="text-decoration: none">
                          <el-menu-item index="1-1-1-1">学生信息管理</el-menu-item>
                        </router-link>
                        <router-link to="/spss" style="text-decoration: none">
                          <el-menu-item index="1-1-1-2">学生统计分析</el-menu-item>
                        </router-link>
                      </el-submenu>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="1-2">
                    <template slot="title">学端个人中心</template>
                    <el-menu-item-group index="1-2-1">
                      <el-submenu index="1-2-1">
                        <template slot="title">学生管理系统</template>
                        <el-menu-item index="1-2-1-1">我的基本信息</el-menu-item>
                        <el-menu-item index="1-2-1-2">我的学籍信息</el-menu-item>
                        <el-menu-item index="1-2-1-3">我的异动申请</el-menu-item>
                        <el-menu-item index="1-2-1-4">我的违纪申诉</el-menu-item>
                        <el-menu-item index="1-2-1-5">我的资助申请</el-menu-item>
                      </el-submenu>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="main-box" :class="{paddingL260:showL,paddingL0:!showL}">
      <div class="main">
        <el-row>
          <el-col :span="24" class="main-title">学生个人中心</el-col>
        </el-row>
        <el-row class="login">
          <el-col :span="4" class="logo">logo</el-col>
          <el-col :span="4" :offset="12">欢迎，admin登录</el-col>
          <el-col :span="4">
            <el-button type="warning" plain size="small">安全退出</el-button>
          </el-col>
        </el-row>
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showValue: true,
        showL:true,
      }
    },
    methods: {
      //导航条收放
      show() {
        this.showValue=!this.showValue
      },
      //侧栏收放
      showLeft() {
        this.showL=!this.showL
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    },
    mounted() {
      //导航条移动
      // let div1 = document.querySelector(".nav-bar"); ref代替
      this.$refs.navBar.onmousedown = (ev) => {
        let disX = ev.clientX - this.$refs.navBar.offsetLeft;
        let disY = ev.clientY - this.$refs.navBar.offsetTop;
        document.onmousemove = (ev) => {
          let l = ev.clientX - disX;
          let t = ev.clientY - disY;
          this.$refs.navBar.style.left = l + 'px';
          this.$refs.navBar.style.top = t + 'px';
          if (this.$refs.navBar.offsetLeft < 0) {
            this.$refs.navBar.style.left = '0';
          }
          if (this.$refs.navBar.offsetTop < 0) {
            this.$refs.navBar.style.top = '0';
          }
        };
        document.onmouseup = () => {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
  .width50{
    width: 50px;
  }
  .width290{
    width: 290px;
  }
  .borderNone{
    border-right: none;
  }
  .border1{
    border-right: 1px solid rgb(102, 102, 102);
  }
  .left0{
    left:0;
  }
  .left260{
    left:-260px;
  }
  .paddingL0{
    padding-left: 0px;
  }
  .paddingL260{
    padding-left: 260px;
  }
  #container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;

    .nav-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 50px;
      right: 350px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.3);
      height: 47px;
      border: 1px solid #000;
      z-index: 100000;

      .bar-top {
        width: 100%;
        height: 13px;
        background-color: rgba(0, 0, 0, 0.8);
        text-align: right;
        font-size: 10px;
        line-height: 10px;
        color: #fff;

        i {
          position: relative;
          top: 1px;
          right: 2px;
          cursor: pointer;
        }
      }

      .bar-bottom {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        height: 34px;
        padding: 0 5px;

        .nav1 {
          padding-right: 5px;
          height: 24px;
        }

        .nav2 {
          height: 24px;
        }

        .nav3 {
          height: 24px;
          border-left: 1px solid #666;
          border-right: 1px solid #666;
        }

        .nav4 {
          height: 24px;
        }

        .nav1, .nav2, .nav3, .nav4 {
          img {
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin: 0 3px;
          }
        }
      }
    }

    .left-bar {
      width: 260px;
      height: 100%;
      padding: 10px;
      position: fixed;
      transition: left .3s;
      box-sizing: border-box;
      z-index: 3;
      font-size: 12px;
      background-color: #333;
      color: #b0b0b0;
      display: flex;
      flex-flow: column;

      .header {
        position: relative;

        .header-name {
          padding: 6px 0;
          margin: 0 20px 0 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          display: inline;
          float: left;
          max-width: 70%;
        }

        .message {
          float: left;
          margin-top: 6px;
          cursor: pointer;
        }

        .el-icon-close {
          font-size: 16px;
          color: #fff;
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 5px;
          transform: translateY(-50%);
        }
      }

      .page-name-box {
        border-bottom: 1px solid #505050;
        padding: 10px 0;

        img {
          width: 11px;
          height: 11px;
          cursor: pointer;
          margin-top: 1px;
          vertical-align: middle;
        }

        .page-name {
          width: 210px;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
          padding: 10px 0;
          margin: 0 0 0 10px;
          vertical-align: middle;
        }
      }

      .pages {
        height: 370px;
        margin: 80px 0;
        padding: 20px 0;
        font-size: 12px;
        color: #b0b0b0;
        background: #333;
        border-top: 1px solid #505050;
        font-weight: 400;
        overflow-x: hidden;
        overflow-y: auto;

        .el-submenu__title {
          padding: 0;
        }

        &::-webkit-scrollbar {
          width: 6px; //滚动条的宽度
        }

        &::-webkit-scrollbar-thumb {
          background-color: #000; //滚动条的颜色
          border-radius: 3px; //滚动条的边框倒角
        }
      }
    }

    .main-box{
      position: relative;
      width: 100%;
      height: 100%;
      transition: padding-left .3s;
      text-align: center;
      overflow: auto;
      background-color: rgb(196, 196, 196);
      .main{
        width: 1100px;
        height: 1700px;
        border: 2px solid #000;
        margin: 0 auto;
        background-color: #fff;
        .main-title{
          height: 30px;
          line-height: 30px;
          background-color: #999;
        }
        .login{
          height: 100px;
          line-height: 100px;
          border: 1px solid #666{
            left: 0px;
            right: 0px;
          };
          .logo{
            font-size: 40px;
          }
        }
      }
    }
  }
</style>
