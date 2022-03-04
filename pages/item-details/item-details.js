const app = getApp();
Page({
  data: {
    count: app.data.count
  },
  addCount: function() {
    this.setData({
      count: this.data.count + 1
    });
  },
  reduceCount: function() {
    if (this.data.count <= 0) {
      return my.alert({
        title: "Tips",
        content: "Below zero is invalid",
        buttonText: "Okay",
        success: () => {}
      });
    }
    this.setData({
      count: this.data.count - 1
    });
  },
  addToCart() {
    app.data.cartCount = this.data.count + app.data.cartCount;
    my.redirectTo({
      url: "/pages/index/index",
      success: () => {},
      fail: () => {},
      complete: () => {
        my.showToast({
          type: "success",
          content: "Success",
          duration: 1500,
          success: () => {
          }
        });
      }
    });
  },
  onLoad(query) {
    // Page load
    // console.info(`awit: ${JSON.stringify(query)}`, app.data.userInfo);
  }
});
