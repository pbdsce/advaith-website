import Image from "next/image";
const CardD = () => {
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
        <p>Design Wars</p>
        <p>Date: 23-26 July 2021</p>
        {/* <p> Drawing Competetion h BC</p> */}
        <p>Participants will mke use of their creativity and Designing skills to create aesome designs for their projects</p>
      </div>
    </div>
  );
};

export { CardD };
