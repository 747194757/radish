<template>
  <div class="shopping-cart">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">拼团</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <div class="cart-total">购物车共3件商品</div>

    <div v-for="(item, index) in array" :key="index">
      <div v-if="item.type == 1" class="shopping-box">
        <img
          class="shopping-right"
          :src="
            item.check
              ? require('@/assets/css/datail-img/控件选中.png')
              : require('@/assets/css/datail-img/选中.png')
          "
          @click="checkAction(item)"
        />

        <div class="shopping-introduce">
          <img class="shopping-sofa" :src="item.sofaImg" alt="" />
          <div class="shopping-cargo">
            <div class="cargo-text">{{ item.cargoName }}</div>
            <div class="cargo-text2">{{ item.cargoSizi }}</div>
            <div class="cargo-text3">
              <div class="cargo-money">{{ item.cargoMoney }}</div>
              <div class="cargo-choose">
                <div @click="subtraction(item, index)" class="cargo-add">-</div>
                <div class="cargo-digital">{{ item.num }}</div>
                <div @click="cargoAdd(item)" class="cargo-reduction">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="item.type == 2">
        <div class="official-recommended">
          <img
            class="official-right"
            :src="
              item.check
                ? require('@/assets/css/datail-img/控件选中.png')
                : require('@/assets/css/datail-img/选中.png')
            "
            @click="checkAction(item)"
          />

          <div class="official-text">官方推荐组合</div>
          <div class="official-text2">￥{{ item.cargoMoney }}</div>
          <div class="official-text3">{{ item.startMoney }}</div>
          <div class="official-text4"></div>
        </div>

        <div
          v-for="(item, index) in item.arr"
          :key="index"
          class="shopping-combination"
        >
          <img class="combination-sofa" :src="item.combinationImg" alt="" />
          <div class="combination-all">
            <div class="combination-bench">{{ item.combinationName }}</div>
            <div class="combination-size">{{ item.combinationSize }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="settlement">
      <div
        :style="{ background: isAllCheck() ? '#000' : 'unset' }"
        class="settlement-bth"
      ></div>
      <div @click="allcheck" class="settlement-all">全选</div>
      <div class="settlement-allin">
        合计
        <span class="allin">￥{{ getAllmoney() }}</span>
      </div>
      <div class="settlement-invoicing">
        <div class="invoicing">去结算</div>
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
          sofaImg: "",
          cargoName: "",
          cargoSizi: "",
          cargoMoney: "11",
          type: "2", //有组合
          startMoney: 1222000,
          arr: [
            {
              combinationImg:
                "https://img1.baidu.com/it/u=2165466046,2582405021&fm=26&fmt=auto",
              combinationName: "便携高级单人板凳",
              combinationSize: "深灰色 2500*680*2160",
            },
            {
              combinationImg:
                "https://img1.baidu.com/it/u=3132680261,1979436975&fm=224&fmt=auto&gp=0.jpg",
              combinationName: "便携高级单人板凳",
              combinationSize: "深灰色 2500*680*2160",
            },
          ],
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          cargoName: "Cargo卡戈尔 真皮沙发",
          cargoSizi: "深灰色 2500*680*2160",
          cargoMoney: "8888",
          type: "1", //没有组合的样子
          arr: [],
        },
        {
          sofaImg: "",
          cargoName: "",
          cargoSizi: "",
          cargoMoney: "222",
          type: "2", //有组合
          startMoney: 1222000,
          arr: [
            {
              combinationImg:
                "https://img1.baidu.com/it/u=2165466046,2582405021&fm=26&fmt=auto",
              combinationName: "便携高级单人板凳",
              combinationSize: "深灰色 2500*680*2160",
            },
            {
              combinationImg:
                "https://img1.baidu.com/it/u=3132680261,1979436975&fm=224&fmt=auto&gp=0.jpg",
              combinationName: "便携高级单人板凳",
              combinationSize: "深灰色 2500*680*2160",
            },
            {
              combinationImg:
                "https://img1.baidu.com/it/u=3132680261,1979436975&fm=224&fmt=auto&gp=0.jpg",
              combinationName: "便携高级单人板凳",
              combinationSize: "深灰色 2500*680*2160",
            },
          ],
        },
        {
          sofaImg:
            "http://t13.baidu.com/it/u=3459466450,4108031046&fm=224&app=112&f=JPEG?w=500&h=500&s=1961E9154736719A4BC0D4E503004035",
          cargoName: "Cargo卡戈尔 真皮沙发",
          cargoSizi: "深灰色 2500*680*2160",
          cargoMoney: "8888",
          type: "1", //没有组合的样子
          arr: [],
        },
        {
          sofaImg:
            "http://t13.baidu.com/it/u=3459466450,4108031046&fm=224&app=112&f=JPEG?w=500&h=500&s=1961E9154736719A4BC0D4E503004035",
          cargoName: "Cargo卡戈尔 真皮沙发",
          cargoSizi: "深灰色 2500*680*2160",
          cargoMoney: "9999",
          type: "1", //没有组合的样子
          arr: [],
        },
      ],

      show: false,
      cargo: 1,
    };
  },
  beforeCreate() {},
  created() {
    for (let index = 0; index < this.array.length; index++) {
      const element = this.array[index];
      element.num = 1;
      element.check = false;
      for (let index1 = 0; index1 < element.arr.length; index1++) {
        const element1 = element.arr[index1];
        element1.num = 2;
      }
    }
  },
  methods: {
    isAllCheck() {
      var isall = true;
      this.array.forEach((element) => {
        if (element.check == false) {
          isall = false;
        }
      });
      return isall;
    },
    allcheck() {
      var aa;
      if (this.isAllCheck()) {
        aa = false;
      } else {
        aa = true;
      }

      this.array.forEach((element) => {
        element.check = aa;
      });
      this.$forceUpdate(); // 当前页面强制刷新
    },
    checkAction(val) {
      val.check = !val.check;
      this.$forceUpdate(); // 当前页面强制刷新
    },
    imgBtn() {
      this.show = !this.show;
    },
    cargoAdd(item) {
      item.num++;

      this.$forceUpdate(); // 当前页面强制刷新
      // this.array.splice()
    },
    subtraction(item, index) {
      item.num--;
      if (item.num == 0) {
        this.array.splice(index, 1);
      }
      this.$forceUpdate();
    },
    getAllmoney() {
      var allmoeny = 0;
      this.array.forEach((element, index) => {
        if (element.check) {
          allmoeny = allmoeny + element.num * element.cargoMoney;
        }
      });
      return allmoeny;
    },
  },
  computed: {},
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
// -----
.shopping-cart {
  padding: 76px 20px 0 20px;
  .cart-total {
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #9FA1A0;
    line-height: 20px;

  }
  .shopping-box {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .shopping-right {
      height 17px
      width 17px

    }
    .shopping-introduce {
        display: flex;
        height: 118px
        background: #F5F5F5;
        margin-left: 26px;
        align-items: center;
        width 100%
        .shopping-sofa {
            width: 74px;
            height: 66px;
            margin-left: -18px;
        }
        .shopping-cargo {
            margin-left: 31px
          .cargo-text {
            margin-top: 15px;
            font-size: 15px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
            line-height: 21px;
          }
          .cargo-text2 {
            margin-top: 6px;
            font-size: 11px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9FA1A0;
            line-height: 15px;
          }
          .cargo-text3 {
            display: flex;

            margin-bottom: 15px
            .cargo-money {
              margin-top: 19px;
              margin-right: 35px;
              font-size: 19px;
              font-family: PingFang-SC-Bold, PingFang-SC;
              font-weight: bold;
              color: #BC0017;
              line-height: 27px;
            }
            .cargo-choose {
              display: flex;
              margin-right :15px;
              margin-top: 22px;
              padding: 3px 7px;
              opacity: 0.6;
              border: 1px solid #A6A6A6;
              .cargo-digital {
                margin-left 20px
                margin-right:  20px;
              }
            }
          }
        }
    }
  }

}
.official-recommended {
  display: flex;
  margin-left: 20px;
  margin-top: 38px;
  align-items: center;
  .official-right {
    width: 17px;
    height: 17px;
  }
  .official-text {
     margin-left: 20px;
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 21px;
  }
  .official-text2 {
    margin-left: 10px;
    font-size: 19px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #BC0017;
    line-height: 27px;
  }
  .official-text3 {
    margin-left 4px;
    font-size: 10px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #9FA1A0;
    line-height: 14px;
    text-decoration: line-through;
  }

}
.shopping-combination {
  height 94px
  background: #F5F5F5;
  display: flex;
  margin: 20px 20px 20px 81px;
  align-items: center;
 justify-content: center;
 justify-content: space-around
  .combination-sofa {
    margin-left: -72px;

    height: 68px;
  }
  .combination-all {


    .combination-bench {
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 21px;
    }
    .combination-size {
      margin-top: 6px;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9FA1A0;
      line-height: 15px;
    }
  }

}
.settlement {
  height 49px;
  width: 100%
  position:fixed;
  left: 0;
  bottom: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 2px 19px 0px rgba(87,98,104,0.16);
  .settlement-bth {
    margin-left: 20px;
    width: 17px;
    height: 17px;
    border: 1px solid #000000;

  }
  .settlement-all {
    margin-left: 12px;
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 19px;
  }
  .settlement-allin {
    margin-left: 60px;
    margin-right  15px
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #9FA1A0;
    line-height: 19px;
    .allin {
      font-size: 19px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #BC0017;
      line-height: 27px;
    }
  }
  .settlement-invoicing {

    padding: 14px 38px;
    background: #000000;
    .invoicing {
      text-align: center
      font-size: 15px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 21px;
    }
  }
}
</style>
