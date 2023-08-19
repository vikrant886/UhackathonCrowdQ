import { auth, provider } from '../../config/firebase_config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from '../../home/home';
import back_video from '../../login_video.mp4';
import './login.css';
import { handleLogout } from './logout'; 

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [shouldResetForm, setShouldResetForm] = useState(true);

    const handleLogoutClick = () => {
        alert("st");
        handleLogout(() => navigate('/')); // Pass navigate function as callback
    };

    const handleEmailAndPasswordLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('home');
        } catch (error) {
            setError('Error logging in');
        }
    };

    const handleEmailAndPasswordSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('home');
        } catch (error) {
            setError('Error signing up');
        }
    };

    const signInwithGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigate('home');
        } catch (error) {
            if (error === "auth/popup-closed-by-user") {
                setError('Sign-in popup closed by user.');
            } else {
                setError('Error signing in');
            }
        }
    };

    useEffect(() => {
        if (shouldResetForm) {
            setEmail('');
            setPassword('');
            setError('');
            setShouldResetForm(false);
        }
    }, [shouldResetForm]);

    useEffect(() => {
        return () => {
            setShouldResetForm(true);
        };
    }, []);

    return (
        <div className="main_outter">
            <video autoPlay muted loop src={back_video}></video>
            <div className='container'>
                <div className="text_cont">
                    <h1>"Elevate Your Eats: Navigate Cafeterias, Crowd-Free"</h1>
                    <h1>- CROWD-BOSS</h1>
                </div>
                <div className='signInClass'>
                    <h1>Welcome Back!</h1>
                    {error && <div className="error">{error}</div>}
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="buttonGroup">
                        <button className="signIn" onClick={() => { handleEmailAndPasswordLogin(); }}>Sign in</button>
                        <button className="signUp" onClick={() => { handleEmailAndPasswordSignUp(); }}>Create new account</button>
                    </div>
                    <div className="orSeparator">
                        <div>Or</div>
                    </div>
                    <button className='signInGoogle' onClick={() => { signInwithGoogle(); }}>Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

