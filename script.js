function showMessage() {
    alert("謝謝你來看我的個人網頁！");
}

function toggleTheme() {
    const themeLink = document.getElementById("theme-style");
    const themeButtons = document.querySelectorAll(".theme-btn-change-bw");

    if (themeLink.getAttribute("href") === "css/theme_w.css") {
        themeLink.setAttribute("href", "css/theme_b.css");

        themeButtons.forEach(function(btn) {
            btn.textContent = "切換日間模式";
        });
    } else {
        themeLink.setAttribute("href", "css/theme_w.css");

        themeButtons.forEach(function(btn) {
            btn.textContent = "切換夜覽模式";
        });
    }
}