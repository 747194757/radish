<template>
  <div>
    <div>
      第一个数字:<br />
      <input type="text" name="firstname" v-model="num1" />
      <br />
      第二个数字:<br />

      <input type="text" name="lastname" v-model="num2" />
      <br /><br /><br /><br />
      <button @click="addAction">相加得到多少</button>

      <br /><br />
      <div>结果:{{ num3 }}</div>
      <br /><br />
      <br /><br />

      <button @click="gotoActivity">参与活动</button>

      <div v-if="show" class="successful">
        <div class="wind">
          <div class="successful-text">参与成功</div>
          <div class="successful-congratulations">恭喜你，成功参与此活动</div>
          <div class="ber-ful"></div>
          <div class="successful-know"  @click="gotoActivity">知道了</div>
        </div>
      </div>

      <br /><br />

      <div v-for="(item, index) in array" :key="index" class="gray-box">
        <div class="activity-text">
          <h4>{{ item.name }}</h4>
          <div class="activity-three">
            {{
              item.type == 3
                ? "三人成团"
                : item.type == 2
                ? "二人成团"
                : item.type == 4
                ? "四人成团"
                : "一人成团"
            }}
          </div>
          <div class="activity-money">￥ {{ item.money }}</div>
        </div>

        <div class="gray-p">
          <img :src="item.imgurl" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //三人成团  3  二人成团 2  一人成团  1
      num1: 123123,
      num2: "0",
      num3: "0",
      show:false,
      array: [
        {
          name: "潮牌衣柜",
          type: "1",
          money: "22",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1406%2F06%2Fc12%2F34993399_1402024859938.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639664695&t=51bd286772c1d6465d8e76db7296a179",
        },
        {
          name: "潮牌衣柜",
          type: "2",
          money: "33",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fphotoblog%2F7%2F2%2F8%2F9%2F7289038%2F200812%2F24%2F1230128167507_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639664695&t=5dfcc415a3705c1bda44adac0ca0cc4f",
        },
        {
          name: "潮牌衣柜",
          type: "3",
          money: "44",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1704%2F21%2Fc29%2F44096795_1492767692033_mthumb.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639664695&t=58c9d4599e72696a06b9ce65a5552300",
        },
        {
          name: "潮牌衣柜",
          type: "2",
          money: "55",
          imgurl:
            "https://img14.360buyimg.com/pop/jfs/t1/175877/5/20685/122699/60fbdb50E454b180b/4c0b235a18668f24.jpg",
        },
        {
          name: "潮牌衣柜",
          type: "3",
          money: "66666",
          imgurl:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.xxjxsj.cn%2Farticle%2FUploadPic%2F2011-8%2F201181522103870781.jpg&refer=http%3A%2F%2Fwww.xxjxsj.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639664695&t=03210c649e1baabfea4caf89143dc929",
        },
      ],
    };
  },
  methods: {
    addAction() {
      console.log(this.num1);
      this.num3 = parseInt(this.num1) + parseInt(this.num2);
    },
    num1change(val1, val2) {
      console.log(val1);
      console.log(val2);
    },
    gotoActivity(){
        this.show = !this.show
    }
  },
};
</script>

<style lang="stylus" scoped>
.gray-box {
  position: relative;
  height: 115px;
  background-color: #f5f5f5;
  margin: 25px 20px 0 20px;
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
  .activity-three {
    margin-left: 20px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 12px;
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
}

.successful {
  position: fixed;
  top:0px;
  left:0px;
  width 100vw;
  height 100vh;
  background: rgba(0, 0, 0, 0.32);
  z-index: 2;
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
</style>
