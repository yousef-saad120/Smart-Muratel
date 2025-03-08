/* function validateForm() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

 
    var errorMessage = document.getElementById('error-message');

    
    if (username === "" || password === "") {
       
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        alert("Form submitted successfully!");
        
    }
}
 */

const  form = document.getElementById('form'); 

const First_Name = document.getElementById('First_Name');
const Username = document.getElementById('username');

const Email = document.getElementById('email');
const Password = document.getElementById('password');
const Rpassword = document.getElementById('repate-password');

const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
/*     e.preventDefault();
 */
    let errors = []

    if (First_Name){
        errors = getSignupErrors(First_Name.value, Username.value,Email.value ,Password.value, Rpassword.value);

    }
    else{
        errors = getLoginErrors(email.value ,password.value);
    }

    if(errors.length > 0){
        e.preventDefault();
        errorMessage.innerText = errors.join(".  ")
    }
})

function getSignupErrors(first_name, username, email,password, repate_password){
    let errors =[]

    if(first_name === '' || first_name === null){
        errors.push('First Name is required')
        First_Name.parentElement.classList.add('incorrect')
    }

    if(username === '' || username === null){
        errors.push('Username is required')
        Username.parentElement.classList.add('incorrect')
    }

    if(email === '' || email === null){
        errors.push('Email is required')
        Email.parentElement.classList.add('incorrect')
    }

    if(password === '' || password === null){
        errors.push('Password is required')
        Password.parentElement.classList.add('incorrect')
    }

    if(password.length <8){
        errors.push('Password must be at least 8 characters long')
        Password.parentElement.classList.add('incorrect')
    }

    if(password !== repate_password){
        errors.push('password does not match repate password')
        Password.parentElement.classList.add('incorrect')
        Rpassword.parentElement.classList.add('incorrect')

    }

    return errors;
}

function getLoginErrors(email, password){
    let errors = []

    if(email === '' || email === null){
        errors.push('Email is required')
        Email.parentElement.classList.add('incorrect')
    }
    if(password === '' || password === null){
        errors.push('Password is required')
        Password.parentElement.classList.add('incorrect')
    }
    return errors;
}

const allinputs = [First_Name,Username, Email, Password,Rpassword].filter(input => input != null)

allinputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            errorMessage.innerText = ''
        }
    })
})
