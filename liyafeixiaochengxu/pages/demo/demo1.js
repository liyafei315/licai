// pages/demo/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    imgUrls: [
      '../image/banner1.jpg',
      '../image/banner2.jpg',
      '../image/banner3.jpg',
      '../image/banner4.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,//自动时长
    duration: 100,//
    circular:true,
    dotColor:"#fff",
    dotActColor:"#ccc"

  },
  ImgPath01:function(e){
    console.log(e.currentTarget.dataset.src);
    var url = e.currentTarget.dataset.src;
    // wx.getImageInfo({
    //   src: url,
    //   success: function (res) {
    //     console.log(res.width)
    //     console.log(res.height)
    //   }
    // })
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },
  qiehuan:function(){
    wx.navigateTo({
       url: '../diyiye/ym01'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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
  
  },
  demofun:function (){
  console.log(1);
  wx.getSetting({
    success(res) {
        if (!res.authSetting['scope.record']) {
            wx.authorize({
                scope: 'scope.record',
                success() {
                    // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                    wx.startRecord()
                }
            })
        }
    }
})
  },
zhendong:function(){
  wx.vibrateLong();//长震动
  // wx.vibrateShort();//短震动
  // wx.onUserCaptureScreen(function (res) {
  //   console.log('用户截屏了')
  // })
  }
  //登录需要调取后台
  // xinxi:function(){
  //   wx.login({
  //     success: function (res) {
  //       if (res.code) {
  //         //发起网络请求
  //         wx.request({
  //           url: 'https://test.com/onLogin',
  //           data: {
  //             code: res.code
  //           }
  //         })
  //       } else {
  //         console.log('登录失败！' + res.errMsg)
  //       }
  //     }
  //   });

  //}
  ,
changeIndicatorDots: function (e) {
  this.setData({
    indicatorDots: !this.data.indicatorDots
  })
},
changeAutoplay: function (e) {
  this.setData({
    autoplay: !this.data.autoplay
  })
},
intervalChange: function (e) {
  this.setData({
    interval: e.detail.value
  })
},
durationChange: function (e) {
  this.setData({
    duration: e.detail.value
  })
}

})