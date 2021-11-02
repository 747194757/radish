<template>
  <div class="Detail">
   

    <!-- =====下总 -->
    <div class="box-inside">
      
      
      <!-- 下盒子 -->
      <div class="box-below">
        <div class="null-box"></div>

        <div class="offline-housekeeper">
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

      
    </div>

    <!-- 阿飘 -->
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
              <img src="../assets/css/home-img/时钟-fill.png" alt="">
              <span>
                周一到周五07：00-20：00，周六和周日08：00-18：00
              </span>
            </div>
            <div class="clock-text">
              <img src="../assets/css/home-img/位置.png" alt="">
              <span>
                上海闵行区吴中路1235号
              </span>
            </div>
            <div class="clock-text">
              <img src="../assets/css/home-img/手机.png" alt="">
              <span>
                021-65882938
              </span>
            </div>
          </div>

          <div class="map">门店地图</div>
          <div class="preferential">现在预约，还可以享受6.5折优惠</div>
          <div class="map-img">
            <img src="../assets/css/home-img/地图.png" alt="" />
          </div>

          <div class="immediately">
            <h4>立即预约</h4>
          </div>

          <div class="circle">
            <img src="../assets/css/home-img/差.png" alt="">
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detail",
  components: {},
};
</script>

<style lang="stylus" scoped>
body {
  position:fixed;
  top: 0;
  left: 0;
  margin: 0
  padding: 0
  width:100vw;
  height: 100vh;
  background: #c0c0c0;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.05);
}


// ----第二部分


// 下
.box-below {
  height: 650px;
  background: rgba(0, 0, 0, 0.32);
}




// 啊飘








.immediately {
  position: absolute;
  right: 10px;
  bottom: -10px;
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
  right: -6px;
  top: -10px;
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