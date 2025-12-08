interface ZoomableTextBoxProps {
  title?: string;
  content: string;
  position: { x: number; y: number };
  width?: number;
  height?: number;
}

export default function ZoomableTextBox({
  title,
  content,
  position,
  width = 600,
  height = 400,
}: ZoomableTextBoxProps) {
  return (
    <div
      className="absolute cursor-default select-text"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        minHeight: `${height}px`,
      }}
    >
      <div className="px-8 py-8 text-slate-200 bg-slate-800/90 rounded-lg shadow-2xl backdrop-blur-md border-2 border-slate-700/50 hover:border-slate-600/70 transition-colors">
        {title && <h1 className="text-8xl font-bold mb-4 text-slate-50 leading-tight flex justify-center">{title}</h1>}
        <div className="text-lg leading-relaxed text-slate-300 space-y-3">
          {content.split('\n').map((paragraph, index) => (
            paragraph.trim() && <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
