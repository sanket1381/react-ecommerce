import React from 'react'
import "./loader.css";

const LoaderCartElement = () => {
    const arr = [1, 2, 3, 4]
    return (
        <div className='container-fluid'>
            <div className="card">
                <div className="card__description loading" style={{ height: "100px" }}></div>
            </div>
        </div>
    )
}

export default LoaderCartElement;