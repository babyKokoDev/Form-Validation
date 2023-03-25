// Form Validation
let registrationForm = document.querySelector('#register-form')
registrationForm.addEventListener('submit', function(event){
    event.preventDefault();      // Stope auto form submission
    if (validateForm()){
        alert ("Form Submitted Successfully")
    }
    
})

let validateForm = () => {
    
    return (checkUserName() && checkEmail() && checkPassword() && checkConfirmPassword())
}

let checkUserName = () => {
    let inputEl = document.querySelector('#username')
    let inputFeedbackEl = document.querySelector('#username-feedback')
    let regExp = /^[a-zA-Z0-9]{4,10}$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkEmail = () => {
    let inputEl = document.querySelector('#email')
    let inputFeedbackEl = document.querySelector('#email-feedback')
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkPassword = () => {
    let inputEl = document.querySelector('#password')
    let inputFeedbackEl = document.querySelector('#password-feedback')
    let regExp = /^[A-Za-z]\w{7,14}$/
    if (regExp.test(inputEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}

let checkConfirmPassword = () => {
    let inputEl = document.querySelector('#c_password')
    let passwordEl = document.querySelector('#password')
    let inputFeedbackEl = document.querySelector('#c_password-feedback')
    let regExp = /^[A-Za-z]\w{7,14}$/
    if (regExp.test(inputEl.value) && (inputEl.value === passwordEl.value)){
        makeValid(inputEl, inputFeedbackEl)
        return true
    }
    else {
        makeInValid(inputEl, inputFeedbackEl)
        return false
    }
}


// Make Valid
let makeValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.add('is-form-valid')
    inputEl.classList.remove('is-form-invalid')
    inputFeedbackEl.classList.add('text-success')
    inputFeedbackEl.classList.remove('text-danger')
    inputFeedbackEl.innerHTML = 'Looks Good'
}

let makeInValid = (inputEl, inputFeedbackEl) => {
    inputEl.classList.remove('is-form-valid')
    inputEl.classList.add('is-form-invalid')
    inputFeedbackEl.classList.remove('text-success')
    inputFeedbackEl.classList.add('text-danger')
    inputFeedbackEl.innerHTML = `please Enter a ${inputEl.placeholder}`
}

let usernameEl = document.querySelector('#username')
usernameEl.addEventListener('keyup', function(){
    checkUserName()
})

let emailEl = document.querySelector('#email')
emailEl.addEventListener('keyup', function(){
    checkEmail()
})

let passwordEl = document.querySelector('#password')
passwordEl.addEventListener('keyup', function(){
    checkPassword()
})

let c_passwordEl = document.querySelector('#c_password')
c_passwordEl.addEventListener('keyup', function(){
    checkConfirmPassword()
})