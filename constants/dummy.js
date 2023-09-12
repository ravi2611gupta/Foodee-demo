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

export { dishData };
