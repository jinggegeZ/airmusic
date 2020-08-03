const {
  default: api
} = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:[],
    arr1:[],
    arr2:[],
    arr3:[],
    arr4:[]
  },
  //点击标签
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
    if(event.detail.name === 0){
      api.getsong1().then(res => {
        this.setData({
          arr:res.data.slice(0,20)
        })
      }).catch(err => {
        console.log(err)
      })
    }
    if(event.detail.name === 1){
      api.getsong()
      .then(res => {
        this.setData({
          arr1:res.data.slice(0,20)
        })
      })
      .catch(err => {
        console.log(err)
      })
    }
    if(event.detail.name === 2){
      api.getsong2().then(res => {
       this.setData({
         arr2:res.data.slice(0,20)
       })

      }).catch(err => {})
    }
    if(event.detail.name === 3){
      api.getsong4().then(res => {
        this.setData({
          arr3:res.data.slice(0,20)
        })
      }).catch(err => {})
    }
    if(event.detail.name === 4){
      api.getsong3().then(res => {
        this.setData({
          arr4:res.data.slice(0,20)
        })
      }).catch(err => {})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getsong1().then(res => {
      console.log(res)
      this.setData({
        arr:res.data.slice(0,20)
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