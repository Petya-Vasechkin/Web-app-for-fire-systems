import React, { useState } from 'react';
import Center from './Center/Center';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import AboutProject from './AboutProject/AboutProject'
import CreateASchema from './CreateASchema/CreateASchema'
import LoginForm from './LogIn/LoginForm';
import Header from './Header/Header'
import AboutSystem from './AboutSystem/AboutSystem';

function TabFunction() {
    const [tab, setTab] = useState('main');
    return (
        <>
            <Header onChange={(current) => setTab(current)} />
            <Navbar active={tab} onChange={(current) => setTab(current)} />
            {tab === 'main' && (
                <>
                    <Center />
                </>
            )}

            {tab === 'controlpanel' && <CreateASchema />}

            {tab === 'aboutproject' && (
                <>
                    <AboutProject />
                </>
            )}

            {tab === 'aboutsystem' && (
                <>
                    <AboutSystem />
                </>
            )}

            {tab === 'login' && <LoginForm />}
            <Footer onChange={(current) => setTab(current)} />
        </>
    )
}

export default TabFunction;
