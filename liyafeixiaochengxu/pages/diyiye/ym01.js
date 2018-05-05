// pages/diyiye/ym01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['大中国', '美国', '巴西', '小日本'],
    index: 0,
    date: '2016-12-20',
    time: '11:19',
    allValue: ''
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
    // console.log(1);
    console.log(1);
    // wx.startPullDownRefresh();
    // wx.showLoading({
    //   title: '玩命加载中',
    //   icon: 'success',//成功显示图标
    //   duration: 9000//时间
    // });
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.stopPullDownRefresh();
      wx.hideLoading();
      wx.hideNavigationBarLoading();
    }, 2000);


    console.log(2);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉加载!");
    // wx.showLoading({
    //   title: '玩命加载中',
    //   icon: 'success',//成功显示图标
    //   duration: 2000//时间
    // })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // formSubmit: function (e) {
  //   var warn = "";//弹框时提示的内容  
  //   var flag = true;//判断信息输入是否完整  
  //   //判断的顺序依次是：姓名-手机号-地址-具体地址-预约日期-预约时间-开荒面积  
  //   if (e.detail.value.name == "") {
  //     warn = "请填写您的姓名！";
  //   } else if (e.detail.value.tel == "") {
  //     warn = "请填写您的手机号！";
  //   } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
  //     warn = "手机号格式不正确";
  //   } else if (e.detail.value.addre == '0') {
  //     warn = "请选择您的地址"
  //   } else if (e.detail.value.door == "") {
  //     warn = "请输入您的具体地址";
  //   } else if (e.detail.value.date == '　预约日期') {
  //     warn = "请选择预约日期";
  //   } else if (e.detail.value.time == '　时间') {
  //     warn = "请选择预约时间";
  //   } else if (e.detail.value.area == '') {
  //     warn = "请输入您的开荒面积";
  //   } else {
  //     flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
  //     var that = this;
  //     //？后面跟的是需要传递到下一个页面的参数  
  //     wx.navigateTo({
  //       url: '../ym02/ym02?area=' + e.detail.value.area + '&tel=' + e.detail.value.tel + "&addre=" + that.data.addreRange[e.detail.value.addre] + "&door=" + e.detail.value.door
  //     })
  //     console.log('form发生了submit事件，携带数据为：', e.detail.value);
  //   }
  //   //如果信息填写不完整，弹出输入框  
  //   if (flag == true) {
  //     wx.showModal({
  //       title: '提示',
  //       content: warn
  //     })
  //   }
  // }
  //表单提交按钮
  formSubmit: function (e) {
    var warn = "请输入数据";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  

    if (e.detail.value.input == '') {
      warn = "请输入内容"
    } else if (e.detail.value.group == '') {
      warn = "选择性别"
    } else if (e.detail.value.checkbox.length == 0) {
      warn = "请选择多选"
    } else if (e.detail.value.switch == false) {
      warn = "请把开关打开"
    }  else {
      flag = false
    }
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //如果信息填写不完整，弹出输入框  

    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    } else {
      var _this = this
      wx.showModal({
        title: '提示',
        content: '确认提交吗?',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            _this.setData({//传入到data参数中,或者交互后台
              allValue: e.detail.value
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  //表单重置按钮
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue: ''
    })
  },
  //---------------------与选择器相关的方法
  //地区选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //时间选择
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
})