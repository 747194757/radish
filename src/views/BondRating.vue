<template>
  <div class="Bond-rating">
    <van-nav-bar
      title="债券评级"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="Bond-examination">
      <div
        style="display: flex; align-items: center; flex-direction: column"
        @click="BondBtn(index)"
        v-for="(item, index) of BondRating"
        :key="index"
      >
        <div
          class="Bond-approval"
          :style="{ color: Horizontal == index ? '#DDAF59' : '#333333' }"
        >
          {{ item.text }}
        </div>
        <div
          class="Horizontal-line"
          :style="{
            display: Horizontal == index ? 'block' : 'none',
          }"
        ></div>
      </div>
    </div>
    <div class="Big-Horizontal"></div>
    <div class="approval-nav">
      <div
        :class="[approvalIndex == index ? 'approval-out' : 'approval-into']"
        v-for="(item, index) of approvalArray"
        :key="index"
        @click="approvalClick(index)"
      >
        {{ item.text }}
      </div>
    </div>

    <div class="Content-module">
      <div
        class="content-big"
        v-for="(item, index) of ContentModuleArray"
        :key="index"
      >
        <img class="Content-img" :src="item.ContentImg" alt="" />
        <div class="module-one">
          <div
            v-if="item.show == '显示'"
            @click="roundClick(index)"
            class="module-round"
          ></div>
          <img
          @click="roundClick(index)"
            v-if="item.show != '显示'"
            class="module-yellow"
            :src="item.moduleYellow"
            alt=""
          />
          <div class="module-text">{{ item.moduleText }}</div>
          <div class="module-line"></div>
          <div class="module-num">{{ item.moduleNum }}</div>
        </div>
        <div class="module-two">
          <div class="alternative">
            <div class="alternative-gray">{{ item.alternativeGray }}</div>
            <div class="alternative-black">{{ item.alternativeBlack }}</div>
          </div>
          <div class="major">
            <div class="major-gray">{{ item.alternativeGray }}</div>
            <div class="major-black">{{ item.majorGray }}</div>
          </div>
        </div>
        <div class="module-three">
          <div class="module-left">
            <div class="evaluation-of">{{ item.evaluationOf }}</div>
            <div class="limited">{{ item.limited }}</div>
          </div>
          <div class="module-right">
            <div class="Submit-one">{{ item.SubmitOne }}</div>
            <div class="Submit-name">{{ item.SubmitName }}</div>
          </div>
        </div>
        <div class="module-four">
          <div class="issuer">
            <div class="issuer-people">{{ item.issuerPeople }}</div>
            <div class="issuer-group">{{ item.issuerGroup }}</div>
          </div>
          <div class="Submit-time">
            <div class="sub-date">{{ item.subDate }}</div>
            <div class="sub-time">{{ item.subTime }}</div>
          </div>
        </div>

        <div class="In-middle">
          <div class="middle-blue"></div>
          <div class="On-middle">
            <div class="middle-report">{{ item.middleReport }}</div>
            <div class="middle-view">{{ item.middleView }}</div>
          </div>
        </div>

        <div class="circle">
          <div class="circle-left"></div>
          <div class="middle-line"></div>
          <div class="circle-right"></div>
        </div>

        <div class="Audit-date">
          <div class="audit">
            <div class="audit-text">{{ item.auditText }}:</div>
            <div class="audit-time">{{ item.auditTime }}</div>
          </div>
          <div class="audit-button">
            <div
              :class="[item.isPass == false ? 'click' : 'rejected']"
              @click="auditBtn(false, index)"
            >
              驳回
            </div>
            <div
              :style="{ 'margin-left': item.isPass == true ? '15px' : '' }"
              :class="[item.isPass == true ? 'click' : 'through']"
              @click="auditBtn(true, index)"
            >
              通过
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Fixed-box">
      <div class="cancel">取消</div>
      <div class="determine" @click="determineClick(true)">通过</div>
    </div>
    
    <div :style="{display: zhiDao == true ? 'block' : 'none'}" class="Hide-gray">
      <div class="white-box"> 
        <div class="you-sure">确定审批通过吗？</div>
        <div class="line"></div>
        <div class="choose-box">
          <div class="cancel" @click="quX(false)">取消</div>
          <div class="Determine" @click="quX(false)">确定</div>
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
      BondRating: [
        { text: "评级审批" },
        { text: "新债查询" },
        { text: "债券池审批" },
      ],
      Horizontal: 0,
      approvalArray: [{ text: "入池审批" }, { text: "出池审批" }],
      approvalIndex: 0,
      ContentModuleArray: [
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
        {
          moduleText: "21鲁黄金SCP001",
          ContentImg: require("@/assets/css/datail-img/Oval.png"),
          moduleNum: "012100033.IB",
          alternativeGray: "申请前所在池:",
          alternativeBlack: "备选池",
          majorGray: "重大投资池",
          evaluationOf: "内评:",
          limited: "5 受限",
          SubmitOne: "提交人:",
          SubmitName: "孙成林",
          issuerPeople: "发行人:",
          issuerGroup: "山东黄金集团有限…",
          subDate: "提交时间:",
          subTime: "2021-07-01",
          middleReport: "关联报告",
          middleView: "点击查看",
          auditText: "报告审核日期:",
          auditTime: "2021-07-01",
        },
      ],

      array: [],
      zhiDao:'',
      
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    BondBtn(index) {
      this.Horizontal = index;
      console.log(index);
    },
    approvalClick(index) {
      this.approvalIndex = index;
    },
    auditBtn(isPass, index) {
      this.ContentModuleArray[index].isPass = isPass;
      console.log(index);
      this.$forceUpdate();
    },
    roundClick(index) {
      if (this.ContentModuleArray[index].show == "显示") {
        this.ContentModuleArray[index].show = "不显示";
      } else {
        this.ContentModuleArray[index].show = "显示";
      }
      
      console.log(index);

      this.$forceUpdate();
    },
    determineClick(val) {
      this.zhiDao = val
      console.log(val);
    },
    quX(val) {
      this.zhiDao = val
    }

    // zzz(item,index) {
    //   this.array[index].name = index
    // }
  },
  created() {
    for (let index = 0; index < this.ContentModuleArray.length; index++) {
      this.ContentModuleArray[index].isPass = false;
    }
    this.$forceUpdate();
    console.log(this.ContentModuleArray);
    for (let index = 0; index < this.ContentModuleArray.length; index++) {
      this.ContentModuleArray[
        index
      ].moduleYellow = require("@/assets/css/datail-img/合并形状 2 copy 14.png");
      this.ContentModuleArray[index].show = "显示";
      
    }
    this.$forceUpdate();
    console.log(this.ContentModuleArray);
  },
};
</script>
<style lang="stylus" scoped>
.Bond-examination {
  display: flex;
  align-items: center
  height: 38px;
  background: #FFFFFF;
  border-radius: 1px;
  overflow: hidden;
  .Bond-approval {

    font-size: 14px;
    font-family: PingFangTC-Medium, PingFangTC;
    font-weight: 500;
    color: #DDAF59;
    line-height: 14px;
    padding:12px 27px 12px 28px;


  }
  .Horizontal-line {
    margin-top: 6px;
    width:20px;
    height: 3px;
    background: #DDAF59;
    border-radius: 2px;

  }

}
.Big-Horizontal {
  width 100%
  height: 1px;
  background: #F6F6F6;
}
.approval-nav {
  display: flex;
  align-items: center;
  height: 40px;
  background: #FFFFFF;
  .approval-out {
    background: #FEF7E9;
    border-radius: 13px;
    border: 1px solid #DDAF59;
    margin-left:15px;
    padding: 3px 7px 4px 9px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #DDAF59;
    line-height: 18px;
  }
  .approval-into {
    margin-left 22px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 13px;
  }
}
.Content-module {
  width calc(100vw - 20px);
  height calc(100vh - 126px)
  background: #F6F6F6;
  padding: 10px;
  .content-big {
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 8px;
    position:relative;
    .Content-img {
      position:absolute;
      top:0;
      left: 0;
      height: 111px;
      width 100%;
      background: #FFFFFF;

    }

    .module-one {
      position:relative;
      display: flex;
            .module-yellow {
        margin-left: 10px;
        margin-top: 12px;
        width: 15px;
        height: 15px;

      }
      .module-round {
        margin-left: 10px;
        margin-top: 12px;
        width: 15px;
        height: 15px;
        background: #FFFFFF;
        border: 1px solid #CCCCCC;
        border-radius: 15px;
      }

      .module-text {
        margin-left: 3px;
        margin-top: 9px;
        font-size: 15px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 21px;
      }
      .module-line {
        margin-top: 12px;
        margin-left: 10px;
        width: 1px;
        height: 15px;
        background: #F3F3F3;
      }
      .module-num {
        margin-top: 9px;
        margin-left: 10px;
        font-size: 15px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333333;
        line-height: 21px;
      }
    }
    .module-two {
      position:relative;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .alternative {
        display: flex;
        width 50%;
        margin-left: 10px;
        .alternative-gray {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .alternative-black {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
      .major {
        display: flex;
        width 50%;
        .major-gray {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .major-black {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
    }
    .module-three {
      position:relative;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      .module-left {
        display: flex;
        margin-left: 10px;
        width 50%;
        .evaluation-of {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .limited {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
      .module-right {
        display: flex;
        width 50%;
        .Submit-one {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .Submit-name {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
    }
    .module-four {
      position:relative;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;
      margin-bottom: 13px;
      .issuer {
        display: flex;
        margin-left: 10px;
        width 50%;
        .issuer-people {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .issuer-group {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #DDAF59;
          line-height: 18px;
        }
      }
      .Submit-time {
        display: flex;
        width 50%;
        .sub-date {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .sub-time {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
    }
    .In-middle {
      display: flex;
      height: 36px;
      background: #FAFAFA;
      border-radius: 2px;
      margin-left 10px;
      margin-right  10px;

      .middle-blue {
        width:0;
        height:0;
        border-width:30px 30px 0 0;
        border-style:solid;
        border-color:#77B9FF transparent transparent transparent;

      }
      .On-middle {
        display:flex;
        width:calc(100vw - 74px)
        align-items: center
        padding: 8px 10px 8px 24px;
        justify-content: space-between;
        .middle-report {
          font-size: 14px;
          font-family: PingFangTC-Regular, PingFangTC;
          font-weight: 400;
          color: #333333;
          line-height: 20px;
        }
        .middle-view {
          font-size: 12px;
          font-family: PingFangTC-Regular, PingFangTC;
          font-weight: 400;
          color: #DDAF59;
          line-height: 14px;
        }
      }

    }
    .circle {
      display: flex;
      margin: 12px -6px 0 -6px;
      justify-content: space-between;
      align-items: center
      .circle-left {
        width: 12px;
        height: 12px;
        background: #F6F6F6;
        border-radius: 80%
      }
      .middle-line {
        width:calc(100vw - 45px)
        height: 0.5px;
        border: 0.5px solid #EEEEEE;
      }
      .circle-right {
        width: 12px;
        height: 12px;
        background: #F6F6F6;
        border-radius: 80%
      }
    }
    .Audit-date {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .audit {
        width 50%
        display: flex;
        margin-left: 10px;
        margin-bottom: 11px;
        .audit-text {
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
        .audit-time {
          margin-left: 6px;
          font-size: 13px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 18px;
        }
      }
      .audit-button {
        width 50%
        display: flex;
        margin-bottom: 6px;
        .rejected {
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #DDAF59;


            padding: 8px 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #DDAF59;
            line-height: 12px;


        }
        .through {
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #DDAF59;
          margin-left: 15px;
          border-radius: 4px;
          border: 1px solid #DDAF59;

            padding: 8px 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #DDAF59;
            line-height: 12px;


        }
        .click {
          background: #DDAF59;
          border-radius: 4px;
          border: 1px solid #DDAF59;

            padding: 8px 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 12px;

        }
      }
    }

  }

}
.Fixed-box {
  position:fixed;
  bottom: 0;
  height: 50px;
  width 100%
  background: #FAFAFA;
  display: flex;
  align-items:center;
  overflow:hidden;

  .cancel {

    padding: 18px 77px 16px 78.5px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 16px

  }
  .determine {

    padding: 18px 77px 16px 78.5px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 16px;
    background: #DDAF59;
  }
}
.Hide-gray {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4)
  position: fixed;
  top:0;
  left: 0;
  z-index: 100;
  .white-box {
    margin-top:281px;
    margin-left: 37px;
    margin-right: 38px;
    width: 300px;
    height: 105px;
    background: #FFFFFF;
    border-radius: 4px;
    .you-sure {
      background: #FFFFFF;
      border-radius: 4px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      text-align: center;
      padding: 20px 80px 14px 80px

    }
    .line {
      height: 0.5px;
      background: #EEEEEE;
    }
    .choose-box {
      display: flex;
      background: #FFFFFF;

      border-radius: 4px;
      .cancel {
        width 50%
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 20px;
        padding 15px 60px 16px 60px;
        border-right: 0.5px solid #EEEEEE;
      }
      .Determine {
        width 50%
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #DDAF59;
        line-height: 20px;
        padding 15px 62px 16px 60.5px
      }
    }
  }

}
</style>
