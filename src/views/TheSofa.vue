<template>
  <div class="the-sofa">
    <!-- 导航 -->
    <div class="shouye">
      <div class="nav-arrow">
        <img src="../assets/css/nav-img/返回箭头.png" alt="" />
      </div>
      <div class="nav-text">沙发</div>
      <div class="nav-ation">
        <img src="../assets/css/nav-img/单色_功能集合.png" alt="" />
        <div class="nav-line">|</div>
        <img src="../assets/css/nav-img/circle-圆圈.png" alt="" />
      </div>
    </div>
    <!-- v-model="active" -->
    
    <van-tabs @click="sofaIndex">
      <van-tab
        v-for="(item, index) of sofaArray"
        :key="index"
        :title="item.name"
        
      >
      </van-tab>
    </van-tabs>
    <!-- <div class="sofa-all">
      <div  v-for="(item, index) of sofaAllArray" :key="index">
        <div class="sofa-box">
          <img class="sofa-img" :src="item.sofaImg" alt="" />
          <div class="sofa-text">{{ item.sofaText }}</div>
          <div class="sofa-money">{{ item.sofaMoney }}</div>
        </div>
      </div>
    </div> -->
    <div class="sofa-all">
      <div
        :style="{background: sofaArrayIndex == index ? 'green' :'#F5F5F5'}"
        class="sofa-yellow"
        v-for="(item, index) of sofaAllArray"
        :key="index"
      >
        <img class="sofa-img" :src="item.sofaImg" alt="" />
        <div class="sofa-gray">
          <div class="sofa-money">{{ item.sofaMoney }}</div>
          <div class="sofa-text">{{ item.sofaText }}</div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      sofaArray: [
        {
          name: "三人沙发"
        },
        {
          name: "单人沙发"
        },
        {
          name: "单人沙发"
        },
        {
          name: "休闲沙发"
        },
        {
          name: "气垫沙发"
        },
        {
          name: "单人沙发"
        },
        {
          name: "单人沙发"
        },
        {
          name: "休闲沙发"
        },
        {
          name: "气垫沙发"
        },
       
      ],
      sofaAllArray: [
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "Bro藏蓝色单人沙发",
          sofaMoney: "22850",
          
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "高级单人便携式板凳",
          sofaMoney: "9800",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "装饰床头台灯",
          sofaMoney: "9000",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "卡通软皮沙发",
          sofaMoney: "9000",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "红色复古单人沙发",
          sofaMoney: "12000",
        },              
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "简约大气双人床",
          sofaMoney: "8876",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "红色复古单人沙发",
          sofaMoney: "12000",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "简约大气双人床",
          sofaMoney: "8876",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "红色复古单人沙发",
          sofaMoney: "12000",
        },
        {
          sofaImg: require("@/assets/css/datail-img/椅子.png"),
          sofaText: "简约大气双人床",
          sofaMoney: "8876",
        },
      ],
      sofaArrayIndex:1,
    };
  },
  created() {
    this.sofaArray.unshift({name:'全部'});
    console.log(this.sofaArray);
    let gaoPeng = [
      {
      name:'hei',
      age:18,
    },
      {
      name:'hei',
      age:18,
    },
      {
      name:'hei',
      age:18,
    },
      {
      name:'hei',
      age:18,
    },
    ]
    gaoPeng.push('hahaha')
    console.log(gaoPeng[0]);
    console.log(gaoPeng);
  },
  methods: {
    sofaIndex(val1, val2) {
      console.log('sofaIndex');
      console.log(val1);
      console.log(val2);
      console.log('-----------');
      this.sofaArrayIndex = val1;
      
    },  
 
  }

    // sofa(val,val2) {
    //   console.log('sofa');
    //   console.log(val);
    //   console.log(val2);
    // }
}

//上边有多少个文字 下边就有多少个图
//上边点了谁  下边角标对应的背景色就亮起来
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
/deep/.van-tabs {
  padding-top: 66px;
  display: flex;
  align-items: center
  margin-left 25px;

  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #9FA1A0;
  line-height: 23px;
}
/deep/.van-tab--active {
  font-size: 19px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #000000;
  line-height: 27px;
 
}

/deep/.van-tabs__line {
  width: 18px;
  height: 2px;
  background: #000000;
}
.the-sofa {
  padding-left:5px;
  padding-right: 5px;
}
.sofa-all {
  width: calc(100vw - 40px)
  display: flex;
  flex-wrap:wrap;
  overflow hidden;
  overflow-y: scroll;
  
  margin-bottom: 29px;
  padding-left: 5px;
  padding-right: 20px;


  .sofa-yellow {
    margin-left 15px;
    margin-top: 29px;
    position: relative;
    width: calc(50% - 15px);
    .sofa-img {
      width: 93px;
      height: 83px;
      position: absolute;
      top:0px;
      left:calc((100%  - 93px ) / 2);

    }
    .sofa-gray {
      display: flex;
      align-items: center;
      flex-direction: column-reverse;
      background: #F5F5F5;
      width 100%;
      height: 132px;
      margin-top: 39px;
      margin-bottom: 39px;



      .sofa-text {
          margin-bottom 7px;
          text-align: center;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #000000;
          line-height: 21px;
      }
      .sofa-money {


          margin-bottom: 9px;
          font-size: 15px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #BC0017;
          line-height: 21px;
          text-align: center;
      }

    }
  }

}
</style>
