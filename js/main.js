////////////////////////////////////////////////////////////////////////////////////////
var fullName = document.getElementById("full_name");
var errorName = document.getElementById("error_name");
////////////////////////////////////////////////////////////////////////////////////////
var email = document.getElementById("mail");
var errorEmail = document.getElementById("error_mail");
////////////////////////////////////////////////////////////////////////////////////////
var password = document.getElementById("password");
var errorPassword = document.getElementById("error_pass");
////////////////////////////////////////////////////////////////////////////////////////
var rePassword = document.getElementById("confirm_pass");
var errorRePassword = document.getElementById("error_rePass");
////////////////////////////////////////////////////////////////////////////////////////
var age = document.getElementById("age");
var errorAge = document.getElementById("error_age");
////////////////////////////////////////////////////////////////////////////////////////
var phone = document.getElementById("phone_number");
var errorPhone = document.getElementById("error_phone");
////////////////////////////////////////////////////////////////////////////////////////
var direc = document.getElementById("direction");
var errorDirec = document.getElementById("error_direction");
////////////////////////////////////////////////////////////////////////////////////////
var city = document.getElementById("city");
var errorCity = document.getElementById("error_city");
////////////////////////////////////////////////////////////////////////////////////////
var post = document.getElementById("post_number");
var errorPost = document.getElementById("error_postCode");
////////////////////////////////////////////////////////////////////////////////////////
var id = document.getElementById("id_number");
var errorID = document.getElementById("errorID");
////////////////////////////////////////////////////////////////////////////////////////
var button = document.getElementById("button");
var data = {};
var dataError = ['' , '' , '' , '' , '' , '' , '' , '' , '' , '' , 'Empty form'];

////////////////////////////////////////////////////////////////////////////////////////

function logicName(e){
    if (nameVerification(e.target.value)){
        data.name=e.target.value;
    } else {
        data.name=undefined;
        errorName.style.display = 'block';
        dataError[0]='Name Error';
        dataError[10]=' ';
    }
}
function displayErrorName() {
    errorName.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicMail(e) {
    if (mailVerification(e.target.value)) {
        data.email=e.target.value;
    } else {
        data.email=undefined;
        errorEmail.style.display = 'block';
        dataError[1]='Mail Error';
        dataError[10]=' ';
    }
}
function displayErrorMail() {
    errorEmail.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicPass(e) {
    if (passVerification(e.target.value)) {
        data.pass=e.target.value;
    } else {
        data.pass=undefined;
        errorPassword.style.display = 'block';
        dataError[2]='Pass Error';
        dataError[10]=' ';
    }
}
function displayErrorPass() {
    errorPassword.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicRePass(e) {
    if (data.pass == e.target.value) {
        data.rePass=e.target.value;
    } else {
        data.rePass=undefined;
        errorRePassword.style.display = 'block';
        dataError[3]='Re Pass Error';
        dataError[10]=' ';
    }
}
function displayReErrorPass() {
    errorRePassword.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicAge(e) {
    if (ageVerification(e.target.value)) {
        data.age=e.target.value;
    } else {
        data.age=undefined;
        errorAge.style.display = 'block';
        dataError[4]='Age Error';
        dataError[10]=' ';
    }
}
function displayErrorAge() {
    errorAge.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicPhone(e) {
    if (phoneVerification(e.target.value)) {
        data.phone=e.target.value;
    } else {
        data.phone=undefined;
        errorPhone.style.display = 'block';
        dataError[5]='Phone Error';
        dataError[10]=' ';
    }
}
function displayErrorPhone() {
    errorPhone.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicDirec(e) {
    if (direcVerification(e.target.value)) {
        data.direc=e.target.value;
    } else {
        data.direc=undefined;
        errorDirec.style.display = 'block';
        dataError[6]='Direction Error';
        dataError[10]=' ';
    }
}
function displayErrorDirec() {
    errorDirec.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicCity(e) {
    if (minLength(e.target.value,3)) {
        data.city=e.target.value;
    } else {
        data.city=undefined;
        errorCity.style.display = 'block';
        dataError[7]='City Error';
        dataError[10]=' ';
    }
}
function displayErrorCity() {
    errorCity.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicPostCode(e) {
    if (minLength(e.target.value,3)) {
        data.postCode=e.target.value;
    } else {
        data.postCode=undefined;
        errorPost.style.display = 'block';
        dataError[8]='Post Code Error';
        dataError[10]=' ';
    }
}
function displayErrorPost() {
    errorPost.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function logicID(e) {
    if (idVerification(e.target.value)) {
        data.id=e.target.value;
    } else {
        data.id=undefined;
        errorID.style.display = 'block';
        dataError[9]='ID Error';
        dataError[10]=' ';
    }
}
function displayErrorID() {
    errorID.style.display = 'none';
}
////////////////////////////////////////////////////////////////////////////////////////
function printAlert (e) {
    e.preventDefault;
    if(dataValidator(data)) {
        alert(data.email+' '+data.name+' '+data.age+' '+data.phone+' '+data.direc+' '+data.city+' '+data.postCode+' '+data.id);
    } else {
        alert('There is an error in the form: '+dataError[0]+' '+dataError[1]+' '+dataError[2]+' '+dataError[3]+' '+dataError[4]+' '+dataError[5]+' '+dataError[6]+' '+dataError[7]+' '+dataError[8]+' '+dataError[9]+' '+dataError[10]);
    }
}
////////////////////////////////////////////////////////////////////////////////////////
fullName.addEventListener("blur", logicName);
fullName.addEventListener("focus", displayErrorName);
////////////////////////////////////////////////////////////////////////////////////////
email.addEventListener("blur", logicMail);
email.addEventListener("focus", displayErrorMail);
////////////////////////////////////////////////////////////////////////////////////////
password.addEventListener("blur", logicPass);
password.addEventListener("focus", displayErrorPass);
////////////////////////////////////////////////////////////////////////////////////////
rePassword.addEventListener("blur", logicRePass);
rePassword.addEventListener("focus", displayReErrorPass);
////////////////////////////////////////////////////////////////////////////////////////
age.addEventListener("blur", logicAge);
age.addEventListener("focus", displayErrorAge);
////////////////////////////////////////////////////////////////////////////////////////
phone.addEventListener("blur", logicPhone);
phone.addEventListener("focus", displayErrorPhone);
////////////////////////////////////////////////////////////////////////////////////////
direc.addEventListener("blur", logicDirec);
direc.addEventListener("focus", displayErrorDirec);
////////////////////////////////////////////////////////////////////////////////////////
city.addEventListener("blur", logicCity);
city.addEventListener("focus", displayErrorCity);
////////////////////////////////////////////////////////////////////////////////////////
post.addEventListener("blur", logicPostCode);
post.addEventListener("focus", displayErrorPost);
////////////////////////////////////////////////////////////////////////////////////////
id.addEventListener("blur", logicID);
id.addEventListener("focus", displayErrorID);
////////////////////////////////////////////////////////////////////////////////////////
button.addEventListener("click", printAlert);