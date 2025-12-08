import type { ArchiveItem } from '../types';

/**
 * Sample archive data for The Veiled Archive
 *
 * In production, replace placeholder images with:
 * - Historical Soviet photos (censored/uncensored pairs)
 * - Manipulated paintings
 * - Censored media files
 */
export const galleryItems: ArchiveItem[] = [
  {
    id: 'trotsky-erasure-1',
    type: 'painting',
    position: { x: 1200, y: 800 },
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
    position: { x: 1750, y: 1750 },
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
    position: { x: 3200, y: 400 },
    censoredSrc: 'assets/paintings/women-censored.png',
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
    position: { x: 100, y: 800 },
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
    position: { x: -1000, y: 600},
    censoredSrc: 'assets/paintings/apprentice-censored.png',
    uncensoredSrc: 'assets/paintings/apprentice.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 600,
    height: 400,
  },
];

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
