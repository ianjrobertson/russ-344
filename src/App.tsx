import { useState } from 'react';
import ZoomableCanvas from './components/Canvas/ZoomableCanvas';
import PhotoReveal from './components/RevealItems/PhotoReveal';
import ZoomableTextBox from './components/ZoomableTextBox/ZoomableTextBox';
import { archiveItems, canvasConfig } from './data/archiveData';
import type { RevealState } from './types';

const projectDescription = `The Veiled Archive is an interactive digital experience that explores the history of Soviet censorship and photographic manipulation. Through a collection of historical images, visitors can discover how photographs were altered, individuals were erased, and history was rewritten.

This project brings together censored and uncensored versions of historical photographs, paintings, and media from the Soviet era. By clicking on each image, you can reveal what was hidden or removed, uncovering the stories of those who were literally erased from history.

The archive serves as both a memorial to those who were censored and a warning about the dangers of historical revisionism. Each image tells a story of political manipulation, showing how totalitarian regimes attempted to control not just the present, but also the past.

Navigate through the archive using your mouse or trackpad to pan and zoom. Click on images to reveal their uncensored versions. The small initial scale allows you to see the full scope of the archive before diving into individual pieces.

This interactive experience is designed to make you question what you see and consider how history can be manipulated. What other stories have been hidden? Who else has been erased? The Veiled Archive invites you to look closer.`;

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
        <ZoomableTextBox
          title="Russian Censorship"
          content={projectDescription}
          position={{ x: -750, y: -200 }}
          width={1000}
          height={1500}
        />
      </ZoomableCanvas>
    </div>
  );
}

export default App;
