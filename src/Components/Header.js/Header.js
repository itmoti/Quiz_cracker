import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav >
                <section><h2>
                Ques Bank
                    </h2></section>
                <section>
                <Link to='home'>Home</Link>
                <Link to='statics'>Statics</Link>
                <Link to='blog'>Blog</Link>
                <Link to ='about'>About</Link>
                </section>
            </nav>
        </div>
    );
};

export default Header;