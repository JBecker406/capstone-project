// jQuery variables
var $dAmount = $("#donateAmount");
var $fName = $("#custFirstName");
var $lName = $("#custLastName");
var $address = $("#custAddress");
var $city = $("#custCity");
var $state = $("#custState");
var $zip = $("#custZip");
var $pNum = $("#custNum");
var $email = $("#custEmail");
var $email2 = $("#custEmail2");
var $comment = $("#custComment");
var $continue = $("#continueBtn");

// Sets event listener when document loads
$(document).ready(function() {
    $continue.on("click", validateForm);
});

// Validates form input
function validateForm() {
    validateAmount();
    validateFName();
    validateLName();
    validateAddress();
    validateCity();
    validateState();
    validateZip();
    validateNum();
    validateEmail();
    validateEmail2();
    storeInfo();
}

function validateAmount() {
    var dAmount = $dAmount[0];
    if (dAmount.validity.valueMissing) {
        dAmount.setCustomValidity("Please enter a donation amount");
    } else {
        dAmount.setCustomValidity("");
    }
}

function validateFName() {
    var fName = $fName[0];
    if (fName.validity.valueMissing) {
        fName.setCustomValidity("Please enter your first name");
    } else {
        fName.setCustomValidity("");
    }
}

function validateLName() {
    var lName = $lName[0];
    if (lName.validity.valueMissing) {
        lName.setCustomValidity("Please enter your last name");
    } else {
        lName.setCustomValidity("");
    }
}

function validateAddress() {
    var address = $address[0];
    if (address.validity.valueMissing) {
        address.setCustomValidity("Please enter an address");
    } else {
        address.setCustomValidity("");
    }
}

function validateCity() {
    var city = $city[0];
    if (city.validity.valueMissing) {
        city.setCustomValidity("Please enter a city name");
    } else {
        city.setCustomValidity("");
    }
}

function validateState() {
    var state = $state[0];
    var $stateList = $("#states option");
    var isState = false;
    for (var i = 0; i < $stateList.length; i++) {
        if ($stateList[i].value === state.value) {
            isState = true;
        }
    }
    if (state.validity.valueMissing) {
        state.setCustomValidity("Please enter a state");
    } else if (!isState) {
        state.setCustomValidity("Please enter the proper format");
    } else {
        state.setCustomValidity("");
    }
}

function validateZip() {
    var zip = $zip[0];
    if (zip.validity.valueMissing) {
        zip.setCustomValidity("Please enter a zip code");
    } else if (zip.validity.patternMismatch) {
        zip.setCustomValidity("Please enter a proper zip code");
    } else {
        zip.setCustomValidity("");
    }
}

function validateNum() {
    var pNum = $pNum[0];
    if (pNum.validity.patternMismatch) {
        pNum.setCustomValidity("Please enter a phone number with the correct format");
    } else {
        pNum.setCustomValidity("");
    }
}

function validateEmail() {
    var email = $email[0];
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter an email");
    } else if (email.validity.patternMismatch) {
        email.setCustomValidity("Please enter a correct email");
    } else {
        email.setCustomValidity("");
    }
}

function validateEmail2() {
    var email2 = $email2[0];
    var email = $email[0];
    if (email2.validity.valueMissing) {
        email2.setCustomValidity("Please enter an email");
    } else if (email2.validity.patternMismatch) {
        email2.setCustomValidity("Please enter a correct email");
    } else if (email2.value !== email.value) {
        email2.setCustomValidity("Please enter a matching email");
    } else {
        email2.setCustomValidity("");
    }
}

function storeInfo() {
    sessionStorage.setItem("dAmount", $dAmount.val());
    sessionStorage.setItem("fName", $fName.val());
    sessionStorage.setItem("lName", $lName.val());
    sessionStorage.setItem("address", $address.val());
    sessionStorage.setItem("city", $city.val());
    sessionStorage.setItem("state", $state.val());
    sessionStorage.setItem("zip", $zip.val());
    sessionStorage.setItem("pNum", $pNum.val());
    sessionStorage.setItem("email", $email.val());
    sessionStorage.setItem("comment", $comment.val());
}