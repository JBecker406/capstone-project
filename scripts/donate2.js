var dAmount = sessionStorage.getItem("dAmount");
var fName = sessionStorage.getItem("fName");
var lName = sessionStorage.getItem("lName");
var address = sessionStorage.getItem("address");
var city = sessionStorage.getItem("city");
var state = sessionStorage.getItem("state");
var zip = sessionStorage.getItem("zip");
var pNum = sessionStorage.getItem("pNum");
var email = sessionStorage.getItem("email");
var custInfo = ["$"+dAmount, fName+" "+lName, address, city, state, zip, pNum, email];

$(document).ready( function() {
    for (var i = 0; i < custInfo.length; i++) {
        if (i !== 6) {
            $(".custInfo")[i].textContent = custInfo[i];
        } else {
            if (custInfo[i] === "") {
                $(".custInfo")[i].textContent = "Not provided";
            } else {
                $(".custInfo")[i].textContent = custInfo[i];
            }
        }
    }
    $("input[type=submit]").on("click", validateForm);
});

function validateForm() {
    validateName();
    validateComp();
    validateNumber();
    validateExp();
}

function validateName() {
    var name = $("#cardName")[0];
    if (name.validity.valueMissing) {
        name.setCustomValidity("Please enter the card holder's name");
    } else {
        name.setCustomValidity("");
    }
}

function validateComp() {
    var comps = document.querySelectorAll("input[name=cardComp]");
    var itemChecked = false;
    for (var i = 0; i < comps.length; i++) {
        if (comps[i].checked) {
            itemChecked = true;
        }
    }
    if (!itemChecked) {
        comps[0].setCustomValidity("Please select a card company");
    } else {
        comps[0].setCustomValidity("");
    }
}

function validateNumber() {
    var cardNum = $("#cardNum")[0];
    if (cardNum.validity.valueMissing) {
        cardNum.setCustomValidity("Enter your card number");
    } else if (cardNum.validity.patternMismatch) {
        cardNum.setCustomValidity("Enter a valid credit card number");
    } else if (luhn(cardNum.value) === false) {
        cardNum.setCustomValidity("Enter a legitimate card number");
    } else{
        cardNum.setCustomValidity("");
    }
}

function sumDigits(numStr) {
    var digitTotal = 0;
    for (var i = 0; i< numStr.length; i++) {
          digitTotal += parseInt(numStr.charAt(i));
    }
    return digitTotal;
}

function luhn(idNum) {
    var string1 = "";
    var string2 = "";
    for (var i = idNum.length - 1; i >= 0; i -= 2) {
          string1 += idNum.charAt(i);
    }
    for (var i = idNum.length - 2; i >= 0; i -= 2) {
          string2 += 2*idNum.charAt(i);
    }
    return sumDigits(string1 + string2) % 10 === 0;
}

function validateExp() {
    var exp = $("#cardExp")[0];
    if (exp.validity.valueMissing) {
        exp.setCustomValidity("Please enter an expiration date")
    }
}