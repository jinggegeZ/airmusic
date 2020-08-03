const { default: api } = require("../../http/api")
var util = require('../../utils/util.js');
var dayjs = require('../../lib/dayjs/dayjs.min')
// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取每日歌曲
    api.getgoods().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    let time = util.formatTime(new Date());
     //dayjs解析时间
    let t = dayjs(time).format('DD/MM')
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: t
    });
   
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