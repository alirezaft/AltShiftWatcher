chrome.runtime.onMessage.addListener(changeLang);

var MRTtoEnglish = {
    "ض" : "q",
    "ص" : "w",
    "ث" : "e",
    "ق" : "r",
    "ف" : "t",
    "غ" : "y",
    "ع" : "u",
    "ه" : "i",
    "خ" : "o",
    "ح" : "p",
    "ج" : "[",
    "چ" : "]",
    "ش" : "a",
    "س" : "s",
    "ی" : "d",
    "ب" : "f",
    "ل" : "g",
    "ا" : "h",
    "ت" : "j",
    "ن" : "k",
    "م" : "l",
    "ک" : ";",
    "گ" : "'",
    "پ" : "\\",
    "ظ" : "z",
    "ط" : "x",
    "ز" : "c",
    "ر" : "v",
    "ذ" : "b",
    "د" : "n",
    "ئ" : "m",
    "و" : ",",
    "َ" : "Q",
    "ً" : "W",
    "ُ" : "E",
    "ٌ" : "R",
    "ْ" : "T",
    "ٰ" : "Y",
    "ٔ" : "U",
    "ۀ" : "I",
    "]" : "O",
    "[" : "P",
    "}" : "{",
    "{" : "}",
    "ِ" : "A",
    "ٍ" : "S",
    "ي" : "D",
    "ۤ" : "F",
    "ٖ" : "G",
    "آ" : "H",
    "ة" : "J",
    "" : "K",
    "«" : "L",
    ":" : ":",
    "؛" : "\"",
    "ژ" : "|",
    "»" : "Z",
    "«" : "X",
    "›" : "C",
    "‹" : "V",
    "إ" : "B",
    "أ" : "N",
    "ء" : "M",
    "ؤ" : "<",
    "،" : ">",
    "؟" : "?",
}

var StandardtoEnglish = {
    "ض" : "q",
    "ص" : "w",
    "ث" : "e",
    "ق" : "r",
    "ف" : "t",
    "غ" : "y",
    "ع" : "u",
    "ه" : "i",
    "خ" : "o",
    "ح" : "p",
    "ج" : "[",
    "چ" : "]",
    "ش" : "a",
    "س" : "s",
    "ی" : "d",
    "ب" : "f",
    "ل" : "g",
    "ا" : "h",
    "ت" : "j",
    "ن" : "k",
    "م" : "l",
    "ک" : ";",
    "گ" : "'",
    "\\" : "\\",
    "ظ" : "z",
    "ط" : "x",
    "ز" : "c",
    "ر" : "v",
    "ذ" : "b",
    "د" : "n",
    "پ" : "m",
    "و" : ",",
    "ْْ" : "Q",
    "ٌ" : "W",
    "ٍُ" : "E",
    "ً" : "R",
    "ُ" : "T",
    "ِ" : "Y",
    "َ" : "U",
    "ّ" : "I",
    "]" : "O",
    "[" : "P",
    "}" : "{",
    "{" : "}",
    "ؤ" : "A",
    "ئ" : "S",
    "ي" : "D",
    "إ" : "F",
    "أ" : "G",
    "آ" : "H",
    "ة" : "J",
    "»" : "K",
    "«" : "L",
    ":" : ":",
    "؛" : "\"",
    "|" : "|",
    "ك" : "Z",
    "ط" : "X",
    "ژ" : "C",
    "ٰ" : "V",
    "‌" : "B",
    "ٔ" : "N",
    "ء" : "M",
    ">" : "<",
    "<" : ">",
    "؟" : "?",
}

var PersiantoEnglish = {
    "ض" : "q",
    "ص" : "w",
    "ث" : "e",
    "ق" : "r",
    "ف" : "t",
    "غ" : "y",
    "ع" : "u",
    "ه" : "i",
    "خ" : "o",
    "ح" : "p",
    "ج" : "[",
    "چ" : "]",
    "ش" : "a",
    "س" : "s",
    "ی" : "d",
    "ب" : "f",
    "ل" : "g",
    "ا" : "h",
    "ت" : "j",
    "ن" : "k",
    "م" : "l",
    "ک" : ";",
    "گ" : "'",
    "پ" : "\\",
    "ظ" : "z",
    "ط" : "x",
    "ز" : "c",
    "ر" : "v",
    "ذ" : "b",
    "د" : "n",
    "پ" : "m",
    "و" : ",",
    "ً" : "Q",
    "ٌ" : "W",
    "ٍُ" : "E",
    //"ً" : "R",
    "ُ" : "T",
    "،" : "Y",
    "؛" : "U",
    "," : "I",
    "]" : "O",
    "[" : "P",
    "}" : "{",
    "{" : "}",
    "َ" : "A",
    "ُ" : "S",
    "ِ" : "D",
    "ّ" : "F",
    "ۀ" : "G",
    "آ" : "H",
    "-" : "J",
    "«" : "K",
    "»" : "L",
    ":" : ":",
    // "؛" : "\"",
    "|" : "|",
    "ة" : "Z",
    "ي" : "X",
    "ژ" : "C",
    "ؤ" : "V",
    "إ" : "B",
    "أ" : "N",
    "ء" : "M",
    "<" : "<",
    ">" : ">",
    "؟" : "?",
}

var changeCharacters = () => {
    let NewText = "";
    for(var i = 0; i < text.length; i++){
        if(dictionary[text.charAt(i)] != null){
            NewText += dictionary[text.charAt(i)];
        }
    }
    return NewText;
}

var changeLang = (message, sender, sendResponse) => {
    console.log("FAGTYTG " + sender + " " + message);
    let element = document.activeElement;
    print(element);
    // if(!(element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement)){
    //     alert("باید در یک Text Field متن خود را انتخاب کنید!");
    //     return;
    // }
    let {selectionStart, selectionEnd} = element;
    if (selectionEnd === selectionStart){
        alert("0000")
        return;
    }
    let ElementText = element.value;
    let BeforeSelectedText = ElementText.substring(0, selectionStart);
    let AfterSelectedText = ElementText.substring(selectionEnd);
    let SelectedText = ElementText.substring(selectionStart, selectionEnd);

    element.value = BeforeSelectedText;

    // let KeyboardType = document.getElementById("KType");
    console.log(message);
    // alert(message);
    switch(message){
        case MRT:
            element.value += changePersianToEnglish(SelectedText, MRTtoEnglish);
            break;
        case Standard:
            element.value += changePersianToEnglish(SelectedText, StandardtoEnglish);
            break;
        case Persian:
            element.value += changePersianToEnglish(SelectedText, PersiantoEnglish);
            break;
    }
    element.value += AfterSelectedText;
}

