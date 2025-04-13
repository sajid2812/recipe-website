import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/lib/api";

export default async function HomePage() {
  const recipes = await fetchRecipes();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center mb-20">
          <h1 className="text-6xl text-black font-weight-[400] drop-shadow-sm">
            Welcome to Tasty Bites!
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Discover, Cook & Share Delicious Recipes
          </p>
        </section>
        <section className="mb-24">
          <h2 className="text-3xl font-weight-[500] bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ac] to-[#ffe207] mb-8 text-center">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
