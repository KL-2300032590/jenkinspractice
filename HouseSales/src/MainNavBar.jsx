import React from 'react'
import { Link, Route ,Routes } from 'react-router-dom'
import Home from './Home'
import AddHouse from './AddHouse'
import ViewHouse from './ViewHouse'

export default function MainNavBar() {
    const headerStyle = {
        backgroundColor: '#458e92ff',
        color: 'white',
        
        textAlign: 'center'
    };

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold'
    };

    const mainStyle = {
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto'
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1>House Sales</h1>
                <nav style={navStyle}>
                  
                    <Link style={linkStyle} to="/add-art">Add House Sales</Link>
                    <Link style={linkStyle} to="/view-art">View House Sales</Link>
                </nav>
            </header>

            <main style={mainStyle}>
                <Routes>
                   
                    <Route path="/add-art" element={<AddHouse />} />
                    <Route path="/view-art" element={<ViewHouse />} />
                </Routes>
            </main>
        </div>
    )
}
