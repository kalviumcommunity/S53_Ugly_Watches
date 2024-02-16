import { watchesModel } from "./schema.js";
import mongoose from "mongoose";
const watches1 = new watchesModel({
  postID: 1,
  Title: "CORUM",
  Image:
    "https://watchcollectors.co.uk/cdn/shop/files/CorumRollsRoyce18KWhiteGoldSecondHandWatchCollectors7.jpg?v=1699012127",
});
const watches2 = new watchesModel({
  postID: 2,
  Title: "AZIMUTH",
  Image:
    "https://i0.wp.com/masterhorologer.com/wp-content/uploads/2018/08/Azimuth-Mr.-Roboto.jpg?fit=1896%2C2193&quality=89&ssl=1",
});
const watches3 = new watchesModel({
  postID: 3,
  Title: "HYSEK",
  Image:
    "https://cdn.luxatic.com/wp-content/uploads/2017/04/Hysek-Colossal-Grande-Complication-1.jpg",
});
const watches4 = new watchesModel({
  postID: 4,
  Title: "OULM",
  Image: "https://i.ebayimg.com/images/g/eMwAAOSwm0tf14S2/s-l1200.jpg",
});
const watches5 = new watchesModel({
  postID: 5,
  Title: "MONTEGRAPPA",
  Image:
    "https://cdn-s3.touchofmodern.com/products/000/142/329/DSC_8586_large.jpg?1433894097",
});
const watches6 = new watchesModel({
  postID: 6,
  Title: "SEIKO",
  Image:
    "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2022/09/IMG_4619.jpg",
});
const watches7 = new watchesModel({
  postID: 7,
  Title: "BELL&ROSS",
  Image:
    "https://monochrome-watches.com/wp-content/uploads/2017/10/Bell-and-Ross-BR-X1-Skeleton-Tourbillon-Sapphire-4.jpg",
});
const watches8 = new watchesModel({
  postID: 8,
  Title: "AZIMUTH",
  Image: "https://m.media-amazon.com/images/I/616nOaoLhxL._AC_UY1000_.jpg",
});
const watches9 = new watchesModel({
  postID: 9,
  Title: "Jacob&Co",
  Image:
    "https://transform.octanecdn.com/crop/700x650/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_340170273.jpg",
});
const watches10 = new watchesModel({
  postID: 10,
  Title: "RICHARD MILLE",
  Image:
    "https://i0.wp.com/thetruthaboutwatches.com/wp-content/uploads/2020/07/RM-RM-70-01-standing-up.png?resize=400%2C491&ssl=1",
});

const WatchesData = [
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
mongoose
  .connect("mongodb+srv://rajabshoukath:rajab2004@hideoushours.h27dy0l.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database Connected");
    return watchesModel.insertMany(WatchesData);
  })
  .then(() => {
    console.log("Watches added successfully");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });