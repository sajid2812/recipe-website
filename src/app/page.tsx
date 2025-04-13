import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/lib/api";

export default async function HomePage() {
  const recipes = await fetchRecipes();

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl font-bold text-amber-900 drop-shadow-sm">
            🍳 Welcome to RecipeLand!
          </h1>
          <p className="mt-6 text-xl text-amber-800/80 max-w-2xl mx-auto leading-relaxed">
            Discover, Cook & Share Delicious Recipes from Around the World
          </p>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </section>

        <section className="py-16 bg-white rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-amber-900 mb-8 text-center">
            🍽️ Explore Our Collections
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Desserts
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Vegan
            </a>
            <a
              href="#"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Quick Meals
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
