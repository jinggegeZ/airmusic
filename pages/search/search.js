const {
  default: api
} = require("../../http/api")

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    value: "",
    arr: [],
    arr1: {},
    arr2: {},
    arr3: [],
    id: '',
    Id: '',
    //单曲
    song: {},
    songs: [],
    //歌单
    playList: {},
    playLists: [],
    //视频
    video: {},
    videos: [],
    //想关搜索
    sim_querys: [],
    //mlog
    mlog: {},
    mlogs: [],
    album: {},
    artist: {},
    keywords: '',
    type: '',
    searchWord: '',
    lisiword: '',
    flag: "0"

  },
  //搜索详情页输入框输入的值
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
  },

  //返回上一页面
  goback() {
    wx.navigateBack({
      delta: 1,
    })
  },
  //去歌手详情页
  gosingerInformation(e) {
    console.log(e)
    this.setData({
      Id: e.currentTarget.dataset.id
    })
    wx.navigateTo({
      url: `../../pages/singerInformation/singerInformation?id=${this.data.Id}`,
    })
  },
 //去专辑详情页
 goalbum(e){
   console.log(e)
   let picId = e.currentTarget.dataset.arr1.id
  wx.navigateTo({
    url: `../../pages/Album/Album?id=${picId}`,
  })
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let keywords = options.keyword
    let type = options.type
    let searchWord = options.searchWord
    let lisiword = options.lisiword
    let flag = options.flag
    if (flag === '0') {
      this.setData({
        keywords: keywords,
        value: options.keyword,
        type: type,
      })
    } else if (flag === '1') {
      //热搜榜传过来的值
      this.setData({
        keywords: searchWord,
        value: searchWord,
      })
    } else if (flag === '2') {
      //历史记录传过来的值
      this.setData({
        keywords: lisiword,
        value: lisiword
      })
    }


    //获取传过来的名字的视频
  if(flag === '0'){
    api.search({
      keywords: this.data.keywords,
      type: 1014
    }).then(res => {
      this.setData({
        arr4: res.result.videos,
      })
    }).catch(err => {})
  }
  if(flag === '2'){
    api.search({
      keywords: lisiword,
      type: 1014
    }).then(res => {
      this.setData({
        arr4: res.result.videos,
      })
    }).catch(err => {})
  }
  if(flag ==='1'){
    api.search({
      keywords: searchWord,
      type: 1014
    }).then(res => {
      this.setData({
        arr4: res.result.videos,
      })
    }).catch(err => {})
  }

    //获取传过来的名字的歌单
  if(flag ==='0'){
    api.search({
      keywords: this.data.keywords,
      type: 1000
    }).then(res => {
      this.setData({
        arr3: res.result.playlists,
      })
    }).catch(err => {})
  }
  if(flag === '2') {
    api.search({
      keywords: lisiword,
      type: 1000
    }).then(res => {
      this.setData({
        arr3: res.result.playlists,
      })
    }).catch(err => {})
  }
  if(flag ==='1'){
    api.search({
      keywords: searchWord,
      type: 1000
    }).then(res => {
      this.setData({
        arr3: res.result.playlists,
      })
    }).catch(err => {})
  }
  //默认获取传过来的名字的单曲
if(flag === '0'){
  api.search({
    keywords: this.data.keywords,
    type: this.data.type
  })
  .then(res => {
    this.setData({
      arr: res.result.songs
    })
  }).catch(err => {})
}
if(flag === '2'){
  api.search({
    keywords: lisiword,
    type: this.data.type
  })
  .then(res => {
    this.setData({
      arr: res.result.songs
    })
  }).catch(err => {})
}
if(flag === '1'){
  api.search({
    keywords: searchWord,
    type: this.data.type
  })
  .then(res => {
    this.setData({
      arr: res.result.songs
    })
  }).catch(err => {})
}
if(flag ==='0'){
   //获取传过来的名字的信息
 api.search({
  keywords: this.data.keywords,
  type: 100
})
.then(res => {
  this.setData({
    arr2: res.result.artists[0],
    id: res.result.artists[0].id
  })
  //获取传过来的名字的信息拿到id获取歌手部分信息和描述
  api.getartist(this.data.id)
    .then(res => {
      this.setData({
        artist: res.artist
      })
    })
    .catch(err => {})

}).catch(err => {})
}
if(flag ==='2'){
   //获取传过来的名字的信息
 api.search({
  keywords: lisiword,
  type: 100
})
.then(res => {
  this.setData({
    arr2: res.result.artists[0],
    id: res.result.artists[0].id
  })
  //获取传过来的名字的信息拿到id获取歌手部分信息和描述
  api.getartist(this.data.id)
    .then(res => {
      this.setData({
        artist: res.artist
      })
    })
    .catch(err => {})

}).catch(err => {})
}
if(flag ==='1'){
  //获取传过来的名字的信息
api.search({
 keywords: searchWord,
 type: 100
})
.then(res => {
 this.setData({
   arr2: res.result.artists[0],
   id: res.result.artists[0].id
 })
 //获取传过来的名字的信息拿到id获取歌手部分信息和描述
 api.getartist(this.data.id)
   .then(res => {
     this.setData({
       artist: res.artist
     })
   })
   .catch(err => {})

}).catch(err => {})
}



    //获取传过来的名字的专辑
if(flag ==='0'){
  api.search({
    keywords: this.data.keywords,
    type: 10
  }).then(res => {
    this.setData({
      arr1: res.result.albums[1]
    })
  }).catch(err => {})
}
if(flag === '2'){
  api.search({
    keywords: lisiword,
    type: 10
  }).then(res => {
    this.setData({
      arr1: res.result.albums[1]
    })
  }).catch(err => {})
}
if(flag === '1'){
  api.search({
    keywords: searchWord,
    type: 10
  }).then(res => {
    this.setData({
      arr1: res.result.albums[1]
    })
  }).catch(err => {})
}


    //传过来的名字获取综合信息
    if (flag === '0') {
      api.search({
        keywords: this.data.keywords,
        type: 1018
      }).then(res => {
        this.setData({
          // 专辑
          albums: res.result.albums,
          //类似歌手
          artist: res.result.artist,
          //mlog
          mlog: res.result.mlog,
          mlogs: res.result.mlog.mlogs,
          //playList
          playList: res.result.playList,
          playLists: res.result.playList.playLists,
          //song
          song: res.result.song,
          //songs
          songs: res.result.song.songs.slice(0, 6),
          //sim_querys
          sim_querys: res.result.sim_query.sim_querys,
          //talk
          talk: res.result.talk,
          //user
          user: res.result.user,
          //video
          video: res.result.video,
          videos: res.result.video.videos
        })
      }).catch(err => {})
    }
    //历史记录传过来的值
    if (flag === '2') {
      api.search({
        keywords: lisiword,
        type: 1018
      }).then(res => {
        this.setData({
          // 专辑
          albums: res.result.albums,
          //类似歌手
          artist: res.result.artist,
          //mlog
          mlog: res.result.mlog,
          mlogs: res.result.mlog.mlogs,
          //playList
          playList: res.result.playList,
          playLists: res.result.playList.playLists,
          //song
          song: res.result.song,
          //songs
          songs: res.result.song.songs.slice(0, 6),
          //sim_querys
          sim_querys: res.result.sim_query.sim_querys,
          //talk
          talk: res.result.talk,
          //user
          user: res.result.user,
          //video
          video: res.result.video,
          videos: res.result.video.videos
        })
      }).catch(err => {})
    } else if (flag === '1') {
      api.search({
        keywords: searchWord,
        type: 1018
      }).then(res => {
        this.setData({
          // 专辑
          albums: res.result.albums,
          //类似歌手
          artist: res.result.artist,
          //mlog
          mlog: res.result.mlog,
          mlogs: res.result.mlog.mlogs,
          //playList
          playList: res.result.playList,
          playLists: res.result.playList.playLists,
          //song
          song: res.result.song,
          //songs
          songs: res.result.song.songs.slice(0, 6),
          //sim_querys
          sim_querys: res.result.sim_query.sim_querys,
          //talk
          talk: res.result.talk,
          //user
          user: res.result.user,
          //video
          video: res.result.video,
          videos: res.result.video.videos
        })
      }).catch(err => {})
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