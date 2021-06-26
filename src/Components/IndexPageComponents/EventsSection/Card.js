import Image from "next/image";
const Card = () => {
  return (
    <div>
      <div className="h-full w-full md:h-72 md:w-72 p-5 text-white bg-theme-card shadow-lg rounded-lg flex flex-col place-items-center">
        <div className="m-auto">
          <Image
            src="/Assets/Images/Brands/Discord-Logo-White.svg"
            width={50}
            height={50}
            alt="discord-logo"
            className="object-contain"
          />
        </div>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
    </div>
  );
};

export { Card };
