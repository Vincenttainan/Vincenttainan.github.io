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

function renderWorks() {
    const timelineList = document.getElementById("timelineList");
    const modalContainer = document.getElementById("modalContainer");

    if (!timelineList || !modalContainer) {
        return;
    }

    timelineList.innerHTML = "";
    modalContainer.innerHTML = "";

    works.forEach(work => {
        const timelineTagsHTML = work.tags
            .slice(0, 6)
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("");

        const modalTagsHTML = work.tags
            .map(tag => `<span class="tag">${tag}</span>`)
            .join("");

        const modalParagraphsHTML = work.modalParagraphs
            .map(paragraph => `<p>${paragraph}</p>`)
            .join("");

        timelineList.innerHTML += `
            <div class="timeline-item">
                <span class="timeline-date">${work.date}</span>

                <div class="work">
                    <div class="timeline-card" onclick="openModal('${work.id}')">
                        <h3 class="work-title">
                            <span class="work-title-text">${work.title}</span>
                            <span class="status ${work.statusClass}">${work.statusText}</span>
                        </h3>

                        <div class="tag-container">
                            ${timelineTagsHTML}
                        </div>

                        <p class="timeline-summary">
                            ${work.summary}
                        </p>

                        <p class="timeline-detail">
                            ${work.detail}
                        </p>
                    </div>
                </div>
            </div>
        `;

        modalContainer.innerHTML += `
            <div id="${work.id}" class="modal">
                <div class="modal-content">
                    <button class="modal-close" onclick="closeModal('${work.id}')">
                        X
                    </button>

                    <h2 class="work-title">
                        ${work.title}
                        <span class="status ${work.statusClass}">${work.statusText}</span>
                    </h2>

                    ${modalParagraphsHTML}

                    <div class="tag-container">
                        ${modalTagsHTML}
                    </div>

                    <div class="modal-link-container">
                        <a href="${work.github}" target="_blank" class="modal-link">
                            查看 GitHub
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
}

renderWorks();