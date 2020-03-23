const config = require("../../config.js");
Page({
  
  data: {
    imgUrls: [
      '/image/bg1.jpg',
      '/image/b1.jpg',
      '/image/b3.jpg',
      '/image/bg4.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 2000,
    duration: 800,
    food: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //置顶
  gotop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
    wx.showToast({
      title:'已经到顶了_(:з」∠)_',
      duration:500,
      icon:'none'
    })
  },
  //监测屏幕滚动
  onPageScroll: function (e) {
    this.setData({
      scrollTop: parseInt((e.scrollTop) * wx.getSystemInfoSync().pixelRatio)
    })
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
    this.setData({
      food: []

    })
   
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '正在加载',
      duration: 300
    });
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    
    return {
      title: JSON.parse(config.data).share_title,
      imageUrl: JSON.parse(config.data).share_img,
      path: '/page/start/start'
    }
  },

})