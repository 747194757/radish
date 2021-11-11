<template>
  <div class="infrmation">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">我的</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <!-- -------- -->
    <div class="my-bgc">
      <img src="../assets/css/datail-img//black.png" alt="" />
      <div class="my-message">
        <div class="my-message-ber">
          <div class="use-message">
            <div class="use-fish">
              <span>渴死的鱼</span>
              <div class="use">
                <div class="use-logo">H</div>
                <div class="use-introduce">金卡设计师</div>
              </div>
            </div>
            <div class="use-img">
              <img src="../assets/css/datail-img/头像 男孩.png" alt="" />
            </div>
          </div>
          <div class="use-message-a">
            <div class="use-message-aa">
              <div class="integral">
                <div class="integral-int">300</div>
                <div class="integral-in">积分</div>
              </div>
              <div class="coupons">
                <div class="coupons-cc">3</div>
                <div class="coupons-cou">优惠券</div>
              </div>
            </div>

            <div class="sign-in">
              <div class="sign">+ 签到</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     <div class="positioning">
        <div class="name-authentication">
          实名认证 <span>三大优势立享</span>
        </div>
        <div class="immediately">
          <div class="immediately-text">立即申请</div>
        </div>
      </div>
    <!-- ------ -->
    <div class="white-box">
      <div class="big-box">
        <div class="text-order">
          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/我的订单.png" alt="" />
            </div>
            <div class="order-text">我的订单</div>
          </div>

          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/我的拼团.png" alt="" />
            </div>
            <div class="order-text">我的拼团</div>
          </div>
          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/xinxi.png" alt="" />
            </div>
            <div class="order-text">我的回答</div>
          </div>
        </div>
        <div class="text-order">
          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/我的预约.png" alt="" />
            </div>
            <div class="order-text">我的预约</div>
          </div>

          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/我的收藏.png" alt="" />
            </div>
            <div class="order-text">我的收藏</div>
          </div>
          <div class="text-order-all">
            <div class="order-img">
              <img src="../assets/css/datail-img/我的客服.png" alt="" />
            </div>
            <div class="order-text">我的客服</div>
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

// ------
.my-bgc {

    height  :calc(100vh / 2);
    position: relative;
}
.my-bgc img {
    width 100%
    height 100%;
    top 0px;
    left: 0px;
}
.my-message {
    position: absolute;
    top: 128px;
    left:20px;
    right: 20px;
    background: #f5deb3;
}
.my-message-ber {
    height: 276px;
    border: 1px solid #B49F77;
    margin: 4px;
}
.use-message {
    display: flex;
    margin: 40px 24px;

}
.use-message-a {
  display: flex;
  margin: 0px 24px;
 justify-content: space-between;

}
.use-fish {
   flex: 1
   justify-content:  center;
   align-items: center;
}
.use-fish span {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #534220;
    line-height: 28px;
}
.use-logo {
    background-color #ffcc22;
    padding: 2px 8px;
    margin-top:8px;
    margin-right: 5px;
    color: #fff;
    text-shadow: 1px 2px 1px;

}
.use {
    display: flex;

}
.use-introduce {
    margin-top: 8px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #534220;
    line-height: 17px;
}
.use-message-aa {
   display: flex;
}
.coupons {
    flex: 1;
}
.integral {
    flex:1;
    margin-right: 40px;
}
.integral-int{
    font-size: 23px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #534220;
    line-height: 26px;
}
.integral-in {
    margin-top: 9px;

    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #534220;
    line-height: 17px;
}
.coupons-cc {
    font-size: 23px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #534220;
    line-height: 26px;
}
.coupons-cou {
    margin-top: 9px
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #534220;
    line-height: 17px;
}
.sign-in {
   width: 63px;
   height: 25px;

    background-color #fff;
    padding: 3px 8px;
    border-radius: 2px;

}
.sign {

    font-size: 11px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 25px;
    text-align:center;

}



// ----
.white-box {
    height : calc(100vh / 2)
    background-color #fff;
  margin-top: 50px;
}
.big-box {
  margin: 44px 48px;

}
.text-order {
  display:flex;
  margin-bottom: 60px
}
.text-order-all {
 flex: 1
}
.order-img {
  text-align: center;
}
.order-img img {
  width 21px
  height 21px
  
}
.order-text {
  margin-top 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 17px;
  text-align: center;
}
.positioning {
  
  top: calc(100vh / 2)
 
  display: flex;
  align-items: center;
 margin-left: 40px;
 margin-right: 40px;
 margin-top: 10px;
  background: linear-gradient(140deg, #000000 0%, #414243 100%);
  border-radius: 40px;
  justify-content: space-between;
}
.name-authentication {
  margin-left 18px;
 
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  line-height: 17px;
}
.name-authentication span {
  margin-left: 5px;
}
.immediately {
  background-color #fff
  border-radius: 14px;
  opacity: 0.2;
  
  margin: 9px 17px 9px 12px;
}
.immediately-text {
  padding: 2px 12px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color:#242117;
  line-height: 26px;
  text-align: center;
}
</style>
