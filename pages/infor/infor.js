// pages/infor/infor.js
import dayjs from '../../lib/dayjs/dayjs.min'
import area from '../../lib/area/area'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:'',
    birthday:'',
    city:'',
    gender:'',
    nickname:'',
    province:'',
    show:'',
    show1:'',
    show2:'',
    show4:'',
    value:'',
    columns: ['保密', '男', '女'],
    currentDate: new Date().getTime(),
    birthday1:'',
    minDate: '',
    maxDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}`;
      } else if (type === 'month') {
        return `${value}`;
      }
      return value;
    },
    areaList:area
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  //昵称显示显示dialog
  open(){
    this.setData({
      show:true
    })
  },
  //昵称更改赋值
  onChange(e){
    this.setData({
      value : e.detail
    })
  },
  nickname(){
    this.setData({
      nickname:this.data.value
    })
  },
  //性别显示弹出层
  open1(){
    this.setData({
      show1:true
    })
  },
  //生日弹出
  open3(){
    let data = Date("2010-01-01")
    let minDate = data.valueOf()
    this.setData({
      show2:true,
      minDate:minDate
    })
  },
  //城市弹出
  open4(){
    this.setData({
      show3:true
    })
  },
  //返回关闭show1
  cancel1(){
    this.setData({
      show1:false
    })
  },
  //确认关闭show1
  confirm1(e){
    this.setData({
      show1:false,
      gender:e.detail.value
    })
  },
  //返回关闭show1
  cancel(){
    this.setData({
      show2:false
    })
  },
  //确认关闭show1
  confirm(e){
    this.setData({
      show2:false,
      birthday:dayjs(e.detail*1).format('YYYY-MM-DD')
    })
  },
  //返回关闭show1
  cancel2(){
    this.setData({
      show3:false
    })
  },
  //地区确认关闭
  confirm2(e){
    console.log(e)
    this.setData({
      city:`${e.detail.values[0].name}${e.detail.values[1].name}`,
      show3:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //转化省份
    let province_list = this.data.areaList.province_list
    let arr= []
    for(let i in province_list){
      let obj = {}
      obj.code = i
      obj.name = province_list[i]
      arr.push(obj)
    }
    let ass= arr.filter(item => {
      return item.code === options.province
    })
    //转化城市
    let city_list = this.data.areaList.city_list
    let abb= []
    for(let i in city_list){
      let obk = {}
      obk.code = i
      obk.name = city_list[i]
      abb.push(obk)
    }
    let add= abb.filter(item => {
      return item.code === options.city
    })
    //拼接城市
    let detailcity = `${ass[0].name}${add[0].name}`
    console.log(add)
    if(options.gender == 0){
      this.setData({
        gender:"保密",
      })
    }
    else if(options.gender == 1){
      this.setData({
        gender:"男",
      })
    }
    else{
      this.setData({
        gender:"女",
      })
    }
    this.setData({
      avatarUrl:options.avatarUrl,
      birthday:dayjs(options.birthday*1).format('YYYY-MM-DD'),
      city:detailcity,
      nickname:options.nickname,
      province:options.province
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