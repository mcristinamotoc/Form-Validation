//Register Form Validation

const registerForm = document.getElementById("registerForm");
registerForm.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    registerValidation();
}, true);

function registerValidation() {
    //Variables
    var errors = 0;
    registerForm.classList.remove('is-invalid');

    var emailRegister = document.getElementById("emailRegister");
    var passwordRegister = document.forms["registerForm"]["passwordRegister"];
    var password2 = document.forms["registerForm"]["password2"];
    var provincia = document.forms["registerForm"]["provincia"];
    var terms = document.forms["registerForm"]["terms"];

    //Condicionals 

    if (emailRegister.value == "" || !emailValidation(emailRegister.value)) {
        emailRegister.classList.add("is-invalid");
        document.getElementById("errorEmailRegister").textContent = "Invalid field, please fill up your email";
        errors++;

    }
    if (passwordRegister.value == "") {
        passwordRegister.classList.add("is-invalid");
        document.getElementById("errorPasswordRegister").textContent = "Please fill up your password";
        errors++;
    }
    if (password2.value == "" || passwordRegister.value !== password2.value) {
        password2.classList.add("is-invalid");
        document.getElementById("errorPassword2").textContent = " Passwords do not match";
        errors++;
    }

    if (provincia.value == "") {
        provincia.classList.add('is-invalid');
        document.getElementById("errorProvincia").textContent = "This field is required";
        errors++;
    }
    if (!terms.checked) {
        terms.classList.add('is-invalid');
        document.getElementById("errorTerms").textContent = "You must accept the terms"
        errors++;
    }

    if (errors > 0) {
        return false;
    } else {
        return true;
    }

}
// Functions 

function emailValidation(emailRegister) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(emailRegister) ? true : false;
}

// function redirect() {
//     window.location.href = "file:///Users/mariacristinamotoc/Desktop/testPage.html"
// }