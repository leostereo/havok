import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      <header>
        <h1>BBJS-REACTJS</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/hook1-rotatingbox">Hook example 1</a></li>
            <li><a href="/phy1-falling-ball">Physic example1</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;