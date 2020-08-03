const { default: api } = require("../../http/api")

// pages/songSheet/songSheet.js
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
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    arr:[],
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[],
    active: 1
  },
  // 切换标签更换标签
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
    if(event.detail.name === 0){
      api.gethotpeople().then(res => {
        res.playlists.map(item => {
          item.playCount = parseInt(item.playCount / 10000)
        })
        console.log(res)
        this.setData({
          arr:res.playlists.slice(0,3),
          arr1:res.playlists.slice(3)
        })
      }).catch(err => {})
    }
    if(event.detail.name === 1){
      api.getmosthot().then(res => {
        res.playlists.map(item => {
          item.playCount = parseInt(item.playCount / 10000)
        })
        console.log(res)
        this.setData({
          arr3:res.playlists
        })
      }).catch(err => {})
    }
    if(event.detail.name === 2){
      api.highquality().then(res => {
        res.playlists.map(item => {
          item.playCount = parseInt(item.playCount / 10000)
        })
        console.log(res)
        this.setData({
          arr2:res.playlists
          
        })
      }).catch(err => {})
    }
    if(event.detail.name === 3){
      api.highquality().then(res => {
        res.playlists.map(item => {
          item.playCount = parseInt(item.playCount / 10000)
        })
        console.log(res)
        this.setData({
          arr4:res.playlists
          
        })
      }).catch(err => {})
    }
  },
   //去歌单详情页
   golistdetail(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `../../pages/listDetails/listDetails?id=${id}`,
    })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.gethotpeople().then(res => {
      res.playlists.map(item => {
        item.playCount = parseInt(item.playCount / 10000)
      })
      console.log(res)
      this.setData({
        arr:res.playlists.slice(0,3),
        arr1:res.playlists.slice(3)
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