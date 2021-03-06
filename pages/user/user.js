
const app = getApp();
var http = require('../../utils/httpHelper.js');
wx.showShareMenu({
  withShareTicket: true
})
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
  },

  onLoad: function () {
    var that = this;
    wx.showLoading({
      title: '登录中...',
      mask: true,
    })

    login.dologin(function(res){
      console.log(res);
      that.setData({
        userInfo: res
      })
      wx.hideLoading()
    })
},

onShareAppMessage: function (res) {
  return {
    title: '洞悉微客',
    path: 'pages/index/index',
    success: function (res) {
      // 转发成功
      wx.showModal({
        content: '转发成功',
        showCancel: false,
      })
    }
  }
},

toOrderList:function(e){
  var type = e.currentTarget.dataset.type
  wx.navigateTo({
    url: '../orderList/orderList?type='+type,
  })
},

toAll:function(e){
    wx.navigateTo({
      url: '../allIncome/allIncome',
    })
},

toEstimate:function(e){
    wx.navigateTo({
      url: '../estimate/estimate',
    })
  },
  toMyfans:function(e){
    wx.navigateTo({
      url: '../myfans/myfans',
    })
  },
  toUpdate: function (e) {
    wx.navigateTo({
      url: '../update/update',
    })
  }
})