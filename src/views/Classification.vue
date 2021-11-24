<template>
  <div class="classification">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">分类</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <div class="classification-title" style="display: flex">
      <van-search
        class="classification-ipt"
        v-model="value"
        placeholder="请输入搜索关键词"
      />
      <img
        class="classification-img"
        src="../assets/css/home-img/239扫描.png"
        alt=""
      />
    </div>

    <div class="side-navigation">
      <div>
        <div v-for="(item, index) in array" :key="index" class="navigation-bar">
          <div @click="sideBar(index)" class="navigation-text">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="navigation-img">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array: [
        { name: "床上四件套" },
        { name: "沙发" },
        { name: "抱枕" },
        { name: "茶具" },
        { name: "艺术插件" },
        { name: "音箱" },
        { name: "充电宝" },
        { name: "餐桌" },
        { name: "酒柜" },
        { name: "茶几" },
        { name: "玄关柜" },
        { name: "厨房" },
        { name: "充电宝" },
        { name: "餐桌" },
        { name: "酒柜" },
        { name: "茶几" },
        { name: "玄关柜" },
        { name: "厨房" },
      ],
      value: "",
    };
  },
  methods: {
    sideBar(index) {},
  },
};
</script>
<style lang="stylus" scoped>
* body {
  margin: 0;
  padding: 0 ;
}

.shouye
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  width: 100vw;
  background-color: black;
  z-index: 100;
  .nav-arrow img
    width: 23px;
    height: 40px;
    margin-left: 20px;

.nav-ation {
  width: 100px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
}

.nav-text {
  margin: 0 atuo;
  font-size: 17px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 24px;
}

.nav-line {
  width: 1px;
  color: white;
  margin-left: 15px;
  margin-right: 20px;
}

.nav-ation img {
  width: 25px;
  height: 25px;
}

// ------
.classification {
  height 100vh
  width 100vw
  .classification-title {
    display: flex;
    margin: 20px;
    padding-top: 66px;
    align-items: center;
    .classification-ipt {
      height: 39px;
      width: 298px;
      background: #F5F5F5;
      border:none;
    }
    .classification-img {
      height: 30px;
      width: 30px;
      margin-left: 10px;

    }
  }

  .side-navigation {
    display: flex;
    flex-direction:column;
    overflow: hidden;
    overflow-y: scroll;
    height :calc(100vh - 66px - 79px - 49px);
    width 90px;
      .navigation-bar {

        width: 88px;
        height: 50px;
        background:  #F5F5F5;

        .navigation-text {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 20px;
          text-align: center;
          line-height: 50px;


        }
      }
      .navigation-img {

      }

  }
}
</style>
