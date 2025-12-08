import type { ArchiveItem } from '../types';

/**
 * Sample archive data for The Veiled Archive
 *
 * In production, replace placeholder images with:
 * - Historical Soviet photos (censored/uncensored pairs)
 * - Manipulated paintings
 * - Censored media files
 */
export const archiveItems: ArchiveItem[] = [
  // Left side - top
  {
    id: 'stalin-yezhov-1',
    type: 'photo',
    position: { x: 700, y: 600 },
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897.jpg/2560px-St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897.jpg',
    censoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897_-_Altered.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 400,
    height: 300,
  },
  // Left side - middle
  {
    id: 'stalin-lenin',
    type: 'photo',
    position: { x: 600, y: 1150},
    censoredSrc: 'assets/photos/Doctored_Stalin-Lenin.jpg',
    uncensoredSrc: 'assets/photos/stalin-lenin.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 700,
    height: 600,
  },
  // Left side - bottom
  {
    id: 'group-photo-1',
    type: 'photo',
    position: { x: 700, y: 1850 },
    censoredSrc: 'assets/photos/Soviet_censorship_with_Stalin2_-_reversed.jpg',
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/%D0%9D.%D0%9A._%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D0%BE%D0%B2%2C_%D0%9D.%D0%9C._%D0%A8%D0%B2%D0%B5%D1%80%D0%BD%D0%B8%D0%BA.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 500,
    height: 550,
  },
  // Right side - top
  {
    id: 'painting-1',
    type: 'painting',
    position: { x: 2700, y: 700 },
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Postcard%2C_1917_Sign_stating_Watches_of_gold_and_silver.jpg',
    censoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Soviet_Postcard_1917_-_Altered.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 300,
    height: 400,
  },
  // Right side - middle
  {
    id: 'reichstag',
    type: 'photo',
    position: { x: 2600, y: 1250},
    censoredSrc: 'assets/photos/reichstag-censored.webp',
    uncensoredSrc: 'assets/photos/reichstag.jpg',
    title: '',
    description: '',
    historicalContext: '',
    width: 700,
    height: 600,
  },
  // Right side - bottom
  {
    id: 'propaganda-poster-1',
    type: 'painting',
    position: { x: 2750, y: 1950 },
    censoredSrc: 'assets/photos/stalin-censored.png',
    uncensoredSrc: 'assets/photos/stalin-uncensored.png',
    title: '',
    description: '',
    historicalContext: '',
    width: 300,
    height: 450,
  }
];

/**
 * Canvas configuration for the archive
 * Centered around the text box at (1500, 750) with dimensions (1000, 1500)
 */
export const canvasConfig = {
  width: 4000,
  height: 3000,
  minScale: 0.15,
  maxScale: 3,
  initialScale: 0.35,
};
