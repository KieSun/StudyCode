var common = require("../../../utils/util.js")
import newData from '../../../utils/promise.js';
var app = getApp()

Page({
  data: {
    courseList: {}
  },

  onLoad: function (options) {
    var subject = options.subject
    var sortStatus = options.sortStatus

    let self = this
    let listParam = {
      url: "open/b-iphone/anon/course-list.do",
      data: {
        "categoryName": subject,
        "courseName": "",
        "gradeName": "",
        "pageIndex": 1,
        "sortStatus": sortStatus,
        "pageSize": 20
      }
    }

    newData.result(listParam).then(data => {

      self.parseCourseListJSON(data)

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

  parseCourseListJSON: function (data) {
    var courseList = []
    var rows = data.rows
    for (var idx in rows) {
      var row = rows[idx]
      var courseId = row.courseId
      var courseImg = row.courseImg
      var courseName = row.courseName
      var courseTeacher = row.courseTeacher
      var stringCoursePrice = "￥" + row.stringCoursePrice
      var purchaseNum = row.purchaseNum + "人在学"
      var startDate = common.transformDate(row.startYear, row.startMonth, row.startDay)
      var endDate = common.transformDate(row.endYear, row.endMonth, row.endDay)
      var date = startDate + " - " + endDate

      var data = {
        courseId: courseId,
        courseImg: courseImg,
        courseName: courseName,
        courseTeacher: courseTeacher,
        stringCoursePrice: stringCoursePrice,
        purchaseNum: purchaseNum,
        date: date
      }
      courseList.push(data)
    }
    this.setData({
      courseList: courseList
    })
  }

})