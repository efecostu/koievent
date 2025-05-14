'use client';

import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Audio elementi oluştur
    const audio = new Audio('/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    // Sayfa yüklendiğinde otomatik başlat
    audio.play().catch(error => {
      console.log('Autoplay prevented:', error);
      setIsMuted(true);
    });

    // Component unmount olduğunda temizle
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.15;
        audioRef.current.play().catch(error => {
          console.log('Playback prevented:', error);
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 right-4 z-50 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
      aria-label={isMuted ? 'Unmute' : 'Mute'}
    >
      {isMuted ? (
        <VolumeX className="w-6 h-6 text-white" />
      ) : (
        <Volume2 className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default BackgroundMusic; 