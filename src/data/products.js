import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';  
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';  
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';

export const products = [
  {
    id: 1,
    name: "ABC MALT",
    description: "Nutritious ABC malt powder with essential vitamins and minerals",
    price: "₹750",
    category: "Malt Products",
    rating: 4.9,
    shelfLife: "6 months",
    image: image1, // FIXED: removed curly braces
    icon: "🥛",
    featured: true,
    tag: "Premium",
    benefits: ["Rich in nutrients", "Boosts energy", "Easy to digest"],
    moq: "100 units"
  },
  {
    id: 2,
    name: "BEETROOT MALT",
    description: "Healthy beetroot malt powder rich in iron and antioxidants",
    price: "₹575",
    category: "Malt Products",
    rating: 4.8,
    shelfLife: "4 months",
    image: image2, // FIXED: removed curly braces
    icon: "🫐",
    featured: true,
    tag: "Best Seller",
    benefits: ["High in iron", "Antioxidant rich", "Supports blood health"],
    moq: "100 units"
  },
  {
    id: 3,
    name: "SPROUTED RAGI MALT",
    description: "Sprouted ragi malt powder with enhanced nutritional value",
    price: "₹410",
    category: "Malt Products",
    rating: 4.7,
    shelfLife: "4 months",
    image: image3, // FIXED: removed curly braces
    icon: "🌾",
    featured: true,
    tag: "Popular",
    benefits: ["High in calcium", "Rich in fiber", "Gluten-free"],
    moq: "150 units"
  },
  {
    id: 4,
    name: "MALT O POWER",
    description: "Power-packed malt with multiple grain nutrition",
    price: "₹410",
    category: "Malt Products",
    rating: 4.6,
    shelfLife: "4 months",
    image: image4, // FIXED: removed curly braces
    icon: "⚡",
    benefits: ["Energy booster", "Multi-grain", "Complete nutrition"],
    moq: "150 units"
  },
  {
    id: 5,
    name: "MILLET FLOUR MIX",
    description: "Healthy millet flour mix for traditional recipes",
    price: "₹275",
    category: "Flour Mixes",
    rating: 4.7,
    shelfLife: "4 months",
    image: image5, // FIXED: removed curly braces
    icon: "🌾",
    benefits: ["Gluten-free", "High protein", "Traditional recipe"],
    moq: "200 units"
  },
  {
    id: 6,
    name: "MULTI MILLET ADAI MIX",
    description: "Ready-to-make multi millet adai mix",
    price: "₹310",
    category: "Flour Mixes",
    rating: 4.8,
    shelfLife: "4 months",
    image: image6, // FIXED: removed curly braces
    icon: "🥞",
    featured: true,
    tag: "Traditional",
    benefits: ["Ready to cook", "Multi-millet", "Protein rich"],
    moq: "150 units"
  },
  {
    id: 7,
    name: "MULTI MILLET PANIYARAM MIX",
    description: "Instant multi millet paniyaram mix",
    price: "₹270",
    category: "Flour Mixes",
    rating: 4.6,
    shelfLife: "4 months",
    image: image7, // FIXED: removed curly braces
    icon: "🍘",
    benefits: ["Instant mix", "Healthy snack", "Kids friendly"],
    moq: "150 units"
  },
  {
    id: 8,
    name: "KARUPPU KAVUNI KANJI MIX",
    description: "Traditional black rice kanji mix",
    price: "₹475",
    category: "Specialty Mixes",
    rating: 4.9,
    shelfLife: "4 months",
    image: image8, // FIXED: removed curly braces
    icon: "🍚",
    featured: true,
    tag: "Traditional",
    benefits: ["Antioxidant rich", "Traditional recipe", "Healthy porridge"],
    moq: "100 units"
  },
  {
    id: 9,
    name: "RAGI PORRIDGE",
    description: "Instant ragi porridge mix",
    price: "₹310",
    category: "Porridge Mixes",
    rating: 4.7,
    shelfLife: "4 months",
    image: image9, // FIXED: removed curly braces
    icon: "🥣",
    benefits: ["Instant porridge", "High in calcium", "Easy to prepare"],
    moq: "150 units"
  },
  {
    id: 10,
    name: "MORINGA DHAL POWDER",
    description: "Nutrient-rich moringa dhal powder",
    price: "₹370",
    category: "Powder Mixes",
    rating: 4.8,
    shelfLife: "4 months",
    image: image10, // FIXED: removed curly braces
    icon: "🌿",
    benefits: ["Rich in vitamins", "Iron source", "Protein packed"],
    moq: "150 units"
  },
  {
    id: 11,
    name: "WHEAT DOSA FLOUR MIX",
    description: "Healthy wheat dosa flour mix",
    price: "₹280",
    category: "Flour Mixes",
    rating: 4.6,
    shelfLife: "4 months",
    image: image11, // FIXED: removed curly braces
    icon: "🫓",
    benefits: ["Wheat based", "Easy to make", "Healthy breakfast"],
    moq: "200 units"
  },
  {
    id: 12,
    name: "MULTI DHAL ADAI MIX",
    description: "Multi dhal adai mix with protein richness",
    price: "₹370",
    category: "Flour Mixes",
    rating: 4.7,
    shelfLife: "4 months",
    image: image12, // FIXED: removed curly braces
    icon: "🥘",
    benefits: ["Multi dhal", "High protein", "Traditional taste"],
    moq: "150 units"
  },
  {
    id: 13,
    name: "RED BANANA POWDER",
    description: "Premium red banana powder",
    price: "₹850",
    category: "Specialty Products",
    rating: 4.9,
    shelfLife: "9 months",
    image: image13, // FIXED: removed curly braces
    icon: "🍌",
    featured: true,
    tag: "Premium",
    benefits: ["Rich in potassium", "Natural sweetness", "Long shelf life"],
    moq: "50 units"
  }
];

export const categories = [
  { name: "All Products", count: 13 },
  { name: "Malt Products", count: 4 },
  { name: "Flour Mixes", count: 5 },
  { name: "Porridge Mixes", count: 1 },
  { name: "Powder Mixes", count: 1 },
  { name: "Specialty Mixes", count: 1 },
  { name: "Specialty Products", count: 1 }
];

export const healthBenefits = [
  "Rich in natural nutrients",
  "Boosts energy and immunity",
  "Supports healthy digestion",
  "Gluten-free options available",
  "Traditional recipes",
  "Easy to prepare",
  "Premium quality ingredients"
];