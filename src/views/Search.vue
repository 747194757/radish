<template>
  <div class="Search">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">搜索</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>

    <form action="/" class="search-form">
      <van-search
        v-model="value"
        show-action
        placeholder="搜索产品名称"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="top-search ">热门搜索</div>

    <div class="search-text">
      <div
        :style="{border:item.isAbc == true ? '1px solid #CEB68A' : '1px solid #f5f5f5', 
        background:item.isAbc == true ? '#FFFFFF' : '#f5f5f5', }"
        class="arr-class"
        v-for="(item, index) of searchArray"
        :key="index"
        @click="isAbc(index)"
      >
        <div :style="{color:item.isAbc == true ? '#CEB68A' : '#a6a6a6'}" class="arr-text">{{ item.name }}</div>
      </div>
    </div>
    <div class="top">
      <div class="history">搜索历史</div>
      <img
        class="delete-img"
        src="../assets/css/datail-img/删除_填充.png"
        alt=""
      />
    </div>

    <div class="search-text">
      <div
        class="arr-class"
        v-for="(item, index) of SearchHistory"
        :key="index"
      >
        <div class="arr-text">{{ item.name }}</div>
      </div>
    </div>

    <div class="top-stores">
      <div class="nearby-stores">附近门店</div>
      <div class="Look-all">查看全部</div>
    </div>

    <div class="near-map" v-for="(item, index) of NearbyStores" :key="index">
      <img
        class="near-img"
        :src="item.nearImg"
        alt=""
      />
      <div class="near">
        <div class="near-child">{{item.nearChild}}</div>
        <div class="child-two">{{item.childTwo}}</div>
        <div class="child-three">
          <img class="child-img" :src="item.childImg" alt="" />
          <div class="chi-text">{{item.chiText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      value: "",
      searchArray: [
        { name: "三人沙发" },
        { name: "双人床" },
        { name: "凳" },
        { name: "迷你床头台灯" },
        { name: "艺术台灯" },
        { name: "三人趣味的沙发" },
        { name: "桌" },
        { name: "三人沙发" },
        { name: "桌子" },
        { name: "艺术台灯" },
        { name: "窗" },
        { name: "四人趣味的床垫" },
      ],
      SearchHistory: [
        { name: "艺术台灯" },
        { name: "三人趣味的沙发" },
        { name: "桌" },
        { name: "三人沙发" },
        { name: "桌子" },
        { name: "艺术台灯" },
        { name: "窗" },
        { name: "四人趣味的床垫" },
      ],
      searchBtn: "1",
      NearbyStores:[
        {
          nearImg:require('@/assets/css/home-img/bcfe55eab677b8340bc19e67ea9149d.png'),
          nearChild:'上海吴中路旗舰店',
          childTwo:'上海闵行吴中路1235号',
          childImg:require('@/assets/css/home-img/位置.png'),
          chiText:'1.5km'
        },
        {
          nearImg:require('@/assets/css/home-img/777.png'),
          nearChild:'上海体验中心',
          childTwo:'上海闵行吴中路1235号',
          childImg:require('@/assets/css/home-img/位置.png'),
          chiText:'12.5km'
        },
      ],
      
      
    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
    isAbc(index) {
      this.searchArray[index].isAbc = !this.searchArray[index].isAbc;
      this.$forceUpdate()
    },
    

  },
  created() {
    this.searchArray.forEach((element, index) => {
      element.isAbc = false;
    });
    
  }
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

// ------

/deep/.van-search {
  padding: 0px;
}
/deep/.van-field__control {
  color: #a6a6a6;
}
.search-form {
  padding-top: 76px;
  margin-left 20px;
  margin-right  20px;
}
.top-search {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 23px;
}
.search-text {

  display: flex;
  margin-top: 15px;
  margin-left: 15px;
  flex-wrap: wrap;
  .three-arr {
    border: 1px solid #CEB68A;
    margin-right: 15px;
    margin-bottom: 21px;
    .arr-text {
      font-size: 12px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #CEB68A;
      line-height: 17px;
      padding: 6px 12px;
    }
  }
  .arr-class {
    background: #F5F5F5;
    margin-right: 15px;
    margin-bottom: 21px;
    .arr-text {
      font-size: 12px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #A6A6A6;
      line-height: 17px;
      padding: 6px 12px;
    }
  }
}
.top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  .history {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 23px;
  }
  .delete-img {
    width: 13px;
    height: 17px;
  }
}
.top-stores {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  .nearby-stores {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 23px;
  }
  .Look-all {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #CEB68A;
    line-height: 17px;
  }

}
.near-map {
  margin: 15px 20px 15px 65px;
  display: flex;
  flex-direction:row-reverse;
  position: relative;
  background: #F5F5F5;
  .near-img {
    position: absolute;
    top:16px;
    left: -45px;
    bottom: 16px;
    width: 153px;
    height: 97px;
  }
  .near {
    margin-right: 48px;
    margin-top: 33px;
    .near-child {
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 21px;
    }
    .child-two {
      margin-top: 2px;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9FA1A0;
      line-height: 15px;
    }
    .child-three {
      margin-top: 10px;
      margin-bottom: 34px;
      display: flex;
      .child-img {
        width: 10px;
        height: 13px;
      }
      .chi-text {
        margin-left: 2px;
        font-size: 11px;
        font-family: PingFang-SC-Bold, PingFang-SC;
        font-weight: bold;
        color: #9FA1A0;
        line-height: 15px;
      }

    }
  }
}
/deep/input::-webkit-input-placeholder { /* WebKit browsers */
  color: #A6A6A6;
  font-size: 14px;
}

/deep/input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #A6A6A6;
  font-size: 14px;
}

/deep/input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #A6A6A6;
  font-size: 14px;
}  
</style>
