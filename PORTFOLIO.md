# 待辦清單 Web App

這是在 GitHub Copilot 實戰工作坊完成的待辦清單 Web App。專案以純前端技術製作，透過逐步實作、需求拆解、Issue 修正與 Pull Request 流程，完成一個可直接在瀏覽器使用的離線應用程式。

## 線上展示

https://<你的帳號>.github.io/<你的repo名稱>/

> 請將上方網址替換成實際的 GitHub Pages 網址。

## 功能

- 新增待辦事項，空白內容不會加入清單。
- 勾選待辦事項以標記完成，完成項目會顯示刪除線並淡化。
- 刪除單筆待辦事項。
- 顯示整份清單的「未完成:N 項」計數。
- 清單為空時顯示提示文字。
- 依「全部」、「未完成」、「已完成」篩選待辦事項。
- 篩選結果為空時顯示對應提示，說明項目可能只是被篩選條件排除。
- 深色模式切換，載入時依照系統的 `prefers-color-scheme` 設定。
- 「清除已完成」功能，使用瀏覽器確認對話框避免誤刪。
- 沒有已完成項目時，清除按鈕會隱藏。
- 待辦資料保存於瀏覽器 `localStorage`，重新整理後仍可保留。
- 支援手機螢幕的響應式版面。

## 技術

- 使用 HTML、CSS 與原生 JavaScript。
- 不使用框架、第三方套件或 `package.json`。
- 不引用外部 CDN，可離線開啟使用。
- 目前版本將 CSS 與 JavaScript 內嵌於根目錄的 `index.html`。
- 使用 CSS 變數管理淺色與深色主題配色。
- 使用瀏覽器 `localStorage` 保存待辦資料。

## 開發方式

- 使用 GitHub Copilot Agent Mode，從需求描述開始，讓 Agent 協助規劃、建立與驗證專案功能。
- 使用 MCP 設定連接 Microsoft Learn 與 GitHub，查詢官方文件並取得 GitHub Issue 的需求脈絡。
- 使用 `.github/copilot-instructions.md` 定義專案的技術限制、程式風格與協作規則。
- 使用 `.github/prompts/fix-issue.prompt.md` 將讀取 Issue、提出計畫、建立分支、修改、驗證、提交與開 PR 的流程整理成可重複使用的 agentic workflow。
- 透過 Git 分支、Commit 與 Pull Request 管理功能修改；Issue #3 與 Issue #4 的修正都依照這個流程完成。

## 我學到什麼

1. 如何把完整需求拆成可驗證的功能與介面行為。
2. 如何使用 Agent Mode 協助跨檔案修改、執行檢查並根據結果迭代。
3. MCP 能讓開發流程連結官方文件與 GitHub Issue，提供更完整的工作上下文。
4. 將專案規範與修 Issue 流程寫成檔案後，可以讓協作方式更一致、也更容易重複使用。
5. 透過分支、Commit、測試與 Pull Request，建立較完整的功能交付流程。
