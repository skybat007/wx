//question.js
var util = require('../../utils/util.js')

var desc = '为更好了解企业人才需求、更好服务于企业，感谢您百忙之中对我们工作的大力支持，请您认真填写以下内容、并留下宝贵'
  + '意见，我们将非常感谢并十分重视。帜讯将与贵企风雨同舟、成为您值得信赖的合作伙伴！\n'
var warn = '（请于2016.2.20日前填写完成并提交）\n'

var result = {
  "success": true,
  "errorCode": 0,
  "desc": "",
  "data": [
    {
      "id": 1,
      "type": "radio",
      "isNeed": 1,
      "question": "您在人员招募的过程中最常遇到的问题是",
      "list": [
        {
          "option": "A",
          "value": "应聘人数少"
        },
        {
          "option": "B",
          "value": "专业不对口"
        },
        {
          "option": "C",
          "value": "其他"
        }
      ]
    },
    {
      "id": 2,
      "type": "radio",
      "isNeed": 1,
      "question": "您认为贵公司在人员招募时最注重的是",
      "list": [
        {
          "option": "A",
          "value": "心态"
        },
        {
          "option": "B",
          "value": "能力"
        },
        {
          "option": "C",
          "value": "为人处事"
        }
        ,
        {
          "option": "C",
          "value": "学历"
        }
      ]
    },
    {
      "id": 3,
      "type": "radio",
      "isNeed": 1,
      "question": "您认为目前应届毕业生最大的弱点是",
      "list": [
        {
          "option": "A",
          "value": "稳定性差"
        },
        {
          "option": "B",
          "value": "无工作经验"
        },
        {
          "option": "C",
          "value": "自控力差"
        }
      ]
    },
    {
      "id": 4,
      "type": "radio",
      "isNeed": 1,
      "question": "假如您是求职者，选择工作您首先考虑",
      "list": [
        {
          "option": "A",
          "value": "兴趣爱好"
        },
        {
          "option": "B",
          "value": "工作稳定性"
        },
        {
          "option": "C",
          "value": "薪酬待遇"
        }
        ,
        {
          "option": "C",
          "value": "发展空间"
        }
      ]
    },
    {
      "id": 5,
      "type": "radio",
      "isNeed": 1,
      "question": "您之前常用的招聘方式是",
      "list": [
        {
          "option": "A",
          "value": "网络招聘"
        },
        {
          "option": "B",
          "value": "校园招聘"
        },
        {
          "option": "C",
          "value": "员工推荐"
        }
        ,
        {
          "option": "C",
          "value": "招聘会"
        }
      ]
    },
    {
      "id": 6,
      "type": "radio",
      "isNeed": 1,
      "question": "贵公司是否愿意招聘应届毕业生",
      "list": [
        {
          "option": "A",
          "value": "非常愿意"
        },
        {
          "option": "B",
          "value": "愿意"
        },
        {
          "option": "C",
          "value": "不愿意"
        }
      ]
    },
    {
      "id": 7,
      "type": "radio",
      "isNeed": 1,
      "question": "您认为公司最吸引求职者的是什么",
      "list": [
        {
          "option": "A",
          "value": "薪酬福利"
        },
        {
          "option": "B",
          "value": "发展前景"
        },
        {
          "option": "C",
          "value": "企业规模"
        },
        {
          "option": "D",
          "value": "个人锻炼"
        }
      ]
    },
    {
      "id": 8,
      "type": "radio",
      "isNeed": 1,
      "question": "贵公司可提供给新入职毕业生的薪资待遇",
      "list": [
        {
          "option": "A",
          "value": "1800-2000"
        },
        {
          "option": "B",
          "value": "2000--2500"
        },
        {
          "option": "C",
          "value": "2500-3000"
        },
        {
          "option": "D",
          "value": "3000以上"
        }
      ]
    },
    {
      "id": 9,
      "type": "radio",
      "isNeed": 1,
      "question": "贵公司招聘外贸业务员较钟情于",
      "list": [
        {
          "option": "A",
          "value": "男"
        },
        {
          "option": "B",
          "value": "女"
        },
        {
          "option": "C",
          "value": "均可"
        },
        {
          "option": "D",
          "value": "视情况而定"
        }
      ]
    },
    {
      "id": 10,
      "type": "multi",
      "isNeed": 1,
      "question": "员工在职培训，最想学习哪方面技能",
      "list": [
        {
          "option": "A",
          "value": "产品管理"
        },
        {
          "option": "B",
          "value": "交易管理"
        },
        {
          "option": "C",
          "value": "营销推广"
        },
        {
          "option": "D",
          "value": "订单处理"
        },
        {
          "option": "E",
          "value": "数据分析"
        },
        {
          "option": "F",
          "value": "社交礼仪"
        },
        {
          "option": "G",
          "value": "以上全选"
        }
      ]
    }, {
      "id": 11,
      "type": "multi",
      "isNeed": 1,
      "question": "贵公司目前的电商团队所遇到的问题",
      "list": [
        {
          "option": "A",
          "value": "专业人才缺乏"
        },
        {
          "option": "B",
          "value": "无成熟的管理制度"
        },
        {
          "option": "C",
          "value": "无订单无业绩"
        }
      ]
    }, {
      "id": 12,
      "type": "multi",
      "isNeed": 1,
      "question": "贵公司现已开通哪些平台",
      "list": [
        {
          "option": "A",
          "value": "Alibaba"
        },
        {
          "option": "B",
          "value": "amazon"
        },
        {
          "option": "C",
          "value": "ebay"
        },
        {
          "option": "D",
          "value": "以上全选"
        }
      ]
    },
    {
      "id": 13,
      "type": "input",
      "isNeed": 1,
      "question": "如与新航线合作，贵公司能够接受的最佳服务费用为_________ 元/人"
    },
    {
      "id": 14,
      "type": "input",
      "isNeed": 1,
      "question": "贵公司对新航线高校合作、培训、人才输送三方面有何改进建议，如有我们将非常感谢并重视："
    },
    {
      "id": 15,
      "type": "input",
      "isNeed": 1,
      "question": "您的手机号码："
    },
    {
      "id": 16,
      "type": "input",
      "isNeed": 1,
      "question": "您的E-mail地址："
    }
  ]
}

var qaList = result.data

Page({
  data: {
    desc: desc,
    warn: warn,
    qaList: qaList
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShareAppMessage: function () {
    return {
      title: '问卷调查分享',
      path: '/pages/question/question?id=123'
    }
  },
  formSubmit: function(e) {  
    var that = this;  
    var formData = e.detail.value;   
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    /*wx.request({  
      url: 'http://test.com:8080/test/socket.php?msg=2',  
      data: formData,  
      header: {  
          'Content-Type': 'application/json'  
      },  
      success: function(res) {  
        console.log(res.data)  
        that.modalTap();  
      }  
    })  
    */
    wx.redirectTo({
      url: '../result/result'
    })
  }
})


