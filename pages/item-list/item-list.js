const app = getApp();

Page({
  data: {
    items: []
  },
  onPullDownRefresh() {
    this.setData({
      items: app.data.ads
    });
    // Page pulled down
  },
  onLoad() {
    //Test nasa's api
    this.setData({
      items: app.data.ads
    });
  }
});
