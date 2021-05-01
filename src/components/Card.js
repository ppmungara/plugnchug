import React from 'react'

function Card(props) {

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-header flex">
                    <Circles />
                    <h3 className='card-heading flex'>{props.heading}</h3>
                </div>
                <div className="card-content">
                    {props.content}
                </div>
            </div>
        </React.Fragment>    
    )
}

function Circles() {
    return (
        <svg className="circles" width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="5" cy="5" r="5" fill="#BC0303"/>
            <circle cx="19.1667" cy="5" r="5" fill="#F2E908"/>
            <circle cx="33.3333" cy="5" r="5" fill="#05D40D"/>
        </svg>
    )
}

export default Card