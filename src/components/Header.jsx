import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    const links = [
        {
            id: 1,
            path: '/about',
            title: 'About'
        },
        {
            id: 2,
            path: '/services',
            title: 'Services'
        },
        {
            id: 3,
            path: '/contact',
            title: 'Contact'
        },
    ]

    return <header className='header'>
        <div className="container">
            <div className="header-row">
                <div className="header-logo">
                    <Link to='/'>
                        <h1>Bahodirxon Dev</h1>
                    </Link>
                </div>
                <nav className='header-nav'>
                    {
                        links.map(({id, path, title}) => (
                            <Link to={path} className="header-link" key={id}>
                                {title}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    </header>
}

export default Header
