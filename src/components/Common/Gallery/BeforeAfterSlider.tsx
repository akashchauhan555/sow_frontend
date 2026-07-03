import { useEffect, useRef, useState, type MouseEvent, type TouchEvent } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

// Interactive drag-to-reveal before/after comparison slider.
export default function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(containerRef.current?.offsetWidth ?? 0);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function updatePosition(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (dragging.current) updatePosition(e.clientX);
  }

  function handleTouchMove(e: TouchEvent<HTMLDivElement>) {
    updatePosition(e.touches[0].clientX);
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={() => (dragging.current = true)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full aspect-video overflow-hidden rounded-xl2 select-none cursor-ew-resize shadow-card"
    >
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img src={before} alt="Before" className="h-full object-cover max-w-none" style={{ width: containerWidth }} draggable={false} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-card flex items-center justify-center text-primary text-xs font-bold">
          ⇔
        </div>
      </div>
      <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/70 text-white text-xs px-3 py-1">Before</span>
      <span className="absolute bottom-4 right-4 rounded-full bg-charcoal/70 text-white text-xs px-3 py-1">After</span>
    </div>
  );
}
