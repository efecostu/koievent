"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import EventCard from "./event-card"

const events = [
  {
    id: 1,
    title: "HASMUN23",
    description: "Hacettepe Üniversitesi Model Birleşmiş Milletler Konferansı",
    date: "Mart 2023",
    location: "Ankara",
    participants: 250,
    imageUrl: "/events/hasmun23.jpg",
  },
  {
    id: 2,
    title: "2 Topluluğun Ortak Partisi",
    description: "Üniversite topluluklarının ortak düzenlediği eğlence gecesi",
    date: "Mayıs 2023",
    location: "Ankara",
    participants: 300,
    imageUrl: "/events/joint-party.jpg",
  },
  {
    id: 3,
    title: "HASTRAIN22 & 23",
    description: "Hacettepe Üniversitesi eğitim ve gelişim programı",
    date: "Eylül 2023",
    location: "Ankara",
    participants: 200,
    imageUrl: "/events/hastrain.jpg",
  },
  {
    id: 4,
    title: "KOI Event Yat Partisi",
    description: "Boğazda unutulmaz bir yaz partisi deneyimi",
    date: "Temmuz 2023",
    location: "İstanbul",
    participants: 150,
    imageUrl: "/events/yacht-party.jpg",
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
