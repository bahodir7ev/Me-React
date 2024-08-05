import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()
    function handleBack() {
        navigate(-1)
    }

    return (
        <section className='notfound-page'>
            <div className="container">
                <button onClick={handleBack} className='notfound-btn'>Go back</button>
            </div>
        </section>
    )
}

export default NotFound