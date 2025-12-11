"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPower, setIsLowPower] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Check for low-power device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (isMobile || prefersReducedMotion) {
      setIsLowPower(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = theme === "dark";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Neural nodes
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      pulsePhase: number;
      connections: number[];
    }

    const nodes: Node[] = [];
    const nodeCount = 40;

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        radius: 2 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: [],
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const distances: { index: number; dist: number }[] = [];
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dx = node.baseX - other.baseX;
          const dy = node.baseY - other.baseY;
          distances.push({ index: j, dist: Math.sqrt(dx * dx + dy * dy) });
        }
      });
      distances.sort((a, b) => a.dist - b.dist);
      node.connections = distances.slice(0, 2).map((d) => d.index);
    });

    // Pulses
    interface Pulse {
      fromNode: number;
      toNode: number;
      progress: number;
      speed: number;
    }
    const pulses: Pulse[] = [];

    let time = 0;

    const animate = () => {
      time += 0.016;
      
      // Clear with fade - use theme-aware colors
      if (isDark) {
        ctx.fillStyle = "rgba(10, 6, 32, 0.15)";
      } else {
        ctx.fillStyle = "rgba(248, 250, 252, 0.15)";
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Draw wave grid - theme-aware
      ctx.strokeStyle = isDark ? "rgba(0, 240, 255, 0.04)" : "rgba(0, 180, 200, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave = Math.sin(time * 0.4 + x * 0.008 + y * 0.008) * 12;
          const mouseWave = Math.sin((x - mx * canvas.width) * 0.005) * 15 * (mx - 0.5);
          const offset = wave + mouseWave;
          
          // Horizontal line
          if (x + gridSize < canvas.width) {
            const nextWave = Math.sin(time * 0.4 + (x + gridSize) * 0.008 + y * 0.008) * 12;
            ctx.beginPath();
            ctx.moveTo(x, y + offset);
            ctx.lineTo(x + gridSize, y + nextWave + mouseWave);
            ctx.stroke();
          }
          // Vertical line
          if (y + gridSize < canvas.height) {
            const nextWave = Math.sin(time * 0.4 + x * 0.008 + (y + gridSize) * 0.008) * 12;
            ctx.beginPath();
            ctx.moveTo(x, y + offset);
            ctx.lineTo(x, y + gridSize + nextWave + mouseWave);
            ctx.stroke();
          }
        }
      }

      // Update nodes
      nodes.forEach((node, i) => {
        node.x = node.baseX + Math.sin(time * 0.3 + node.pulsePhase) * 25;
        node.y = node.baseY + Math.cos(time * 0.25 + node.pulsePhase) * 18;
        node.x += (mx - 0.5) * 40 * ((i % 3) * 0.3 + 0.2);
        node.y += (my - 0.5) * 40 * ((i % 2) * 0.3 + 0.2);

        // Draw connections
        node.connections.forEach((connIndex) => {
          const other = nodes[connIndex];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 280) {
            ctx.strokeStyle = isDark 
              ? `rgba(0, 240, 255, ${(1 - dist / 280) * 0.12})`
              : `rgba(0, 150, 180, ${(1 - dist / 280) * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw node
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const r = node.radius * (1 + pulse * 0.4);
        
        // Glow
        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 5);
        if (isDark) {
          grad.addColorStop(0, `rgba(0, 240, 255, ${0.25 * pulse})`);
          grad.addColorStop(0.5, `rgba(139, 92, 246, ${0.08 * pulse})`);
        } else {
          grad.addColorStop(0, `rgba(0, 150, 200, ${0.3 * pulse})`);
          grad.addColorStop(0.5, `rgba(100, 60, 200, ${0.12 * pulse})`);
        }
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 5, 0, Math.PI * 2);
        ctx.fill();
        
        // Core
        ctx.fillStyle = isDark 
          ? `rgba(0, 240, 255, ${0.5 + pulse * 0.5})`
          : `rgba(0, 150, 200, ${0.6 + pulse * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Create pulses
      if (Math.random() < 0.025 && pulses.length < 10) {
        const from = Math.floor(Math.random() * nodes.length);
        if (nodes[from].connections.length > 0) {
          const to = nodes[from].connections[Math.floor(Math.random() * nodes[from].connections.length)];
          pulses.push({ fromNode: from, toNode: to, progress: 0, speed: 0.012 + Math.random() * 0.015 });
        }
      }

      // Draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }
        
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;
        
        const pg = ctx.createRadialGradient(x, y, 0, x, y, 12);
        pg.addColorStop(0, "rgba(245, 158, 11, 0.9)");
        pg.addColorStop(0.4, "rgba(0, 240, 255, 0.4)");
        pg.addColorStop(1, "transparent");
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isLowPower, theme]);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-cyan-950 dark:from-indigo-950 dark:via-slate-950 dark:to-cyan-950" />
      </div>
    );
  }

  if (isLowPower) {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50 dark:from-indigo-950 dark:via-slate-950 dark:to-cyan-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,150,200,0.1),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,240,255,0.15),transparent)]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50 dark:from-indigo-950 dark:via-slate-950 dark:to-cyan-950 transition-colors duration-500" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: theme === "dark" ? "screen" : "multiply" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,150,200,0.05),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,240,255,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(248,250,252,0.3))] dark:bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_40%,rgba(10,6,32,0.5))]" />
    </div>
  );
}
