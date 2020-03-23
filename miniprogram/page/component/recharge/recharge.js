const app = getApp()
const db = wx.cloud.database();
const config = require("../../../config.js");
const _ = db.command;
Page({

      /**
       * 页面的初始数据
       */
      data: {
            num: ''
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function(options) {

      },
      //金额输入，因为js对小数乘除很容易出问题，所以干脆就取整
      numInput(e) {
            this.data.num = e.detail.value
      },
      //支付提交
      paypost() {
            let that = this;
            let num = that.data.num;
            if (!num > 0) {
                  wx.showToast({
                        title: '请输入金额',
                        icon: 'none'
                  })
                  return false;
            }
            wx.showLoading({
                  title: '正在充值',
            });
            // 利用云开发接口，调用云函数发起订单
            wx.cloud.callFunction({
                 
                  success: res => {
                        console.log(res)
                        wx.hideLoading();
                        that.pay(res.result, num)
                  },
                  fail(e) {
                        wx.hideLoading();
                        wx.showToast({
                              title: '充值失败，请及时反馈或稍后再试',
                              icon: 'none'
                        })
                  }
            });
      },
   
})