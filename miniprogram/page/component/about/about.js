// pages/about/about.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
            des:' 本程序由原生小程序开发，数据存储等处理全部使用小程序云开发功能。\n\n 开发此程序的初衷仅为方便生活以及时间得到充分利用，灵感的起源：由于疫情的爆发，最近各位都需要戴好口罩出门，又或者不出远门为国家为社会作出奉献，但前提是要解决自身温饱问题。\n\n 从产品设计到UI再到所有页面逻辑代码由于一人完成，还有许多功能待完善并且自身能力有限，有所不足请谅解。'
      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {

      },

      onReady: function () {

      },
      //复制
      copy(e) {
            wx.setClipboardData({
                  data: e.currentTarget.dataset.copy,
                  success: res => {
                        wx.showToast({
                              title: '复制' + e.currentTarget.dataset.name + '成功',
                              icon: 'success',
                              duration: 1000,
                        })
                  }
            })
      },
      /**
       * 生命周期函数--监听页面显示
       */
      onShow: function () {

      },

      /**
       * 生命周期函数--监听页面隐藏
       */
      onHide: function () {

      },

      /**
       * 生命周期函数--监听页面卸载
       */
      onUnload: function () {

      },

      /**
       * 页面相关事件处理函数--监听用户下拉动作
       */
      onPullDownRefresh: function () {

      },

      /**
       * 页面上拉触底事件的处理函数
       */
      onReachBottom: function () {

      },

      /**
       * 用户点击右上角分享
       */
      onShareAppMessage: function () {

      }
})