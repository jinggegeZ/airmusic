// components/newMusic/newMusic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr2:{
      type:Array
    }
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
    //去新歌
    gonewsong(){
      wx.navigateTo({
        url: '../../pages/morenewsong/morenewsong',
      })
    },
 //点击单个歌曲去往播放页面
 gomusicplaying(e) {
  console.log(e)
  let tracks = e.currentTarget.dataset.arr2
  let index = e.currentTarget.dataset.index
  let id = e.currentTarget.dataset.item.id
  let name = e.currentTarget.dataset.arr2[index].name
  wx.navigateTo({
    url: `../../pages/musicPlaying/musicPlaying?&name=${name}&index=${index}&id=${id}`,
  })
  wx.setStorageSync('tracks', tracks)

},
  }
})
