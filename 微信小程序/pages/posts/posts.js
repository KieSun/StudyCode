var data = require("../localdb/localdb.js")

Page({

  data: {

  },

  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
      postList: data.postList
    });

  },
  post:function(event) {
    var id = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + id 

    })
  }
})