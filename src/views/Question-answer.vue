<template>
  <div class="question-answer">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">问答</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <div class="question-black">
      <img
        class="question-img"
        src="../assets/css/datail-img/jintou.png"
        alt=""
      />
      <div class="question-introduce">
        <div class="question-ber">
          <div class="question-all">
            <img
              class="mess-img"
              src="../assets/css/datail-img/薅羊毛.png"
              alt=""
            />
            <div>
              <div class="question-text">夏天-HHCITY</div>
              <div class="bank">
                <div class="bank-capital">H</div>
                <div class="bank-text">银行设计师</div>
              </div>
            </div>

            <div class="question-num">2019-03-04</div>
          </div>

          <div class="question">
            你家的装修是怎么样的，这把椅子好看？有人能来回答下？非常谢谢啦，最好多写点。
          </div>

          <div class="question-five">共5个回答</div>
        </div>
        <div class="Let-me-answer">我来回答</div>
      </div>
      <!-- --- -->
    </div>

    <!-- -----2 -->
    <div class="advertising">
      <div class="advertising1">
        <img
          class="advertising1-img"
          src="../assets/css/datail-img/椅子.png"
          alt=""
        />
      </div>
      <div class="advertising2">
        <div class="silk">
          <div class="silk-road">丝绸椅</div>
          <div class="silk-1">|</div>
          <div class="silk-text">Silk Chair</div>
        </div>
        <div class="silk-num">￥1980.00~2126.00</div>
      </div>
    </div>

    <!-- ------3 -->
    <div class="answer">
      <div class="question-all">
        <img
          class="mess-img"
          src="../assets/css/datail-img/猫咪.png"
          alt=""
        />
        <div>
          <div class="question-text">小雨雨</div>
          <div class="bank">
            <div class="bank-capital">H</div>
            <div class="bank-text">银行设计师</div>
          </div>
        </div>

        <div class="question-num">2019-03-04</div>
      </div>
      <div class="question">
        纯裸露打扫卫生会接触的线，主要是过道那几米，家里扫除工具是手持吸尘器+方块抹布，蹭到的几率几乎为0。
      </div> 
    </div>
    <!-- -----横线 -->
    <div class="answer-ber"></div>


    <div class="answer">
      <div class="question-all">
        <img
          class="mess-img"
          src="../assets/css/datail-img/猫咪.png"
          alt=""
        />
        <div>
          <div class="question-text">小雨雨</div>
          <div class="bank">
            <div class="bank-capital">H</div>
            <div class="bank-text">银行设计师</div>
          </div>
        </div>

        <div class="question-num">2019-03-04</div>
      </div>
      <div class="question">
        纯裸露打扫卫生会接触的线，主要是过道那几米，家里扫除工具是手持吸尘器+方块抹布，蹭到的几率几乎为0。
      </div> 
    </div>
    <!-- -----横线 -->
    <div class="answer-ber"></div>

    <div class="answer">
      <div class="question-all">
        <img
          class="mess-img"
          src="../assets/css/datail-img/购物.png" alt=""/>
        <div>
          <div class="question-text">告白气球</div>
          <div class="bank">
            <div class="bank-capital">H</div>
            <div class="bank-text">银行设计师</div>
          </div>
        </div>

        <div class="question-num">2019-03-04</div>
      </div>
      <div class="question">
        纯裸露打扫卫生会接触的线，主要是过道那几米，家里扫除工具是手持吸尘器+方块抹布，蹭到的几率几乎为0。
      </div> 
    </div>
    <!-- -----横线 -->
    <div class="answer-ber"></div>
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
.question-answer
    height: 200vh
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

.question-black {
    // background:url("@/assets/css/datail-img/jintou.png");
    // background-image: url("../assets/css/datail-img/jintou.png")
    // background: url("@/assets/css/datail-img/jintou.png") no-replace;
    // background-image: url('../assets/css/datail-img/bj.png') no-replace;
    position: relative;
    padding-top: 66px;
    .question-img {
        position: absolute;
        top: 66px;
        left: 0px;
        width 100%;
        height: 200px
    }
    .question-introduce {
        position: relative;
        margin: 20px
        background-color #fff
        .Let-me-answer {
            position:absolute;
            right: 28px;
            bottom: 200px;
            padding: 0px 12px;
            background: #CEB68A;
            font-size: 11px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
            bottom: -14px
            line-height: 28px
        }
        .question-ber {
            margin: 4px;
            border: 1px solid #E0CFAE;
            .question-all {
                display: flex;
                padding-left: 20px;
                padding-right: 20px;
                .mess-img {
                    width: 49px;
                    margin-top: 20px;
                    margin-right:12px;
                }
                .question-text {
                    margin-top: 23px;
                    margin-right: 35px;
                    font-size: 16px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #000000;
                    line-height: 23px;
                }
                .question-num {
                    margin-top: 28px;
                    margin-right: 20px;
                    font-size: 10px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #ADAFAD;
                    line-height: 14px;
                }
            }
            .bank {
                display: flex;
                margin-left: 4px;
                .bank-capital {
                    margin-top: 5px;
                    margin-right: 5px;
                    padding: 0 8px;
                    background-color :rgba(0, 0, 0, 0.1);
                    border-radius: 1px;
                    color: #fff;

                }
                .bank-text {
                    margin-top:5px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.3);

                }
            }
            .question {
                margin: 20px 16px 0 16px;
                font-size: 13px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                line-height: 19px;
            }
            .question-five {
                margin-top: 28px ;
                margin-left: 16px;
                margin-bottom: 13px;
                font-size: 10px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #CEB68A;
                line-height: 14px;
            }

        }

    }

}
.advertising {
  margin: 58px 20px 49px 20px;
  background: #F5F5F5;
  display: flex;
  justify-content: space-between;
    .advertising1 {
       margin-left: 20px;
       margin-top: -25px;
        .advertising1-img {

          width 109px;
        }

    }
    .advertising2 {
      margin-right: 20px;

      .silk {
        display: flex;
        margin: 16px 34px 0 51px;
        .silk-road {

            font-size: 13px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #000000;
            line-height: 21px;
        }
        .silk-1 {

          margin: 0 8px;
        }
        .silk-text {

          font-size: 13px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 21px
        }
      }
      .silk-num {
        margin: 6px 25px 14px 49px;
        font-size: 15px;
        font-family: DINAlternate-Bold, DINAlternate;
        font-weight: bold;
        color: #CEB68A;
        line-height: 21px;
      }
    }
}
.answer {
  margin: 35px 20px 20px 20px;
  .question-all {
     display: flex;
      padding-left: 20px;
      padding-right: 20px;
      .mess-img {
        width: 49px;
        margin-top: 20px;
        margin-right:12px;
      }
      .question-text {
        margin-top: 23px;
        margin-right: 35px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 23px;
      }
      .question-num {
        margin-top: 28px;
        margin-right: 20px;
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ADAFAD;
        line-height: 14px;
      }
  }
  .bank {
    display: flex;
    margin-left: 4px;
    .bank-capital {
        margin-top: 5px;
        margin-right: 5px;
        padding: 0 8px;
        background-color :rgba(0, 0, 0, 0.1);
        border-radius: 1px;
        color: #fff;

    }
    .bank-text {
        margin-top:5px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.3);

    }
  } 
.question {
  margin: 20px 16px 0 16px;
  font-size: 13px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 19px;
  }
}
.answer-ber {
  width 100%;
  height 1px;
  background-color #f1f1f1;
  margin-top: 20px
} 

</style>
