const fly = require  ('./index')

export default{
// 1.获取首页轮播
getbanner(){
  return fly.get(`/banner?type=2`)
},
//2.获取每日推荐
getrecommend(){
  return fly.get(`/personalized?limit=6`)
},
//3.获取推荐新歌
getnewsong1(){
  return fly.get(`/personalized/newsong`)
},
//4.获取推荐新碟
getalbum(){
  return fly.get(`/top/album?offset=0&limit=50`)
},
//5.获取首页新碟上架数据
getfirstalbum(){
  return fly.get(`/album/newest`)
},
//6.华语新歌
getnewsong(){
  return fly.get(`/top/song?type=7`)
},
//7.全部新歌
getsong1(){
  return fly.get(`/top/song?type=0`)
},
//8.欧美新歌
getsong2(){
  return fly.get(`/top/song?type=96`)
},
//9.日本新歌
getsong3(){
  return fly.get(`/top/song?type=8`)
},
//10.韩国新歌
getsong4(){
  return fly.get(`/top/song?type=16`)
},
//11.推荐节目
getrecom(){
  return fly.get(`/program/recommend`)
},
//12.获取每日推荐歌曲
getgoods(){
  return fly.get(`/recommend/songs`)
},
//13.获取每日推荐歌单
getgoodss(){
  return fly.get (`/recommend/resource`)
},
//14.获取热门歌单
gethot(){
  return fly.get(`/playlist/hot`)
},
//15.网友精选歌单(轮播取前三个)
gethotpeople(){
  return fly.get(`/top/playlist`)
},
//16.获取精品歌单
highquality(){
  return fly.get(`/top/playlist/highquality`)
},
//17.获取最热歌单
getmosthot(){
  return fly.get(`/top/playlist?order=hot`)
},
//18.获取华语歌单
getchsong(){
  return fly.get(`/playlist/catlist?cat=华语`)
},
//19.获取榜单
toplist(){
  return fly.get(`/toplist/detail`)
},
//20.获取热门电台
gethotdj(){
  return fly.get(`/dj/hot`)
},
//21.推荐电台
restiations(){
  return fly.get(`/personalized/djprogram`)
},
//22.获取推荐电台
getrecommendfm(){
  return fly.get(`/dj/recommend`)
},
//23.电台banner
getbannet(){
  return fly.get(`/dj/banner`)
},
//24.获取付费电台
getpaydj(){
  return fly.get(`/dj/toplist/pay?limit=30`)
},
//25.获取电台付费精选
paygift(){
  return fly.get(`/dj/paygift?limit=10`)
},
//26.获取创作翻唱
getradiohot(){
  return fly.get(`/dj/radio/hot?cateId=2001`)
},
//27.获取电台分类
getcatelist(){
  return fly.get(`/dj/catelist`)
},
//28.获取推荐视频列表
getcategory(){
  return fly.get(`/video/timeline/recommend`)
},
//29.手机号登录请求
login({phone,password}){
  return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
},
//30.邮箱登录
elogin({email,password}){
  return fly.get(`/login?email=${email}&password=${password}`)
},
//31.退出登录
logout(){
  return fly.get(`/logout`)
},
//33.获取用户信息
detail(uid){
  return fly.get(`/user/detail?uid=${uid}`)
},
//34.验证码  
captcha({phone}){
  return fly.get(`/captchant?phone=${phone}`)
},
//35.注册
register({phone,password,captcha,nickname}){
  return fly.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`)
},
//36. 获取用户歌单
playlist(uid){
  return fly.get(`/user/playlist?uid=${uid}`)
},
// 37.获取用户动态
event(uid){
  return fly.get(`/user/event?uid=${uid}`)
},
//38.搜索页默认搜素
  search({keywords,type}){
  return fly.get(`/search?keywords=${keywords}&type=${type}`)
},

//39.获取热搜榜
gethotseatch(){
  return fly.get(`/search/hot/detail`)
},
//40.获取默认关键词
getdefault(){
  return fly.get(`/search/default`)
},
//41.搜索建议
getsuggest(keywords){
  return fly.get(`/search/suggest?keywords=${keywords}&type=mobile`)
},
//42.歌手信息
getartist(id){
  return fly.get(`/artists?id=${id}`)
},
// 43.热门歌手
hotsinger(){
  return fly.get(`/top/artists`)
},
//44.歌手
male({type,area}){
  return fly.get(`/artist/list?type=${type}&area=${area}`)
},
//45.获取专辑
getaartistalbum(id){
  return fly.get(`/artist/album?id=${id}`)
},
//46. 获取歌手 mv
getmv(id){
  return fly.get(`/artist/mv?id=${id}`)
},
//47.获取歌单详情
getplaylist(id){
  return fly.get(`/playlist/detail?id=${id}`)
},
//48.获取专辑详情
album(id){
  return fly.get(`/album?id=${id}`)
},
//49.获取音乐url
getsong(id){
  return fly.get(`/song/url?id=${id}`)
},
// 50.获取歌曲详情  
songdetail(ids){
  return fly.get(`/song/detail?ids=${ids}`)
},
//51. 获取歌词 /lyric
lyric(id){
  return fly.get(`/lyric?id=${id}`)
},
//52. 歌曲评论
comment(id){
  return fly.get(`/comment/music?id=${id}`)
},
//53.根据歌名获取mv播放地址
getMvid(id){
  return fly.get(`/mv/url?id=${id}`)
},
//54.获取推荐mv
getpersonalized(){
  return fly.get(`/personalized/mv`)
},
//55.获取最新mv
getmvFirst(){
  return fly.get(`/mv/first?limit=10`)
},
//56.获取网易推荐mv
getexclusive(){
  return fly.get(`/mv/exclusive/rcmd?limit=10`)
}















}
