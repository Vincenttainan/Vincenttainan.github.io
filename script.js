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

function openModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.classList.add("show");
    document.body.classList.add("modal-open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);

    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
        document.body.classList.remove("modal-open");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const openModal = document.querySelector(".modal.show");

        if (openModal) {
            openModal.classList.remove("show");
            document.body.classList.remove("modal-open");
        }
    }
});