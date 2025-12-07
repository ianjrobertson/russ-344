import { useState } from 'react';
import ZoomableCanvas from './components/Canvas/ZoomableCanvas';
import PhotoReveal from './components/RevealItems/PhotoReveal';
import { archiveItems, canvasConfig } from './data/archiveData';
import type { RevealState } from './types';

function App() {
  const [revealedItems, setRevealedItems] = useState<RevealState>({});

  const handleReveal = (itemId: string, isRevealed: boolean) => {
    setRevealedItems(prev => ({
      ...prev,
      [itemId]: isRevealed
    }));
  };

  return (
    <div className="relative">
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
