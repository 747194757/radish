<template>
  <div class="goods-details">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">商品详情页</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <div class="navigation-bar">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) of navImg" :key="index">
          {{ item.navImage }}
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="introduction">
      <div class="introduction-text">贝拉 高级真皮装饰沙发</div>
      <div class="spell-group">3人团</div>
    </div>
    <div class="group-price">
      <div class="price-text">拼团价</div>
      <div class="price">￥22850</div>
    </div>
    <div class="original-price">原价：￥15159</div>

    <div class="countdown-all">
      <div class="countdown">
        <div class="countdown-text">距结束还剩</div>

        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        
      </div>
      <div class="arrow-all">
        <div class="activity-rules"></div>
        <div class="rules">活动规则</div>
        <div class="arrow"></div>
      </div>
    </div>

    <div class="horizontal-line"></div>

    <div class="the-text">以下小伙伴正在发起拼团，您可以直接参加：</div>

    <div v-for="(item, index) of team" :key="index">
      <div class="team-box">
        <img class="te-img" :src="item.teamImg" alt="" />
        <div class="goto-bulk">
          <div class="summer">{{ item.name }}</div>
          <div class="summer-text">{{ item.worse }}</div>
        </div>
        <div class="go-bulk">{{ item.goto }}</div>
      </div>
      <div class="dotted-line"></div>
    </div>
    <div :style="{'border-bottom': index == team.length - 1 ? 'unset': '1px solid #f5f5f5' }" class="horizontal-line"></div>

    <!-- <div :style="{'border-bottom': index == team.length - 1 ? 'unset': '1px solid #f5f5f5' }" class="horizontal-line"></div> -->

    <div class="product-parameters">
      <div class="product">
        <div class="parameters-text">商品详情</div>
        <div class="parameters-details">产品参数</div>
      </div>
      <div class="box-border">
        <div
        class="commodity-all"
        v-for="(item, index) of commodityArray"
        :key="index"
      >
        <div class="commodity-form">
          <div class="commodity-left">{{ item.nameArr }}</div>

          <div class="commodity-right">{{ item.parameter }}</div>
        </div>
        <div class="horizontal"></div>
      </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navImg: [
        {
          navImage:
            "https://img2.baidu.com/it/u=24465382,829777702&fm=26&fmt=auto",
        },
        { navImage: require("@/assets/css/datail-img/椅子.png") },
        { navImage: require("@/assets/css/datail-img/bj.png") },
        { navImage: require("@/assets/css/datail-img/活动.png") },
      ],
      team: [
        {
          teamImg: require("@/assets/css/datail-img/猫咪.png"),
          name: "夏天",
          worse: "还差2人成团，剩余24：23：27",
          goto: "去凑团",
        },
        {
          teamImg: require("@/assets/css/datail-img/购物.png"),
          name: "冬虫夏草",
          worse: "还差1人成团，剩余24：23：27",
          goto: "去凑团",
        },
        {
          teamImg: require("@/assets/css/datail-img/薅羊毛.png"),
          name: "BABY",
          worse: "还差1人成团，剩余24：23：27",
          goto: "去凑团",
        },
      ],
      commodityArray: [
        {
          nameArr: "尺寸",
          parameter: "73cm*74cm*87cm",
        },
        {
          nameArr: "重量",
          parameter: "2348g",
        },
        {
          nameArr: "材料",
          parameter:
            "优质牛皮，厚度1.3到1.5毫米不等，有相 当柔软的手感和半哑光外观。集天然柔软 磨、不易变色等优点于一体*74cm*87cm",
        },
        {
          nameArr: "涂料",
          parameter: "优质牛皮、厚度从1.3到1.5毫米不等",
        },
        {
          nameArr: "产地",
          parameter: "德国",
        },
        {
          nameArr: "配送方式",
          parameter: "送货上门",
        },
        {
          nameArr: "安装情况",
          parameter: "2个人30分钟",
        },
        {
          nameArr: "包装方式",
          parameter: "拆包分装",
        },
        {
          nameArr: "日常维护",
          parameter: "建议干洗",
        },
        {
          nameArr: "包装方式",
          parameter: "拆包分装",
        },
        {
          nameArr: "污渍处理",
          parameter: "用湿毛巾轻轻擦拭表皮",
        },
        {
          nameArr: "特别提示",
          parameter: "安装时，请注意不要磕碰到其他家具，避 免造成商品损害",
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
// .goods-details {
//   height: 2000px
// }
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
.navigation-bar {
  margin-top: 66px;

  // background: url("@/assets/css/datail-img/bj.png") no-replace;


  // background-image: url('@/assets/css/datail-img/黑.png') no-replace;
  background-color: red; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#000000, #F0F8FF);
  width 100%
  height: 270px;
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    height: 189px;
    border: 1px solid #E0CFAE;
    margin: 66px;
  }
}
.introduction {
  display:flex;
  margin-top: 25px;
  margin-left 20px
  .introduction-text {
    font-size: 19px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #000000;
    line-height: 23px;
  }
  .spell-group {

    margin-left:15px;
    background: #A6A6A6;
    border-radius: 2px;
    padding: 5px 8px;
    font-size: 9px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 12px;
  }
}
.group-price {
  display:flex;
  margin-top: 12px;
  margin-left 20px
  .price-text {
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #808080;
    line-height: 19px;
  }
  .price {
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: 	#BC0017;;
    line-height: 19px;
  }
}
.original-price {
  margin-top: 6px;
  margin-left: 20px;
  text-decoration: line-through;
  font-size: 10px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #9FA1A0;
  line-height: 14px;
}
.countdown-all {
  margin-top: 12px;
  display: flex;
  .countdown {
    background: #BC0017;
    background-color: rgba(188, 0, 23, 0.1);
    display: flex;
    align-items: center;
    width 182px;
    .countdown-text {
      padding: 7px 7px 7px 13px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #BC0017;
      line-height: 17px;
    }

    .colon {
      display: inline-block;
      margin: 0 4px;
      color: #ee0a24;
    }
    .block {
      display: inline-block;
      width: 22px;
      color: #fff;
      font-size: 12px;
      text-align: center;
      background-color: #ee0a24;
    }


  }
    .arrow-all {
      display: flex;
      .activity-rules {
        margin-left: 100px;
        margin-right: 9px;
        width: 1px;
        height: 21px;
        background: #CEB68A;
      }
      .rules {
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #CEB68A;
        line-height: 17px;
      }
      .arrow {

      }
  }

}
.horizontal-line {
    margin-top: 25px;
    width: 100%;
    height: 6px;
    background: #F5F5F5;
  }
  .the-text {
    margin-top: 25px;
    margin-left 20px;
    font-size: 15px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 21px;
  }
  .team-box {
    display: flex;
    align-items: center
    margin-top: 25px;
    margin-left 20px;
    margin-right: 20px;

    .te-img {
      width: 50px;
      height: 50px;
    }
    .goto-bulk {
      margin-left: 11px;
      .summer {
        margin-bottom: 6px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 23px;
      }
      .summer-text {
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #9FA1A0;
        line-height: 17px;
      }
    }
    .go-bulk {
      background: linear-gradient(137deg, #534F50 0%, #474041 100%);
      font-size: 13px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 19px;
      padding: 5px 10px;
      margin-left: 40px

    }

  }
  .dotted-line {
    margin-left:82px;
    margin-top: 32px;
    width  calc(100vw - 82px);
    height: 1px;
    background: #F5F5F5;
  }
  
.product-parameters {
  padding: 27px 20px 83px 20px;
  .box-border {
    border: 1px solid #DADADA;
  }
  .product {
    display: flex;
    justify-content: center;
    .parameters-text {
      margin-right: 59px;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #9FA1A0;
      line-height: 23px;
    }
    .parameters-details {
      font-size: 19px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 27px;
    }

  }
  .commodity-all {
    
    .commodity-form {
      display: flex;
      .commodity-left {
        background: #D8D8D8;
        background-color: rgba(216, 216, 216, 0.07);
        width 78px
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #9FA1A0;
        line-height: 19px;
        text-align:center;
        min-width: 90px;
        border-right: 1px solid #F5F5F5;
        padding-top: 16px;
      }
      .commodity-right {
        width: calc(100vw - 40px - 78px);
        font-size: 13px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #000000;
        line-height: 19px;
        padding: 16px 13px
        
      }
    }
    .horizontal {
      width: 100%;
      height: 1px;
      background: #F5F5F5;
    }
  }


}
</style>
