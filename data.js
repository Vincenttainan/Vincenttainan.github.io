const works = [
    {
        id: "universityModal",
        date: "大學時期",
        title: "國立中央大學",
        statusText: "就學中",
        statusClass: "status-studying",
        tags: [
            "中央大學",
            "資工系",
            "Computer Science",
            "Undergraduate"
        ],
        summary: "目前就讀於國立中央大學資訊工程學系。",
        detail: "大學期間持續累積程式設計、資料結構、演算法、系統與前端網頁開發等相關能力。",
        modalParagraphs: [
            "目前就讀於國立中央大學資訊工程學系，學習內容包含程式設計、資料結構、演算法、計算機組織、作業系統與前端網頁開發等領域。",
            "在學習過程中，我透過課程專案、程式筆記、解題練習與個人作品集網站，持續整理自己的學習成果與實作經驗。"
        ],
        linkName: "中央大學",
        link: "https://www.csie.ncu.edu.tw/"
    },
    {
        id: "personalPortWebModal",
        date: "2026 / 07",
        title: "個人作品集網站",
        statusText: "持續更新",
        statusClass: "status-updating",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Design",
            "GitHub Pages",
            "Portfolio"
        ],
        summary: "使用 HTML、CSS 與 JavaScript 從零開始製作個人作品集網站。",
        detail: "練習導覽列、響應式排版、日夜模式切換、Modal 彈出視窗、作品狀態標籤、技術標籤、時間軸排版與 GitHub Pages 部署。",
        modalParagraphs: [
            "這是我第一個從零開始製作的個人作品集網站，主要用來整理自己的程式筆記、專案作品與學習歷程。網站使用 HTML、CSS 與 JavaScript 製作，並透過 GitHub Pages 進行部署。",
            "在製作過程中，我練習了固定導覽列、響應式排版、日夜模式切換、Modal 彈出視窗、作品狀態標籤、技術標籤、時間軸版面與主題顏色切換等功能。這個作品也作為我持續學習前端網頁開發的實作紀錄。"
        ],
        linkName: "github",
        link: "https://github.com/Vincenttainan/Vincenttainan.github.io"
    },
    {
        id: "personalSiteGeneratorModal",
        date: "2026 / 07",
        title: "個人網頁視覺化生成器",
        statusText: "開發中",
        statusClass: "status-developing",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "JSZip",
            "Web Tool",
            "Generator"
        ],
        summary: "使用 HTML、CSS 與 JavaScript 製作的個人網頁視覺化生成工具。",
        detail: "使用者可以輸入姓名、身分、自我介紹與技能，並即時預覽個人網頁效果，同時調整背景、卡片、文字與技能標籤顏色，最後下載成可獨立使用的 ZIP 網頁檔案。",
        modalParagraphs: [
            "個人網頁視覺化生成器是一個使用 HTML、CSS 與 JavaScript 製作的前端工具，目標是讓使用者不需要手動撰寫網頁，也能透過表單輸入快速產生個人介紹頁面。",
            "專案功能包含姓名、身分、自我介紹與技能欄位輸入，右側即時預覽個人網頁結果，並支援背景顏色、卡片顏色、文字顏色、技能標籤顏色與字體大小調整。",
            "在互動功能上，專案實作了可拖曳的調色 Modal、色票選擇、手動輸入色碼、即時同步預覽，以及透過 JSZip 將產生的 HTML、CSS、JavaScript 打包下載成 ZIP 檔。透過這個專案，我練習了 DOM 操作、表單事件處理、狀態管理、即時渲染與前端檔案產生流程。"
        ],
        linkName: "查看 GitHub",
        link: "https://github.com/Vincenttainan/personal-site-generator"
    },
    {
        id: "programNoteModal",
        date: "2026 / 03",
        title: "程式筆記：語法、解題紀錄",
        statusText: "持續更新",
        statusClass: "status-updating",
        tags: [
            "C++",
            "Python",
            "Java",
            "Assembly",
            "Notes",
            "Solutions",
            "LeetCode",
            "TOJ"
        ],
        summary: "持續整理語法筆記與解題紀錄。",
        detail: "內容包含 C++、Python、Java、Assembly 等語法紀錄，以及 LeetCode、TOJ 等平台的解題練習。",
        modalParagraphs: [
            "這是我整理程式學習過程的筆記專案，內容包含常用語法、觀念整理與解題紀錄。主要用來記錄自己在 C++、Python、Java 與 Assembly 學習過程中遇到的語法、觀念和題目練習。",
            "解題紀錄部分包含 LeetCode、TOJ 等平台的練習題，透過筆記整理加深自己對資料結構、演算法與程式語法的理解。"
        ],
        linkName: "github",
        link: "https://github.com/Vincenttainan/ProgramNote"
    },
    {
        id: "fishingGameModal",
        date: "2025 / 12",
        title: "組合語言專案 The Fishing Game",
        statusText: "已完成",
        statusClass: "status-done",
        tags: [
            "Assembly",
            "Irvine32",
            "Project",
            "Game",
            "Console UI",
            "Keyboard Input"
        ],
        summary: "使用 Assembly 製作文字介面釣魚小遊戲。",
        detail: "使用 Assembly 與 Irvine32 製作小遊戲，練習鍵盤輸入、文字畫面輸出、流程控制、狀態管理與簡單遊戲迴圈設計。",
        modalParagraphs: [
            "The Fishing Game 是使用 Assembly Language 與 Irvine32 函式庫製作的文字介面小遊戲。專案以 Stardew Valley 的釣魚機制作為參考，玩家需要透過鍵盤控制釣鉤位置，讓魚維持在捕捉範圍內，並累積進度條直到成功捕獲。",
            "遊戲內容包含主選單、操作教學、魚類圖鑑、隨機魚種、捕捉成功與失敗判定等功能。透過這個專案，我練習了 Assembly 的流程控制、鍵盤輸入、文字畫面輸出、變數狀態管理與簡單的遊戲迴圈設計。"
        ],
        linkName: "github",
        link: "https://github.com/Vincenttainan/NCU_assemblyProject"
    },
    {
        id: "highSchoolModal",
        date: "高中時期",
        title: "國立臺南第一高級中學",
        statusText: "已畢業",
        statusClass: "status-graduated",
        tags: [
            "南一中",
            "資訊社社長",
            "C++",
            "Python",
            "Arduino",
            "APCS"
        ],
        summary: "高中就讀於國立臺南第一高級中學，期間持續培養資訊能力與程式設計基礎。",
        detail: "高中期間擔任資訊社社長，參與社團經營、程式教學、競賽練習與專題實作，逐步建立對資訊工程領域的興趣與基礎能力。",
        modalParagraphs: [
            "高中就讀於國立臺南第一高級中學。期間加入資訊社並擔任社長，除了持續練習程式設計，也參與社團經營、活動規劃與社員協助，累積團隊合作與帶領社群的經驗。",
            "在高中階段，我曾開辦 國中生程式設計營、成立 臺南高中競技程式聯盟（已解散），並參與人工智慧教育高中生營隊。這些經歷讓我從單純學習程式，逐漸轉向教學、交流與專題實作。",
            "程式能力方面，高中時期主要接觸 C++、Python 與 Arduino，並通過 APCS 觀念 4 級、實作 4 級。透過解題練習、社團活動與專題實作，我逐步確立往資訊工程領域發展的方向。"
        ],
        linkName: "台南一中",
        link: "https://www.tnfsh.tn.edu.tw/"
    }
];


/*
{
    id: "test_id",
    date: "nnnn / nn",
    title: "test_title",
    statusText: "已完成",
    statusClass: "status-done",
    tags: [
        "test_tags_1",
        "test_tags_2",
        "test_tags_3",
        "test_tags_4",
        "test_tags_5",
        "test_tags_6"
    ],
    summary: "test_summary",
    detail: "test_detail",
    modalParagraphs: [
        "test_modalParagraphs_1",
        "test_modalParagraphs_2"
    ],
    linkName: "test_linkName",
    link: "test_link"
}
*/

/*
status-updating     持續更新
status-done         已完成
status-developing   開發中
status-dead         停止維護

status-learning     學習中

status-studying     就學中
status-graduated    已畢業
*/