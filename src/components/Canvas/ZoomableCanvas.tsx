import { ReactNode } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import type { CanvasConfig } from '../../types';

interface ZoomableCanvasProps {
  children: ReactNode;
  config?: CanvasConfig;
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
  config = defaultConfig
}: ZoomableCanvasProps) {
  const canvasConfig = { ...defaultConfig, ...config };

  return (
    <div className="w-full h-screen bg-slate-900 overflow-hidden">
      <TransformWrapper
        initialScale={canvasConfig.initialScale}
        minScale={canvasConfig.minScale}
        maxScale={canvasConfig.maxScale}
        centerOnInit
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
      >
        <TransformComponent
          wrapperClass="!w-full !h-full"
          contentClass="!w-full !h-full"
        >
          <div
            className="relative bg-slate-900"
            style={{
              width: `${canvasConfig.width}px`,
              height: `${canvasConfig.height}px`,
            }}
          >
            {/* Archive items */}
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}
