const app = getApp();

Component({
  mixins: [],
  data: {
    array: [
      "https://nftartwork.co.uk/wp-content/uploads/2021/02/NFT-logo-1030x647.png"
    ],
    isLoggedIn: app.data.isLoggedIn,
    userInfo: null,
    cartCount: 0,
    canIUseAuthButton: true
  },
  props: {},
  didMount() {
    this.setData({
      ...this.data,
      userInfo: app.data.userInfo,
      cartCount: app.data.cartCount
    });
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onGetAuthorize(res) {
      my.confirm({
        title: "Are you sure?",
        content: `Do you want to ${
          this.data.userInfo ? "logout" : "authorize this app"
        }?`,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        success: result => {
          if (result.confirm && !this.data.userInfo) {
            my.getOpenUserInfo({
              fail: res => {
                console.log("res fail", res);
              },
              success: res => {
                let userInfo = JSON.parse(res.response).response;
                console.log("userinfo", userInfo);
                my.alert({
                  title: `Hello, ${userInfo.nickName}`
                });

                this.setData({
                  ...this.data,
                  userInfo,
                  isLoggedIn: userInfo && true
                });
                app.data.userInfo = userInfo;
              }
            });
          } else {
            app.data.userInfo = null;
            this.setData({
              userInfo: null
            });
          }
        },
        fail: () => {},
        complete: () => {}
      });
    }
  },
  onLoad(query) {
    // Page load
    this.setData({
      ...this.data,
      userInfo: app.data.userInfo,
      cartCount: app.data.cartCount
    });
  },
  onPullDownRefresh() {}
});
