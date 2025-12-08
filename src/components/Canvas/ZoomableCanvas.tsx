import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import type {ReactZoomPanPinchRef} from 'react-zoom-pan-pinch'
import type { CanvasConfig } from '../../types';

interface ZoomableCanvasProps {
  children: ReactNode;
  config?: CanvasConfig;
  centerPoint?: { x: number; y: number }; // Point to center the view on
  showGalleryButton?: boolean;
  showResetButton?: boolean;
  onNavigateToGallery?: () => void;
}

const defaultConfig: CanvasConfig = {
  width: 4000,
  height: 3000,
  minScale: 0.3,
  maxScale: 3,
  initialScale: 0.5,
};

export default function ZoomableCanvas({
  children,
  config = defaultConfig,
  centerPoint,
  showGalleryButton = false,
  showResetButton = false,
  onNavigateToGallery
}: ZoomableCanvasProps) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const transformRef = useRef<ReactZoomPanPinchRef>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const canvasConfig = { ...defaultConfig, ...config };

  // Mobile-friendly zoom settings
  const mobileScale = isMobile ? 0.15 : canvasConfig.initialScale;
  const mobileMinScale = isMobile ? 0.1 : canvasConfig.minScale;

  // Calculate initial position to center on the centerPoint
  const calculateInitialPosition = (scale: number) => {
    if (!centerPoint) {
      return { x: 0, y: 0 };
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate the position to center the centerPoint in the viewport
    const x = -(centerPoint.x * scale) + viewportWidth / 2;
    const y = -(centerPoint.y * scale) + viewportHeight / 2;

    return { x, y };
  };

  const initialPos = calculateInitialPosition(mobileScale ?? .15);

  const handleReset = () => {
    if (transformRef.current) {
      transformRef.current.resetTransform();
    }
  };

  return (
    <div ref={containerRef} className="w-full h-screen bg-slate-50 overflow-hidden relative">
      <TransformWrapper
        ref={transformRef}
        initialScale={mobileScale}
        minScale={mobileMinScale}
        maxScale={canvasConfig.maxScale}
        centerOnInit={false}
        initialPositionX={initialPos.x}
        initialPositionY={initialPos.y}
        limitToBounds={false}
        panning={{
          velocityDisabled: false,
        }}
        wheel={{
          step: 0.1,
        }}
        doubleClick={{
          disabled: true, // Disable to prevent conflict with item clicks
        }}
        pinch={{
          step: 5,
        }}
      >
        <TransformComponent
          wrapperClass="!w-full !h-full"
          contentClass="!w-full !h-full"
        >
          <div className="relative z-10">
            {children}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Bottom navigation buttons */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none z-50">
        {/* Gallery button - bottom left */}
        {showGalleryButton && (
          <button
            onClick={handleReset}
            className="pointer-events-auto px-4 py-2 md:px-6 md:py-3 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-slate-500 transition-all duration-200 text-sm md:text-base font-medium active:scale-95"
          >
            Reset View
          </button>
        )}

        <div className="flex-1" />

        {/* Reset button - bottom right */}
        {showResetButton && (
          <button
            onClick={onNavigateToGallery}
            className="pointer-events-auto px-4 py-2 md:px-6 md:py-3 bg-slate-800/90 hover:bg-slate-700/90 text-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl backdrop-blur-sm border border-slate-600 hover:border-slate-500 transition-all duration-200 text-sm md:text-base font-medium active:scale-95"
          >
            Gallery
          </button>
        )}
      </div>
    </div>
  );
}
