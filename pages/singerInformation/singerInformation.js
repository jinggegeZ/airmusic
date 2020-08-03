const {
  default: api
} = require("../../http/api")
import dayjs from '../../lib/dayjs/dayjs.min'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:''
  },
  //主页点击播放
    gomusicplaying(e) {
      console.log(e)
      let tracks = e.currentTarget.dataset.hotSongs
      let index = e.currentTarget.dataset.index
      let id = e.currentTarget.dataset.item.id
      let name = e.currentTarget.dataset.item.name
      wx.navigateTo({
        url: `../../pages/musicPlaying/musicPlaying?&name=${name}&index=${index}&id=${id}`,
      })
      wx.setStorageSync('tracks', tracks)
  
    },
     //歌单点击播放
     gomusicplaying(e) {
      console.log(e)
      let tracks = e.currentTarget.dataset.hotSongs1
      let index = e.currentTarget.dataset.index
      let id = e.currentTarget.dataset.item.id
      console.log(id)
      let name = e.currentTarget.dataset.item.name
      wx.navigateTo({
        url: `../../pages/musicPlaying/musicPlaying?&name=${name}&index=${index}&id=${id}`,
      })
      wx.setStorageSync('tracks', tracks)
  
    },
     //点击全部歌曲去播放页面
  goMusicplaying(e) {
    console.log(e)
    let tracks = e.currentTarget.dataset.hotSongs
    wx.setStorageSync('tracks', tracks)
    wx.navigateTo({
      url: '../../pages/musicPlaying/musicPlaying',
    })
  },
  //点击mv图片去往mv播放界面
  goliveshow(e){
    console.log(e)
    let mvid = e.currentTarget.dataset.item.mv
    wx.navigateTo({
      url: `../../pages/mvplay/mvplay?mvid=${mvid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    //获取传过来的id获取歌手部分信息和描述
    api.getartist(id)
      .then(res => {
        this.setData({
          artist: res.artist,
          hotSongs:res.hotSongs.slice(0,5),
          hotSongs1:res.hotSongs
        })
        console.log(this.data.hotSongs)
      })
      .catch(err => {})

      //获取专辑
      api.getaartistalbum(id)
      .then(res => {
        res.hotAlbums.map(item => {
          item.publishTime = dayjs(item.publishTime).format('DD/MM/YYYY')
        })
        this.setData({
          hotAlbum:res.hotAlbums
        })
      }).catch(err => {})
      //获取mv
      api.getmv(id).then(res => {
        this.setData({
          mvs:res.mvs
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