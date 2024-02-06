import React, {useState, useEffect} from react 

function Login(){
    const [usernameInput, setUsernameInput] = useState ("");
    const submitForm = e => {
        e.preventDefault()

    }
    return (
        <form onSubmit = {submitForm}>
            <label for = 'username'>Username:</label>
            <input type="text" id = 'username' name = 'username' value = {usernameInput}onChange ={(e) =>
            {setUsernameInput (e.target.value)}} /> 

            <br/>
            <label for = 'password'>Password:</label>
            <input type = "text" id = 'password' name = 'password' value = {passwordInput} onChange = {(e) =>
            {setPasswordInput (e.target.value)}}/>
            <br/>
            <button type = "submit">Login</button>

        </form>
    )
}


export default Login