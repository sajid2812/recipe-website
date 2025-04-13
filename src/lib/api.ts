export type Recipe = {
  title: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
};

export async function fetchRecipes() {
  return [
    {
      slug: "chocolate-cake",
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake.",
      imageUrl: "/images/chocolate-cake.jpg",
      ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Milk"],
      steps: ["Preheat oven...", "Mix ingredients...", "Bake for 30 minutes."],
    },
    {
      slug: "pasta-carbonara",
      title: "Pasta Carbonara",
      description: "Creamy and delicious Italian classic.",
      imageUrl: "/images/pasta-carbonara.jpg",
      ingredients: ["Pasta", "Eggs", "Parmesan", "Pancetta", "Black pepper"],
      steps: ["Boil pasta...", "Fry pancetta...", "Mix all together."],
    },
    {
      slug: "butter-chicken",
      title: "Butter Chicken",
      description: "A rich and creamy North Indian curry.",
      imageUrl: "/images/butter-chicken.jpg",
      ingredients: [
        "500g boneless chicken",
        "200g yogurt",
        "2 tbsp butter",
        "4 tomatoes, pureed",
        "2 tsp garam masala",
        "1 tsp cumin powder",
        "1 tsp chili powder",
        "1 tbsp ginger garlic paste",
        "Salt to taste",
        "Fresh cream for garnish",
      ],
      steps: [
        "Marinate chicken with yogurt, salt, chili powder, and garam masala for at least 1 hour.",
        "Grill or pan-fry the marinated chicken until cooked through and slightly charred.",
        "In a pan, melt butter and sauté ginger garlic paste until fragrant.",
        "Add pureed tomatoes, spices (garam masala, cumin, salt) and simmer until thickened.",
        "Add cooked chicken pieces to the sauce and simmer for 10-15 minutes.",
        "Stir in fresh cream and adjust seasoning.",
        "Garnish with cream and fresh coriander before serving.",
      ],
    },
  ];
}

export async function fetchRecipeBySlug(slug: string) {
  const recipes: Record<string, Recipe> = {
    "chocolate-cake": {
      title: "Chocolate Cake",
      description: "A rich and moist chocolate cake.",
      imageUrl: "/images/chocolate-cake.jpg",
      ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Milk"],
      steps: ["Preheat oven...", "Mix ingredients...", "Bake for 30 minutes."],
    },
    "pasta-carbonara": {
      title: "Pasta Carbonara",
      description: "Creamy and delicious Italian classic.",
      imageUrl: "/images/pasta-carbonara.jpg",
      ingredients: ["Pasta", "Eggs", "Parmesan", "Pancetta", "Black pepper"],
      steps: ["Boil pasta...", "Fry pancetta...", "Mix all together."],
    },
    "butter-chicken": {
      title: "Butter Chicken",
      description: "A rich and creamy North Indian curry.",
      imageUrl: "/images/butter-chicken.jpg",
      ingredients: [
        "500g boneless chicken",
        "200g yogurt",
        "2 tbsp butter",
        "4 tomatoes, pureed",
        "2 tsp garam masala",
        "1 tsp cumin powder",
        "1 tsp chili powder",
        "1 tbsp ginger garlic paste",
        "Salt to taste",
        "Fresh cream for garnish",
      ],
      steps: [
        "Marinate chicken with yogurt, salt, chili powder, and garam masala for at least 1 hour.",
        "Grill or pan-fry the marinated chicken until cooked through and slightly charred.",
        "In a pan, melt butter and sauté ginger garlic paste until fragrant.",
        "Add pureed tomatoes, spices (garam masala, cumin, salt) and simmer until thickened.",
        "Add cooked chicken pieces to the sauce and simmer for 10-15 minutes.",
        "Stir in fresh cream and adjust seasoning.",
        "Garnish with cream and fresh coriander before serving.",
      ],
    },
  };
  return recipes[slug];
}
