var data = require("../../localdb/localdb.js")
Page({
  data: {

  },
  onLoad: function(option) {
      // 得到传过来的 ID
      var id = option.id
      // 赋值为该文件内变量
      this.setData({
          id: id
      })
      var postData = data.postList[id]
      this.setData({
          postData: postData
      })
      var collections = wx.getStorageSync("post-collected")
      // 判断是否存在，不存在自己舔上去
      if (collections) {
        var collected = collections[id]
        this.setData({
            collected: collected
        })
      } else {
          var postsCollected = {};
          postsCollected[id] = false
          wx.setStorageSync("post-collected", postsCollected)
      }
  },

  collectionTap: function(event) {
      var collections = wx.getStorageSync("post-collected")
      // 取到设置的变量 ID
      var collected = collections[this.data.id]
      collected = !collected
      collections[this.data.id] = collected
      wx.setStorageSync("post-collected", collections)
      this.showModal(collected)
    //   this.showToast(collected)
  },

  // 展示模态窗
  showModal: function(collected) {
      // 在 success 中作用域改变了，this 去不到不代表 page，所以需要在外面需要将 this 赋值给别的变量
      var that = this
      wx.showModal({
        title: '提示',
        content: collected ? "是否收藏？" : "是否取消收藏？",
        success: function(res) {
            if (res.confirm) {
                that.showToast(collected)
            }
        }
})
  },

  showToast: function(collected) {
      this.setData({
        collected: collected
      })

      wx.showToast({
        title: collected ? "收藏成功" : "取消收藏",
        icon: 'success',
        duration: 1000
      })
  }
})