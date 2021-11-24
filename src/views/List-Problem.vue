<template>
  <div class="problem">
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
    <div class="problem-search">
        <img @click="notPoint" class="search-img" src="../assets/css/datail-img/搜索.png" alt="">
        <div class="search-text" :v-model="keywords">{{keywords}}</div>
    </div>

    <div v-for="(item, index) in array" :key="index" class="problem-introduction">
        <img class="introduction-img" :src="item.arrimg" alt="">
        <div class="introduction-box">
            <div class="introduction-text">{{item.text}}</div>
            <div class="introduction-text2">{{item.text2}}</div>
            <div class="introduction-text3">{{item.text3}}</div>
        </div>
        
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: '搜索关键词',
      array:[
        {arrimg:'https://img1.baidu.com/it/u=1237118162,875178543&fm=26&fmt=auto', 
        text:'家的装修时怎么样的，这把椅子…', 
        text2:'夏天-HHCITY：1.踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面都被柜…',
        text3:'共5个回答',
        type:'1'
        },
        {arrimg:'https://img2.baidu.com/it/u=266804849,1820849949&fm=26&fmt=auto', 
        text:'这种面料的椅子好清理吗', 
        text2:'告白气球告白气球告白气球告白气球告白气球-HHCITY：1.踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…',
        text3:'共21个回答',
        type:'2'
        },
        {arrimg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2018%2F781%2F683%2F9617386187_729285932.400x400.jpg&refer=http%3A%2F%2Fcbu01.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639731442&t=24617387ebf8018931623212b3313eef', 
        text:'这个柜子怎么样？实用吗？', 
        text2:'告白气球-HHCITY：1.踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…',
        text3:'共21个回答',
        type:'3'
        },
        {arrimg:'https://img2.baidu.com/it/u=1483983074,25221603&fm=26&fmt=auto', 
        text:'会不会味道很大？哪个颜色好看…', 
        text2:'告白气球-HHCITY：1.踢脚线打扫比较容易脏：这个和两点有关，一是家里大部分墙面…',
        text3:'共134个回答',
        type:'4'
        },
      ]
    }
  },
  methods: {
    notPoint() {
      
    },
  }
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
// -----
.problem {
    padding: 0 20px;
}

.problem-search {
    margin-top: 90px;
    display: flex;
    
    background: #F5F5F5;
    .search-img {
        width: 16px;
        height: 16px; 
        margin: 12px;
        
    }
    .search-text {
        margin-top: 10px;
        maragin-bottom: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A8A8A8;
        line-height: 20px;
        
    }

}

.problem-introduction {
  display: flex;
  background: rgba(245, 245, 245, 1)
  margin-top: 20px;
  
  .introduction-img {
    width 48px;
    margin: 13px 15px 13px -14px;
    
  }
  .introduction-box {
    margin: 15px 15px 15px 0;
    .introduction-text {
      font-size: 15px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 21px;
    }
    .introduction-text2 {
      margin-top:2px;
      font-size: 11px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #9FA1A0;
      line-height: 15px;
    }
    .introduction-text3 {
      margin-top: 8px;
      font-size: 10px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #CEB68A;
      line-height: 14px;
    }
  }
}
</style>
