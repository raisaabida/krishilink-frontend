import tomatoImg from "../assets/tomato.jpg";
import cornImg from "../assets/corn.jpg";
import potatoImg from "../assets/potato.jpg";
import onionImg from "../assets/onion.jpg";
import riceImg from "../assets/rice.jpg";
import juteImg from "../assets/jute.jpg";
import caneImg from "../assets/cane.jpg";
import paddyImg from "../assets/paddy.jpg";
import carrotImg from "../assets/carrot.jpg";
import turmericImg from "../assets/turmeric.jpg";

const crops = [
  {
    id: 1,
    name: "Tomato",
    price: "৳30/kg",
    location: "Bogura",
    image: tomatoImg,
    description: "Fresh organic tomatoes directly from farm."
  },
  {
    id: 2,
    name: "Sweet Corn",
    price: "৳40/kg",
    location: "Rangpur",
    image: cornImg,
    description: "High quality sweet corn."
  },
  {
    id: 3,
    name: "Potato",
    price: "৳25/kg",
    location: "Munshiganj",
    image: potatoImg,
    description: "Clean, export quality potatoes."
  },
  {
    id: 4,
    name: "Onion",
    price: "৳55/kg",
    location: "Pabna",
    image: onionImg,
    description: "Strong local onions with long shelf life."
  },
  {
    id: 5,
    name: "Rice",
    price: "৳60/kg",
    location: "Dinajpur",
    image: riceImg,
    description: "Premium aromatic rice."
  },
  {
    id: 6,
    name: "Jute",
    price: "৳1200/mon",
    location: "Faridpur",
    image: juteImg,
    description: "High-grade golden fiber jute."
  },
  {
    id: 7,
    name: "Sugarcane",
    price: "৳300/piece",
    location: "Kushtia",
    image: caneImg,
    description: "Juicy sugarcane directly from fields."
  },
  {
    id: 8,
    name: "Paddy",
    price: "৳28/kg",
    location: "Naogaon",
    image: paddyImg,
    description: "Freshly harvested paddy."
  },
  {
    id: 9,
    name: "Carrot",
    price: "৳35/kg",
    location: "Gazipur",
    image: carrotImg,
    description: "Crunchy red carrots."
  },
  {
    id: 10,
    name: "Turmeric",
    price: "৳180/kg",
    location: "Khagrachari",
    image: turmericImg,
    description: "Pure hill-grown turmeric."
  }
];

export default crops;
