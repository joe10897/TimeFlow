"use client";

import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react"; // I'll use Lucide icons instead since we installed that
import { Fingerprint, BarChart3, Users, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className="py-20 bg-background relative z-10">
       <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
         >
           功能，<span className="text-primary">不止於強大</span>
         </motion.h2>
         <p className="text-muted-foreground max-w-2xl mx-auto">
           TimeFlow 將繁瑣的人資管理轉化為直覺的視覺體驗。
         </p>
       </div>

      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 animate-pulse"></div>
);

// Custom Header Components for specific features
const ClockInVisual = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center overflow-hidden relative">
     <motion.div 
       className="w-full h-12 bg-primary/20 backdrop-blur-md absolute bottom-4 mx-4 rounded-full flex items-center pl-2"
       initial={{ width: "90%" }}
       whileHover={{ scale: 1.02 }}
     >
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
           <Fingerprint className="text-white w-6 h-6" />
        </div>
        <span className="ml-4 text-sm text-primary-foreground/70">滑動打卡...</span>
     </motion.div>
  </div>
);

const DashboardVisual = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 p-4 border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="flex gap-2 items-end h-full w-full">
            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                  className="w-1/6 bg-primary/80 rounded-t-sm" 
                />
            ))}
        </div>
    </div>
);

const items = [
  {
    title: "一滑即打 (Slide to Clock-in)",
    description: "極致流暢的打卡互動。支援 GPS、WiFi 與防代打卡機制。",
    header: <ClockInVisual />,
    icon: <Fingerprint className="h-4 w-4 text-primary" />,
  },
  {
    title: "視覺化數據中心",
    description: "全公司出勤熱力圖與實時狀態，主管一目瞭然。",
    header: <DashboardVisual />,
    icon: <BarChart3 className="h-4 w-4 text-primary" />,
  },
  {
    title: "行動簽核中心",
    description: "支援手勢操作與觸覺回饋，讓請假審核變得極速且優雅。",
    header: <Skeleton />,
    icon: <SignatureIcon className="h-4 w-4 text-primary" />,
  },
  {
    title: "互動式薪資單",
    description:
      "圖形化呈現薪資結構。點擊即可展開詳細計算公式，減少員工疑惑。",
    header: <Skeleton />,
    icon: <TableIcon className="h-4 w-4 text-primary" />,
  },
  {
    title: "多租戶架構",
    description: "基於 RLS 的嚴格數據隔離，確保企業資安滴水不漏。",
    header: <Skeleton />,
    icon: <ShieldCheck className="h-4 w-4 text-primary" />,
  },
  {
    title: "AI 智慧助理",
    description: "自動偵測異常打卡，並提供排班建議。",
    header: <Skeleton />,
    icon: <Zap className="h-4 w-4 text-primary" />,
  },
  {
    title: "混合模式整合",
    description: "LINE 輕量入口 + 獨立 PWA 應用，兼顧便利與體驗。",
    header: <Skeleton />,
    icon: <Smartphone className="h-4 w-4 text-primary" />,
  },
];

// Helper icons
function SignatureIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0 1.1.2 2.2.5 3.3" />
    </svg>
  );
}

function TableIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}
