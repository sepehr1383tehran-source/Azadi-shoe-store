
import doesUserExist from "./utils/doesUserExist.js"
import doesPasswordExist from "./utils/doesPasswordExist.js"
import createLocalStorageData from "./utils/creatLocalStorageData.js"
import createLoginSession from "./utils/createLoginSession.js"

const hidePasswordElement = document.querySelector('#hide-password');
const passwordInput = document.querySelector('#password');
const loginForm = document.querySelector('#login-form')
let isPasswordVisible = false
hidePasswordElement.addEventListener('click', () => {
    isPasswordVisible = !isPasswordVisible;
    if (isPasswordVisible) {
        hidePasswordElement.src = `${location.origin}/assets/icons/visible.png`;
        passwordInput.setAttribute('type', 'text')
    } else {
        hidePasswordElement.src = `${location.origin}/assets/icons/invisible.png`;
        passwordInput.setAttribute('type', 'password')
    }
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const element = event.target.elements;
    const [username, password] = [
        element.namedItem('username').value || '',
        element.namedItem('password').value || ''
    ];
    const userExist = doesUserExist(username);
    const passwordExist = doesPasswordExist(username, password);
    if (userExist) {
        if (passwordExist) {
            createLocalStorageData(username);
            createLoginSession(username);
            location.replace(`${location.origin}/index.html`)
        } else {
            alert('رمز عبور اشتباه است ')
        }
    } else {
        alert("نام کاربری اشتباه است ")
    }
})