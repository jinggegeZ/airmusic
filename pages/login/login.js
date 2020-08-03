const {
  default: api
} = require("../../http/api")

// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animated: 'true',
    phone: "",
    password: '',
    id: ""
  },
  goregister() {
    wx.navigateTo({
      url: '../register/register',
    })
  },
  //phone赋值
  phone(e) {
    this.setData({
      phone: e.detail
    })
  },
  //给password赋值
  password(e) {
    this.setData({
      password: e.detail
    })
  },
  //立即登录
  login(){
    if(this.data.phone === ''){
      wx.showToast({
        title: '请输入手机号',
      })

    }
    else{
      api.login({phone:this.data.phone,password:this.data.password})
      .then(res => {
        if(res.code ===200){
          wx.showToast({
            title: '登录成功',
          })
          this.setData({
            id:res.profile.userId
          })
          wx.setStorageSync('id', this.data.id)
          wx.switchTab({
            url: '../../pages/my/my',
          })
        }
        else{
          wx.showToast({
            title: 'res.msg',
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '欢迎登录网易云',
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