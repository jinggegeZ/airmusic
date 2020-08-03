//封装请求接口
const {
  default: api
} = require("../../http/api")
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr:{
      type:Array
    }
  },
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    background: ['red', 'blue', 'yellow'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    indicatorColor: '#ffffff',
    indicatorActivecolor: '#C20C0C',
    arr:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
  }
})