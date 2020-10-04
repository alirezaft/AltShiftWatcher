var ktype = "MRT";

var changePersianToEnglish = () => {
    // alert(document.getElementById("KType"));
    console.log("fa");
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {ktype}, (res) => {
            console.log(tabs[0].id);
            if(chrome.runtime.lastError) {
                setTimeout(changePersianToEnglish, 1000);
            } else {
                console.log("HKAKF");
            }
        });
    })
}

changeKeyboardType = (type) => {
    console.log(type);
    ktype = type;
}

chrome.contextMenus.removeAll();
chrome.contextMenus.create({
    title: "Change language",
    contexts: ["selection"],
    onclick: changePersianToEnglish
});