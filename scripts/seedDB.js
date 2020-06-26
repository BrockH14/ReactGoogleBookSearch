const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/GoogleBooksSearch"
);

const bookSeed = [
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  },
  {
    title: "I Would Leave Me of I Could: A collection of poetry",
    authors: ["Halsey"],
    description: "in this debut collection, Halsey bares her soul. Bringing the same artistry found in her lyrics, Halsey’s poems delve into the highs and lows of doomed relationships, family ties, sexuality, and mental illness. More hand grenades than confessions, these autobiographical poems explore and dismantle conventional notions of what it means to be a feminist in search of power. Masterful as it is raw, passionate, and profound, I Would Leave Me If I Could signals the arrival of an essential voice.",
    image: "https://prodimage.images-bn.com/pimages/9781982135607_p0_v5_s550x406.jpg",
    link: "https://www.barnesandnoble.com/w/i-would-leave-me-if-i-could-halsey/1137236162;jsessionid=6A314CAC88D48B3F113FB9BAF0C157C5.prodny_store01-atgap12?ean=9781982135607",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
  {
    title: "",
    authors: [""],
    description: "",
    image: "",
    link: "",
  },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
