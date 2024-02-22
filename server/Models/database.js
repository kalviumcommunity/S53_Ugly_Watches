const mongoose = require("mongoose");
const Watch = require("./schema");
require("dotenv").config();
const watches1 = new Watch({
  Title: "CORUM",
  Image:
    "https://watchcollectors.co.uk/cdn/shop/files/CorumRollsRoyce18KWhiteGoldSecondHandWatchCollectors7.jpg?v=1699012127",
  Description:
    "Introducing the Corum Rolls Royce Ugly Elegance Edition, a timepiece that challenges conventional notions of beauty! This watch proudly boasts a dial that resembles a mishmash of abstract art and a psychedelic kaleidoscope, making it nearly impossible to decipher the time without a magnifying glass and a keen sense of imagination.",
});
const watches2 = new Watch({
  Title: "AZIMUTH",
  Image:
    "https://i0.wp.com/masterhorologer.com/wp-content/uploads/2018/08/Azimuth-Mr.-Roboto.jpg?fit=1896%2C2193&quality=89&ssl=1",
  Description:
    "The Azimuth Roulette watch, in particular, is notable for its roulette wheel feature on the dial. The watch design mimics the look of a roulette wheel commonly found in casinos",
});
const watches3 = new Watch({
  Title: "HYSEK",
  Image:
    "https://cdn.luxatic.com/wp-content/uploads/2017/04/Hysek-Colossal-Grande-Complication-1.jpg",
  Description:
    "Hysek Colossal watches are part of the Hysek brand's collections, known for their distinctive and avant-garde designs. The Colossal series is characterized by its large case size and a bold, modern aesthetic.",
});
const watches4 = new Watch({
  Title: "OULM",
  Image: "https://i.ebayimg.com/images/g/eMwAAOSwm0tf14S2/s-l1200.jpg",
  Description:
    "Oulm watches are known for their oversized cases and unique, often military-inspired aesthetics.",
});
const watches5 = new Watch({
  Title: "JACOB&CO",
  Image:
    "https://www.horologydesign.com/wp-content/uploads/2013/05/The_Grand_Baguette_Jacob__co_Jacques_Fournier.jpg",
  Description:
    "The Jacob&Co Baguette in the context of watches typically refers to baguette-cut diamonds, which are rectangular-shaped gemstones that are often used to adorn watch dials, bezels, or other parts of the timepiece.",
});
const watches6 = new Watch({
  Title: "SEIKO",
  Image:
    "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2022/09/IMG_4619.jpg",
  Description:
    " Seiko, a Japanese watch manufacturer, produces a wide range of timepieces with diverse designs, catering to various tastes and preferences.",
});
const watches7 = new Watch({
  Title: "BELL&ROSS",
  Image:
    "https://monochrome-watches.com/wp-content/uploads/2017/10/Bell-and-Ross-BR-X1-Skeleton-Tourbillon-Sapphire-4.jpg",
  Description:
    "Bell & Ross is a Swiss luxury watch company known for its distinctive aviation and military-inspired timepieces. ",
});
const watches8 = new Watch({
  Title: "AZIMUTH",
  Image: "https://m.media-amazon.com/images/I/616nOaoLhxL._AC_UY1000_.jpg",
  Description:
    "Azimuth is a watch brand known for its unique and avant-garde timepieces. The brand often explores innovative designs and incorporates creative elements into its watches.",
});
const watches9 = new Watch({
  Title: "Jacob&Co",
  Image:
    "https://transform.octanecdn.com/crop/700x650/https://dynamix-cdn.s3.amazonaws.com/jacobandcocom/jacobandcocom_340170273.jpg",
  Description:
    "The Jacob & Co. Astronomia is an extraordinary and highly complex timepiece known for its innovative design and intricate mechanical features.",
});
const watches10 = new Watch({
  Title: "JACOB&CO.",
  Image:
    "https://imageio.forbes.com/specials-images/imageserve/641f2167f2922fcadb580d4a/Jacob---Co---20-million-Billionaire-Timeless-Treasure-Tourbillon-watch-/960x0.jpg?height=988&width=711&fit=bounds",
  Description:
    "Jacob & Co. unveiled its $20 million Billionaire Timeless Treasure Yellow Diamond watch on Monday in Geneva, concurrent with the Watches & Wonders Geneva 2023 exhibition.",
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
mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected to local MongoDB"))
  .catch((err) => console.error("Error connecting to local MongoDB:", err));

Watch.insertMany(WATCHES_FILE)
  .then(() => console.log("Watches added successfully!"))
  .catch((err) => console.error("Error adding WATCHES:", err));
