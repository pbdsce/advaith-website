import Image from "next/image";

const CTAButton = () => {
  return (
    <div className="sticky float-right inset-0 flex place-items-center p-5">
      <button className="rounded-full p-2 md:p-3 md:m-5 bg-[#5865f2] hover:animate-bounce transform md:scale-125">
        <a className="flex place-items-center">
          <Image
            src="/Assets/Images/Brands/Discord-Logo-White.svg"
            width={30}
            height={30}
            className="object-contain"
          />
        </a>
      </button>
    </div>
  );
};

export { CTAButton };
