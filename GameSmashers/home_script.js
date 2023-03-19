const product = [
  {
    id: 0,
    image: "img/topseller/fifa-23.jpg",
    title: "FIFA 23",
    price: 3500,
  },
  {
    id: 1,
    image: "img/topseller/god-of-war-ragnarok.jpg",
    title: "God of War Ragnarök",
    price: 3300,
  },
  {
    id: 2,
    image: "img/mostplayed/assassins-creed-valhalla.jpg",
    title: "Assassin`s Creed Valhalla",
    price: 3000,
  },
  {
    id: 3,
    image: "img/topseller/hogwarts-legacy.jpg",
    title: "Hogwarts Legacy",
    price: 3000,
  },
  {
    id: 4,
    image: "img/topseller/red-dead-redemption.jpg",
    title: "Red Dead Redemption 2",
    price: 3100,
  },
  {
    id: 5,
    image: "img/mostplayed/genshin-impact.jpg",
    title: "Genshin Impact",
    price: 0,
  },
  {
    id: 6,
    image: "img/mostplayed/grand-theft-auto-v.jpg",
    title: "Grand Theft Auto V",
    price: 2300,
  },
  {
    id: 7,
    image: "img/mostplayed/valorant.png",
    title: "VALORANT",
    price: 0,
  },
  {
    id: 8,
    image: "img/shop_img/headset_1.jpg",
    title: "Golden Beats Headphones",
    price: 2100,
  },
  {
    id: 9,
    image: "img/shop_img/headset_2.jpg",
    title: "Black SONY Headphones",
    price: 1700,
  },
  {
    id: 10,
    image: "img/shop_img/keyboard_1.jpg",
    title: "Black keyboard rgb",
    price: 560,
  },
  {
    id: 11,
    image: "img/shop_img/keyboard_2.jpg",
    title: "Royal white x14",
    price: 550,
  },
  {
    id: 12,
    image: "img/shop_img/mic_1.jpg",
    title: "ETHOS - XLR Microphone",
    price: 950,
  },
  {
    id: 13,
    image: "img/shop_img/mic_2.jpg",
    title: "ICON PRO - XLR microphone",
    price: 930,
  },
  {
    id: 14,
    image: "img/shop_img/mouse_1.jpg",
    title: "Cyberpunk Edtion",
    price: 1900,
  },
  {
    id: 15,
    image: "img/shop_img/mouse_2.jpg",
    title: "Razer Viper",
    price: 900,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById;
