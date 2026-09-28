"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SystemsFlow() {
  const shouldReduceMotion = useReducedMotion();

  // Cross layout coordinates
  const nodes = [
    { id: "CLIENT", label: "CLIENT", cx: 80, cy: 200 },
    { id: "SERVICE", label: "SERVICE", cx: 200, cy: 200 },
    { id: "DATA", label: "DATA", cx: 320, cy: 200 },
    { id: "AGENT", label: "AGENT", cx: 200, cy: 100 },
    { id: "OBS", label: "OBSERVABILITY", cx: 200, cy: 300 },
  ];

  const edges = [
    { from: 0, to: 1 }, // Client to Service
    { from: 3, to: 1 }, // Agent to Service
    { from: 1, to: 2 }, // Service to Data
    { from: 1, to: 4 }, // Service to Observability
  ];

  return (
    <div className="w-full max-w-[500px] mx-auto aspect-square relative flex items-center justify-center opacity-90">
      {/* 
        Adjusted viewBox to naturally crop padding, increasing visual scale by ~20%.
        Nodes range from X:38 to X:362, Y:86 to Y:314.
        viewBox 15 60 370 280 comfortably contains everything with minimal padding.
      */}
      <svg viewBox="15 60 370 280" className="w-full h-auto drop-shadow-md">
        
        {/* Edges (Thin, solid, muted) */}
        {edges.map((edge, i) => (
          <line
            key={`edge-${i}`}
            x1={nodes[edge.from].cx}
            y1={nodes[edge.from].cy}
            x2={nodes[edge.to].cx}
            y2={nodes[edge.to].cy}
            stroke="#292E34"
            strokeWidth="1.5"
          />
        ))}

        {/* MCP Label on AGENT -> SERVICE edge */}
        <text
          x={208}
          y={150}
          fill="#697078"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.05em"
        >
          MCP
        </text>

        {/* Nodes (Small outlined rectangles) */}
        {nodes.map((node) => {
          const width = 84;
          const height = 28;
          return (
            <g key={node.id}>
              <rect
                x={node.cx - width / 2}
                y={node.cy - height / 2}
                width={width}
                height={height}
                rx="2"
                fill="#16191D"
                stroke="#292E34"
                strokeWidth="1"
              />
              <text
                x={node.cx}
                y={node.cy + 3.5}
                fill="#9CA3AB"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                letterSpacing="0.05em"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Periodic Request Pulse */}
        {!shouldReduceMotion && (
          <motion.circle
            r="3.5"
            fill="#27C2B8"
            style={{ filter: "drop-shadow(0 0 6px #27C2B8)" }}
            animate={{
              cx: [
                80, 80, 200, 320, 320, // Trip 1: Client -> Service -> Data
                200, 200, 200, 320, 320, // Trip 2: Agent -> Service -> Data
                200, 200, 200, 200, 200  // Trip 3: Service -> Observability
              ],
              cy: [
                200, 200, 200, 200, 200,
                100, 100, 200, 200, 200,
                200, 200, 300, 300, 300
              ],
              opacity: [
                0, 1, 1, 1, 0,
                0, 1, 1, 1, 0,
                0, 1, 1, 0, 0
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              times: [
                0, 0.02, 0.10, 0.18, 0.20, // Trip 1 (ends at 2.4s)
                0.33, 0.35, 0.43, 0.51, 0.53, // Trip 2 (starts at 4s, ends at 6.3s)
                0.66, 0.68, 0.76, 0.78, 1.0  // Trip 3 (starts at 8s, ends at 9.3s)
              ]
            }}
          />
        )}
      </svg>
    </div>
  );
}
