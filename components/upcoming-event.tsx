import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Anchor } from "lucide-react"

export default function UpcomingEvent() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64 w-full">
        <Image src="/koi-2023-yat.png" alt="KOI Event Yacht Party" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold">2. KOI Event Yacht Party</h3>
          <p className="text-gray-200">İstanbul Boğazı'nda Unutulmaz Bir Yaz Gecesi</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="text-[#B31E1E]" size={20} />
            <span>Ağustos 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="text-[#B31E1E]" size={20} />
            <span>İstanbul Boğazı</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-[#B31E1E]" size={20} />
            <span>250 kişi</span>
          </div>
          <div className="flex items-center gap-2">
            <Anchor className="text-[#B31E1E]" size={20} />
            <span>Luxury Yacht</span>
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
