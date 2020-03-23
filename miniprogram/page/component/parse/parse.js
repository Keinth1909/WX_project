const app = getApp()
const db = wx.cloud.database();
const config = require("../../../config.js");
const _ = db.command;
Page({

      /**
       * 页面的初始数据
       */
      data: {
            nomore: false,
            list:[],
            num:0,
      },

      /**
       * 生命周期函数--监听页面加载
       */
  
      go(e) {
            wx.navigateTo({
                  url: e.currentTarget.dataset.go
            })
      },
      reflect(e){
        wx.showToast({
          title: '暂未开发此功能，还有待完善',
          icon: 'none'
        })
      },
      gotop() {
            wx.pageScrollTo({
                  scrollTop: 0
            })
      },
      //监测屏幕滚动
      onPageScroll: function (e) {
            this.setData({
                  scrollTop: parseInt((e.scrollTop) * wx.getSystemInfoSync().pixelRatio)
            })
      },
})