const items = [
  {
    id: 3,
    name: "Hat",
    price: 250,
    isNew: true,
    isAdded: false,
    img:
      "https://www.pinclipart.com/picdir/big/151-1518172_green-find-make-share-gfycat-gifs-st-green.png"
  },
  {
    id: 1,
    name: "Sword",
    price: 1200,
    isNew: false,
    isAdded: false,
    img:
      "https://lh3.googleusercontent.com/_tJ4i5HQOjBUOZkl4Sxc_PoYmxDNAox1S9-KV6r44fkwo42nb1eJlhzJFA6uiUpOL_Lhnr_kvnsco4rvlslDx_st5AeypeoYgrgmkA4=w600"
  },

  {
    id: 3,
    name: "Armor",
    price: 600,
    isNew: false,
    isAdded: false,
    img:
      "https://www.pngall.com/wp-content/uploads/4/Warrior-Armor-PNG-Clipart.png"
  },
  {
    id: 4,
    name: "Shoes",
    price: 320,
    isNew: true,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/90/74/95/907495cc25082f5b53d497ef7902821a.png"
  },
  {
    id: 5,
    name: "Gloves",
    price: 150,
    isNew: true,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/cf/d0/e0/cfd0e064934f86831520b2dd077462a8.png"
  },
  {
    id: 6,
    name: "Steel Armor",
    price: 8000,
    isNew: false,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/79/65/ac/7965acdc5afe9d7221ecdb462c83351a.png"
  },
  {
    id: 7,
    name: "Little Sword",
    price: 12500,
    isNew: false,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/b9/bb/7a/b9bb7adf116bb895afcebe44bfea28d5.png"
  },
  {
    id: 5,
    name: "Boots",
    price: 6150,
    isNew: true,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/51/38/10/5138103229ebe061e0c347cdacdded56.png"
  },
  {
    id: 6,
    name: "Garment",
    price: 8000,
    isNew: false,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/a5/76/76/a57676eb0ac47b85dbf8b8c500a811a9.png"
  },
  {
    id: 7,
    name: "Potion",
    price: 125,
    isNew: false,
    isAdded: false,
    img:
      "https://i.pinimg.com/originals/1c/9c/fd/1c9cfd657dbdd74f81f5acb44760e0e8.png"
  }
];

const partners = [
  {
    name: "Nintendo",
    img:
      "https://archive.org/download/nintendo-userlogos-5/nintendo-userlogos-5.png"
  },
  {
    name: "sony",
    img:
      "https://www.pngkey.com/png/full/394-3948049_playstation-logo-transparent-vector-sony-playstation-logo-png.png"
  },
  {
    name: "Microsoft",
    img:
      "https://cdn.freebiesupply.com/logos/thumbs/2x/microsoft-centered-logo.png"
  },
  {
    name: "Sm Store",
    img:
      "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1420015336/ule0tpxgnzfbr4g8mctn.png"
  },
  {
    name: "Pure Gold",
    img: "https://exist.com/wp-content/uploads/PUREGOLD-24-01.png"
  },

  {
    name: "Shopee",
    img: "https://logodix.com/logo/2015053.png"
  }
];

const ads = [
  {
    name: "Axie Infinity",
    img:
      "https://piunikaweb.com/wp-content/uploads/2021/10/axie-infinity-logo-featured.jpg"
  },
  {
    name: "Xbox Game Pass",
    img:
      "https://assets.xboxservices.com/assets/72/ba/72ba6e65-75e0-489e-a251-9c21f3dde55a.jpg?n=Game-Hub_Content-Placement-0_XGP_788x444_02.jpg"
  },
  {
    name: "Game Lab",
    img:
      "https://cn.i.cdn.ti-platform.com/content/20/cartoon-network-gamelab/game/za/gamelab-1600x900-en.63cf0d23.jpg"
  },
  {
    name: "NFT News",
    img:
      "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/01/04/519186e6-b767-48bb-b067-ecd73e11e1d3_f9f59812.jpg"
  },
  {
    name: "Ads",
    img:
      "https://www.gamespot.com/a/uploads/scale_landscape/mig/6/2/6/1/2236261-XboxOne1_20201_screen.jpg"
  }
];

App({
  data: {
    products: items,
    partners,
    ads,
    count: 1,
    cartCount: 0,
    isLoggedIn: false,
    userInfo: null
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info("App onLaunch");
    
    // NASA API
    const SECRET_KEY = "MShij2CeeVLewNJIf8L8gvFr4Faq7z0d9aS2Cxdu";
    my.request({
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${SECRET_KEY}`,
      headers: {},
      method: "",
      data: {},
      timeout: 2000,
      dataType: "",
      success: result => {
        const photos = result.data.photos.map(data => {
          return {
            ...data,
            img: data.img_src
          };
        });

        this.data.ads = this.data.ads.concat(photos);
      },
      fail: () => {
        // console.log("Nasa's API get fail");
      },
      complete: () => {
        // console.log("app.js completed");
      }
    });
  },
  onShow(options) {
    // Reopened by scheme from the background
    console.log("onShow");
  }
});
