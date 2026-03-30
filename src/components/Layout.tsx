import Navbar from './Navbar';
import Footer from './Footer';
import { useCallback } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const videoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el) el.playbackRate = 0.5;
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for better content readability */}
      <div className="fixed inset-0 bg-black/60 z-10" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
