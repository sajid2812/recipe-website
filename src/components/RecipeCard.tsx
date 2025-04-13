import Image from 'next/image'
import Link from 'next/link'

interface RecipeCardProps {
  title: string
  slug: string
  image: string
  description: string
}

export default function RecipeCard({ title, slug, image, description }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${slug}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
} 