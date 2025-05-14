import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Music } from "lucide-react"

export default function UpcomingEvent() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src="/events/upcoming-event.jpg" alt="KOI x PERSONA Event" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">KOI x PERSONA</h3>
          <p className="text-gray-200">Ankara'nın en heyecan verici gece deneyimi</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="text-[#B31E1E]" size={20} />
            <span>19 Kasım</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-[#B31E1E]" size={20} />
            <span>Persona Ankara</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-[#B31E1E]" size={20} />
            <span>300 kişi</span>
          </div>
          <div className="flex items-center gap-2">
            <Music className="text-[#B31E1E]" size={20} />
            <span>3 DJ</span>
          </div>
        </div>

        <Link
          href="https://instagram.com/koievent"
          target="_blank"
          className="block w-full bg-[#B31E1E] hover:bg-[#9a1919] text-white font-bold py-3 px-6 rounded-lg text-center transition-all"
        >
          Şimdi Kaydol
        </Link>
      </div>
    </div>
  )
}
