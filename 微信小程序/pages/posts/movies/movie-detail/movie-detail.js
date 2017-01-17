var app = getApp()
var common = require("../../../common/common.js")
Page({
  data:{},
  onLoad:function(options){
    var id = options.id
    var url = app.globalData.BaseURL + "v2/movie/subject/" + id
    common.request(url, this.pause)
  },

  pause: function(data) {
    console.log(data)
  }
})