import './RegistrationForm.css'
import React, { useState } from 'react';
import My_R_logo from '../images/r_logo.jpeg'
import LoginForm from '../LogIn/LoginForm';

function RegistrationForm({ onRegister }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        repeatPassword: '',
        organisation: '',
        position: '',
        email: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [error, setError] = useState('');

    const [RegistrationToLogin, setLoginToRegistration] = useState('registration'); // change registration to login

    const handleRegister = (e) => {
        e.preventDefault();
        // Валидация и регистрация пользователя
        if (formData.password !== formData.repeatPassword) {
            setError('Hesla se neshodují');
        } else {
            onRegister(formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>

            {RegistrationToLogin === 'registration' && (
                <>
                    <div className='border-for-registration'>
                        <div className="registration-container">
                            <img src={My_R_logo} alt="logo" className='my-r-logo-registration'></img>
                            <form onSubmit={handleRegister} className="registration-form">
                                <input type="text" name="name" placeholder="Jméno" value={formData.name} onChange={handleChange} />
                                <input type="text" name="surname" placeholder="Příjmení" value={formData.surname} onChange={handleChange} />
                                <div className="button-for-password-input">
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Heslo" value={formData.password} onChange={handleChange} />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)}>Ukázat</button>
                                </div>
                                <div className="button-for-password-input">
                                    <input type={showRepeatPassword ? 'text' : 'password'} name="repeatPassword" placeholder="Opakování hesla" value={formData.repeatPassword} onChange={handleChange} />
                                    <button type="button" onClick={() => setShowRepeatPassword(!showRepeatPassword)}>Ukázat</button>
                                </div>
                                {error && <div className="error">{error}</div>}
                                <input type="text" name="organisation" placeholder="Organizace" value={formData.organisation} onChange={handleChange} />
                                <input type="text" name="position" placeholder="Pozice" value={formData.position} onChange={handleChange} />
                                <input type="email" name="email" className="input-email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                                <button type="submit" onClick={() => {/*Create an accaunt*/ }}>Vytvořit účet</button>
                                <p>Už máte účet?</p>
                                <button type="button" onClick={() => setLoginToRegistration('login')}>Přihlásit se</button>
                            </form>
                        </div>
                    </div>
                </>
            )}
            {RegistrationToLogin === 'login' && (
                <>
                    <LoginForm />
                </>
            )}
        </>
    );
}

export default RegistrationForm;
