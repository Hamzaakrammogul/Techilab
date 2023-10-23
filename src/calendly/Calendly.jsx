import React from "react";
import { InlineWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className=" container mx-auto mt-48 ">
      <InlineWidget url="https://calendly.com/hamzaishere" styles={{ height:'1000px', overflowY:'none' }}/>
    </div>
  );
};

export default Calendly;