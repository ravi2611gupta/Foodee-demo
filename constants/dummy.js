import assets from "./assets";

const dishData = [
  {
    id: "001",
    userName: "JohnDoe",
    userLocation: "New York, USA",
    userProfileImage: assets.person01,
    dishImage: assets.food08,
    dishName: "Spaghetti Carbonara",
    restaurantProfileImage: assets.food09,
    restaurantName: "Italian Bistro",
    dishPrise: "£12.99",
    dishRating: 4.5,
    reviewCount: 355,
    dishDescription: "Classic Italian spaghetti with creamy carbonara sauce.",
    tags: ["Italian", "Pasta", "Creamy"],
    postedDate: "2023-09-10",
    postedTime: "14:30"
  },
  {
    id: "002",
    userName: "JaneSmith",
    userLocation: "Los Angeles, USA",
    userProfileImage: assets.person04,
    dishImage: assets.food02,
    dishName: "Sushi Platter",
    restaurantProfileImage: assets.food08,
    restaurantName: "Sushi World",
    dishPrise: "£18.50",
    dishRating: 4.8,
    reviewCount: 200,
    dishDescription: "Assorted sushi platter with fresh fish and vegetables.",
    tags: ["Japanese", "Sushi", "Fresh"],
    postedDate: "2023-09-11",
    postedTime: "12:15"
  }
];

const dishes = [
  {
    id: "001",
    image: assets.food01,
    rating: 4.5,
  },
  {
    id: "002",
    image: assets.food02,
    rating: 4.2,
  },
  {
    id: "003",
    image: assets.food03,
    rating: 4.6,
  },
  {
    id: "004",
    image: assets.food04,
    rating: 4.1,
  },
  {
    id: "005",
    image: assets.food05,
    rating: 4.5,
  },
  {
    id: "006",
    image: assets.food06,
    rating: 4.7,
  },
  {
    id: "007",
    image: assets.food07,
    rating: 4.2,
  },
  {
    id: "008",
    image: assets.food08,
    rating: 4.4,
  },
  {
    id: "009",
    image: assets.food09,
    rating: 4.6,
  },
  {
    id: "010",
    image: assets.food01,
    rating: 4.5,
  },
  {
    id: "011",
    image: assets.food02,
    rating: 4.2,
  },
  {
    id: "012",
    image: assets.food03,
    rating: 4.6,
  },
  {
    id: "013",
    image: assets.food04,
    rating: 4.1,
  },
  {
    id: "014",
    image: assets.food05,
    rating: 4.5,
  },
  {
    id: "015",
    image: assets.food06,
    rating: 4.7,
  },
  {
    id: "016",
    image: assets.food07,
    rating: 4.2,
  },
  {
    id: "017",
    image: assets.food08,
    rating: 4.4,
  },
  {
    id: "018",
    image: assets.food09,
    rating: 4.6,
  },
]

export { dishData, dishes };
