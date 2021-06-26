import Image from "next/image";
const CardC = () => {
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
        <p>Technical Writting </p>
        <p>
          Will take place throughout Advaith
        </p>
        <p>
        Participants will attend the various workshops/webinars hosted by us throughout Advaith. Contestants will have to write a technical blog from the topics they liked.
Winning Blogs will be featured on our blogging platforms.  
        </p>
      </div>
    </div>
  );
};

export { CardC };
