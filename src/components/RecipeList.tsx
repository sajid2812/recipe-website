import RecipeCard from './RecipeCard'

// Temporary mock data - will be replaced with API call
const mockRecipes = [
  {
    title: 'Spaghetti Carbonara',
    slug: 'spaghetti-carbonara',
    image: '/images/spaghetti-carbonara.jpg',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.'
  },
  {
    title: 'Chicken Curry',
    slug: 'chicken-curry',
    image: '/images/chicken-curry.jpg',
    description: 'Aromatic Indian curry with tender chicken pieces in a rich sauce.'
  }
]

export default function RecipeList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockRecipes.map((recipe) => (
        <RecipeCard key={recipe.slug} {...recipe} />
      ))}
    </div>
  )
} 