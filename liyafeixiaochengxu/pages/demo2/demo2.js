// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pathLY:'url',
    tempFilePaths: ''  
  
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
    if (wx.createCameraContext()) {
      this.cameraContext = wx.createCameraContext('myCamera')
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示  
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }  
  },
  startTakePhoto: function () {
    this.cameraContext.takePhoto({

    })
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
  /*
  录音功能
  */
  luyin:function(){
    const recorderManager = wx.getRecorderManager()

    recorderManager.onStart(() => {
      console.log('recorder start')
    })
    recorderManager.onPause(() => {
      console.log('recorder pause')
    })
    recorderManager.onStop((res) => {
      console.log('recorder stop', res)
      const { tempFilePath } = res
      console.log('lyf' + res.tempFilePath);
      pathLY = res.tempFilePath;
    })
    recorderManager.onFrameRecorded((res) => {
      const { frameBuffer } = res
      console.log('frameBuffer.byteLength', frameBuffer.byteLength)
    })

    const options = {
      duration: 5000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    }

    recorderManager.start(options)
  },
  bofang:function(){
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.autoplay = true
    innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  zanting:function(planA){
    const innerAudioContext = planA.currentTarget.dataset.src
    innerAudioContext.onPause(() => {
      console.log('播放暂停')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },
  pause:function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  } ,
  ImgPath01: function (e) {
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
      urls: url // 需要预览的图片http链接列表
    })
  },
  getLocalImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 这里无论用户是从相册选择还是直接用相机拍摄，拍摄完成后的图片临时路径都会传递进来
        // app.startOperating("保存中")
        var filePath = res.tempFilePaths[0];
        _this.setData({
          tempFilePaths: filePath
        })  
        var session_key = wx.getStorageSync('session_key');
        // 这里顺道展示一下如何将上传上来的文件返回给后端，就是调用wx.uploadFile函数
        // wx.uploadFile({
        //   url: app.globalData.url + '/home/upload/uploadFile/session_key/' + session_key,
        //   filePath: filePath,
        //   name: 'file',
        //   success: function (res) {
        //     app.stopOperating();
        //     // 下面的处理其实是跟我自己的业务逻辑有关
        //     var data = JSON.parse(res.data);
        //     if (parseInt(data.status) === 1) {
        //       app.showSuccess('文件保存成功');
        //     } else {
        //       app.showError("文件保存失败");
        //     }
        //   }
        // })
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    })
  },
  // 摄像功能
  getLocalVideo: function () {
    var that = this;
    var session_key = wx.getStorageSync('session_key');
    wx.chooseVideo({
      maxDuration: 10,
      success: function (res1) {
        app.startOperating("上传中")
        // 这个就是最终拍摄视频的临时路径了
        var tempFilePath = res1.tempFilePath;
      },
      fail: function () {
        console.error("获取本地视频时出错");
      }
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9  
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有  
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有  
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })
  }  


})