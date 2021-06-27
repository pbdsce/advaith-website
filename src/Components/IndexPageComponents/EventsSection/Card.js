import Image from "next/image";
const Card = ({event}) => {
  return (
    <div>
      <div className="w-64 h-64 p-10 text-white hover:scale-110 bg-theme-card shadow-lg rounded-lg flex flex-col place-items-center">
        <div className="m-auto">
          <Image
            src="/Assets/Images/Brands/Discord-Logo-White.svg"
            width={50}
            height={50}
            alt="discord-logo"
            className="object-contain"
          />
        </div>
        <p>{event.eventName} </p>
      </div>
    </div>
  );
};

export { Card };
