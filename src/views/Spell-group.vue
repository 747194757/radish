<template>
  <div class="spell-group">
    <!-- ----导航 -->
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
    <!-- --------- -->
    <div class="spell-brother">
      <img class="spell-img" src="../assets/css/datail-img/黑.png" alt="" />
    </div>
    <div class="spell-group-box">
      <div class="spell-ber">
        <div class="spell-big">
          <div class="spell-text">Sunny骄阳</div>
          <div class="spell-text">潮牌衣柜</div>
        </div>
        <div class="spell-three">
          <div class="spell-three-text">3人成团</div>
          <div class="spell-three-sisz">尺寸：2500*680*2160</div>
        </div>
        <div class="spell-money">
          <div class="money-num">￥8,888</div>
          <div class="money-text">
            <span class="money-text-red">建议团购价</span>
          </div>
        </div>
        <div class="low-price">￥13.574</div>
      </div>

      <div>
        <img
          class="spell-group-img"
          src="../assets/css/home-img/1635498182(1).png" alt=""/>
      </div>
    </div>

    <div class="spell-group-box2">
      <div class="spell-ber">
        <div class="spell-big">
          <div class="spell-text">Cargo卡戈尔</div>
          <div class="spell-text">集装箱衣柜</div>
        </div>
        <div class="spell-three">
          <div class="spell-three-text">2人成团</div>
          <div class="spell-three-sisz">尺寸：2500*680*2160</div>
        </div>
        <div class="spell-money">
          <div class="money-num">￥9,999</div>
          <div class="money-text">
            <span class="money-text-red">建议团购价</span>
          </div>
        </div>
        <div class="low-price">￥15.159</div>
      </div>

      <div>
        <img
          class="spell-group-img" src="../assets/css/home-img/1635498182(1).png" alt=""/>
      </div>
    </div>

    <div class="spell-group-box3">
      <div class="spell-ber">
        <div class="spell-big">
          <div class="spell-text">Stars Design群星衣柜</div>
          <div class="spell-text">群星衣柜</div>
        </div>
        <div class="spell-three">
          <div class="spell-three-text">3人成团</div>
          <div class="spell-three-sisz">尺寸：2500*680*2160</div>
        </div>
        <div class="spell-money">
          <div class="money-num">￥9,999</div>
          <div class="money-text">
            <span class="money-text-red">建议团购价</span>
          </div>
          <div>
            <img
              class="spell-group-img"
              src="../assets/css/home-img/1635498182(1).png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
* body {
  margin: 0;
  padding: 0;
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

// ======

.spell-brother {
  padding-top: 66px;
  position: relative;

  .spell-img {
    width 100vw;

  }
}
.spell-group-box {
  position:absolute;
  top: 130px;
  right: 24px;
  left: 64px;
  background-color #fff
  // background: linear-gradient(132deg, #8E8D8D 0%, #C7C7C7 47%, #E9E9E9 100%) #FFFFFF;
  .spell-ber {
    border: 1px solid #E0CFAE;
    margin: 4px;
    .spell-big {
      display: flex;
      margin: 31px 53px 2px 77px;
       .spell-text {
        margin-left: 5px;
        font-size: 15px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 21px;
      }
    }
  }

  .spell-three {
    display: flex;
    .spell-three-text {
      margin-left:78px;
      background: #7b7373;
      border-radius: 2px;
      opacity: 0.3493;

    }
    .spell-three-sisz {
      margin-left: 2px;
      align-items: center;
      font-size: 9px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color:  #9FA1A0;;
    }
  }
  .spell-money {
    display: flex;
    margin-left: 75px;
    margin-top: 38px;
    .money-num {
      font-size: 19px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #BC0017;
      line-height: 27px;
    }
    .money-text {
      margin-left: 2px;
      background: rgba(188, 0, 23, 0.11);
      border-radius: 4px;
      
      padding: 2px 4px;
     .money-text-red {
        font-size: 9px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #BC0017;

     }
    }
  }
  .low-price {
    margin-left: 75px;
    margin-bottom: 19px;
    font-size: 12px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #9FA1A0;
    line-height: 17px;
  }
}
.spell-group-img {
  width: 114px;
  height: 140px;
  position:absolute;
  top:16px;
  bottom: 16px;

  left: -35px;
}
.spell-group-box2 {
  position:absolute;
  top: 335px;
  right: 24px;
  left: 64px;
  .spell-ber {
    border: 1px solid #E0CFAE;
    margin: 4px;
    .spell-big {
      display: flex;
      margin: 31px 53px 2px 77px;
       .spell-text {
        margin-left: 5px;
        font-size: 15px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 21px;
      }
    }
  }

  .spell-three {
    display: flex;
    .spell-three-text {
      margin-left:78px;
      background: #7b7373;
      border-radius: 2px;
      opacity: 0.3493;

    }
    .spell-three-sisz {
      margin-left: 2px;
      align-items: center;
      font-size: 9px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color:  #9FA1A0;;
    }
  }
  .spell-money {
    display: flex;
    margin-left: 75px;
    margin-top: 38px;
    .money-num {
      font-size: 19px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #BC0017;
      line-height: 27px;
    }
    .money-text {
      margin-left: 2px;
      background: rgba(188, 0, 23, 1);
      border-radius: 4px;
      opacity: 0.11869999999999999;
      padding: 2px 4px;
     .money-text-red {
        font-size: 9px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #BC0017;

     }
    }
  }
  .low-price {
    margin-left: 75px;
    margin-bottom: 19px;
    font-size: 12px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #9FA1A0;
    line-height: 17px;
  }
}
.spell-group-img {
  width: 114px;
  height: 140px;
  position:absolute;
  top:16px;
  bottom: 16px;

  left: -35px;
}


.spell-group-box3 {
  position:absolute;
  top: 551px;
  right: 24px;
  left: 64px;
  .spell-ber {
    border: 1px solid #E0CFAE;
    margin: 4px;
    .spell-big {
      display: flex;
      margin: 31px 53px 2px 77px;
       .spell-text {
        margin-left: 5px;
        font-size: 15px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 21px;
      }
    }
  }

  .spell-three {
    display: flex;
    .spell-three-text {
      margin-left:78px;
      background: #7b7373;
      border-radius: 2px;
      opacity: 0.3493;

    }
    .spell-three-sisz {
      margin-left: 2px;
      align-items: center;
      font-size: 9px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color:  #9FA1A0;;
    }
  }
  .spell-money {
    display: flex;
    margin-left: 75px;
    margin-top: 38px;
    .money-num {
      font-size: 19px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #BC0017;
      line-height: 27px;
    }
    .money-text {
      margin-left: 2px;
      background: rgba(188, 0, 23, 1);
      border-radius: 4px;
      opacity: 0.11869999999999999;
      padding: 2px 4px;
     .money-text-red {
        font-size: 9px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #BC0017;

     }
    }
  }
  .low-price {
    margin-left: 75px;
    margin-bottom: 19px;
    font-size: 12px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #9FA1A0;
    line-height: 17px;
  }
}
.spell-group-img {
  width: 114px;
  height: 140px;
  position:absolute;
  top:16px;
  bottom: 16px;

  left: -35px;
}

</style>
