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
  {
    id: 'stalin-yezhov-1',
    type: 'photo',
    position: { x: 500, y: 400 },
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897.jpg/2560px-St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897.jpg',
    censoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/St_Petersburg_Union_of_Struggle_for_the_Liberation_of_the_Working_Class_-_Feb_1897_-_Altered.jpg',
    title: 'Stalin with Yezhov, 1937',
    description: 'Nikolai Yezhov was erased from this photograph after his execution in 1940.',
    historicalContext: 'Yezhov led the NKVD during the Great Purge before becoming a victim himself.',
    width: 400,
    height: 300,
  },
  {
    id: 'trotsky-erasure-1',
    type: 'photo',
    position: { x: 1200, y: 800 },
    censoredSrc: 'public/assets/paintings/marie.png',
    uncensoredSrc: 'public/assets/paintings/marie.jpg',
    title: 'Lenin addressing troops, 1920',
    description: 'Leon Trotsky was removed from photographs after falling out of favor with Stalin.',
    historicalContext: 'One of the most famous examples of Soviet photo manipulation.',
    width: 400,
    height: 500,
  },
  {
    id: 'painting-1',
    type: 'painting',
    position: { x: 2000, y: 600 },
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Postcard%2C_1917_Sign_stating_Watches_of_gold_and_silver.jpg',
    censoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Soviet_Postcard_1917_-_Altered.jpg',
    title: 'The Commissar (Altered)',
    description: 'A revolutionary painting with key figures removed during Stalin\'s purges.',
    historicalContext: 'Socialist Realism paintings were often "corrected" to match current political reality.',
    width: 300,
    height: 400,
  },
  {
    id: 'group-photo-1',
    type: 'photo',
    position: { x: 800, y: 1500 },
    censoredSrc: 'public/assets/photos/Soviet_censorship_with_Stalin2_-_reversed.jpg',
    uncensoredSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/%D0%9D.%D0%9A._%D0%90%D0%BD%D1%82%D0%B8%D0%BF%D0%BE%D0%B2%2C_%D0%9D.%D0%9C._%D0%A8%D0%B2%D0%B5%D1%80%D0%BD%D0%B8%D0%BA.jpg',
    title: 'Politburo Meeting, 1934',
    description: 'Multiple members erased as they were purged from the party.',
    historicalContext: 'Soviet censors systematically removed "unpersons" from historical records.',
    width: 500,
    height: 550,
  },
  {
    id: 'propaganda-poster-1',
    type: 'painting',
    position: { x: 2800, y: 1200 },
    censoredSrc: 'public/assets/photos/stalin-censored.png',
    uncensoredSrc: 'public/assets/photos/stalin-uncensored.png',
    title: 'Workers Unite! (Modified)',
    description: 'Propaganda poster with original text and imagery altered.',
    historicalContext: 'Even art celebrating the revolution was subject to censorship.',
    width: 300,
    height: 450,
  },
  {
    id: 'family-photo-1',
    type: 'photo',
    position: { x: 1500, y: 2000 },
    censoredSrc: 'public/assets/paintings/bargehaulers-censored.png',
    uncensoredSrc: 'public/assets/paintings/bargehaulers.jpg',
    title: 'Family Portrait, 1938',
    description: 'Family member removed after being declared an enemy of the state.',
    historicalContext: 'Ordinary citizens erased relatives from photos to avoid suspicion.',
    width: 575,
    height: 300,
  },
  {
    id: 'kremlin-photo-1',
    type: 'photo',
    position: { x: 3200, y: 400 },
    censoredSrc: 'public/assets/paintings/women-censored.png',
    uncensoredSrc: 'public/assets/paintings/women.jpg',
    title: 'May Day Celebration, 1936',
    description: 'Officials removed from Red Square gathering after political purge.',
    historicalContext: 'Public ceremonies were constantly re-edited to match current politics.',
    width: 450,
    height: 300,
  },
];

/**
 * Canvas configuration for the archive
 */
export const canvasConfig = {
  width: 4000,
  height: 3000,
  minScale: 0.3,
  maxScale: 3,
  initialScale: 0.5,
};
