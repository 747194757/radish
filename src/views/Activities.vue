<template>
  <div class="kic-activity-theme">
    <!-- 导航------ -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">活动列表</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <!-- ----- -->
    <div class="activity-theme">
      <img src="../assets/css/datail-img/bj.png" alt="" />
      <div class="activitying-ab">
        <div class="activitying">
        <!-- <img class="activitying-img" src="../assets/css/datail-img/baisse.png" alt=""> -->
        <div class="small-white-box">
          <div class="separate">
            <div class="separate-text">KIC</div>
            <div class="separate-text">主题活动</div>
            <div class="separate-ing">进行中</div>
          </div>
          <div class="date-of">2019-03-21</div>
        </div>

        <div class="far-away">
          中国国际家用纺织品及辅料(秋冬)博览会于2016年8月24至27日在国家会展中心(上海)举行。国际潮流趋势预测专家NellyRodi组织了国际潮流委员会，汇集来自不同领域的专家，包括潮流定位专家、国际家居品牌、花艺设计师、品牌形象设计师与建筑设计师，对国际家居趋势进行最全面而深入的解读，并将于展会现场透过一系列潮流趋势活动，更深入、全面与实用地呈现来年家居流行趋势。
          通往远方，让灵感飞翔!2017年国际家居流行趋势的关键词为「远方Far
          Away」，这个精神将以四个主题为切入点展现。
        </div>
        <div class="participate">
          参加活动
        </div>
      </div>
      </div>
      
    </div>

    <!-- ---- -->
    <div class="successful">
      <div class="wind">
        <div class="successful-text">参与成功</div>
        <div class="successful-congratulations">恭喜你，成功参与此活动</div>
        <div class="ber-ful"></div>
        <div class="successful-know">知道了</div>
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

// -----

.activity-theme img{
  width :100vw;
  height 100vh;
  position:relative;
}
.successful {
  position: absolute;
  top:0px;
  left:0px;
  width 100vw;
  height 100vh;
  background: rgba(0, 0, 0, 0.32);
  .wind {
    background: #FFFFFF;
    margin-top: 310px ;
    margin-left: 40px;
    margin-right: 40px;
    .successful-text {
      padding-top: 30px;
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      text-align: center;
    
    }
    .successful-congratulations {
      margin-top: 5px;
      font-size: 13px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #9FA1A0;
      line-height: 17px;
      text-align: center;
    }
    .ber-ful {
      margin-top: 30px;
      height: 1px;
      background: #F1F1F1;
    }
    .successful-know {
      margin-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      font-size: 15px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #CEB68A;
      line-height: 21px;
    }
  }
  
}
activitying-ab {
  position: relative;
}
.activitying {
    background-color:#fff
    width: calc(100vw - 56px);
    height: 287px;
    position: absolute;
    left: 28px;
    bottom: 88px;
    

}
.small-white-box {
    margin: 16px 15px 0 15px;
    display: flex;
    justify-content: space-between;

}
.separate {
  display: flex;

}
.separate-text {
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 21px;
  margin-right: 5px;
}
.separate-ing {
  background: #CEB68A;
  font-size: 9px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  padding: 2px 5px;
  margin-left: 7px;
}
.date-of {
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 14px;

}
.far-away {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #9FA1A0;
  line-height: 17px;
  margin: 15px 15px 1px 15px;
}
.participate {
  position:absolute;
  right: 20px;
  top: 266px;
  background: #CEB68A;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 17px;
  padding: 10px 28px;
}
</style>
