# 技術棧：Project TimeFlow

## 1. 前端開發 (Frontend)
- **核心框架**: [Next.js (React)](https://nextjs.org/) - 提供伺服器渲染 (SSR) 與靜態生成 (SSG)，確保極速載入與 SEO 優勢。
- **樣式工具**: [Tailwind CSS](https://tailwindcss.com/) - 快速實現高度自定義的極簡美學與響應式設計。
- **UI 組件庫**: [Shadcn/ui](https://ui.shadcn.com/) - 基於 Radix UI 的高品質組件，適合打磨 Apple 級別的細節。
- **動效庫**: [Framer Motion](https://www.framer.com/motion/) - 實現 60fps 的 Spring 物理動畫與流暢頁面轉場。
- **狀態管理**: React Context API / [Zustand](https://github.com/pmndrs/zustand) - 輕量且易於維護。

## 2. 後端與資料庫 (Backend & Database)
- **執行環境**: [Node.js (TypeScript)](https://nodejs.org/) - 確保全端語言統一，降低維護難度。
- **資料庫**: [PostgreSQL](https://www.postgresql.org/) - 強大的關聯式資料庫，用於處理複雜的人資數據。
- **多租戶策略**: **Row Level Security (RLS)** - 透過 PostgreSQL 原生權限機制實現多客戶數據嚴格隔離，管理最為簡單高效。
- **快取機制**: [Redis](https://redis.io/) - 用於 Session 存儲與即時數據快取。

## 3. 基礎設施與部署 (Infrastructure)
- **託管平台**: [Vercel](https://vercel.com/) - 自動整合 Edge Network (CDN)，提供全球極速訪問。
- **後端服務 (BaaS)**: [Supabase](https://supabase.com/) - 整合 PostgreSQL、Auth、Realtime 及儲存服務，極大化減少運維負擔。
- **開發擴充**: [chrome-devtools-mcp](https://github.com/modelcontextprotocol/servers) - 於開發環境調用，進行精細的前端除錯與效能調優。

## 4. 第三方整合 (Integrations)
- **通訊整合**: [LINE Messaging API](https://developers.line.biz/zh-hant/services/messaging-api/) - 實現輕量入口打卡與即時通知。
- **支付系統**: [Stripe](https://stripe.com/) - 處理多租戶訂閱與方案支付。
- **郵件服務**: [Resend](https://resend.com/) - 發送高品質系統通知郵件。

## 5. 技術選型理由
- **低維護成本**: 優先選擇 Serverless 與 Managed Services (Vercel, Supabase)，讓開發者專注於產品開發而非伺服器維護。
- **高擴展性**: TypeScript + Next.js 的組合能應對從 MVP 到大規模應用的所有階段。
- **極致體驗**: 透過 Framer Motion 與 Edge CDN 確保視覺與操作的流暢度達到 Apple/Tesla 級別要求。
