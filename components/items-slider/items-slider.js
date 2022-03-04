const app = getApp();

Component({
  mixins: [],
  data: {
    ads: app.data.ads
  },
  props: {},
  didMount() {
    //Test nasa's api
    this.setData({
      ads: app.data.ads
    });
  },
  didUpdate() {},
  didUnmount() {
    this.setData({
      ads: app.data.ads
    });
  },
  methods: {}
});
