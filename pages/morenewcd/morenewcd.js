const { default: api } = require("../../http/api")

// pages/morenewcd/morenewcd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    arr1:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //获取首页上架数据
  api.getfirstalbum().then(res => {
    console.log(res)
    this.setData({
      arr:res.albums.slice(3,6)
    })
  }).catch(err => {})
  //获取推荐新碟
    api.getalbum().then(res => {
      console.log(res)
      this.setData({
        arr1:res.albums
      })
    }).catch(err => {
      console.log(err)
    })
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