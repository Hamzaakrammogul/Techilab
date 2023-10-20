import React from "react";
const Button = ({title}) => {
    return(
        <>
        <button className="bg-logoBlue text-white py-2 px-5 border border-logoBlue transition duration-300 hover:bg-white hover:text-logoBlue  rounded-md ">{title}</button>
        </>
    )
}
export default Button;