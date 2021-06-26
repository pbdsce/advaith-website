import Image from "next/image";
const CardB = () => {
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
        <p><b>Coding Marathon</b></p>
        <p>Date: 24 July 2021</p>
        <p>A three hour long competetion event that will be conducted on the Codezen Platform. All the participants will compete over a set of Coding Questions. Each wrong submission will result in a penalty to your ranking, so be careful! Particpants can code in Language of their choice</p>
      </div>
    </div>
  );
};

export { CardB };
