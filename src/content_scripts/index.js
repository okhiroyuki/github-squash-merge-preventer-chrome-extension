function checkBranch() {
    chrome.storage.sync.get(({ branchesList: [] }), (data) => {
        const targetBranch = document.querySelector("span.commit-ref span.css-truncate-target").innerText
        if (data.branchesList.includes(targetBranch)) {
            const items = document.getElementsByClassName("btn-group-squash")
            if (items.length > 0) {
                for (let i = 0; i < items.length; i++) {
                    items[i].disabled = true
                }
            } else {
                setTimeout(checkBranch, 125)
            }
        }
    })
}

window.onload = function () {
    setTimeout(checkBranch, 125)
}
