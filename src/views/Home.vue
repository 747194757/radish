<template>
  <div class="home">
    <!-- --------------------->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>
    <!-- ------------------- -->

    <div class="activity-hot">
      <div class="activity-1">拼团活动</div>
      <div class="activity-2">查看全部</div>
    </div>

    <div class="gray-box">
      <div class="activity-text">
        <h4>Sunny骄阳 潮牌衣柜</h4>
        <div class="activity-three">三人成团</div>
        <div class="activity-money">￥ 8888</div>
      </div>

      <div class="gray-p">
        <img src="../assets/css/home-img/1635498182(1).png" alt="" />
      </div>
    </div>

    <!-- ------------ -->

    <div class="activity-hot1">
      <div class="activity-1">拼团活动</div>
      <div class="activity-2">查看全部</div>
    </div>

    <div class="gray-box">
      <div class="activity-text">
        <h4>Bella/贝拉</h4>
        <div class="activity-three">三人成团</div>
        <div class="activity-money">￥ 22.850</div>
      </div>

      <div class="gray-p2">
        <img
          src="../assets/css/home-img/1d2cf40a88262837d6179c814157324.png"
          alt=""
        />
      </div>
    </div>
    <!-- ----------- -->
    <div class="goods">
      <div class="goods-picture">
        <img
          src="../assets/css/home-img/e25416d766d88de48d997245c2c809d.png"
          alt=""
        />
        <div class="activity-three1">Bella/贝拉</div>
        <div class="activity-money1">￥ 22.850</div>
      </div>

      <div class="goods-picture2">
        <img
          src="../assets/css/home-img/2e6d1e783fd39f35650d7bac8405374.png"
          alt=""
        />
        <div class="activity-three1">Bella/贝拉</div>
        <div class="activity-money1">￥ 22.850</div>
      </div>

      <div class="goods-picture3">
        <img
          src="../assets/css/home-img/47731c2b6b278021096c06d3bdec2c1.png"
          alt=""
        />
        <div class="activity-three1">Bella/贝拉</div>
        <div class="activity-money1">￥ 22.850</div>
      </div>
    </div>

    <div class="offline"><h4>线下门店</h4></div>
    <div class="offline-look">
      即日起线上预约线下门店参观，到店即可获得精美随手礼一份。
    </div>

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
            <h4>门店1</h4>
          </div>

          <div class="landmark">
            <img src="../assets/css/home-img/地图-地标.png" alt="" />
            <div offline-text1>上海市黄浦区</div>
          </div>
        </div>
      </div>

      <div class="to-participate">
        <img
          src="../assets/css/home-img/aa0c9732d0872c9a530c5cdf4ff4156.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="stylus" scoped>
@import '../assets/css/base.css';

.shouye {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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

.activity-hot {
  display: flex;
  justify-content: space-between;
  height: 44px;
  align-items: center;
  padding-top: 66px;
}

.activity-hot1 {
  display: flex;
  justify-content: space-between;
  height: 44px;
  align-items: center;
  margin-top: 50px;
}

.activity-1 {
  margin-left: 20px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 16px;
}

.activity-1 .a {
  margin-right: 20px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 16px;
}

.activity-1 .b {
  margin-right: 20px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #ceb68a;
  line-height: 12px;
  text-align: center;
}

.activity-2 {
  margin-right: 20px;
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #ceb68a;
  line-height: 12px;
  text-align: center;
}

.activity h4 {
  margin-left: 20px;
  margin-top: 38px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 16px;
}

.gray-box {
  position: relative;
  height: 115px;
  background-color: #f5f5f5;
  margin: 25px 20px 0 20px;
}

.activity-text h4 {
  display: inline-block;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 16px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #000000;
  line-height: 16px;
}

.offline-housekeeper {
  display: flex;
  height: 150px;
  margin: 25px 20px;
  background: #F5F5F5;
  justify-content: space-between;
  align-items: center;

  .flex-map {
    display: flex;
  }
}

.offline h4 {
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 23px;
  margin-left: 20px;
  margin-top: 50px;
}

.offline-look {
  font-size: 11px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9FA1A0;
  line-height: 15px;
  margin-left: 20px;
  margin-top: 10px;
}

.activity-three {
  margin-left: 20px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 12px;
}

.offline-map img {
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

.activity-three1 {
  font-size: 13px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #9FA1A0;
  line-height: 19px;
}

.activity-money {
  margin-top: 15px;
  margin-left: 20px;
  font-size: 12px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #bc0017;
  line-height: 12px;
}

.activity-money1 {
  font-size: 16px;
  font-family: PingFang-SC-Bold, PingFang-SC;
  font-weight: bold;
  color: #000000;
  line-height: 23px;
}

.gray-p {
  position: relative;
}

.gray-p img {
  position: absolute;
  right: 36px;
  bottom: -28px;
  width: 92px;
  height: 136px;
}

.gray-p2 img {
  position: absolute;
  right: 30px;
  bottom: -5px;
  width: 145px;
  height: 140px;
}

.goods {
  display: flex;
  justify-content: space-between;
  margin-right: 28px;
  margin-left: 28px;
}

.goods-picture {
  width: 78px;
  height: 78px;
  margin-top: 30px;
  margin-right: 20px;
}

.goods-picture2 img {
  width: 78px;
  height: 78px;
  margin-top: 30px;
  margin-right: 20px;
}

.goods-picture3 img {
  width: 78px;
  height: 78px;
  margin-top: 30px;
  margin-right: 30px;
}


.to-participate img {
  width: 110px;
  height: 55px;
  margin-right: 20px;
}
</style>
