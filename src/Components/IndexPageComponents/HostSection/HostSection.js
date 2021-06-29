const HostImagesList = [
  {
    imgLink: "/Assets/Images/PointBlank.svg",
    alt: "PointBlank",
    height: 225,
    width: 225,
  },
  {
    imgLink: "/Assets/Images/DSCE-logo.png",
    alt: "DSCE",
    height: 170,
    width: 170,
  },
  {
    imgLink: "/Assets/Images/ACM-W.svg",
    alt: "ACM-W",
    height: 200,
    width: 200,
  },
];

const HostSection = () => {
  return (
    <div className="text-gray-300 flex flex-col place-items-center space-y-7">
      <h2 className="text-3xl font-bold tracking-wider">
        Event <span className="text-theme-primary-500">Hosts</span>
      </h2>
      <div className="px-10 grid grid-flow-col gap-10 w-full place-items-center justify-evenly">
        {HostImagesList.map((hostImage, key) => (
          <div key={key}>
            <img
              src={hostImage.imgLink}
              width={hostImage.width}
              height={hostImage.height}
              alt={hostImage.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { HostSection };
