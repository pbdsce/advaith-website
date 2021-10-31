import Link from 'next/link'
const CTAButton = () => {
  return (
    <div className="sticky float-right inset-0 flex place-items-center p-5 md:hover:animate-none transition duration-200 ease-in-out">
      <button className="rounded-full p-1 md:p-3 md:m-5 bg-white focus:outline-none">
        <Link href="https://github.com/pbdsce/advaith-website">
          <a>
            <div className="flex place-items-center rounded-full h-8 w-8">
              <img
                src="/Assets/Images/Brands/github.svg"
                width={30}
                height={30}
                className="object-contain m-auto"
                alt="Github"
              />
            </div>
          </a>
        </Link>
      </button>
    </div>
  );
};

export { CTAButton };
