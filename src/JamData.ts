import image1 from "../src/assets/img/jam/01.jpg";
import image2 from "../src/assets/img/jam/02.jpg";
import image3 from "../src/assets/img/jam/03.jpg";
import image4 from "../src/assets/img/jam/04.jpg";
import image5 from "../src/assets/img/jam/05.jpg";
import image6 from "../src/assets/img/jam/06.jpg";

import AdventWindow from "./components/AdventWindow/AdventWindow";
const JamData: AdventWindow[] = [
  {
    day: "1",
    title: "Strawberry",
    imageUrl: image1,
    rating: 10,
  },
  {
    day: "2",
    title: "Grapefruit & Dragonfruit",
    imageUrl: image2,
    rating: 8,
  },
  {
    day: "3",
    title: "Mirabelle Plum & Linden Jam",
    imageUrl: image3,
    rating: 6.5,
  },
  {
    day: "4",
    title: "Apricot & Bergamot",
    imageUrl: image4,
    rating: 2,
  },
  {
    day: "5",
    title: "Orange & Chestnut with Winter Spices",
    imageUrl: image5,
    rating: 0,
  },
  {
    day: "6",
    title: "Cherry & Christmas Spices",
    imageUrl: image6,
    rating: 5,
  },
];

export default JamData;
