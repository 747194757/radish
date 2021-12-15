<template>
  <div class="lailai">
    <!-- <div
      :class="[index == supermarketIndex ? 'xix' : 'xi']"
      v-for="(item, index) in supermarket"
      :key="index"
      @click="clickSupermarket(index)"
    >
      <div class="xi-text">
        {{ item.snacks }}
      </div>
    </div> -->
    <van-swipe height="300" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img style="height:300px" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload } from "vant";

Vue.use(Lazyload);

export default {
  data() {
    return {
      //社区里有多少个家庭 每一个object都代表一个家庭
      shequlist: [
        {
          jiatingName: "张三的家庭",
          peoples: [
            {
              name: "张三的爸爸",
              age: "88",
              professional: "火车司机",
              income: "12000",
            },
            {
              name: "张三的妈妈",
              age: "86",
              professional: "火车售票员",
              income: "10000",
            },
            {
              name: "张三的儿子",
              age: "23",
              professional: "火车保洁",
              income: "6000",
            },
            { name: "张三", age: "55", professional: "火车头", income: "8000" },
          ],
          allIncome: "36000",
        },
        {
          jiatingName: "李四的家庭",
          peoples: [
            { name: "李四", age: "70", professional: "拾荒者", income: "3000" },
          ],
          allIncome: "3000",
        },
      ],
      // 我们是超市 1 海鲜 零食 2分类 （瓜子 水 水果）3具象成品（瓜子 3.5 盒马家的 水：百岁山 3 怡宝 8）
      supermarket: [
        {
          snacks: "零食",
          snack: [
            {
              classification: "瓜子",
              specific: [
                {
                  name: "洽洽瓜子",
                  money: "3.5",
                  address: "盒马",
                },
              ],
            },
            {
              classification: "水",
              specific: [
                { name: "百岁山", money: "3", address: "盒马" },
                { name: "怡宝", money: "8", address: "叮咚" },
              ],
            },

            {
              classification: "水果",
              specific: [
                { name: "葡萄", money: "9.9", address: "盒马" },
                { name: "香蕉", money: "5", address: "叮咚" },
              ],
            },
          ],
        },
        {
          snacks: "海鲜",
          snack: [
            {
              classification: "鱼",
              specific: [
                { name: "黄花鱼", money: "19.9", address: "盒马" },
                { name: "石斑鱼", money: "25", address: "叮咚" },
              ],
            },
            {
              classification: "螃蟹",
              specific: [
                { name: "面包蟹", money: "98", address: "盒马" },
                { name: "大闸蟹", money: "45", address: "叮咚" },
              ],
            },
          ],
        },
        {
          snacks: "海鲜",
          snack: [
            {
              classification: "鱼",
              specific: [
                { name: "黄花鱼", money: "19.9", address: "盒马" },
                { name: "石斑鱼", money: "25", address: "叮咚" },
              ],
            },
            {
              classification: "螃蟹",
              specific: [
                { name: "面包蟹", money: "98", address: "盒马" },
                { name: "大闸蟹", money: "45", address: "叮咚" },
              ],
            },
          ],
        },
        {
          snacks: "粮油",
          snack: [
            {
              classification: "鱼",
              specific: [
                { name: "黄花鱼", money: "19.9", address: "盒马" },
                { name: "石斑鱼", money: "25", address: "叮咚" },
              ],
            },
            {
              classification: "螃蟹",
              specific: [
                { name: "面包蟹", money: "98", address: "盒马" },
                { name: "大闸蟹", money: "45", address: "叮咚" },
              ],
            },
          ],
        },
        {
          snacks: "文具",
          snack: [
            {
              classification: "鱼",
              specific: [
                { name: "黄花鱼", money: "19.9", address: "盒马" },
                { name: "石斑鱼", money: "25", address: "叮咚" },
              ],
            },
            {
              classification: "螃蟹",
              specific: [
                { name: "面包蟹", money: "98", address: "盒马" },
                { name: "大闸蟹", money: "45", address: "叮咚" },
              ],
            },
          ],
        },
        {
          snacks: "服饰",
          snack: [
            {
              classification: "鱼",
              specific: [
                { name: "黄花鱼", money: "19.9", address: "盒马" },
                { name: "石斑鱼", money: "25", address: "叮咚" },
              ],
            },
            {
              classification: "螃蟹",
              specific: [
                { name: "面包蟹", money: "98", address: "盒马" },
                { name: "大闸蟹", money: "45", address: "叮咚" },
              ],
            },
          ],
        },
      ],
      supermarketIndex: 0,
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      arrayAa:[
        {
          a:'ni ',
          b:'hao',
  
        },
        {
          a:'wo',
          b:'men',
        },
        {
          a:'haha',
          b:'heihei',
        }
      ],
      aaObj:{
        c:'enen',
        d:'houhou'
      },
    };
  },
  methods: {
    clickSupermarket(index) {
      this.supermarketIndex = index;
    },
  },
  created() {
    console.log("看看数组有什么");
    // console.log(this.list);
    console.log(this.arrayAa);
    console.log(this.aaObj);
    console.log('结束');
    console.log(JSON.parse(JSON.stringify(this.aaObj)));
    console.log(this.aaObj.c);
    this.aaObj.c='c';
    console.log(this.aaObj);
    this.aaObj.d = 'suibian';
    
    this.aaObj.e = 'aaaa';
    console.log(this.aaObj);
    console.log(this.arrayAa[0]);
    console.log(this.arrayAa[1]);
    this.arrayAa[0].a = '你好啊';
    console.log(this.arrayAa);
    this.arrayAa[1].c = 'keyi';
    console.log(this.arrayAa);
    this.arrayAa[0].c = 'keyi';
    this.arrayAa[1].c = '中国';
    this.arrayAa[2].c = '信';
    
    for(let i = 0; i < this.arrayAa.length; i++) {
      this.arrayAa[i].c = 'duiya';
      this.arrayAa[i].d = 'ya';
      console.log(this.arrayAa[i]);
      
    }
    console.log(this.arrayAa);

    for (let index = 0; index < this.arrayAa.length; index++) {

      const element = this.arrayAa[index];
      element.c = 'oooo';
      element.f = 'ffff';
      element=3;

      console.log(element);
    }
    console.log(this.arrayAa);
  },
};
</script>
<style lang="stylus" scoped>
/deep/.van-swipe__track {
  width 100vw
}
.lailai {
  display: flex;
  margin-top: 90px;
  width 100vw
  background: #F5F5F5;
  flex-direction:column;
  overflow: hidden;
  overflow-y: scroll;
  .xi {
    width: 88px;
    height: 50px;
    background: #F5F5F5;
    .xi-text {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 20px;
      text-align: center;
      line-height: 50px;
    }
  }
   .xix {
    width: 88px;
    height: 50px;
    background: #FFFFFF;
    .xi-text {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #CEB68A;
      line-height: 20px;
      text-align: center;
      line-height: 50px;
    }
  }


}
</style>
