import type { ReactNode } from 'react';
import { useState, useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import type { CanvasConfig } from '../../types';

interface ZoomableCanvasProps {
  children: ReactNode;
  config?: CanvasConfig;
  centerPoint?: { x: number; y: number }; // Point to center the view on
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
  centerPoint
}: ZoomableCanvasProps) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={containerRef} className="w-full h-screen bg-slate-50 overflow-hidden">
      <TransformWrapper
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
    </div>
  );
}
