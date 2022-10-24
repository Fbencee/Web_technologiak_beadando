var ok=true;


function doneForm() {
    
    if(CheckName() && CheckGender() && CheckType() && CheckColor() && CheckDate() && CheckComment()) {
        document.getElementsByClassName("alert")[0].style.display = "block";
        Reset();
    }
    else {
        CheckGender();
        CheckType();
        CheckColor();
        CheckDate();
        CheckComment();
    }
}

function CheckName() {
    var person = document.getElementById("fname").value;
    console.log(document.getElementById("fname"));
    console.log(document.getElementById("nameCheck"));
    
    if (person == null || person == "") {
        console.log(document.getElementById("declare-name"));
        if(document.getElementById("nameCheck").innerText == ""){
            document.getElementById("nameCheck").innerText = "Írd be a neved!";
            document.getElementById("nameCheck").style.color = "red";
            document.getElementById("fname").style.borderColor = "red";
        }
        return false;
    }
    else{
        
            document.getElementById("nameCheck").innerText = "";
            document.getElementById("fname").style.borderColor = "black";
        
    }

    return true;
}

function CheckGender() {
    var gender = document.getElementById("gender").children;
    console.log(document.getElementById("gender"));
    
    if (!(gender[1].checked || gender[4].checked || gender[7].checked)) {
        if(document.getElementById("genderCheck").innerText == ""){
            document.getElementById("genderCheck").style.color = "red";
            document.getElementById("genderCheck").innerText = "Válassz nemet!";
        }
        return false;
    }
    else{
        
        document.getElementById("genderCheck").innerText = "";	
    }
    return true;
}

function CheckType() {
    var type = document.getElementById("type").children;
    console.log(document.getElementById("type"));
    
    if (!(type[1].checked || type[4].checked || type[7].checked)) {
        if(document.getElementById("typeCheck").innerText == ""){
            document.getElementById("typeCheck").style.color = "red";
            document.getElementById("typeCheck").innerText = "Válassz étel típust!";
        }
        return false;
    }
    else{
        
        document.getElementById("typeCheck").innerText = "";	
    }
    return true;
}

function CheckColor() {
    var color = document.getElementById("color");
    console.log(document.getElementById("colorChoice"));
    
    if (color.value == "#000000" || color.value == null) {
        if(document.getElementById("colorCheck").innerText == ""){
            document.getElementById("colorCheck").style.color = "red";
            document.getElementById("colorCheck").innerText = "Válassz valamilyen színt!";
        }
        return false;
    }
    else{
        
        document.getElementById("colorCheck").innerText = "";	
    }
    return true;
}

function CheckDate() {
    var date = document.getElementById("date");
    console.log(document.getElementById("dateChoice"));
    
    if (date.value == "" || date.value == null) {
        if(document.getElementById("dateCheck").innerText == ""){
            document.getElementById("dateCheck").style.color = "red";
            document.getElementById("dateCheck").innerText = "Válaszd ki az elkészítés dátumát!";
        }
        return false;
    }
    else{
        
        document.getElementById("dateCheck").innerText = "";	
    }
    return true;
}

function CheckComment() {
    var comment = document.getElementById("commentArea");
    console.log(document.getElementById("comment"));
    
    if (comment.value == "" || comment.value == null) {
        if(document.getElementById("commentCheck").innerText == ""){
            document.getElementById("commentCheck").style.color = "red";
            document.getElementById("commentCheck").innerText = "Írd le az elkészítési tapasztalataid!";
        }
        return false;
    }
    else{
        
        document.getElementById("commentCheck").innerText = "";	
    }
    return true;
}

function Reset() {
    document.getElementById("fname").value = "";

    document.getElementById("man").checked = false;
    document.getElementById("woman").checked = false;
    document.getElementById("other").checked = false;

    document.getElementById("recipe-type1").checked = false;
    document.getElementById("recipe-type2").checked = false;
    document.getElementById("recipe-type3").checked = false;

    document.getElementById("color").value = "";

    document.getElementById("date").value = "";

    document.getElementById("commentArea").value = "";

}