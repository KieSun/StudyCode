var common = require("../../../common/common.js")
var app = getApp()
Page({
  data: {
    movies: {}
  },
  onLoad: function (options) {
    var category = options.category
    this.setData({
      navTitle: category
    })

    var url = ""
    switch (category) {
      case "正在上映的电影-北京":
        url = app.globalData.BaseURL + "v2/movie/in_theaters"
        break
      case "即将上映的电影":
        url = app.globalData.BaseURL + "v2/movie/coming_soon"
        break
      case "豆瓣电影Top250":
        url = app.globalData.BaseURL + "v2/movie/top250"
        break
    }

    common.request(url, this.pause)
  },

  pause: function(data) {
    var movies = []
    var subjects = data.subjects
    for (var idx in subjects) {
      var image = subjects[idx].images.medium 
      var name = subjects[idx].title
      var average = subjects[idx].rating.average
      var stars = subjects[idx].rating.stars

      var temp = {
        stars: common.coverStarArray(stars),
        image: image,
        name: name,
        average: average
      }
      movies.push(temp)
    }
    this.setData({
      movies: movies
    })
  },

  onReady: function () {
    // 页面渲染完成
    wx.setNavigationBarTitle({
      title: this.data.navTitle
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})