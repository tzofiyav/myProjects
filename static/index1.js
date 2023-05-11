
div_list = document.getElementById("my_list");
let input = new Array();
input = document.getElementsByName("check");
let btn_add = document.getElementById("btn_add")
btn_add.onclick = add_text_to_list_func
let i = 0;
function add_text_to_list_func() {
    let file=document.getElementById("myFile");
    /*if(file.value!=""){
        console.log(file.value)
        const image = document.createElement('img');
        image.src = URL.createObjectURL(file);
        let d= document.getElementById("myImg");
        d.appendChild(image);
        
    }*/
    btn_add.style.borderBlockColor = "blue"
    let table = document.getElementById("customers");
    if (input[2].value < 100000000 || input[2].value > 999999999) {
        alert("נא למלא מספר זהות תקין");
        return;
    }

    if (input[8].value < 500000000 || input[8].value > 599999999) {
        alert("נא למלא מספר טלפון נייד תקין");
        return;
    }

    if (input[7].value < 10000000 || input[7].value > 999999999) {
        alert("נא למלא מספר טלפון תקין");
        return;
    }
    let flag = true;
    for (let j = 0; j < input.length; j++) {
        if (input[j].value == "") {
            flag = false;
        }
    }

    if (flag == true) {
        i++;
        let row = table.insertRow(i);
        let cell = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        cell.innerHTML = i;
        cell1.innerHTML = input[0].value;
        cell2.innerHTML = input[1].value;
        for (let j = 0; j < input.length; j++) {
            input[j].value = ""
        }
        return 0;
    }
    else {
        alert("נא למלא את כל השדות")

    }
    
    
}

function list(){
    let div = document.getElementById("dates");
    div.innerHTML="";
    let vac=document.getElementById("vaccination");
    for(let i=1; i<=vac.value; i++){
        let label = document.createElement("label");
        let date = document.createElement("input");
        let labelFact = document.createElement("label");
        let manufacturer=document.createElement("input");
        let br=document.createElement("br");
        label.innerText=" תאריך לקיחת מנה"+" "+ i +": ";
        labelFact.innerText="    יצרן מנת החיסון: "
        date.type="date";
        date.name="check";
        manufacturer.name="check";
        div.appendChild(label);
        div.appendChild(date);
        div.appendChild(labelFact);
        div.appendChild(manufacturer);
        div.appendChild(br);
    }
}

function corona(){
    let flag= document.getElementById("corona");
    if(flag.value == "y"){
        let div = document.getElementById("dates2");
        let label = document.createElement("label");
        let date = document.createElement("input");
        let label2 = document.createElement("label");
        let date2=document.createElement("input");
        let br=document.createElement("br");
        label.innerText=" תאריך ההדבקה"+" " +": ";
        label2.innerText="    תאריך ההחלמה: "
        date.type="date";
        date.name="check";
        date2.type="date";
        date2.name="check";
        div.appendChild(label);
        div.appendChild(date);
        div.appendChild(label2);
        div.appendChild(date2);
        div.appendChild(br);
    }  
}