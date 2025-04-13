import RecipeList from '@/components/RecipeList'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Recipe Website</h1>
      <RecipeList />
    </main>
  )
}
