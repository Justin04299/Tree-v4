
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Mail } from 'lucide-react';

interface ChristmasLetterProps {
  progressRef: React.MutableRefObject<number>;
}

const ChristmasLetter: React.FC<ChristmasLetterProps> = ({ progressRef }) => {
  // Use frame to keep the component reactive to the parent's progressRef updates
  useFrame(() => {});

  const p = progressRef.current;
  
  // High threshold (0.4) means it starts disappearing much sooner when moving from Chaos (1.0) back to Formed (0.0)
  const isVisible = p > 0.4;

  return (
    <group position={[0, 6, 0]}>
      <Html
        center
        style={{
          // Only allow interaction when fully in Chaos state
          pointerEvents: p > 0.9 ? 'auto' : 'none',
          zIndex: 100,
        }}
      >
        <div 
          className="relative select-none flex flex-col items-center justify-center"
          style={{
            // Reduced transition duration from 0.8s to 0.4s for a snappier "disappear" effect
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            opacity: isVisible ? 1 : 0,
            // Scale and move slightly as it emerges
            transform: `scale(${0.6 + p * 0.4}) translateY(${(1 - p) * 40}px)`,
          }}
        >
          {/* Enhanced Golden Aura Glow */}
          <div 
            className="absolute inset-0 rounded-lg blur-[50px] md:blur-[90px] transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle, rgba(212, 175, 55, ${0.45 * p}) 0%, transparent 80%)`,
              opacity: p,
              transform: `scale(${1.4 + Math.sin(Date.now() * 0.002) * 0.1})`,
              zIndex: -1
            }}
          />
          
          <div 
            className="w-[85vw] max-w-[320px] md:max-w-[400px] bg-[#fdfaf1] p-6 md:p-10 rounded-sm border-[1px] border-[#d4af37]/60 relative overflow-hidden flex flex-col items-center text-center shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            style={{
                boxShadow: `0 0 ${40 * p}px rgba(212, 175, 55, ${0.2 * p})`
            }}
          >
            {/* Intricate Corner Ornaments */}
            <div className="absolute inset-2 border border-[#d4af37]/10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#d4af37]/30 m-2" />
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#d4af37]/30 m-2" />
            
            {/* Deep Red Wax Seal */}
            <div 
              className="mb-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#8b0000] rounded-full shadow-lg border-2 border-[#a00] relative transform transition-transform duration-700"
              style={{ 
                transform: `rotate(${Math.sin(Date.now() * 0.0015) * 10}deg)`,
              }}
            >
              <Mail size={18} className="text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
              <div className="absolute -inset-2 border border-[#8b0000]/20 rounded-full animate-ping opacity-20" />
            </div>

            <h3 className="luxury-text text-[#8b0000] text-lg md:text-2xl mb-5 tracking-[0.25em] font-bold border-b border-[#d4af37]/20 pb-5 w-full uppercase">
              Merry Christmas
            </h3>

            <div className="space-y-4 font-serif italic text-gray-900 text-[14px] md:text-[16px] leading-relaxed tracking-tight antialiased">
              <p className="text-left font-bold text-[#d4af37] text-sm md:text-lg not-italic mb-1">Dear Friend,</p>
              <p className="drop-shadow-sm opacity-95">
                Wishing you lots of happiness ahead, and hoping everything just keeps getting better for you!! 
              </p>
              <p className="drop-shadow-sm opacity-95">
                Thanks for being part of my journey. Really glad to have you in my life :D
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#d4af37]/10 w-full flex flex-col items-center gap-1">
               <span className="luxury-text text-[9px] md:text-[11px] text-[#d4af37] tracking-[0.4em] uppercase font-bold opacity-70">
                 With Love & Magic
               </span>
               <div className="w-10 h-[1px] bg-[#d4af37]/30 mt-2" />
            </div>
            
            {/* Subtle Parchment Texture */}
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
          </div>

          {/* Interaction Guide */}
          <div 
            className="mt-8 text-[#D4AF37]/40 text-[9px] uppercase tracking-[0.4em] font-bold transition-opacity duration-1000" 
            style={{ opacity: p > 0.95 ? 1 : 0 }}
          >
             Close hand to restore the tree
          </div>
        </div>
      </Html>
    </group>
  );
};

export default ChristmasLetter;
