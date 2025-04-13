import { fetchRecipeBySlug, fetchRecipes } from "@/lib/api";
import Image from "next/image";

export async function generateStaticParams() {
  const recipes = await fetchRecipes();
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await fetchRecipeBySlug(params.slug);

  if (!recipe)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-black text-center font-weight-[400] text-xl">
          Recipe Not Found
        </h1>
      </div>
    );

  return (
    <main className="max-w-3xl mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-4 text-center">{recipe.title}</h1>
      <div className="flex justify-center">
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={400}
          height={200}
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-3">Ingredients:</h2>
        <div className="flex flex-wrap gap-2">
          {recipe.ingredients.map((item, i) => (
            <div 
              key={i}
              className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-center mb-3">Steps:</h2>
        <ol className="list-decimal pl-5">
          {recipe.steps.map((step, i) => (
            <li key={i} className="mb-2">{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await fetchRecipeBySlug(params.slug);

  return {
    title: recipe?.title,
    description: recipe?.description,
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Recipe",
        name: recipe?.title,
        description: recipe?.description,
        image: recipe?.imageUrl,
        recipeIngredient: recipe?.ingredients,
        recipeInstructions: recipe?.steps.map((step) => ({
          "@type": "HowToStep",
          text: step,
        })),
      }),
    },
  };
}
