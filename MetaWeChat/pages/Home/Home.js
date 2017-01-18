var common = require("../../utils/util.js")
var app = getApp()
Page({
  data: {
    swiperData: {},
    courses : {}
  },
  onLoad: function (options) {
    var swiperUrl = app.globalData.BaseURL + "open/b-iphone/anon/banner-list.do"
    common.postRequest(swiperUrl, this.parseSwiperJSON)

    var homeCourseUrl = app.globalData.BaseURL + "open/b-iphone/anon/subject-courses.do"
    common.postRequest(homeCourseUrl, this.parseHomeCourseJSON)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  // Custom Method
  // 解析轮播图数据
  parseSwiperJSON: function (data) {
    var images = []
    for (var idx in data.rows) {
      var image = data.rows[idx].img
      images.push(image)
    }
    this.setData({
      swiperData: images
    })
  }, 

  // 解析课程数据
  parseHomeCourseJSON: function (data) {
    var courses = []
    var rows = data.rows
    for (var idx in rows) {
      var subject = rows[idx].subject
      var subjectId = rows[idx].subjectId

      var results = rows[idx].results
      var resultsA = []
      for (var i in results) {
        var courseId = results[i].courseId
        var courseImg = results[i].courseImg ? results[i].courseImg : "/images/topnav/hot.png"
        var courseName = results[i].courseName
        // if (courseName.length > 9) {
        //   courseName = results[i].courseName.toString().substring(0, 9) + "..."
        // }
        var stringCoursePrice = results[i].stringCoursePrice
        var purchaseNum = results[i].purchaseNum + "人在学"

        var data = {
          courseId: courseId,
          courseImg: courseImg,
          courseName: courseName,
          stringCoursePrice: stringCoursePrice,
          purchaseNum: purchaseNum
        }

        resultsA.push(data)
      }

      var data = {
        subject: subject,
        subjectId: subjectId,
        results: resultsA
      }
      courses.push(data)
    }
    console.log(courses)
    this.setData({
      courses: courses
    })
  }


})