export const categories = [
    { id: "1", title: "Mobiles", image: require("../assets/images/mobiles.png"), bgColor: "#FFEEEE" },
    { id: "2", title: "Vehicles", image: require("../assets/images/vehicles.png"), bgColor: "#FFF2C5" },
    { id: "3", title: "Property For Sale", image: require("../assets/images/property-sale.png"), bgColor: "#FFD9C0" },
    { id: "4", title: "Property For Rent", image: require("../assets/images/property-rent.png"), bgColor: "#E8F8FF" },
    { id: "5", title: "Electronics & Home Appliances", image: require("../assets/images/electronics.png"), bgColor: "#FDF5C9" },
    { id: "6", title: "Bikes", image: require("../assets/images/bikes.png"), bgColor: "#E0FFFF" },
    { id: "7", title: "Business, Industrial & Agriculture", image: require("../assets/images/aggriculture.png"), bgColor: "#E8F8FF" },
    { id: "8", title: "Services", image: require("../assets/images/services.png"), bgColor: "#FFE4C4" },
    { id: "9", title: "Jobs", image: require("../assets/images/jobs.png"), bgColor: "#D3D3D3" },
    { id: "10", title: "Animals", image: require("../assets/images/animals.png"), bgColor: "#FFDDC1" },
    { id: "11", title: "Furniture & Home Decor", image: require("../assets/images/furniture.png"), bgColor: "#ADD8E6" },
    { id: "12", title: "Fashion & Beauty", image: require("../assets/images/fashion.png"), bgColor: "#E6E6FA" },
    { id: "13", title: "Books, Sports & Hobbies", image: require("../assets/images/books.png"), bgColor: "#FFA07A" },
    { id: "14", title: "Kids", image: require("../assets/images/kids.png"), bgColor: "#FFDAB9" },
  ];


  export const items = [
    // Mobile Phones
    {
      id: 1,
      category: "Mobile Phones",
      title: "Samsung Galaxy S23 Ultra",
      price: "350,000",
      location: "DHA, Karachi",
      description: "12GB RAM, 256GB, Factory sealed with 1-year warranty",
      image: "https://picsum.photos/200/300?random=101"
    },
    {
      id: 2,
      category: "Mobile Phones",
      title: "iPhone 13 Pro 256GB",
      price: "280,000",
      location: "Gulshan-e-Iqbal, Karachi",
      description: "90% battery health, space gray, original accessories",
      image: "https://picsum.photos/200/300?random=102"
    },
    {
      id: 3,
      category: "Mobile Phones",
      title: "Google Pixel 7 Pro",
      price: "180,000",
      location: "Blue Area, Islamabad",
      description: "Unlocked, 128GB, excellent camera condition",
      image: "https://picsum.photos/200/300?random=103"
    },
    {
      id: 4,
      category: "Mobile Phones",
      title: "Xiaomi Redmi Note 12",
      price: "55,000",
      location: "University Town, Peshawar",
      description: "6-month old, 8GB/128GB, with original box",
      image: "https://picsum.photos/200/300?random=104"
    },
  
    // Electronics
    {
      id: 5,
      category: "Electronics",
      title: "MacBook Pro M2 2023",
      price: "420,000",
      location: "Bahria Town, Lahore",
      description: "16-inch, 16GB RAM, 1TB SSD, space gray",
      image: "https://picsum.photos/200/300?random=105"
    },
    {
      id: 6,
      category: "Electronics",
      title: "Sony PlayStation 5",
      price: "220,000",
      location: "Clifton, Karachi",
      description: "Digital edition, 2 controllers, 10 games included",
      image: "https://picsum.photos/200/300?random=106"
    },
    {
      id: 7,
      category: "Electronics",
      title: "4K Drone with Camera",
      price: "95,000",
      location: "Rawalpindi Cantt",
      description: "5km range, 3 batteries, carrying case included",
      image: "https://picsum.photos/200/300?random=107"
    },
    {
      id: 8,
      category: "Electronics",
      title: "Canon Printer MG3670",
      price: "18,000",
      location: "Saddar, Islamabad",
      description: "Wireless printing, scanning, photocopy",
      image: "https://picsum.photos/200/300?random=108"
    },
  
    // Motorcycles
    {
      id: 9,
      category: "Motorcycles",
      title: "Yamaha YBR 125 2023",
      price: "210,000",
      location: "Peshawar Cantt",
      description: "500km driven, showroom condition, original documents",
      image: "https://picsum.photos/200/300?random=109"
    },
    {
      id: 10,
      category: "Motorcycles",
      title: "Honda CG 125 2022",
      price: "190,000",
      location: "Multan Road, Lahore",
      description: "Single owner, 1500km, excellent mileage",
      image: "https://picsum.photos/200/300?random=110"
    },
    {
      id: 11,
      category: "Motorcycles",
      title: "United US 100",
      price: "135,000",
      location: "Sector G-9, Islamabad",
      description: "70cc, 2021 model, economical ride",
      image: "https://picsum.photos/200/300?random=111"
    },
    {
      id: 12,
      category: "Motorcycles",
      title: "Kawasaki Ninja 650",
      price: "1,850,000",
      location: "DHA Phase 5, Karachi",
      description: "Imported, 2020 model, 8000km driven",
      image: "https://picsum.photos/200/300?random=112"
    },
  
    // Property
    {
      id: 13,
      category: "Property",
      title: "2 Bed Luxury Apartment",
      price: "250,000/mo",
      location: "Sea View, Karachi",
      description: "Fully furnished, gym/pool access, 24/7 security",
      image: "https://picsum.photos/200/300?random=113"
    },
    {
      id: 14,
      category: "Property",
      title: "5 Marla Commercial Plot",
      price: "28,000,000",
      location: "Main Boulevard, Lahore",
      description: "Corner location, approved building plan",
      image: "https://picsum.photos/200/300?random=114"
    },
    {
      id: 15,
      category: "Property",
      title: "Warehouse for Rent",
      price: "450,000/mo",
      location: "Port Qasim, Karachi",
      description: "5000 sqft, 24/7 access, loading docks",
      image: "https://picsum.photos/200/300?random=115"
    },
    {
      id: 16,
      category: "Property",
      title: "Farm House 8 Marla",
      price: "95,000,000",
      location: "Bhattai, Islamabad",
      description: "With fruit orchard, swimming pool, 6 bedrooms",
      image: "https://picsum.photos/200/300?random=116"
    }
  ];