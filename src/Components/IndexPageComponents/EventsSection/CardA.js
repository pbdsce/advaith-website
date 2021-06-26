import Image from "next/image";
const CardA = () => {
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
        <p><b>Capture the Flag </b></p>
        <p>Date: 22-25 July 2021</p>
        <p>A Cybersecurity challenge where hackers exploit vulnerabilities to finds flags in hidden in an open arena</p>
      </div>
    </div>
  );
};

export { CardA };
