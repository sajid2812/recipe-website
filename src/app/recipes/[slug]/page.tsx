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

  if (!recipe) return <h1>Recipe Not Found</h1>;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.imageUrl}
        alt={recipe.title}
        width={800}
        height={600}
        priority
      />
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Ingredients:</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-semibold">Steps:</h2>
        <ol className="list-decimal pl-5">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
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
