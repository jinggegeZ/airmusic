// pages/ranking/ranking.js
const { default: api } = require("../../http/api")
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
    //获取榜单信息
    api.toplist().then(res => {
      console.log(res)
      this.setData({
        arr:res.list.slice(0,3),
        arr1:res.list.slice(0,4)
      })
      console.log(this.data.arr1)
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