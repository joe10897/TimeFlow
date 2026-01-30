# 產品規範：Project TimeFlow

## 1. 品牌個性 (Brand Personality)
- **核心特質**：融合「現代靈動 (Modern & Dynamic)」與「極簡高端 (Premium Minimal)」。
- **感受**：TimeFlow 不僅是一個工具，更是一種生活風格的延伸。它應該讓用戶感受到科技帶來的便利，同時享受視覺上的精緻與寧靜。

## 2. 文字語氣 (Tone of Voice)
- **簡潔直接 (Concise & Direct)**：去除所有不必要的贅字與客套。
- **範例**：
    -   *Bad*: "您好，系統偵測到您已進入公司範圍，請問是否要進行打卡動作？"
    -   *Good*: "已進入範圍。滑動打卡。"
-   **原則**：資訊傳遞效率優先，但在確認成功時可給予短促而愉悅的肯定詞 (e.g., "完成", "已核准")。

## 3. 視覺設計原則 (Visual Principles)
-   **物理感的動畫 (Physics-based Motion)**：拒絕生硬的線性移動。所有頁面切換、卡片展開均需套用 Spring (彈簧) 物理曲線，帶來真實的重量感與慣性。
-   **深度與層次 (Depth & Layering)**：運用毛玻璃 (Glassmorphism) 與細膩的陰影 (Drop Shadows) 區分層級。背景與前景應有明確的空間關係。
-   **高品質微互動 (Micro-interactions)**：
    -   按鈕點擊需有細微的縮放 (Scale down) 與觸覺回饋 (Haptic Feedback)。
    -   Switch 切換、Check 打勾都需配合流暢的 SVG 動畫。

## 4. 色彩計畫 (Color Palette)
-   **風格參考**：Uber / 現代極簡風格。
-   **基礎色調**：
    -   **Background**: 純黑 (`#000000`) 或 深灰 (`#25343F`) 用於深色模式；純白 (`#FFFFFF`) 用於淺色模式。
    -   **Surface**: 淺灰 (`#EAEFEF`) 與 中灰 (`#BFC9D1`) 用於卡片與區塊背景。
-   **強調色 (Accent)**：
    -   **Primary Action**: 活力橘 (`#FF9B51`)，用於打卡按鈕、重要通知點或 Call-to-Action。
-   **文字色**：依據背景色自動調整高對比度 (黑/白)，確保閱讀清晰。

## 5. 版面佈局策略 (Bento Grid Strategy)
-   **焦點導向 (Focus Oriented)**：每個 Bento Block (便當格) 只專注於傳遞「一個」核心訊息或數據。嚴禁資訊過載，利用大量留白維持視覺呼吸感。
-   **互動優先 (Interaction First)**：Bento 格不僅是展示，更是操作介面。
    -   *例*：待簽核的請假單直接顯示於格中，主管可在該格內直接滑動「核准」或「駁回」，無需進入詳情頁。

## 6. 使用者體驗規範 (UX Rules)
-   **手勢操作優先**：能滑動就不要點擊 (Swipe over Click)。
-   **暗黑模式預設**：鑑於現代應用趨勢，優先設計 Dark Mode 體驗，再適配 Light Mode。
-   **無感載入**：運用 Skeleton Screen (骨架屏) 與樂觀更新 (Optimistic UI) 技術，消除等待焦慮。
