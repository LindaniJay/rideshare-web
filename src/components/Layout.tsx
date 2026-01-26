import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useRef } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5; // Slow down the video to 50% speed
      video.loop = true; // Ensure looping
      video.muted = true; // Mute for autoplay compatibility
      video.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
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
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better content readability */}
      <div className="fixed inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
