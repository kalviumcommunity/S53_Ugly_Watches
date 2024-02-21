const mongoose = require("mongoose");
const Watch = require("./schema");
require("dotenv").config();
const watches1 = new Watch({
  postID: 1,
  Title: "CORUM",
  Image:
    "https://watchcollectors.co.uk/cdn/shop/files/CorumRollsRoyce18KWhiteGoldSecondHandWatchCollectors7.jpg?v=1699012127",
});
const watches2 = new Watch({
  postID: 2,
  Title: "AZIMUTH",
  Image:
    "https://i0.wp.com/masterhorologer.com/wp-content/uploads/2018/08/Azimuth-Mr.-Roboto.jpg?fit=1896%2C2193&quality=89&ssl=1",
});
const watches3 = new Watch({
  postID: 3,
  Title: "HYSEK",
  Image:
    "https://cdn.luxatic.com/wp-content/uploads/2017/04/Hysek-Colossal-Grande-Complication-1.jpg",
});
const watches4 = new Watch({
  postID: 4,
  Title: "OULM",
  Image: "https://i.ebayimg.com/images/g/eMwAAOSwm0tf14S2/s-l1200.jpg",
});
const watches5 = new Watch({
  postID: 5,
  Title: "MONTEGRAPPA",
  Image:
    "https://cdn-s3.touchofmodern.com/products/000/142/329/DSC_8586_large.jpg?1433894097",
});
const watches6 = new Watch({
  postID: 6,
  Title: "SEIKO",
  Image:
    "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2022/09/IMG_4619.jpg",
});
const watches7 = new Watch({
  postID: 7,
  Title: "BELL&ROSS",
  Image:
    "https://monochrome-watches.com/wp-content/uploads/2017/10/Bell-and-Ross-BR-X1-Skeleton-Tourbillon-Sapphire-4.jpg",
});
const watches8 = new Watch({
  postID: 8,
  Title: "AZIMUTH",
  Image: "https://m.media-amazon.com/images/I/616nOaoLhxL._AC_UY1000_.jpg",
});
const watches9 = new Watch({
  postID: 9,
  Title: "Jacob&Co",
  Image:
    "https://transform.octanecdn.com/crop/700x650/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_340170273.jpg",
});
const watches10 = new Watch({
  postID: 10,
  Title: "RICHARD MILLE",
  Image:
    "https://i0.wp.com/thetruthaboutwatches.com/wp-content/uploads/2020/07/RM-RM-70-01-standing-up.png?resize=400%2C491&ssl=1",
});

const WATCHES_FILE = [
  watches1,
  watches2,
  watches3,
  watches4,
  watches5,
  watches6,
  watches7,
  watches8,
  watches9,
  watches10,
];
// Connect to your local MongoDB instance
const mongouri =
  "mongodb+srv://rajabshoukath:rajab2004@hideoushours.h27dy0l.mongodb.net/";
mongoose
  .connect(mongouri)
  .then(() => console.log("Connected to local MongoDB"))
  .catch((err) => console.error("Error connecting to local MongoDB:", err));

Watch.insertMany(WATCHES_FILE)
  .then(() => console.log("Watches added successfully!"))
  .catch((err) => console.error("Error adding WATCHES:", err));
