import './LoginForm.css'
import React, { useState } from 'react';
import My_R_logo from '../images/r_logo.jpeg'
import RegistrationForm from '../RegistrationForm/RegistrationForm';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const [LoginToRegistration, setLoginToRegistration] = useState('login'); //change login to registration

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Zadejte prosím platné uživatelské jméno a heslo.');
        } else {
            // Здесь должен быть вызов функции для аутентификации пользователя
            setError(''); // Очистить ошибку, если логика аутентификации проходит
        }
    };

    return (
        <>
            {LoginToRegistration === 'login' && (
                <>
                    <div className='border-for-login'>
                        <div className="login-container">
                            <img src={My_R_logo} alt="logo" className='my-r-logo-login'></img>
                            <form onSubmit={handleSubmit} className="login-form">
                                <input id="username" type="text" placeholder='E-mail' value={username} onChange={(e) => setUsername(e.target.value)} />
                                <div className='button-for-password'>
                                    <input id="password" type={showPassword ? 'text' : 'password'} placeholder='Heslo' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button type="button" className='button-in-password' onClick={() => setShowPassword(!showPassword)}>Ukázat</button>
                                </div>
                                {error && <div className="error">{error}</div>}
                                <a href="/forgot-password">Nepamatujete si své heslo?</a>
                                <button type="submit">Přihlásit se</button>
                                <button type="button" onClick={() => setLoginToRegistration('registration')}>Registrace</button>
                            </form>
                        </div>
                    </div>
                </>
            )}
            {LoginToRegistration === 'registration' && (
                <>
                    <RegistrationForm />
                </>
            )}
        </>

    );
}

export default LoginForm;
