import React from 'react';
import { Outlet } from 'react-router';
import './layout.css';

function Layout() {
    return (

        <div className="wrapper">
            <header className="main-head">Showroom project</header>
            <nav className="main-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/hook1-rotatingbox">Hook example 1</a></li>
                    <li><a href="/phy1-falling-ball">Physic example1</a></li>
                    <li><a href="/first-person-view">First person view</a></li>
                </ul>
            </nav>
            <main className="content">
                <Outlet />
            </main>

            <footer className="main-footer">leostereo</footer>
        </div>



















    );
}

export default Layout;