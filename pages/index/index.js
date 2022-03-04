
const app = getApp();
my.hideLoading();

Page({
  data: {
    newProducts: app.data.products,
    products: app.data.products.slice(0, 5),
    partners: app.data.partners,
    count: 1,
    userInfo: null,
    totalPages: Math.ceil(app.data.products.length / 5),
    limitProducts: Math.ceil(app.data.products.length / 5) - 1
  },
  paginate(res) {
    this.setData({
      products: this.data.newProducts.slice(
        (Number(res) - 1) * 5,
        5 * Number(res)
      )
    });
  },
  onNavigateList: function() {
    my.navigateTo({
      url: "/pages/item-list/item-list"
    });
  },
  onNavigateDetails: function() {
    my.navigateTo({
      url: "/pages/item-details/item-details"
    });
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
    my.showLoading();
  },
  onReady() {
    // Page loading is complete
    const that = this;
    if (this.products !== [] && this.partners !== []) {
      setTimeout(() => {
        my.hideLoading({
          page: that // Prevents switching to other pages when execution, page pointing is not accurate
        });
      }, 500);
    }
  },
  onShow() {
    // Page display
    setTimeout(() => {
      this.setData({
        ...this.data,
        userInfo: app.data.userInfo
      });
    }, 1500);
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    this.setData({
      userInfo: app.data.userInfo
    });
    // Page is pulled down

    // this.setData({
    //   userInfo: app.data.userInfo
    // });
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  }
});
