const {
  default: api
} = require("../../http/api")
const play = wx.getBackgroundAudioManager()
Page({
  onChange(event) {
   let value = event.detail
   this.setData({
     move:value
   })
   play.seek(this.data.move)
  },
  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    flag1: false,
    title: '',
    arrId: [],
    ID: '',
    index: '',
    b: 1,
    lyric: [],
    lyricArray: [],
    //设置滚动高度
    scrollTop: 0,
    //给一个变量记录当前播放位置
    currentIndex: 0,
    //设置最大值100。
    max: 100,
    //给value赋值
    value: '',
    playTime: "00:00", // 当前播放时间
    endTime: "00:00", // 歌曲总时长（结束时间）
  },
  //点击图片查看歌词
  viewLyrics() {
    this.setData({
      flag: false
    })
  },
  //点击歌词返回图片
  viewPicture() {
    this.setData({
      flag: true,
      a: 1,
      indexs: '',
      id: '',
      ids: '',
    })
  },
  //播放按钮
  play() {
    this.setData({
      a: 2,
      flag1: true
    })
    play.play()
  },
  // 暂停按钮
  zanting() {
    this.setData({
      a: 1,
      flag1: false
    })
    play.pause()
  },
  //播放模式
  //单曲循环
  b2() {
    this.setData({
      b: 3
    })
    wx.showToast({
      title: '随机播放',
    })
  },
  //随机播放
  b3() {
    this.setData({
      b: 4
    })
    wx.showToast({
      title: '心动模式...',
    })
  },
  //心动模式
  b4() {
    this.setData({
      b: 1
    })
    wx.showToast({
      title: '列表循环',
    })
  },
  //列表循环
  b1() {
    this.setData({
      b: 2
    })
    wx.showToast({
      title: '单曲循环',
    })
  },

  //上一曲
  changeleft() {
    let indexs = this.data.index == 0 ? this.data.tracks.length : this.data.index - 1
    console.log(indexs)
    let somg = this.data.tracks[this.data.indexs]
    api.getsong(somg.id).then(res => {

      if (res.data.length > 0) {
        play.stop()
        play.title = somg.name
        play.src = res.data[0].url
      }
    }).catch(err => {})
    this.getlyric(somg.id)
    this.getsongdetails(somg.id)
    play.play()
  },
  //下一曲
  changeright() {
    let indexss = this.data.index == this.data.tracks.length - 1 ? 0 : this.data.index + 1
    this.setData({
      indexss: indexss
    })
    let somg = this.data.tracks[this.data.indexss]
    api.getsong(somg.id).then(res => {
      console.log(res)
      if (res.data.length > 0) {
        play.stop()
        play.title = somg.name
        play.src = res.data[0].url
      }
    }).catch(err => {})
    this.getlyric(somg.id)
    this.getsongdetails(somg.id)
    play.play()
  },
  //获取歌曲url
  geturl(id) {
    api.getsong(id).then(res => {
      if (res.data.length > 0) {
        play.src = res.data[0].url
      }
    }).catch(err => {})
  },
  //获取歌词
  getlyric(id) {
    api.lyric(id)
      .then(res => {
        this.setData({
          lyric: res.lrc.lyric
        })
        if (res.data.nolyric != true) {
          //调用解析歌词的方法
          let result = this.analysisOfLyrics(this.data.lyric)
          //调用去掉空歌词的方法
          let finalResult = this.sliceNUll(result)
          //定义变量
          this.setData({
            lyricArray: finalResult
          })
        }
      })
      .catch(err => {})
  },
  // 解析歌词
  analysisOfLyrics(lyric) {
    //定义一个数组，存储时间和歌词，让歌词时间一一对应
    let lyricResult = [];
    //将所有歌词组成的字符串组成每句歌词的数据
    //使用split（切割）对换行字符进行切割（\n,\r回车，\t一个type键位）
    //split:切割返回数组，slice:截取
    let lyricArray = lyric.split("\n")
    //判断最后一个元素（歌词和时间）是否为空？如果为空就删除
    if (lyricArray[lyricArray.length - 1] === "") {
      //删除元素
      lyricArray.pop();
    }
    //时间与歌词分别存储
    //时间满足格式【xx:xx:xxxx】规律 ，正则表达式检测符合模式的的文本
    //书写时间正则表达式,\[：]使用转义表示中括号 数字【0-9】=== \d (m):的字符串为m个
    //点 . ：匹配除了换行以外的任意单个字符
    let pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/g

    //遍历数组的每一个元素 for each循环
    //v:数组中的每一个元素，i:数组中元素对应的下标，a:正在遍历的数组
    lyricArray.forEach(function (v, i, a) {
      //使用正则表达式进行正则转换
      let relyric = v.replace(pattern, "");

      //提取时间
      let time = v.match(pattern) //歌曲播放进度是按照分秒进行渲染的【00：00：000】-> 00:00.000（字符串）-> 0秒
      // 去除中括号
      //js中最后一个元素的的长度的事length-1或者-1 ，java只能是length-1
      //判断time是否为空
      if (time != null) {
        let result = time[0].slice(1, -1)
        //对result进行切割，得到一个数组
        let timearry = result.split(":");
        //将时间转为秒
        let finalTime = parseFloat(timearry[0]) * 60 + parseFloat(timearry[1])
        //将歌词和对应的时间添加到数组
        lyricResult.push([finalTime, relyric])
      }
    })
    //返回数组
    return lyricResult;
  },
  //去掉空歌词
  sliceNUll(lyricArray) {
    //定义一个数组
    let result = []
    //遍历每一元素
    for (let i = 0; i < lyricArray.length; i++) {
      //判断是否为空
      if (lyricArray[i][1] != "") {
        result.push(lyricArray[i])
      }
    }
    return result
  },
  //获取歌曲详情
  getsongdetails(id) {
    api.songdetail(id).then(res => {
      console.log(res)
      this.setData({
        al: res.songs[0],
        ar: res.songs[0].ar[0]
      })
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    play.title = options.name
    this.setData({
      id: options.id,
      indexs: options.index,
      tracks: wx.getStorageSync('tracks'),
      flag1: true,
      a:2
    })
    if (this.data.id) {
      this.geturl(this.data.id)
      this.getlyric(this.data.id)
      this.getsongdetails(this.data.id)
    }
    else{
      console.log(11)
      this.geturl(this.data.tracks[0].id)
      this.getlyric(this.data.tracks[0].id)
      this.getsongdetails(this.data.tracks[0].id)
    }
    //监听播放进度更新事件
    play.onTimeUpdate(() => {
      // 获取当前时间
      let currentTime = play.currentTime
      //取出歌曲总时间
      let duration = play.duration
      // 将播放进度转换成为分和秒 分数直接除60 ，秒数则是/60 取余
      // 计算播放时长分钟数
      let playMinutes = Math.floor(currentTime / 60);
      // 计算播放时长秒钟数
      let playSeconds = Math.floor(currentTime % 60);
      // 计算总时长分钟数
      let endMinutes = Math.floor(duration / 60);
      // 计算总时长秒钟数
      let endSeconds = Math.floor(duration % 60)
      // 判断分秒数是小于10
      let max = duration
      let move = currentTime
      if (playMinutes < 10) {
        playMinutes = "0" + playMinutes
      }
      if (playSeconds < 10) {
        playSeconds = "0" + playSeconds
      }
      if (endMinutes < 10) {
        endMinutes = "0" + endMinutes
      }
      if (endSeconds < 10) {
        endSeconds = "0" + endSeconds
      }

      this.setData({
        playTime: playMinutes + ":" + playSeconds,
        endTime: endMinutes + ":" + endSeconds,
        max: max,
        move: move
      })

      //取出歌词数组
      // let that = this
      let lyricArray = this.data.lyricArray
      //遍历数组
      for (let i = 0; i < lyricArray.length; i++) {
        //将每个歌曲进度进行数组中的比较，在当前时间到下一句歌词之间的范围之内
        if (currentTime >= lyricArray[i][0] && currentTime < lyricArray[i + 1][0]) {
          //设置当前播放行号
          this.setData({
            currentIndex: i
          })
          break;
        }
      }
      //计算滚动条的位置
      if (this.data.currentIndex >= 9 && this.data.currentIndex <= lyricArray.length - 13) {
        this.setData({
          scrollTop: (this.data.currentIndex - 8) * 30
        })
      }
    })
    //监听歌曲播放结束事件
    play.onEnded(() => {
      if (this.data.b === 1) {
        this.changeright()
      } 
      if (this.data.b === 2) {
        //将当前id进行重新设置
        this.setData({
          id: options.id

        })
        //重新设置播放歌曲题目
        play.title = options.title
        //清空scroolTop,和currentIndex
        this.setData({
          currentIndex: 0,
          scrollTop: 0
        })
        //调用方法获取歌曲信息歌词和歌曲详情
        this.geturl(this.data.id)
        this.getlyric(this.data.id)
        this.getsongdetails(this.data.id)
        //播放歌曲
        play.play()
      }
      if(this.data.b === 3){

      }
      if(this.data.b === 4) {

      }
    })
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