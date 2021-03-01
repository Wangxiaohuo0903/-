// pages/song.js
let touchDotX = 0;//X按下时坐标
let touchDotY = 0;//y按下时坐标
let interval;//计时器
let time = 0;//从按下到松开共多少时间*100
let mydata={
  "data_all":[
    {    date: '27',
    song_words:'“我的音乐注定小众，我写的歌注定不会红”',
    song_name:'《不红》 许飞',
    song_notion:'许飞出道多年后，不再写《寻水的鱼》这样虽然传唱度高但过于流行烂大街的歌，转而和作词人董玉方联手推出许多写小人物的歌曲《回家吃饭》《他们没有发财》，而这种对音乐的选择确实也很难大众化，在歌曲里许飞自己一边打鼓一边唱着“不爱才是真正的贫穷”或许能为在热爱路上奔走的你多一份鼓励',},
    {    date: '28',
    song_words:'“有一种预感，路的终点是迷宫”',
    song_name:'《亡命之徒》  纵贯线',
    song_notion:'  这是罗大佑，张震岳，周华健，李宗盛曾经组的一个传奇乐队的代表作，四位主唱各自的念白，有令人舒缓的念白，也有对生活的抱怨，最后的从清唱到吉他与鼓渐渐加进去升华，希望这首歌让你短暂的释放内心的压力与迷惘，再重新走回路上',},
    {    date: '29',
    song_words:'“我穿越伤害，最美的答案，是你的爱”',
    song_name:'《刺鸟》 飞儿乐团',
    song_notion:'这是我在飞儿乐团最喜欢的一首歌曲，这也被乐迷戏称为是新主唱永远无法复现的歌曲，整首歌都贯穿着一种悲壮的飞蛾扑火的对爱情的热烈，大量的高音，快速的递进一直让人的情绪随着歌曲走高,',},
    {    date: '30',
    song_words:'“就在我放弃所有相聚的机会，突然前方出现一匹狼提醒着我说”',
    song_name:'《银河冬令恋曲》  昏鸦',
    song_notion:'一个小众乐队的一首节奏很有趣的歌，节奏感极强的鼓声，时而有点dark的氛围时而又非常明快，中间的间奏也是令人耳目一新，节奏的高低难以预料却又非常舒服，这也是许多摇滚乐队追求的以不媚俗的旋律却依然让人听感舒服，想要尝试新的音乐风格的朋友可以试试',}
  ]
};
let day=1;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: mydata.data_all[day].date,
    song_words:mydata.data_all[day].song_words,
    song_name:mydata.data_all[day].song_name,
    song_notion:mydata.data_all[day].song_notion,

  },
 
  // 触摸开始事件
    touchStart: function(e) {
      touchDotX = e.touches[0].pageX; // 获取触摸时的原点
      touchDotY = e.touches[0].pageY;
      // 使用js计时器记录时间    
      interval = setInterval(function() {
        time++;
      }, 100);
    },
    // 触摸结束事件
    touchEnd: function(e) {
      let touchMoveX = e.changedTouches[0].pageX;
      let touchMoveY = e.changedTouches[0].pageY;
      let tmX = touchMoveX - touchDotX;
      let tmY = touchMoveY - touchDotY;
      if (time < 20) {
        let absX = Math.abs(tmX);
        let absY = Math.abs(tmY);
        if (absX > 2 * absY) {
          if (tmX<0){
            console.log("左滑=====")
            day=day-1;
            this.setData({
              date: mydata.data_all[day].date,
              song_words:mydata.data_all[day].song_words,
              song_name:mydata.data_all[day].song_name,
              song_notion:mydata.data_all[day].song_notion,
            })
          }else{
            console.log("右滑=====")
            day=day+1;
            this.setData({
              date: mydata.data_all[day].date,
              song_words:mydata.data_all[day].song_words,
              song_name:mydata.data_all[day].song_name,
              song_notion:mydata.data_all[day].song_notion,
                })
          }
        }
        if (absY > absX * 2 && tmY<0) {
          console.log("上滑动=====")
        }
      }
      clearInterval(interval); // 清除setInterval
      time = 0;
    },

  /**
   * 生命周期函数--监听页面加载
   */
  timeback(){
    this.setData({
  date:'29',
    })

  },

  onLoad: function (options) {
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