import Image from "next/image"

interface EventCardProps {
  title: string
  description: string
  date: string
  location: string
  participants: number
  imageUrl: string
}

export default function EventCard({ title, description, date, location, participants, imageUrl }: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg bg-white">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <span className="bg-gray-100 px-3 py-1 rounded-full">{date}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">{location}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full">{participants} katılımcı</span>
        </div>
      </div>
    </div>
  )
}
