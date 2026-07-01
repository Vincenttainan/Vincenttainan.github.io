function showMessage() {
    alert("謝謝你來看我的個人網頁！");
}

function toggleTheme() {
    const themeLink = document.getElementById("theme-style");
    const checkboxes = document.querySelectorAll(".theme-checkbox");

    if (themeLink.getAttribute("href") === "css/theme_w.css") {
        themeLink.setAttribute("href", "css/theme_b.css");

        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    } else {
        themeLink.setAttribute("href", "css/theme_w.css");

        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        });
    }
}