const { default: api } = require("../../http/api")

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    obj:{},
    arr:[],
    arr2:[]
  },
  //去登录页
  gologin(){
    wx.navigateTo({
      url: '../../pages/login/login',
    })
  },
  //去修改资料页
  goinfor(){
    let nickname = this.data.obj.profile.nickname
    let gender = this.data.obj.profile.gender
    let birthday = this.data.obj.profile.birthday
    let province = this.data.obj.profile.province
    let city = this.data.obj.profile.city
    let signature = this.data.obj.profile.signature
    let avatarUrl =  this.data.obj.profile.avatarUrl
    wx.navigateTo({
      url: `/pages/infor/infor?nickname=${nickname}&province=${province}&gender=${gender}&city=${city}&birthday=${birthday}&csignatureity=${signature}&avatarUrl=${avatarUrl}`,
    })
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
    let id = wx.getStorageSync('id')
    if(id){
      this.setData({
        id:id
      })
    }
    //获取用户信息请求
    api.detail(this.data.id).then(res => {
      console.log(res)
      this.setData({
        obj:res
      })
    }).catch(err => {})
    // 获取用户信息 , 歌单，收藏，mv, dj 数量
    api.playlist(this.data.id).then(res => {
      console.log(res)
       this.setData({
         arr:res.playlist
       })
     }).catch(err => {
       console.log(err)
     })
     // 获取用户动态
     api.event(this.data.id).then(res => {
      console.log(res)
       this.setData({
         arr2:res.events
       })
     }).catch(err => {
       console.log(err)
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