function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function postRequest(url, callBack) {
  wx.request({
    url: url,
    data: {},
    method: 'Post',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    success: function (res) {
      // success
      callBack(res.data)
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}

module.exports = {
  formatTime: formatTime,
  postRequest: postRequest
}
