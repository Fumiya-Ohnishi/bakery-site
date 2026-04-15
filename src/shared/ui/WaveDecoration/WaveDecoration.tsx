interface WaveDecorationProps {
  fill?: string
  flip?: boolean
  height?: number
  className?: string
}

export function WaveDecoration({
  fill = '#FFF8F0',
  flip = false,
  height = 80,
  className,
}: WaveDecorationProps) {
  return (
    <div
      className={className}
      style={{
        overflow: 'hidden',
        lineHeight: 0,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
