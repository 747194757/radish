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
      <div class="side">
        <div
          v-for="(item, index) in array"
          :key="index"
          :class="[index == arrayIndex ? 'sofa-select' : 'navigation-bar']"
          @click="clickArray(index)"
        >
          <div class="navigation-text">
            {{ item.name }}
          </div>
        </div>
      </div>

      <div class="right-box">
       <div class="right-son"  v-for="(item, index) of array[arrayIndex].sofa" :key="index">
          <img class="right-img" :src="item.rigImg" alt="" />
          <div class="right-text">{{item.rigText}}</div>
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
        {
          name: "床上四件套",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四件套",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "枕套",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "床单",
            },
          ],
        },
        { name: "沙发" },
        {
          name: "抱枕",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四人沙发",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "单人沙发",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "木质沙发",
            },
          ],
        },
        {
          name: "茶具",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "杯子",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "茶叶",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "茶宠",
            },
          ],
        },
        {
          name: "艺术插件",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "油画",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "插花",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "木雕",
            },
          ],
        },
        {
          name: "音箱",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "大音响",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "小音箱",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "木质音箱",
            },
          ],
        },
        {
          name: "充电宝",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "5000毫安",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "4500毫安",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "8900毫安",
            },
          ],
        },
        {
          name: "餐桌",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "白色餐桌",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "红色餐桌",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "木质餐桌",
            },
          ],
        },
        {
          name: "酒柜",
          sofa: [
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "四人沙发",
            },
            {
              rigImg: require("@/assets/css/datail-img/yello.png"),
              rigText: "单人沙发",
            },
            {
              rigImg: require("@/assets/css/datail-img/椅子.png"),
              rigText: "木质沙发",
            },
          ],
        },
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
      arrayIndex: 3,
      value: "",
    };
  },
  methods: {
    clickArray(index) {
      console.log(index);
      this.arrayIndex = index;
      console.log(this.array[index].sofa);
    },

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
    height :calc(100vh - 66px - 79px - 49px);
    .side {
      // min-width: 90px;//最小宽度 不允许变得更小
      // flex-shrink: 1;// 不允许变得更小
      width: 90px;
      height :calc(100vh - 66px - 79px - 49px);
      flex-direction:column;
      overflow: hidden;
      overflow-y: scroll;
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
      .sofa-select {
        width: 88px;
        height: 50px;
        background: #FFFFFF;
        .navigation-text {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #CEB68A;
          line-height: 20px;
          text-align: center;
          line-height: 50px;

        }
      }
    }
    .right-box {
        width: calc(100vw - 90px);
        display: flex;
        flex-wrap: wrap;
        background: #FFFFFF;
        align-content: flex-start
        text-align: center
        height :calc(100vh - 66px - 79px - 49px);
        overflow hidden
        overflow-y: scroll
        .right-son {
          width 50%
          height: 150px;
          .right-img{
            width: 55px;
            height: 68px;


          }
          .right-text{
            margin-top: 10px;
            font-size: 13px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #000000;
            line-height: 19px;
          }
        }
      }
  }
}
</style>
