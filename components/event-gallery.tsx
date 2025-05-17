"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import EventCard from "./event-card"

const events = [
  {
    id: 1,
    title: "KOIEvent Yat Partisi",
    description: "Istanbul Boğazında unutulmaz bir yat partisi",
    date: "Eylül 2023",
    location: "İstanbul",
    participants: 200,
    imageUrl: "/koi-2023-yat.png",
  },
  {
    id: 2,
    title: "KOI Event Kokteyl Workshop",
    description: "Jigger İstanbul eğitmenlerinin rehberliğinde katılımcılar üç farklı kokteyl hazırlama workshopu",
    date: "Şubat 2025",
    location: "Istanbul",
    participants: 90,
    imageUrl: "/jigger.jpeg",
  },
  {
    id: 3,
    title: "KOIxESI 2023",
    description: "KOIxESI Fırın Istanbul Halloween Party",
    date: "Ekim 2023",
    location: "Istanbul",
    participants: 350,
    imageUrl: "/koi-esi-2023.jpeg",
  },
  {
    id: 4,
    title: "KOIEvent Meets Ankara",
    description: "Persona'da Atakule manzarasında 4 farklı DJ ile bir gece",
    date: "Kasım 2023",
    location: "Ankara",
    participants: 230,
    imageUrl: "/persona.jpeg",
  },
  {
    id: 5,
    title: "KOI Event x XOX Entertainment - Nimet Han Chapel",
    description: "Nimet Han Chapel'deki unutulmaz bir gece",
    date: "Nisan 2025",
    location: "İstanbul",
    participants: 150,
    imageUrl: "/nimet-han.jpeg",
  },
]

export default function EventGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = Math.max(0, events.length - (typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1))
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const newIndex = Math.max(0, Math.min(index, maxIndex))
      setCurrentIndex(newIndex)

      const cardWidth = containerRef.current.scrollWidth / events.length
      containerRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      })
    }
  }

  const handlePrev = () => scrollToIndex(currentIndex - 1)
  const handleNext = () => scrollToIndex(currentIndex + 1)

  return (
    <div className="relative">
      <div
        className="flex overflow-x-auto gap-6 pb-4 snap-x scrollbar-hide"
        ref={containerRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <div key={event.id} className="min-w-[300px] md:min-w-[350px] snap-start">
            <EventCard {...event} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-full bg-white shadow-md text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous event"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className="p-2 rounded-full bg-white shadow-md text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next event"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
