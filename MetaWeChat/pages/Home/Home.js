import newData from '../../utils/promise.js';
var app = getApp()
Page({
  data: {
    swiperData: {},
    courses: {},
    isShowLoading: false,
    isSearch: false
  },
  onLoad: function (options) {
    wx.showNavigationBarLoading()

    let self = this
    let bannerParam = {
      url: "open/b-iphone/anon/banner-list.do"
    }
    let homeCourseParam = {
      url: "open/b-iphone/anon/subject-courses.do"
    }

    newData.result(bannerParam).then(data => {

      self.parseSwiperJSON(data)

    }).catch(e => {

    })

    newData.result(homeCourseParam).then(data => {

      self.parseHomeCourseJSON(data)

    }).catch(e => {

    })
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
        var stringCoursePrice = results[i].stringCoursePrice
        if (stringCoursePrice === "0.00") {
          stringCoursePrice = "公开课"
        }
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
    this.setData({
      courses: courses
    })
    wx.hideNavigationBarLoading()
  },

  // 转换 subject
  coverSubject: function (subject) {
    switch (subject) {
      case "最热":
        return ""
      case "最新":
        return "0"
      default:
        return subject
    }
  },

  // Tap
  moreTap: function (event) {
    this.navigateToList(event)
  },

  navtap: function (event) {
    this.navigateToList(event)
  },

  navigateToList: function (event) {
    var subject = event.currentTarget.dataset.subject
    subject = this.coverSubject(subject)

    // 最热为1
    var sortStatus = 1
    if (subject === "0") {
      sortStatus = 0
      subject = ""
    }

    wx.navigateTo({
      url: "courseList/courseList?subject=" + subject + "&sortStatus=" + sortStatus
    })
  }
})