// pages/diyiye/ym01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  // onPullDownRefresh: function () {
  //   console.log(1);
  //   wx.showLoading({
  //     title: '玩命加载中',
  //   })  
  //   wx.showNavigationBarLoading();  
  //   wx.startPullDownRefresh()
  //   setTimeout(100);
  //   wx.stopPullDownRefresh()
  // },

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
  setTimeout(function(){
    wx.stopPullDownRefresh();
    wx.hideLoading();
    wx.hideNavigationBarLoading();
  },2000);
  
 
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
  
  }
})