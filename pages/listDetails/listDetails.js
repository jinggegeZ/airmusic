const {
  default: api
} = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlist: {},
    tracks: []
  },
  //点击单个歌曲去往播放页面
  gomusicplaying(e) {
    console.log(e)
    let tracks = e.currentTarget.dataset.tracks
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.item.id
    let name = e.currentTarget.dataset.item.name
    wx.navigateTo({
      url: `../../pages/musicPlaying/musicPlaying?&name=${name}&index=${index}&id=${id}`,
    })
    wx.setStorageSync('tracks', tracks)

  },

  //点击全部歌曲去播放页面
  goMusicplaying(e) {
    console.log(e)
    let tracks = e.currentTarget.dataset.tracks
    wx.setStorageSync('tracks', tracks)
    wx.navigateTo({
      url: '../../pages/musicPlaying/musicPlaying',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    api.getplaylist(id)
      .then(res => {
        this.setData({
          playlist: res.playlist,
          tracks: res.playlist.tracks
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