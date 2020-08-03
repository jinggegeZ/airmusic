// pages/singer/singer.js
const { default: api } = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot:{},
    china:{},
    type:-1,
    area:7
  },

  // 选项卡
  onChange(event){
    if(event.detail.name == 2){
      this.setData({
        area:96
      })
      //歌手
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
      console.log(res)
     this.setData({
       china:res.artists,
     })
   }).catch(err => {})
    }
    if(event.detail.name == 3){
      this.setData({
        area:8
      })
      //歌手
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
      console.log(res)
     this.setData({
       china:res.artists,
     })
   }).catch(err => {})
    }
    if(event.detail.name == 4){
      this.setData({
        area:16
      })
      //歌手
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
      console.log(res)
     this.setData({
       china:res.artists,
     })
   }).catch(err => {})
    }
    if(event.detail.name == 5){
      this.setData({
        area:0
      })
      //歌手
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
      console.log(res)
     this.setData({
       china:res.artists,
     })
   }).catch(err => {})
    }
  },
  // 男
  male(){
    this.setData({
      type:1,
    })
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
      console.log(res)
     this.setData({
       china:res.artists,
     })
   }).catch(err => {})
  },

// female
female(){
  this.setData({
    type:2,
  })
  api.male({
    type:this.data.type,
    area:this.data.area
  }).then(res => {
    console.log(res)
   this.setData({
     china:res.artists,
   })
 }).catch(err => {})
},

// bank
bank(){
  this.setData({
    type:3,
  })
  api.male({
    type:this.data.type,
    area:this.data.area
  }).then(res => {
    console.log(res)
   this.setData({
     china:res.artists,
   })
 }).catch(err => {})
},

// 歌手详情
gostart(e){
  console.log(e)
  let id = e.currentTarget.dataset.item.id
  this.setData({
    id:e.currentTarget.dataset.item.id
  })
  wx.navigateTo({
    url: `../../pages/singerInformation/singerInformation?id=${id}`,
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     // 热门歌手
     api.hotsinger().then(res => {
      this.setData({
        hot:res.artists,
      })
    }).catch(err => {})

    // //歌手
    api.male({
      type:this.data.type,
      area:this.data.area
    }).then(res => {
     this.setData({
       china:res.artists,
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