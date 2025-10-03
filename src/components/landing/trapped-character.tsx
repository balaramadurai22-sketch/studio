
"use client";

export default function TrappedCharacter() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="animate-float-wander">
        <div className="relative h-24 w-24">
          {/* Body */}
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="bodyGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(0, 150, 136, 0.8)" />
                <stop offset="100%" stopColor="rgba(103, 58, 183, 0.9)" />
              </radialGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="url(#bodyGradient)"
              filter="url(#glow)"
            />
          </svg>

          {/* Eyes */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
            <div className="h-5 w-5 rounded-full bg-white animate-blink origin-center">
              <div className="h-2 w-2 rounded-full bg-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="h-5 w-5 rounded-full bg-white animate-blink origin-center" style={{ animationDelay: '0.2s' }}>
              <div className="h-2 w-2 rounded-full bg-gray-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
