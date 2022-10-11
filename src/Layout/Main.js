import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header.js/Header';
import './Main.css'

const Main = () => {
    return (
        <div>
          <div className="without-footer">
          <Header></Header>
            <Outlet></Outlet>
          </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;