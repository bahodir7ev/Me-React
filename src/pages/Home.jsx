import React from 'react'

function Home() {
    return (
        <section className="home-page">
        <div className="container">
            <div className="home-row">
            <div className="home-left">
                <h1 className="home-left-title">Hi, My name is Bahodir</h1>
                <p className='home-left-subtitle'>If you need full about me go to About page</p>
            </div>
            <div className="home-right">
                <img src="../../images/me.jpg" alt="my photo" />
            </div>
            </div>
        </div>
        </section>
    )
}

export default Home