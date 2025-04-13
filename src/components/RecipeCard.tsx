import Image from 'next/image'
import Link from 'next/link'
import { Recipe } from '@/lib/api'

interface RecipeCardProps {
  recipe: Recipe & { slug: string }
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.description}</p>
        </div>
      </div>
    </Link>
  )
} 