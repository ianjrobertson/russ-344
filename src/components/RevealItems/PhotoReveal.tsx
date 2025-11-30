import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ArchiveItem } from '../../types';

interface PhotoRevealProps {
  item: ArchiveItem;
  onReveal?: (itemId: string, isRevealed: boolean) => void;
}

export default function PhotoReveal({ item, onReveal }: PhotoRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleToggle = () => {
    const newState = !isRevealed;
    setIsRevealed(newState);
    onReveal?.(item.id, newState);
  };

  // Prevent pan/zoom when interacting with the item
  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute cursor-pointer group"
      style={{
        left: `${item.position.x}px`,
        top: `${item.position.y}px`,
        width: item.width || 300,
        height: item.height || 200,
      }}
      onClick={handleToggle}
      onMouseDown={handleInteraction}
      onTouchStart={handleInteraction}
    >
      {/* Container with mobile-friendly touch target (minimum 44x44px enforced by padding if needed) */}
      <div
        className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl border-2 border-slate-700 hover:border-slate-500 transition-colors"
        style={{
          touchAction: 'manipulation', // Prevents double-tap zoom on mobile
          minWidth: '44px',
          minHeight: '44px',
        }}
      >
        {/* Image stack with crossfade animation */}
        <AnimatePresence mode="wait">
          <motion.img
            key={isRevealed ? 'revealed' : 'censored'}
            src={isRevealed ? item.uncensoredSrc : item.censoredSrc}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            draggable={false} // Prevent image drag
          />
        </AnimatePresence>

        {/* Reveal indicator - shows on hover (desktop) or when revealed (mobile) */}
        <div className={`
          absolute inset-0 pointer-events-none
          ${!isRevealed ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}
          transition-opacity duration-300
          bg-gradient-to-t from-black/80 via-transparent to-transparent
        `}>
          <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
            {!isRevealed ? 'Tap to reveal' : 'Tap to hide'}
          </div>
        </div>

        {/* Active state indicator for mobile (visual feedback on tap) */}
        <motion.div
          className="absolute inset-0 pointer-events-none bg-white"
          initial={false}
          animate={{ opacity: 0 }}
          whileTap={{ opacity: 0.2 }}
          transition={{ duration: 0.1 }}
        />

        {/* Status indicator - small dot showing if revealed */}
        <div className="absolute top-2 right-2 pointer-events-none">
          <motion.div
            className={`w-3 h-3 rounded-full ${
              isRevealed ? 'bg-green-400' : 'bg-slate-600'
            }`}
            initial={false}
            animate={{
              scale: isRevealed ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Info panel - shows when revealed */}
      <AnimatePresence>
        {isRevealed && item.description && (
          <motion.div
            className="absolute top-full left-0 mt-2 bg-slate-800/95 text-white p-3 rounded-lg shadow-xl max-w-xs backdrop-blur-sm border border-slate-700"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            onMouseDown={handleInteraction}
            onTouchStart={handleInteraction}
          >
            <h3 className="font-bold text-sm mb-1">{item.title}</h3>
            <p className="text-xs text-slate-300">{item.description}</p>
            {item.historicalContext && (
              <p className="text-xs text-slate-400 mt-2 italic">
                {item.historicalContext}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
