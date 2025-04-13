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
  };
  return recipes[slug];
}
