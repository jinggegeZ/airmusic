const { default: api } = require("../../http/api")

// pages/liveshow/liveshow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvid: "",
    url:'',
    num:10
  },
 //点击播放图片
 gomvplay(e){
  console.log(e)
  let mvid = e.currentTarget.dataset.item.id
  wx.navigateTo({
    url: `../../pages/mvplay/mvplay?mvid=${mvid}`,
  })
 },
 //获取最新mv
 getnewmv(){
  api.getmvFirst().then(res => {
    this.setData({
      newmv:res.data
    })
  }).catch(err => {})
 },
 //获取网易推荐
 getwangyi(){
  api.getexclusive().then(res => {
    console.log(res)
    this.setData({
      wangyimv:res.data
    })
  }).catch(err => {})
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取推荐mv
    api.getpersonalized().then(res => {
      this.setData({
        mlogs:res.result
      })
    }).catch(err => {})
    //获取最新mv
    this.getnewmv()
    //获取网易推荐mv
   this.getwangyi()
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