import React from 'react'

const Box = ({ title, description, url }) => {
    return (
        <section className='rounded_box'>
            <title>{title}</title>
            <p>{description}</p>
            <img src={url} />
        </section>
    )
}

export default Box