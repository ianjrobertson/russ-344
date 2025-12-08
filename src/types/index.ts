/**
 * Core type definitions for The Veiled Archive
 */

export type MediaType = 'photo' | 'painting' | 'media';

export interface Position {
  x: number;
  y: number;
}

export interface ArchiveItem {
  id: string;
  type: MediaType;
  position: Position;
  censoredSrc: string;
  uncensoredSrc: string;
  title: string;
  description: string;
  historicalContext?: string;
  width?: number;  // Optional dimensions for sizing
  height?: number;
}

export interface RevealState {
  [itemId: string]: boolean;
}

export interface CanvasConfig {
  width: number;
  height: number;
  minScale: number;
  maxScale: number;
  initialScale?: number;
  backgroundImage?: string;
}
