import { useEffect } from "react";
import { ModalCloseIcon } from "../../svg/svg";

const EventModal = ({ cardDetails, setEventModal }) => {
  useEffect(
    () =>
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          setEventModal(false);
        }
      }),
    document.addEventListener("click", (event) => {
      if (event.target.id === "editModalContainer") {
        if (event.target.id !== "editModal") {
          setEventModal(false);
        }
      }
    }),
    []
  );
  return (
    <div className="absolute h-full w-full inset-0 z-10">
      <div
        id="editModalContainer"
        className="w-full h-full backdrop-filter backdrop-blur-md bg-theme-card bg-opacity-10 flex place-items-center"
      >
        <div
          id="editModal"
          className="bg-theme-card bg-opacity-90 backdrop-filter backdrop-blur-xl m-auto shadow-lg rounded-2xl"
        >
          <button
            className="float-right m-3 focus:outline-none"
            onClick={() => setEventModal(false)}
          >
            <ModalCloseIcon className="text-3xl text-blue-400 opacity-70 transform transition duration-100 ease-in-out hover:scale-110" />
          </button>
          <div
            id="editModalContent"
            className="p-14 max-w-lg text-gray-200 space-y-5"
          >
            <h4 className="text-md italic font-semibold">{`${cardDetails.date} ${cardDetails.time}`}</h4>
            <h2 className="text-2xl text-theme-primary-500">
              {cardDetails.eventName}
            </h2>
            <h5 className="text-md text-theme-primary-600">
              {cardDetails.eventCaption}
            </h5>
            {/* <p className="text-md text-justify">{cardDetails.eventDetails}</p> */}
            <ul className="list-disc text-gray-300">
              {cardDetails.eventDetails.map((item, key) => (
                <li key={key} className="">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EventModal };
