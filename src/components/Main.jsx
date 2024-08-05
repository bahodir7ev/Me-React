import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound'

function Main() {
    const routes = [
        {
            id: 1,
            path: '/',
            component: <Home />
        },
        {
            id: 2,
            path: '/about',
            component: <About />
        },
        {
            id: 3,
            path: '/services',
            component: <Services />
        },
        {
            id: 5,
            path: '/contact',
            component: <Contact />
        },
        {
            id: 6,
            path: '*',
            component: <NotFound />
        },
    ]

    return (
        <main className='main'>
            <Routes>
                {
                    routes.map(({ id, path, component }) => (
                        <Route path={path} element={component} key={id}/>
                    ))
                }
            </Routes>
        </main>
    )
}

export default Main