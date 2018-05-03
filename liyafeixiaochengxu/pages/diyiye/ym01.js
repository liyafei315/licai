// pages/diyiye/ym01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // text:"这是一个页面"  
    name: '请填写您的姓名',
    tel: '请填写您的手机号',
    addreValue: 0,
    addreRange: [ '长沙市芙蓉区', '长沙市天心区', '长沙市雨花区', '长沙市开福区', '长沙市岳麓区'],
    door: '例如：xx小区x单元xxx室',
    dateValue: '　预约日期',
    timeValue: '　时间',
    price: '7',
    sexs: [
      { name: 'man', value: '男士　　', checked: 'true' },
      { name: 'woman', value: '女士' }
    ],
    sign: Date.now() + '0' + Math.ceil(Math.random() * 10000)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      keywords: options.keywords
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
  addrePickerBindchange: function (e) {
    this.setData({
      addreValue: e.detail.value
    })
  },
  areaPickerBindchange: function (e) {
    this.setData({
      areaValue: e.detail.value
    })
  },
  timePickerBindchange: function (e) {
    this.setData({
      timeValue: e.detail.value
    })
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
  formSubmit: function (e) {
    var warn = "";//弹框时提示的内容  
    var flag = true;//判断信息输入是否完整  
    //判断的顺序依次是：姓名-手机号-地址-具体地址-预约日期-预约时间-开荒面积  
    if (e.detail.value.name == "") {
      warn = "请填写您的姓名！";
    } else if (e.detail.value.tel == "") {
      warn = "请填写您的手机号！";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(e.detail.value.tel))) {
      warn = "手机号格式不正确";
    } else if (e.detail.value.addre == '0') {
      warn = "请选择您的地址"
    } else if (e.detail.value.door == "") {
      warn = "请输入您的具体地址";
    } else if (e.detail.value.date == '　预约日期') {
      warn = "请选择预约日期";
    } else if (e.detail.value.time == '　时间') {
      warn = "请选择预约时间";
    } else if (e.detail.value.area == '') {
      warn = "请输入您的开荒面积";
    } else {
      flag = false;//若必要信息都填写，则不用弹框，且页面可以进行跳转  
      var that = this;
      //？后面跟的是需要传递到下一个页面的参数  
      wx.navigateTo({
        url: '../ym02/ym02?area=' + e.detail.value.area + '&tel=' + e.detail.value.tel + "&addre=" + that.data.addreRange[e.detail.value.addre] + "&door=" + e.detail.value.door
      })
      console.log('form发生了submit事件，携带数据为：', e.detail.value);
    }
    //如果信息填写不完整，弹出输入框  
    if (flag == true) {
      wx.showModal({
        title: '提示',
        content: warn
      })
    }
  }
})