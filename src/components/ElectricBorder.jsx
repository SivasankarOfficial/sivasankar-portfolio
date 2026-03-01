import React, { useId } from 'react';

const ElectricBorder = ({
    children,
    color = '#7df9ff',
    speed = 1,
    chaos = 0.12,
    thickness = 2,
    style = {},
    className = '',
}) => {
    const filterId = useId();
    const gradientId = useId();
    // Adjust duration inversely so larger speed = faster
    // 3 seconds divided by speed 1 = 3 seconds
    // speed 2 = 1.5 seconds
    const duration = 3 / Math.max(0.1, speed);

    return (
        <div className={`relative inline-block overflow-hidden ${className}`} style={{ ...style, padding: thickness }}>
            {/* Background/Border SVG Container */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency={chaos}
                            numOctaves="3"
                            result="noise"
                        />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="4"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={color} stopOpacity="1" />
                        <stop offset="50%" stopColor={color} stopOpacity="0.1" />
                        <stop offset="100%" stopColor={color} stopOpacity="1" />
                    </linearGradient>
                </defs>

                {/* Solid faint border track */}
                <rect
                    x={thickness / 2}
                    y={thickness / 2}
                    width={`calc(100% - ${thickness}px)`}
                    height={`calc(100% - ${thickness}px)`}
                    rx={style.borderRadius || 16}
                    ry={style.borderRadius || 16}
                    fill="none"
                    stroke={color}
                    strokeWidth={thickness}
                    strokeOpacity="0.15"
                />

                {/* Animated chaotic border line */}
                <rect
                    x={thickness / 2}
                    y={thickness / 2}
                    width={`calc(100% - ${thickness}px)`}
                    height={`calc(100% - ${thickness}px)`}
                    rx={style.borderRadius || 16}
                    ry={style.borderRadius || 16}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth={thickness}
                    strokeDasharray="40 160"
                    strokeLinecap="round"
                    filter={`url(#${filterId})`}
                    className="animate-electric-dash"
                    style={{ animationDuration: `${duration}s` }}
                />
            </svg>

            {/* The Actual Content Wrapper */}
            <div className="relative z-10 w-full h-full rounded-[inherit] overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default ElectricBorder;
