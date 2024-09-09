const h1 = document.querySelector('#h1');
const cont1 = document.querySelector('.cont1');
const main = document.querySelector('.main');
const name = document.getElementById('name');
const nameErr = document.getElementById('nameErr');
const email = document.getElementById('email');
const emailErr = document.getElementById('emailErr');
const Phone = document.getElementById('Phone');
const PhoneErr = document.getElementById('PhoneErr');
const Password = document.getElementById('Password');
const PasswordErr = document.getElementById('PasswordErr');
const conformPassword = document.getElementById('conformPassword');
const conformPasswordErr = document.getElementById('conformPasswordErr');
const signup = document.getElementById('signbtn');
const button = document.getElementById('btn1');
const loading = document.getElementById('loading');

btn1.addEventListener('click',() =>{
    loading.style.display = "none"
    // loading.style.backgroundColor='red'
    main.style.display= 'flex'
    
})
function Sign() {
    if (main.style.display != 'none') {
        main.style.display ='none';
    }else{
        // cont1.style.display ='none'
    }
}
signup.addEventListener('click', () => {
    let isValid = true;
    
    if (name.value === "") {
        nameErr.innerHTML = 'Please Enter Your Name';
        nameErr.style.color = 'red';
        isValid = false;
    } else {
        nameErr.innerHTML = '';
    }

    if (email.value === "") {
        emailErr.innerHTML = 'Please Enter Your Email';
        emailErr.style.color = 'red';
        isValid = false;
    } else {
        emailErr.innerHTML = '';
    }

    if (Phone.value === "") {
        PhoneErr.innerHTML = 'Please Enter Your Phone Number';
        PhoneErr.style.color = 'red';
        isValid = false;
    } else {
        PhoneErr.innerHTML = '';
    }

    if (Password.value === "") {
        PasswordErr.innerHTML = 'Please Enter Your Password';
        PasswordErr.style.color = 'red';
        isValid = false;
    } else {
        PasswordErr.innerHTML = '';
    }

    if (conformPassword.value === "") {
        conformPasswordErr.innerHTML = 'Please Confirm Your Password';
        conformPasswordErr.style.color = 'red';
        isValid = false;
    } else if (conformPassword.value !== Password.value) {
        conformPasswordErr.innerHTML = 'Passwords do not match';
        conformPasswordErr.style.color = 'red';
        isValid = false;
    } else {
        conformPasswordErr.innerHTML = '';
    }

    if (isValid) {
        alert("Sign up successfully");
    }

    console.log('clicked');
});
