const TARGET_BRANCH_ELEMENT = "span.commit-ref span.css-truncate-target"

function checkBranch() {
    chrome.storage.sync.get({ branchesList: [] }, (data) => {
        const targetBranch = getInnerText(TARGET_BRANCH_ELEMENT);
        if (!targetBranch) return;
        if (data.branchesList.includes(targetBranch)) {
            disabledElement("button.btn-group-squash")
            disabledElement("button.js-merge-box-button-squash")
        }
    });
}

function getInnerText(element) {
    return getElement(element).innerText;
}

function getElement(element) {
    return document.querySelector(
        element,
    );
}

function disabledElement(element) {
    waitElement(element, () => {
        getElement(element).disabled = true;
    })
}

function waitElement(element, callback) {
    const timerId = setInterval(elementLoaded, 125);
    function elementLoaded() {
        const targetElement = getElement(element);
        if (targetElement) {
            clearInterval(timerId);
            callback();
        }
    }
}

console.log("content script loaded");
waitElement(TARGET_BRANCH_ELEMENT, checkBranch)
