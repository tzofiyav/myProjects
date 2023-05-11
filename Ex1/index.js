//const { text } = require("express");


function choice() {
    let choice1 = document.getElementById("vehicle1");
    let choice2 = document.getElementById("vehicle2");
    let choice3 = document.getElementById("vehicle3");
    if (choice1.checked == true)
        window.location.replace("index3.html");
    else if (choice2.checked == true)
        window.location.replace("index4.html");
    else if (choice3.checked == true)
        window.location.replace("index5.html");
    else
        alert("נא להקיש את בחירתך");
}


function long(num) {
    let check = document.getElementById("width");
    let check2 = document.getElementById("height");
    if (check.value == "" || check2.value == "") {
        alert("נא למלא את כל השדות");
    }
    else if (check2.value < 2)
        alert("גובה בנין צריך להיות גדול או שווה ל2");
    else if (num == 1) {
        rectangle(check.value, check2.value);
    }
    else /*if (num == 2)*/
        triangular(check.value, check2.value);
}


function toReturn() {
    const para2 = document.createElement("button");
    document.getElementById("button3").appendChild(para2);
    para2.onclick = function () { window.location.replace("index2.html"); };
    para2.innerText = "לתפריט הראשי";
}


function rectangle(width, height) {
    if (height - width < -5 || height - width > 5)
        document.getElementById("here").innerHTML = " שטח המלבן הוא:" + (width * height);
    else
        document.getElementById("here").innerHTML = "היקף המלבן הוא:" + (2 * width + 2 * height);
    toReturn();
}


function triangular(width, height) {
    const par = document.createElement("button");
    const para = document.createElement("button");
    par.id = "option1"
    para.id = "option2"
    document.getElementById("button1").appendChild(par);
    document.getElementById("button2").appendChild(para);
    par.onclick = function () { option1(width, height) };
    para.onclick = function () { option2(width, height) };
    par.innerText = "נא לחשב לי את היקף המשולש";
    para.innerText = "נא להדפיס לי את המשולש";
    toReturn();
    document.getElementById("forms").remove();
}


function option1(width, height) {
    let rib = Math.sqrt((width * width) + (height * height));
    let exe = Number(width);
    exe += Number(2 * rib);
    document.getElementById("here").innerHTML = "היקף המשולש הוא:" + exe;
}

function option2(width, height) {
    if (width > 2 * height || width % 2 == 0)
        document.getElementById("here2").innerHTML = "לא ניתן להדפיס את המשולש";
    else {
        printTri(width, height);
    }
}


function printTri(width, height) {
    let numLevel = Math.floor(width / 2) - 1;
    console.log(numLevel);
    let numLines = Math.floor((height - 2) / numLevel);// numlines in level
    console.log(numLines);
    let inHighLevel = numLines + (height - 2) % numLevel;
    console.log(inHighLevel);
    let text = "*"
    for (let i = 0; i < height; i++) {
        if (i == 1 || i == height - 1 || (i > inHighLevel && (i - inHighLevel) % numLines == 1))
            text += "**";
        let textNode = document.createTextNode(text)
        let br = document.createElement("br")
        let p = document.getElementById("here2");
        p.appendChild(textNode);
        p.appendChild(br);
    }

}