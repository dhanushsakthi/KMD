import React, { useState } from 'react';
import { Clock, Flame, Users, BookOpen, ChefHat, Star } from 'lucide-react';

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const recipes = [
    {
      id: 1,
      title: "Authentic Chicken Biryani",
      description: "Traditional Hyderabadi biryani with aromatic basmati rice and tender chicken",
      prepTime: "30 mins",
      cookTime: "60 mins",
      difficulty: "Medium",
      servings: 4,
      rating: 4.9,
      category: "non-veg",
      spices: ["Biryani Masala", "Saffron", "Cardamom"],
      image: "🍗"
    },
    {
      id: 2,
      title: "Classic Sambar",
      description: "South Indian lentil stew with vegetables and tamarind",
      prepTime: "20 mins",
      cookTime: "30 mins",
      difficulty: "Easy",
      servings: 4,
      rating: 4.7,
      category: "veg",
      spices: ["Sambar Powder", "Turmeric", "Mustard Seeds"],
      image: "🥘"
    },
    {
      id: 3,
      title: "Masala Chai",
      description: "Traditional Indian spiced tea with milk and aromatic spices",
      prepTime: "5 mins",
      cookTime: "10 mins",
      difficulty: "Easy",
      servings: 2,
      rating: 4.8,
      category: "beverage",
      spices: ["Tea Masala", "Cardamom", "Ginger"],
      image: "☕"
    },
    {
      id: 4,
      title: "Paneer Butter Masala",
      description: "Creamy tomato-based curry with soft paneer cubes",
      prepTime: "25 mins",
      cookTime: "25 mins",
      difficulty: "Medium",
      servings: 4,
      rating: 4.8,
      category: "veg",
      spices: ["Garam Masala", "Kashmiri Chili", "Coriander"],
      image: "🧀"
    },
    {
      id: 5,
      title: "Fish Curry",
      description: "Coastal style fish curry with coconut and spices",
      prepTime: "15 mins",
      cookTime: "20 mins",
      difficulty: "Easy",
      servings: 4,
      rating: 4.6,
      category: "non-veg",
      spices: ["Fish Curry Masala", "Turmeric", "Fenugreek"],
      image: "🐟"
    },
    {
      id: 6,
      title: "Aloo Gobi",
      description: "North Indian style potatoes and cauliflower stir-fry",
      prepTime: "15 mins",
      cookTime: "20 mins",
      difficulty: "Easy",
      servings: 4,
      rating: 4.5,
      category: "veg",
      spices: ["Cumin Seeds", "Coriander Powder", "Garam Masala"],
      image: "🥔"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Recipes', count: recipes.length },
    { id: 'veg', name: 'Vegetarian', count: recipes.filter(r => r.category === 'veg').length },
    { id: 'non-veg', name: 'Non-Vegetarian', count: recipes.filter(r => r.category === 'non-veg').length },
    { id: 'beverage', name: 'Beverages', count: recipes.filter(r => r.category === 'beverage').length },
  ];

  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-spice-light/20">
      {/* Hero */}
      <div className="bg-gradient-to-r from-spice-dark to-spice-primary text-white py-20">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
            <ChefHat className="w-10 h-10" />
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            Spice Up Your
            <span className="block text-spice-secondary">Kitchen</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover authentic recipes crafted with KMD spices. From traditional classics to modern twists.
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-spice-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name} <span className="text-sm opacity-75">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-spice-light to-spice-primary/20 flex items-center justify-center">
                <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {recipe.image}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    recipe.category === 'veg' ? 'bg-green-100 text-green-800' :
                    recipe.category === 'non-veg' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {recipe.category === 'veg' ? 'Vegetarian' : 
                     recipe.category === 'non-veg' ? 'Non-Vegetarian' : 'Beverage'}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{recipe.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-spice-primary transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Prep: {recipe.prepTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Flame className="w-4 h-4 mr-2" />
                    Cook: {recipe.cookTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    Serves: {recipe.servings}
                  </div>
                  <div className="text-sm text-gray-500">
                    Level: {recipe.difficulty}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Key Spices:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.spices.map((spice, idx) => (
                      <span key={idx} className="px-3 py-1 bg-spice-light text-spice-dark rounded-full text-sm">
                        {spice}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-primary">
                  View Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Special */}
        <div className="bg-gradient-to-r from-spice-primary to-spice-secondary rounded-2xl p-8 text-white mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm mb-4">
                Recipe of the Week
              </span>
              <h2 className="text-3xl font-playfair font-bold mb-4">
                Butter Chicken Masterclass
              </h2>
              <p className="text-gray-200 mb-6">
                Learn to make the iconic North Indian dish with our step-by-step guide. 
                We'll show you how to achieve the perfect balance of creamy tomato gravy 
                and tender chicken using our special Garam Masala blend.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Total Time: 45 mins</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="w-5 h-5 mr-2" />
                  <span>Difficulty: Medium</span>
                </div>
              </div>
              <button className="btn-primary bg-white text-spice-primary hover:bg-gray-100">
                Watch Video Tutorial
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-8xl">🍗</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-playfair font-bold text-center mb-8">
            Pro Tips for Perfect Spicing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bloom Your Spices",
                tip: "Always roast whole spices in hot oil/ghee before grinding to release maximum flavor",
                icon: "🔥"
              },
              {
                title: "Fresh is Best",
                tip: "Grind spices as needed. Whole spices retain flavor 6x longer than pre-ground",
                icon: "🔄"
              },
              {
                title: "Storage Matters",
                tip: "Store spices in airtight containers away from light and heat to preserve potency",
                icon: "🗄️"
              }
            ].map((tip, index) => (
              <div key={index} className="text-center p-6 bg-spice-light/30 rounded-xl">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;