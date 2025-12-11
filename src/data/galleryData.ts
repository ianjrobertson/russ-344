import type { ArchiveItem } from '../types';

/**
 * Configuration for automatic gallery layout
 */
const LAYOUT_CONFIG = {
  startX: 200,           // Starting X position
  startY: 1500,          // Y position (centers items vertically in canvas)
  spacingX: 200,         // Horizontal spacing between items
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
];

/**
 * Automatically positions gallery items in a horizontal line
 */
function positionGalleryItems(items: Omit<ArchiveItem, 'position'>[]): ArchiveItem[] {
  let currentX = LAYOUT_CONFIG.startX;

  return items.map((item) => {
    const itemWidth = item.width || 400; // Default width if not specified
    const position = {
      x: currentX,
      y: LAYOUT_CONFIG.startY,
    };

    // Move X position for next item (current item width + spacing)
    currentX += itemWidth + LAYOUT_CONFIG.spacingX;

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
