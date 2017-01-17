var common = require("../../common/common.js")
var app = getApp()
Page({
  data:{
    inTheaters: {},
    comingSoon: {},
    top250: {},
    searchResult: {},
    isSearch: false,
    isMovie: true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.request('v2/movie/in_theaters?start=0&count=3', "inTheaters")
    this.request('v2/movie/coming_soon?start=0&count=3', "comingSoon")
    this.request('v2/movie/top250?start=0&count=3', "top250")
  },

// 点击更多
  moreTap: function(event) {
    // 获取data-category
    var category = event.currentTarget.dataset.category
    wx.navigateTo({
      url: 'more-movies/more-movies?category=' + category
    })
  },

// 点击电影
  movieDetailTap: function(event) {
    var id = event.currentTarget.dataset.movieid
    wx.navigateTo({
      url: 'movie-detail/movie-detail?id=' + id
    })
  },

// 搜索取消
  onCancelImgTap: function(event) {
    console.log("onCancelImgTap")
    this.setData({
      isSearch: false,
      isMovie: true
    })
  },

// 点击搜索框
  bindFoucus: function(event) {
    this.setData({
      isSearch: true,
      isMovie: false
    })

  },

// 点击搜索
  bindconfirm: function(event) {
    var url = "v2/movie/search?q=" + event.detail.value
    this.request(url, "searchResult")
  },

// 请求
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

// 解析 json
  pause: function(data, key) {
    var movies = []
    var subjects = data.subjects
    for (var idx in subjects) {
      var image = subjects[idx].images.medium 
      var name = subjects[idx].title
      var average = subjects[idx].rating.average
      var stars = subjects[idx].rating.stars
      var movieId = subjects[idx].id

      var temp = {
        stars: common.coverStarArray(stars),
        image: image,
        name: name,
        average: average,
        movieId: movieId
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