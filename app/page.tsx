import Image from "next/image"
import Link from "next/link"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Instagram, Mail, Phone } from "lucide-react"
import EventGallery from "@/components/event-gallery"
import UpcomingEvent from "@/components/upcoming-event"

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col ${plusJakarta.className}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full brightness-50"
          >
            <source src="/koivideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Image src="/koi-logo.png" alt="KOI Event Logo" width={150} height={150} className="mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight gradient-text">
            KOI excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
            Eğlence ve topluluğu bir araya getiriyoruz. #koiexcellence #koistandart
          </p>
          <Link
            href="https://instagram.com/koievent"
            target="_blank"
            className="bg-[#B31E1E] hover:bg-[#9a1919] text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            Bize Katıl
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Biz Kimiz?</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10">
            KOI Event, üniversite yıllarından gelen tecrübeyle partiler, konferanslar ve eğlence etkinlikleri düzenleyen
            bir organizasyon topluluğudur. Amacımız, özgün ve unutulmaz deneyimler sunarak kolektif bir eğlence kültürü
            yaratmak.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-bold text-[#B31E1E] mb-2">Misyon</h3>
              <p className="text-gray-700">"Hayal gücünü gerçeğe dönüştür."</p>
            </div>
            <div className="p-6 border border-gray-100 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-bold text-[#B31E1E] mb-2">Vizyon</h3>
              <p className="text-gray-700">"Topluluğumuzu büyütmek için çalışıyoruz."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Etkinliklerimiz</h2>
          <EventGallery />
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Sıradaki Buluşma: KOI x PERSONA
          </h2>
          <UpcomingEvent />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Bize Ulaşın</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-[#B31E1E]">Ad:</span>
                <span className="text-gray-700">Kadir Cengiz Bahar</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-[#B31E1E]" size={20} />
                <a href="mailto:koievent@gmail.com" className="text-gray-700 hover:text-[#B31E1E]">
                  koievent@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-[#B31E1E]" size={20} />
                <a href="tel:+905340854224" className="text-gray-700 hover:text-[#B31E1E]">
                  +90 534 085 42 24
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="text-[#B31E1E]" size={20} />
                <a
                  href="https://instagram.com/koievent"
                  target="_blank"
                  className="text-gray-700 hover:text-[#B31E1E]"
                  rel="noreferrer"
                >
                  @koievent
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <Link
                href="mailto:koievent@gmail.com?subject=Sponsorluk%20Talebi"
                className="bg-[#B31E1E] hover:bg-[#9a1919] text-white font-bold py-3 px-8 rounded-full text-center transition-all"
              >
                Sponsorluk için bizimle iletişime geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image src="/koi-logo.png" alt="KOI Event Logo" width={80} height={80} />
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://instagram.com/koievent" target="_blank" aria-label="Instagram" rel="noreferrer">
                <Instagram className="text-white hover:text-[#B31E1E] transition-colors" size={24} />
              </a>
              {/* Add more social media icons as needed */}
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400">© 2025 KOI Event</p>
              <p className="text-sm text-gray-400 mt-1">#koiexcellence #koistandart</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
