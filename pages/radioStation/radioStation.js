const { default: api } = require("../../http/api")

// pages/radioStation/radioStation.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    background: ['red', 'blue', 'yellow','gereen','skyblue','orange'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    indicatorColor: '#ffffff',
    indicatorActivecolor: '#C20C0C',
    arr:[],
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[],
    arr5:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //23.电台banner
    api.getbannet().then(res => {
      this.setData({
        arr: res.data
      })
    }).catch(err => {})
    //21.推荐电台
    api.restiations().then(res => {
      this.setData({
        arr1:res.result.slice(0,3)
      })
    }).catch(err => {})
    //25.获取电台付费精选
    api.paygift().then(res => {
      this.setData({
        arr2:res.data.list.slice(0,3)
      })
    }).catch(err => {})
    //26.获取创作翻唱
    api.getradiohot().then(res => {
      this.setData({
        arr3:res.djRadios.slice(0,6)
      })
    }).catch(err => {})
    //27.获取电台分类
    api.getcatelist()
    .then(res => {
      console.log(res)
      this.setData({
        arr4:res.categories.slice(0,6),
        arr5:res.categories.slice(6)
      })
    }).catch(err => {})
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