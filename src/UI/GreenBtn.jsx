import React from 'react'

const GreenBtn = ({title}) => {
    return (
        <div><button className="text-lg px-5 py-2 rounded-sm text-white bg-logoGreen border border-logoGreen transition duration-300 hover:bg-transparent hover:text-logoGreen">{title}</button></div>
    );
}

export default GreenBtn