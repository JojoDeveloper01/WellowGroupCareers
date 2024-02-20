"use client";
import { useState } from 'react';
import ReactDOM from "react-dom";
import Form from "../module/formulario";
import ButtonOffer from "./ButtonOffer/buttonOffer";
import "./offerCard.css";

const OfferCard = ({ title, location, description, job }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='flex flex-col items-center justify-center px-[.5rem] py-[1rem]'>
      <div className='hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box' style={{ maxWidth: "1200px" }}>
        <div className='vertical-line'></div>
        <div className='flex flex-col lg:flex-row justify-between py-[.6rem] px-[1.5rem] text-gray-600'>
          <div className='flex flex-col lg:w-2/3 lg:p-[1rem]'>
            <div className='hoverText flex items-center cursor-pointer' onClick={() => setShowDetails(!showDetails)}>
              <h2 className='mr-2 text-lg lg:text-xl xl:text-2xl'>{title}</h2>
              <button className='text-gray-600 focus:outline-none focus:text-gray-700'>
                <svg className={`h-6 w-6 transition-transform transform ${showDetails ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" /></svg>
              </button>
            </div>
            <p className='hoverText text-gray-600 mt-2'>{location}</p>
            <div className={`description text-gray-700 mt-4 ${showDetails ? "h-auto" : "h-0 overflow-hidden"}`} style={{ transition: "all .5s" }} dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
          <div className='flex justify-end max-[454px]:justify-center  lg:w-1/3 m-4'>
            <ButtonOffer job={job} />
            <button onClick={handleButtonClick} className='text-white btn-primary' style={{ height: "45px" }}>
              Candidatar-se
            </button>
            {showForm && ReactDOM.createPortal(<Form isOpen={showForm} onClose={handleCloseForm} />, document.body)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
