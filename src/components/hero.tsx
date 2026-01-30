"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { MouseEvent } from "react";

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const brightness = useTransform(mouseY, [-0.5, 0.5], [1.2, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Apple-style ease out
      },
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden perspective-1000">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[140px]" 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              2025 全新版本已上線
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            讓每一秒打卡，<br />
            都成為<span className="text-primary">視覺的享受</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            TimeFlow 重新定義考勤管理。融合 Apple 與 Tesla 的極致美學，
            讓繁瑣的簽核與計薪，變得如滑動手機般流暢、自然。
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
              立即免費體驗 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold hover:bg-secondary/50">
              <Play className="mr-2 w-4 h-4 fill-current" /> 查看展示影片
            </Button>
          </motion.div>

          {/* Abstract Device Placeholder with 3D Parallax */}
          <motion.div
            variants={itemVariants}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="mt-20 relative w-full max-w-5xl aspect-video cursor-default"
          >
            <motion.div 
               style={{ filter: `brightness(${brightness})` }}
               className="w-full h-full bg-card/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-50" />
                
                {/* Window Controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>

                {/* Floating Elements inside Dashboard */}
                <motion.div 
                   style={{ zIndex: 10, translateZ: "50px" }}
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                >
                   <div className="text-muted-foreground/20 font-bold text-6xl tracking-widest select-none">
                     TIMEFLOW
                   </div>
                </motion.div>

                 {/* Floating Card 1 */}
                 <motion.div
                   style={{ translateZ: "80px", x: mouseX.get() * -20, y: mouseY.get() * -20 }}
                   className="absolute top-[20%] right-[15%] w-48 h-32 bg-primary/20 backdrop-blur-md rounded-xl border border-white/10 shadow-lg"
                 />

                 {/* Floating Card 2 */}
                 <motion.div
                   style={{ translateZ: "60px", x: mouseX.get() * 30, y: mouseY.get() * 30 }}
                   className="absolute bottom-[20%] left-[15%] w-56 h-40 bg-white/5 backdrop-blur-md rounded-xl border border-white/5 shadow-lg"
                 />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}