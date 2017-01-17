var common = require("../../common/common.js")
var app = getApp()
Page({
  data:{
    inTheaters: {},
    comingSoon: {},
    top250: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.request('v2/movie/in_theaters?start=0&count=3', "inTheaters")
    this.request('v2/movie/coming_soon?start=0&count=3', "comingSoon")
    this.request('v2/movie/top250?start=0&count=3', "top250")
  },

  moreTap: function(event) {
    // 获取data-category
    var category = event.currentTarget.dataset.category
    console.log(category)
    wx.navigateTo({
      url: 'more-movies/more-movies?category=' + category
    })
  },

  request: function(url, key) {
    var that = this
    wx.request({
      url: app.globalData.BaseURL + url,
      data: {},
      method: 'GET', 
      header: {
        "Content-Type": "json"
      }, 
      success: function(res){
        // success
        that.pause(res.data, key)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  pause: function(data, key) {
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
    var movieData = {
      title: data.title,
      movies: movies
    }
    var allData = {}
    allData[key] = {
      movies: movieData
    }
    this.setData(allData)
  }
})