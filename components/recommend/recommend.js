// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //去推荐
    gogoods(){
      wx.navigateTo({
        url: '../../pages/goods/goods',
      })
    },
    //去歌单
    gosongSheet(){
      wx.navigateTo({
        url: '../../pages/songSheet/songSheet',
      })
    },
    //去排行
    goranking(){
      wx.navigateTo({
        url: '../../pages/ranking/ranking',
      })
    },
    //去电台
    goradioStation(){
      wx.navigateTo({
        url: '../../pages/radioStation/radioStation',
      })
    },
    //去直播
    goliveshow(){
      wx.navigateTo({
        url: '../../pages/liveshow/liveshow',
      })
    }
  }
  
})
