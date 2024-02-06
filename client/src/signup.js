import React, {useState} from react 

function Login(onLogin){
    const [usernameInput, setUsernameInput] = useState ("");
    const [passwordInput, setPasswordInput] = useState ("");
    const [confirmationPasswordInput, setConfirmationPasswordInput] = useState ("");

    const submitForm = e => {
        e.preventDefault();
        if (passwordInput !== confirmationPasswordInput){
            alert("Passwords do not match");
            return;
        }
    fetch('/login', {
        method:"POST",
        headers: {
            "Accept" : "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify ({username: usernameInput})
        .then(response => response.json())
        .then(json => onLogin(json))
    })
}
    return (
        <form onSubmit = {submitForm}>
            <label HTMLfor = 'username'>Username:</label>
            <input 
                type="text" 
                id = 'username' 
                name = 'username' 
                value = {usernameInput}
                onChange ={(e) =>
                {setUsernameInput (e.target.value)}} /> 

            <br/>

            <label for = 'password'>Password:</label>
            <input 
                type = "password" 
                id = 'password' 
                name = 'password' 
                value = {passwordInput} onChange = {(e) =>
                {setPasswordInput (e.target.value)}}/>
            <br/>
            <label for = 'password confirmation'>Password confirmation:</label>
            <input 
                type = "password" 
                id = 'password confirmation' 
                name = 'password confirmation' 
                value = {confirmationPasswordInput} onChange = {(e) =>
                {setConfirmationPasswordInput (e.target.value)}}/>
            <br/>

            <button type = "submit">Login</button>

        </form>
    )
}


export default Login