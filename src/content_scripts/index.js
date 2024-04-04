function checkBranch() {
    chrome.storage.sync.get(({ branchesList: [] }), (data) => {
        const targetBranch = document.querySelector("span.commit-ref span.css-truncate-target").innerText;
        if (data.branchesList.includes(targetBranch)) {
            const selectItem = document.querySelector("button.js-merge-box-button-squash");
            const mergeButton = document.querySelector("button.btn-group-squash");

            if (selectItem && mergeButton) {
                selectItem.disabled = true;
                mergeButton.disabled = true;
            } else {
                setTimeout(checkBranch, 125);
            }
        }
    });
}


window.onload = function () {
    setTimeout(checkBranch, 125);
}
