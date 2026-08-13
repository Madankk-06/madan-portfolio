import { useEffect, useRef } from 'react';
import './PixelCard.css';

const FONT = {
  V: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0]
  ],
  I: [
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [1,1,1,1,1]
  ],
  E: [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
  ],
  W: [
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [0,1,0,1,0]
  ]
};

function isTextPixel(col, row, startCol, startRow) {
  const c = col - startCol;
  const r = row - startRow;
  if (r < 0 || r >= 5) return false;
  
  // V
  if (c >= 0 && c < 5) return FONT.V[r][c] === 1;
  // space
  if (c === 5) return false;
  // I
  if (c >= 6 && c < 11) return FONT.I[r][c - 6] === 1;
  // space
  if (c === 11) return false;
  // E
  if (c >= 12 && c < 17) return FONT.E[r][c - 12] === 1;
  // space
  if (c === 17) return false;
  // W
  if (c >= 18 && c < 23) return FONT.W[r][c - 18] === 1;
  
  return false;
}

class Pixel {
  constructor(canvas, context, x, y, color, speed, delay, isText = false) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = isText ? '#f2ff00' : color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.isText = isText;
    if (this.isText) {
      this.sizeStep = 0.5;
      this.minSize = 1.8;
      this.maxSizeInteger = 3.8;
      this.maxSize = 3.8;
    } else {
      this.sizeStep = Math.random() * 0.4;
      this.minSize = 0.5;
      this.maxSizeInteger = 2;
      this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    }
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value, reducedMotion) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;
  const parsed = parseInt(value, 10);

  if (parsed <= min || reducedMotion) {
    return min;
  } else if (parsed >= max) {
    return max * throttle;
  } else {
    return parsed * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: '#f8fafc,#f1f5f9,#cbd5e1',
    noFocus: false
  },
  blue: {
    activeColor: '#e0f2fe',
    gap: 10,
    speed: 25,
    colors: '#e0f2fe,#7dd3fc,#0ea5e9',
    noFocus: false
  },
  yellow: {
    activeColor: '#fef08a',
    gap: 3,
    speed: 20,
    colors: '#fef08a,#fde047,#eab308',
    noFocus: false
  },
  pink: {
    activeColor: '#fecdd3',
    gap: 6,
    speed: 80,
    colors: '#fecdd3,#fda4af,#e11d48',
    noFocus: true
  }
};

export default function PixelCard({ 
  variant = 'default', 
  gap, 
  speed, 
  colors, 
  noFocus, 
  className = '', 
  children,
  as: Component = 'div',
  ...props
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  // eslint-disable-next-line react-hooks/purity
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current;

  const variantCfg = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext('2d');

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(',');
    const pxs = [];
    
    const gapVal = parseInt(finalGap, 10);
    const colsCount = Math.floor(width / gapVal);
    const rowsCount = Math.floor(height / gapVal);
    
    const startCol = Math.max(0, Math.floor((colsCount - 23) / 2));
    const startRow = Math.max(0, Math.floor((rowsCount - 5) / 2));

    let colIdx = 0;
    for (let x = 0; x < width; x += gapVal) {
      let rowIdx = 0;
      for (let y = 0; y < height; y += gapVal) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        const isText = isTextPixel(colIdx, rowIdx, startCol, startRow);

        pxs.push(new Pixel(
          canvasRef.current, 
          ctx, 
          x, 
          y, 
          color, 
          getEffectiveSpeed(finalSpeed, reducedMotion), 
          delay, 
          isText
        ));
        rowIdx++;
      }
      colIdx++;
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = fnName => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    // eslint-disable-next-line react-hooks/purity
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = name => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation('appear');
  const onMouseLeave = () => handleAnimation('disappear');
  const onFocus = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('appear');
  };
  const onBlur = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('disappear');
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

  return (
    <Component
      ref={containerRef}
      className={`pixel-card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
      {...props}
    >
      <canvas className="pixel-canvas" ref={canvasRef} />
      {children}
    </Component>
  );
}
