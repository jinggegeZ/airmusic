const {
  default: api
} = require("../../http/api")

// pages/airclound/airclound.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    arr1: [],
    arr2: [],
    arr3: [],
    arr4: [],
    arr5: [],
    hotseatch: [],
    acc: [],
    value: '',
    value1: '',
    flag: false,
    pchohled: '搜索',
    keyword: '',
    type: ''
  },
  //首页搜索
  onSearch(event) {
    this.setData({
      // value:event.detail
      flag: true
    })
  },
  //热搜建议搜索
  onSearch1(event) {
    this.setData({
      value1: event.detail,
    })
    if (this.data.value1) {
      api.getsuggest(this.data.value1)
        .then(res => {
          this.setData({
            abb: res.result.allMatch
          })
        }).catch(err => {
          console.log(err)
        })
    }

  },
  //返回上一页
  goback() {
    this.setData({
      flag: false
    })
  },
  //搜索框去搜索详情页
  gosearch(e) {
    this.setData({
      keyword: e.currentTarget.dataset.keyword,
      type: e.currentTarget.dataset.type
    })
    let acc = this.data.acc
    let a = acc.findIndex(item => {
      return item == e.currentTarget.dataset.keyword
    })
    if (a < 0) {
      acc.push(e.currentTarget.dataset.keyword)
      wx.setStorageSync('acc', acc)
    }
    wx.navigateTo({
      url: `../../pages/search/search?keyword=${this.data.keyword}&type=${this.data.type}&flag=0`,
    })
  },
  //去搜索详情页
  goserach(e) {
    console.log(e)
    let searchWord = e.currentTarget.dataset.item.searchWord
    this.setData({
      searchWord:e.currentTarget.dataset.item.searchWord
    })
    wx.navigateTo({
      url:`../../pages/search/search?searchWord=${searchWord}&flag=1`,
    })
  },


  //历史记录去搜索页
  gosearchto(e){
    console.log(e)
    this.setData({
      lisiword:e.currentTarget.dataset.item
    })
    wx.navigateTo({
      url:`../../pages/search/search?lisiword=${this.data.lisiword}&flag=2`,
    })
  },
  //删除历史记录
  godelte() {
    wx.showModal({
      title: '提示',
      content: '您是否要全部删除？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('acc')
          // let acc = wx.getStorageSync('acc')
          // if (acc) {
          //   this.setData({
          //     acc: acc
          //   })
          // }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //去我的页面
  gomy() {
    wx.navigateTo({
      url: '../../pages/my/my',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getbanner().then(res => {
      this.setData({
        arr: res.banners
      })
    }).catch(err => {})

    //获取推荐音乐
    api.getrecommend().then(res => {
      res.result.map(item => {
        item.playCount = parseInt(item.playCount / 10000)
      })
      this.setData({
        arr1: res.result
      })
    }).catch(err => {})

    //获取首页热搜榜
    api.gethotseatch().then(res => {
      this.setData({
        hotseatch: res.data
      })
    }).catch(err => {
      console.log(err)
    })

    //获取默认搜索关键词
    api.getdefault().then(res => {
      this.setData({
        value: res.data.showKeyword
      })
    }).catch(err => {})

    //获取新音乐
    api.getnewsong1().then(res => {
      this.setData({
        arr2: res.result.slice(0, 6)
      })
    }).catch(err => {})

    //获取首页新碟
    api.getfirstalbum().then(res => {
      this.setData({
        arr3: res.albums.slice(0, 3)
      })
    }).catch(err => {})

    //新歌
    api.getnewsong().then(res => {
      console.log(res)
      this.setData({
        arr4: res.data.slice(0, 3)
      })
    }).catch(err => {})
    //推荐电台
    api.restiations().then(res => {
      this.setData({
        arr5: res.result
      })
    }).catch(err => {})
    //推荐节目
    api.getrecom().then(res => {
      this.setData({
        arr6: res.programs.slice(0, 6)
      })
    }).catch(err => {})
    //acc赋值
    let acc = wx.getStorageSync('acc')
    if (acc) {
      this.setData({
        acc: acc
      })
    }
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