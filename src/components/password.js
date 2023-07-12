import { useState } from "react";

export default function Password() {
    const [password, setPassword] = useState('')
    const [alert, setAlert]= useState(false)

    const writePassword = () => {
        let charset = '';
        let finalpassword= ''
        const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowLetters = "abcdefghijklmnopqrstuvwxyz"
        const numbers = "0123456789"
        const special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

        const passwordLength= window.prompt('how long?')

        // check length
        if(passwordLength<8 || passwordLength>128){
            setAlert(true)
            setTimeout(()=>{
                setAlert(false)
            }, 3000)
            return;
    }
        const uppercase = window.confirm('Would you like uppercase?')
        const lowercase = window.confirm('Would you like lowercase?')
        const nums = window.confirm('Would you like numbers?')
        const specialChars = window.confirm('Would you like special characters?')


        if(uppercase){
            charset = charset + capLetters;
        }
        if(lowercase){
            charset = charset + lowLetters;
        }
        if(nums){
            charset = charset + numbers;
        }
        if(specialChars){
            charset = charset + special;
        }

        console.log(charset);
        for (let i = 0; i < passwordLength; i++) {
            var randomIndex = Math.floor(Math.random() * charset.length);
            finalpassword += charset.charAt(randomIndex);
          }

        setPassword(finalpassword)
      
    }
    return (
        <div>
            <div className="wrapper">
                <header>
                    <h1>Password Generator</h1>
                </header>
                <div className="card">
                    <div className="card-header">
                        <h2>Generate a Password</h2>
                    </div>
                    <div className="card-body">
                        {alert ? (
                        <h6 style={{
                        color: 'red',
                        fontStyle: 'italic'
                        }}>Please Try Again</h6>
                        ): ''}
                        <textarea
                            id="password"
                            placeholder="Your Secure Password"
                            defaultValue={password}
                            aria-label="Generated Password"
                        ></textarea>
                    </div>
                    <div className="card-footer">
                        <button id="generate" className="btn" onClick={writePassword}>Generate Password</button>
                    </div>
                </div>
            </div>
            <script src="script.js"></script>
        </div>
    );
}