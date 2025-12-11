import type { ArchiveItem } from '../types';

/**
 * Configuration for automatic gallery layout
 */
const LAYOUT_CONFIG = {
  startX: 200,           // Starting X position
  startY: 1000,          // Y position (centers items vertically in canvas)
  spacingX: 200,         // Horizontal spacing between items
  spacingY: 200,         // Vertical spacing between rows
  maxItemsPerRow: 8,     // Maximum items per row before wrapping
  maxRowWidth: 10000,     // Maximum width of a row before wrapping
};

/**
 * Base gallery items without positions (positions will be calculated)
 */
const baseGalleryItems: Omit<ArchiveItem, 'position'>[] = [
  {
    id: 'trotsky-erasure-1',
    type: 'painting',
    censoredSrc: 'assets/paintings/marie.png',
    uncensoredSrc: 'assets/paintings/marie.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 400,
    height: 500,
  },
  {
    id: 'barge-haulers',
    type: 'painting',
    censoredSrc: 'assets/paintings/bargehaulers-censored.png',
    uncensoredSrc: 'assets/paintings/bargehaulers.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 575,
    height: 300,
  },
  {
    id: 'women',
    type: 'painting',
    censoredSrc: 'assets/paintings/woman-ai.png',
    uncensoredSrc: 'assets/paintings/women.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 600,
    height: 300,
  },
  {
    id: 'kremlin-photo-1',
    type: 'painting',
    censoredSrc: 'assets/paintings/return.png',
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ilya_Repin_Unexpected_visitors.jpg/1200px-Ilya_Repin_Unexpected_visitors.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 450,
    height: 300,
  },
  {
    id: 'apprentice',
    type: 'painting',
    censoredSrc: 'assets/paintings/apprentice-ai.png',
    uncensoredSrc: 'assets/paintings/apprentice.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 600,
    height: 400,
  },
  {
    id: 'chicken',
    type: 'painting',
    censoredSrc: 'assets/paintings/chagall-chicken-ai.png',
    uncensoredSrc: 'assets/paintings/puzzle-michele-wilson-jigsaw-puzzle-250-pieces-art-wooden-chagall-the-bridal-pair-with-the-eiffel-tower.4590-1.fs_.webp',
    title: '',
    description: '',
    width: 500,
    height: 600,
  }, 
  {
    id: 'horse',
    type:'painting',
    censoredSrc: 'assets/paintings/red-horse-ai.png',
    uncensoredSrc: 'assets/paintings/red-horse.JPG',
    title: '',
    description: '',
    width: 700,
    height: 650
  },
  {
    id: 'ivan',
    type: 'painting',
    censoredSrc: 'assets/paintings/ivan-ai.png',
    uncensoredSrc: 'assets/paintings/ivan.avif',
    title: '',
    description: '',
    width: 500,
    height: 500
  },
  {
    id: 'knight',
    type: 'painting',
    censoredSrc: 'assets/paintings/knight-ai.png',
    uncensoredSrc: 'assets/paintings/knight.jpg',
    title: '',
    description: '',
    width: 700,
    height: 500
  },
  {
    id: 'dudes',
    type: 'painting',
    censoredSrc: 'assets/paintings/dudes-ai.png',
    uncensoredSrc: 'assets/paintings/dudes.jpg',
    title: '',
    description: '',
    width: 700,
    height: 500
  },
  {
    id: 'procession',
    type: 'painting',
    censoredSrc: 'assets/paintings/procession-ai.png',
    uncensoredSrc: 'assets/paintings/procession.jpg',
    title: '',
    description: '',
    width: 700,
    height: 500
  },
  {
    id: 'apotheosis',
    type: 'painting',
    censoredSrc: 'assets/paintings/apotheosis-ai.png',
    uncensoredSrc: 'assets/paintings/apotheosis.JPG',
    title: '',
    description: '',
    width: 700,
    height: 500
  },
  {
    id: 'head',
    type: 'painting',
    censoredSrc: 'assets/paintings/head-ai.png',
    uncensoredSrc: 'assets/paintings/head.jpg',
    title: '',
    description: '',
    width: 500,
    height: 700
  },
  {
    id: 'abstract',
    type: 'painting',
    censoredSrc: 'assets/paintings/abstract-ai.png',
    uncensoredSrc: 'assets/paintings/abstract.jpg',
    title: '',
    description: '',
    width: 900,
    height: 600
  },
  {
    id: 'dream',
    type: 'painting',
    censoredSrc: 'assets/paintings/dream-ai.png',
    uncensoredSrc: 'assets/paintings/dream.jpg',
    title: '',
    description: '',
    width: 500,
    height: 400
  },
];

/**
 * Automatically positions gallery items with wrapping based on row width or item count
 */
function positionGalleryItems(items: Omit<ArchiveItem, 'position'>[]): ArchiveItem[] {
  let currentX = LAYOUT_CONFIG.startX;
  let currentY = LAYOUT_CONFIG.startY;
  let itemsInCurrentRow = 0;
  let maxHeightInRow = 0;

  return items.map((item) => {
    const itemWidth = item.width || 400; // Default width if not specified
    const itemHeight = item.height || 500; // Default height if not specified

    // Check if we need to wrap to a new row
    const wouldExceedWidth = currentX + itemWidth > LAYOUT_CONFIG.maxRowWidth;
    const wouldExceedItemCount = itemsInCurrentRow >= LAYOUT_CONFIG.maxItemsPerRow;

    if (itemsInCurrentRow > 0 && (wouldExceedWidth || wouldExceedItemCount)) {
      // Start a new row
      currentX = LAYOUT_CONFIG.startX;
      currentY += maxHeightInRow + LAYOUT_CONFIG.spacingY;
      itemsInCurrentRow = 0;
      maxHeightInRow = 0;
    }

    const position = {
      x: currentX,
      y: currentY,
    };

    // Update tracking variables
    currentX += itemWidth + LAYOUT_CONFIG.spacingX;
    itemsInCurrentRow++;
    maxHeightInRow = Math.max(maxHeightInRow, itemHeight);

    return {
      ...item,
      position,
    };
  });
}

/**
 * Gallery items with auto-calculated positions
 */
export const galleryItems: ArchiveItem[] = positionGalleryItems(baseGalleryItems);

/**
 * Canvas configuration for the archive
 */
export const canvasConfig = {
  width: 4000,
  height: 3000,
  minScale: 0.2,
  maxScale: 3,
  initialScale: .2,
  backgroundImage: 'assets/media/gallery-background-3.jpg', // Add your background image path here
};
