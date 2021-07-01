const Card = ({ event, dataKey, handleModalOpen }) => {
  return (
    <div>
      <div className="w-64 h-64 p-10 text-white hover:scale-110 bg-theme-card shadow-lg rounded-lg flex flex-col place-items-center">
        <div className="m-auto">
          <img
            src={event.imgLink}
            width={100}
            height={100}
            alt={event.eventName}
            className="object-contain"
          />
        </div>
        <p className="text-xl font-semibold text-gray-300">
          {event.eventName}{" "}
        </p>
        <button
          className="text-theme-primary-500 text-md py-3 focus:outline-none"
          onClick={() => handleModalOpen(dataKey)}
        >
          <p>Read More &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export { Card };
