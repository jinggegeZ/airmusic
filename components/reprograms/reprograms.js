// components/reprograms/reprograms.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr6:{
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
   //去歌单详情页
   golistdetail(e){
    console.log(e)
    let id = e.currentTarget.dataset.item.id
    // wx.navigateTo({
    //   url: `../../pages/listDetails/listDetails?id=${id}`,
    // })


  }
  }
})
