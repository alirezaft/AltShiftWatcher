const bg = chrome.extension.getBackgroundPage();

document.getElementById("KType").addEventListener("change", () => {
    let ktypeElement = document.getElementById("KType");
    console.log(bg);
    bg.changeKeyboardType(ktypeElement.value);
})