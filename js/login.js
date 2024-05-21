let login = document.getElementById('loginDisplay');
let signUp = document.getElementById('signUpDisplay');

//function for displaying signUp
function showSignUP(){
    signUp.style.display = '';
    login.style.display = 'none';
}
//function for displaying Login
function showLogin(){
    login.style.display = '';
    signUp.style.display = 'none';
}

//function for login
function newLogin(event){
    event.preventDefault();
    let loginUser = document.getElementById('username').value;
    let loginPassword = document.getElementById('password').value;
    let userLogin = JSON.parse(localStorage.getItem(loginUser));
    console.log(userLogin);
    if(userLogin!==null){
        if(loginPassword===userLogin.password){
            alert('Login successfully!');
            location.href = 'main.html';
        }else{
            alert('Username or password is incorrect!');
        }
    }else{
        alert('Username or password is incorrect!');
    }
}

//function for signup
function newSignUp(event){
    event.preventDefault();
    let username = document.getElementById('username2').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password2').value;
    let newUser = JSON.parse(localStorage.getItem(username));
    if(newUser==null){
        if(password.length<6){
            alert('Password must be atleast 6 characters!');
        }
        else{
            let signUpObject = {
                username : username,
                email : email,
                password : password
            }
            localStorage.setItem(username,JSON.stringify(signUpObject));
            alert('Account successfully created. Please continue to login!');
        }
    }else{
        alert(`${username} is already taken! please use another username.`);
    }
};

let loginForm = document.getElementById('loginForm');
let signUpForm = document.getElementById('signUpForm');
loginForm.onsubmit = newLogin;
signUpForm.onsubmit = newSignUp;

