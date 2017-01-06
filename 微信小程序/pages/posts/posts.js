var data = require("../localdb/localdb.js")

Page({
  data:{
    array: data.dataKey
  },

  onLoad:function(options){
    // 生命周期函数--监听页面加载
  },
  post:function(event) {
    var id = event.currentTarget.dataset.postid
    console.log(id)
    wx.navigateTo({
      url: 'posts-detail/posts-detail'

    })
  }
})