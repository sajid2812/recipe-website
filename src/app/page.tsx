import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/lib/api";

export default async function HomePage() {
  const recipes = await fetchRecipes();

  return (
    <main className="max-w-7xl mx-auto p-6">
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold">🍳 Welcome to RecipeLand!</h1>
        <p className="mt-4 text-gray-600">
          Discover, Cook & Share Delicious Recipes
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-xl font-semibold mb-4">🍽️ Explore More</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-green-100 hover:bg-green-200"
          >
            Desserts
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-yellow-100 hover:bg-yellow-200"
          >
            Vegan
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full bg-red-100 hover:bg-red-200"
          >
            Quick Meals
          </a>
        </div>
      </section>
    </main>
  );
}
