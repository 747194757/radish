<template>
  <div class="Detail">
    <!-- 1.导航栏 -->
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

    <!-- 2.中间 -->
    <div  class="box-inside">
      <!-- ----- -->
      <div class="nearby-stores">
        <div class="black-triangle">
          <div class="near-brand">选择品牌</div>
          <div class="near-brand-small"></div>
        </div>
        <div class="black-triangle">
          <div class="near-brand">选择所在城市</div>
          <div class="near-brand-small"></div>
        </div>
      </div>

      <!-- 空盒子--------- -->
      <div class="null-box"></div>

      <!-- 底层地图--------- -->
      <div v-for="(item,index) of 13" :key="index" class="offline-housekeeper">
        <div class="flex-map">
          <div class="offline-map">
            <img
              src="../assets/css/home-img/bcfe55eab677b8340bc19e67ea9149d.png"
              alt=""
            />
          </div>

          <div class="map-text">
            <div class="offline-text">
              <h4>上海闵行吴中路</h4>
            </div>

            <div class="landmark">
              <img src="../assets/css/home-img/地图-地标.png" alt="" />
              <div offline-text1>上海闵行吴中路1235号</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <!-- 3.飘哥------ -->
    <div class="shadow-box">
      <div class="float-up">
        <div class="phnom-penh">
          <div class="flagship-store">
            <img src="../assets/css/home-img/旗舰店.png" alt="" />
          </div>

          <div class="flagship-text">
            <div class="flagship">
              <h4>上海吴中路旗舰店</h4>
            </div>

            <div class="clock-text">
              <img src="../assets/css/home-img/时钟-fill.png" alt="" />
              <span> 周一到周五07：00-20：00，周六和周日08：00-18：00 </span>
            </div>
            <div class="clock-text">
              <img src="../assets/css/home-img/位置.png" alt="" />
              <span> 上海闵行区吴中路1235号 </span>
            </div>
            <div class="clock-text">
              <img src="../assets/css/home-img/手机.png" alt="" />
              <span> 021-65882938 </span>
            </div>
          </div>

          <div class="map">门店地图</div>
          <div class="preferential">现在预约，还可以享受6.5折优惠</div>
          <div class="map-img">
            <img src="../assets/css/home-img/地图.png" alt="" />
          </div>
          <!-- ----- -->
           <div class="immediately">
            <h4>立即预约</h4>
          </div>

          <div class="circle">
            <img src="../assets/css/home-img/差.png" alt="">
          </div> 
          <!-- ----- -->
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



.shouye {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  width: 100vw;
  background-color: black;

  .nav-arrow img {
    width: 23px;
    height: 40px;
    margin-left: 20px;
  }
}

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

// --------
.box-inside {
  padding-top: 66px;
  height: 603px;
}

.null-box {
  height: 464px;
}

.nearby-stores {
  display: flex;
  height: 50px;
  align-items: center;

  .black-triangle {
    display: flex;
    flex: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.near-brand {
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #101010;
  line-height: 20px;
}

.near-brand-small {
  margin-left: 10px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
}

.offline-housekeeper {
  display: flex;
  height: 150px;
  margin: 25px 20px;
  background-color: rgba(0, 0, 0, 0.01);
  justify-content: space-between;
  align-items: center;

  .flex-map {
    display: flex;
  }
}

offline-map img {
  width: 140px;
  height: 140px;
  margin-left: 2px;
  margin-top: 2PX;
}

.offline-text h4 {
  margin-left: 15px;
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 21px;
}

.offline-text1 {
  font-size: 13px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #9FA1A0;
  line-height: 19px;
}

.landmark {
  display: flex;
  margin-top: 3px;
}

.landmark img {
  width: 15px;
  height: 15px;
  margin-left: 17px;
  margin-rightn: 2px;
}

.shadow-box {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  
  background: rgba(0, 0, 0, 0.32);
  
}
.float-up {
  margin: 120px 20px 51px 20px;
  background: #FFFFFF;
 
}



.phnom-penh {
  border: 1px solid #E0CFAE;
  padding: 11px 6px 30px 6px;
  margin: 4px;
  position: relative;
}

.flagship-store {
  margin: 0 auto;
  display: flex;
}

.flagship-store img {
  width: 100%;
  height: 100%;
  margin: 10px 6px 0 6px;
}

.flagship-text {
  margin-top: 10px;
}

.flagship h4 {
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 20px;
  margin-top: 2px;
  margin-left: 6px;
}

.clock-text img {
  width: 10px;
  height: 10px;
  margin-left: 9px;
}

.clock-text span {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9FA1A0;
  line-height: 17px;
}

.map {
  margin-top: 25px;
  margin-left: 6px;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 20px;
}

.preferential {
  margin-top: 5px;
  margin-left: 6px;
  margin-bottom: 5px;
  font-size: 11px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #CEB68A;
  line-height: 15px;
}

.map-img img {
  width: 100%;
  height: 100%;
}

// -----
.immediately {
  position: absolute;
  right: 7px;
  bottom: -16px;
  width: 103px;
  height: 37px;
  background: #CEB68A;
}
.immediately h4 {
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 7px;
  text-align: center;
}
.circle {
  position: absolute;
  right: -12px;
  top: -13px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background-color: #CEB68A;
}
.circle img {
  margin-left: 3px;
  margin-top: 3px;
  width: 18px;
  height: 18px;
}
</style>