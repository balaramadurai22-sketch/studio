
"use client";

export default function TrappedCharacter() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div className="animate-float-wander">
        <div className="relative h-24 w-24">
          {/* Human */}
          <div className="absolute bottom-0 left-1/4 h-12 w-6">
            <svg
              viewBox="0 0 30 60"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle cx="15" cy="8" r="7" />
              <rect x="10" y="18" width="10" height="25" rx="5" />
              <rect x="5" y="40" width="5" height="20" rx="2.5" />
              <rect x="20" y="40" width="5" height="20" rx="2.5" />
            </svg>
          </div>

          {/* Monkey */}
          <div className="absolute bottom-0 right-1/4 h-10 w-8">
            <svg
              viewBox="0 0 40 50"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <circle cx="20" cy="10" r="8" />
              <ellipse cx="20" cy="25" rx="12" ry="10" />
              <rect x="12" y="35" width="6" height="15" rx="3" />
              <rect x="22" y="35" width="6" height="15" rx="3" />
              <path d="M5 20 C 0 30, 0 40, 10 40" stroke="black" strokeWidth="4" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
