<template>
  <div class="new-cart">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">附近门店</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>
    <div class="near-navigation">
      <div class="near-brand">
        <div class="brand">选择品牌</div>
        <div class="three"></div>
      </div>

      <div class="near-city">
        <div class="city">选择所在城市</div>
        <div class="three"></div>
      </div>
    </div>

    <div v-for="(item, index) in array" :key="index" class="Each-shop">
      <img class="Each-map" :src="item.EachImg" alt="" />
      <div class="Each-all">
        <div class="Each-text">{{ item.EachText }}</div>
        <div class="Each-text1">{{ item.EachRoute }}</div>
        <div class="Each-text2">
          <img class="Each-map1" :src="item.EachMap" alt="" />
          <div class="Each-text3">{{ item.EachDistance }}</div>
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
          EachImg: require("@/assets/css/home-img/bcfe55eab677b8340bc19e67ea9149d.png"),
          EachText: "上海吴中路旗舰店",
          EachRoute: "上海闵行吴中路1235号",
          EachMap: require("@/assets/css/home-img/位置.png"),
          EachDistance: "1.5km",
        },
        {
          EachImg: require("@/assets/css/home-img/777.png"),
          EachText: "上海体验中心",
          EachRoute: "上海市徐汇区凯旋路30...",
          EachMap: require("@/assets/css/home-img/位置.png"),
          EachDistance: "1.6km",
        },
        {
          EachImg: require("@/assets/css/home-img/888.png"),
          EachText: "上海沪南店",
          EachRoute: "上海市浦东新区临御路...",
          EachMap: require("@/assets/css/home-img/位置.png"),
          EachDistance: "3.5km",
        },
        {
          EachImg: require("@/assets/css/home-img/bcfe55eab677b8340bc19e67ea9149d.png"),
          EachText: "上海吴中路旗舰店",
          EachRoute: "上海闵行吴中路1235号",
          EachMap: require("@/assets/css/home-img/位置.png"),
          EachDistance: "1.5km",
        },
      ],
    };
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
.near-navigation {
    padding-top: 66px;
    height: 50px;
    background: #FFFFFF;
    box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.05);
    display: flex;
    justify-content: space-around;
    .near-brand {
        display: flex;
        justify-content: space-around;
        justify-content: center;
        align-items: center;
        .brand {
            font-size: 14px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #101010;
            line-height: 20px;
        }
        .three {
            margin-left:5px;
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 5px solid black;
        }

    }
    .near-city {
        display: flex;

        justify-content: center;
        align-items: center;
        .city {
            font-size: 14px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #101010;
            line-height: 20px;
        }
        .three {
            margin-left:5px;
            width: 0;
            height: 0;
            border-left: 3px solid transparent;
            border-right: 3px solid transparent;
            border-top: 5px solid black;
        }
    }
}
.Each-shop {
    display: flex;
    margin: 20px 20px 20px 65px;
    height: 130px;
    background: #F5F5F5;
    align-items: center;
    .Each-map {
        width: 153px;
        height: 98px;
        margin-left: -20px;
        margin-top: 16px;
        margin-bottom: 16px;

    }
    .Each-all {
        margin-left: 15px;
        .Each-text {
            font-size: 15px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
            line-height: 21px;
        }
        .Each-text1 {
            margin-top: 2px;
            font-size: 11px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9FA1A0;
            line-height: 15px;
        }
        .Each-text2 {
            display: flex;
            .Each-map1 {
                margin-left 16px;
                margin-top: 12px;
                width: 10px;
                height: 13px;
            }
            .Each-text3 {
                margin-left: 1px;
                margin-top: 10px;
                font-size: 11px;
                font-family: PingFang-SC-Bold, PingFang-SC;
                font-weight: bold;
                color: #9FA1A0;
                line-height: 15px;
            }
        }

    }
}
</style>
