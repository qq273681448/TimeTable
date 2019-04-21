// pages/set/set.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    focus2: false,
    focus3: false,
    focus4: false,
    focus5: false,
    kcmc: "",
    didian:"",
    startzhou:"",
    endzhou:"",
    kcxx:""
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      kcmc: e.detail.value
    })

  },
  bindButtonTap2: function () {
    this.setData({
      focus2: true
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      didian: e.detail.value
    })
  },
  bindButtonTap3: function () {
    this.setData({
      focus3: true
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      skcd: e.detail.value
    })
  },
  bindButtonTap4: function () {
    this.setData({
      focus4: true
    })
  },
  bindKeyInput4: function (e) {
    this.setData({
      startzhou: e.detail.value
    })
  },
  bindButtonTap5: function () {
    this.setData({
      focus5: true
    })
  },
  bindKeyInput5: function (e) {
    this.setData({
      endzhou: e.detail.value
    })
  },

  //用于保存修改的数据
  save:function(){
    wx.setStorageSync('kcxx', this.data.kcmc + "  "+ this.data.didian + "  " + this.data.startzhou + "~" + this.data.endzhou + "周");
   wx.setStorageSync('skcd', this.data.skcd);
    console.log( this.data.kcmc + "  " + this.data.didian + "  " + this.data.startzhou +"~"+this.data.endzhou+"周");
    wx.navigateTo({
      url: '../subject/subject'
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

  }
})
