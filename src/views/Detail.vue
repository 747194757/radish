<template>
  <div class="Detail">
    <!-- 导航 -->
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
    <!-- -------背景 -->
    <div class="activity-figure">
      <img src="../assets/css/datail-img/bj.png" alt="" />

     <!-- -------白盒子 -->
     <div class="activity-xunhuan">
       <div class="activity-bgc"  v-for="(item, index) in 3" :key="index">
        <div class="activity-ber">
          <div class="activity">
            <img src="../assets/css/datail-img/活动.png" alt="" />
          </div>

          <div class="buyinggai">
            <div class="kic">
              <div class="activity-kic">KIC 活动主题</div>
              <div class="golden-box">
                 进行中
                </div>
            </div>

            <div class="introduce">
              谈感性更讲理性，又方法更有创作观点，有能量更有知识分享。创意方法...
            </div>
            <div class="activity-time">
              2019-03-21
            </div>  
          </div>

          
        </div>
      </div>
     </div>
      
    </div>
  </div>
</template>
<script>
export default {

};
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
// ----------------------
.activity-figure {
  // background: url("@/assets/css/datail-img/bj.png") no-replace;
  // background-image: url('../assets/css/datail-img/bj.png') no-replace

  top: 0;
  left:0;
  width 100vw;
  height 100vh;
  position: relative;


}
.activity-figure img {
  width :100%;
  height : 100%;
}

.activity-xunhuan {
  display: flex;
  position: absolute;
  bottom: 80px;
  width calc(100vw - 20px);
  overflow: scroll;
  background: rgbc(0,0,0,0);
}

.activity-bgc {
  
  background: #fff;
  opacity: 0.96;
  width 1000px
  margin-right: 20px;
  margin-left: 20px;


}
.activity-ber {
  display: flex;
  margin: 4px;
  border: 1px solid #E0CFAE;
  width 311px
}
.activity img {

 width: 111px;
 height: 111px;
 margin: 5px;
}
.kic {
  display: flex;

}
.activity-kic {
  maargin-left: 9px;
  margin-top: 15px;
  font-size: 15px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 21px;
}
.golden-box {
  
  margin-top: 12px;
  margin-left: 10px;
  padding: 5px;
  background: #CEB68A;
  font-size: 9px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
}

.introduce {
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #000000;
  line-height: 14px;
  margin: 5px 10px 19px 9px;
   text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  
  -webkit-box-orient: vertical;
 
}
.activity-time {
  font-size: 10px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 14px;
  margin-left: 9px ;
  margin-bottom 16px;
}


</style>
