//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'http://www.edu-meta.com/open/wx/isbind.do',
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/json; charset=UTF-8'
              },
              success: function (res) {
                console.log(res.data)
              },
              fail: function(error) {
                console.log(error)
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})