import React from 'react'

const QuoteBtn = ({title}) => {
    return (

        <div>
            <button className="bg-white font-semibold border cursor-pointer border-logoBlue text-logoBlue py-3 px-8 rounded-md hover:bg-logoBlue hover:text-white transition duration-300  ">{title}</button>
        </div>

    )
}

export default QuoteBtn