// components/new/new.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr4:{
      type:Array
    },
    arr3:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag :0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    die(){
      this.setData({
        flag:0
      })
    },
    song(){
      this.setData({
        flag :1
      })
    },
    //去更多新歌
    gomorenewsong(){
      wx.navigateTo({
        url: '../../pages/morenewsong/morenewsong',
      })
    },
  //去更多新碟
  gomorenewcd(){
    wx.navigateTo({
      url: '../../pages/morenewcd/morenewcd',
    })
  },
     //去歌单详情页
     goalbum(e){
      console.log(e)
      let id = e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: `../../pages/Album/Album?id=${id}`,
      })
    },
       //点击单个歌曲去往播放页面
       gomusicplaying(e) {
        console.log(e)
        let tracks = e.currentTarget.dataset.arr4
        let index = e.currentTarget.dataset.index
        let id = e.currentTarget.dataset.item.id
        let name = e.currentTarget.dataset.arr4[index].album.name
        wx.navigateTo({
          url: `../../pages/musicPlaying/musicPlaying?&name=${name}&index=${index}&id=${id}`,
        })
        wx.setStorageSync('tracks', tracks)
    
      },
  },

})
