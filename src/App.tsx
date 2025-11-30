import { useState } from 'react';
import { useMedia } from 'react-use';
import ZoomableCanvas from './components/Canvas/ZoomableCanvas';
import PhotoReveal from './components/RevealItems/PhotoReveal';
import { archiveItems, canvasConfig } from './data/archiveData';
import type { RevealState } from './types';

function App() {
  const [revealedItems, setRevealedItems] = useState<RevealState>({});
  const isMobile = useMedia('(max-width: 768px)');

  const handleReveal = (itemId: string, isRevealed: boolean) => {
    setRevealedItems(prev => ({
      ...prev,
      [itemId]: isRevealed
    }));
  };

  const revealedCount = Object.values(revealedItems).filter(Boolean).length;
  const totalItems = archiveItems.length;

  return (
    <div className="relative">
      {/* Instructions overlay */}
      <div className="absolute top-4 left-4 z-50 bg-slate-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl max-w-sm border border-slate-700">
        <h1 className="text-xl font-bold mb-2">The Veiled Archive</h1>
        <p className="text-sm text-slate-300 mb-3">
          Navigate the dark canvas to discover hidden historical artifacts.
          {isMobile ? ' Tap' : ' Click'} on items to reveal their uncensored truth.
        </p>
        <div className="flex items-center gap-2 text-xs">
          <div className="flex-1">
            <div className="bg-slate-700 rounded-full h-2 overflow-hidden">
              <div
                className="bg-green-400 h-full transition-all duration-300"
                style={{ width: `${(revealedCount / totalItems) * 100}%` }}
              />
            </div>
          </div>
          <span className="text-slate-400 font-mono">
            {revealedCount}/{totalItems}
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-2">
          {isMobile ? 'Pinch to zoom • Drag to pan' : 'Scroll to zoom • Drag to pan'}
        </p>
      </div>

      {/* Main canvas */}
      <ZoomableCanvas config={canvasConfig}>
        {archiveItems.map(item => (
          <PhotoReveal
            key={item.id}
            item={item}
            onReveal={handleReveal}
          />
        ))}
      </ZoomableCanvas>
    </div>
  );
}

export default App;
