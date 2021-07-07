import Link from "next/link";
const HostsList = [
  {
    imgLink: "/Assets/Images/PointBlank.svg",
    alt: "PointBlank",
    height: 225,
    width: 225,
    website: "https://pointblank.club",
    socialMediaHandles: [
      {
        platform: "Instagram",
        platformImgLink: "/Assets/Images/Brands/instagram.svg",
        link: "https://www.instagram.com/pointblank_dsce/",
      },
      {
        platform: "Twitter",
        platformImgLink: "/Assets/Images/Brands/twitter.svg",
        link: "https://twitter.com/pointblank_dsce",
      },
      {
        platform: "LinkedIn",
        platformImgLink: "/Assets/Images/Brands/linkedin.svg",
        link: "https://www.linkedin.com/company/point-blank-d",
      },
    ],
  },
  {
    imgLink: "/Assets/Images/cse-DSCE-logo.png",
    alt: "DSCE",
    height: 150,
    width: 240,
    website: "https://dsce.edu.in",
    socialMediaHandles: [
      {
        platform: "Instagram",
        platformImgLink: "/Assets/Images/Brands/instagram.svg",
        link: "https://www.instagram.com/cse.dsce/",
      },
      {
        platform: "LinkedIn",
        platformImgLink: "/Assets/Images/Brands/linkedin.svg",
        link: "https://www.linkedin.com/company/dscecse",
      },
    ],
  },
  {
    imgLink: "/Assets/Images/ACM-W.svg",
    alt: "ACM-W",
    height: 235,
    width: 235,
    website: "https://acmw-dsce.github.io",
    socialMediaHandles: [
      {
        platform: "Instagram",
        platformImgLink: "/Assets/Images/Brands/instagram.svg",
        link: "https://www.instagram.com/dsce_acmw/",
      },
      {
        platform: "FaceBook",
        platformImgLink: "/Assets/Images/Brands/facebook.svg",
        link: "https://www.facebook.com/pages/category/Social-Club/DSCE-ACM-W-Chapter-106562031227323/",
      },
      {
        platform: "LinkedIn",
        platformImgLink: "/Assets/Images/Brands/linkedin.svg",
        link: "https://www.linkedin.com/company/acm-w-dsce-chapter",
      },
    ],
  },
];

const HostSection = () => {
  return (
    <div className="flex place-items-center w-full">
      <div className="text-gray-300 flex flex-col m-auto place-items-center space-y-7 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-wider">
          Event <span className="text-theme-primary-500">Hosts</span>
        </h2>
        <div className="px-10 grid grid-flow-row md:grid-flow-col gap-10 w-full place-items-center justify-evenly">
          {HostsList.map((host, key) => (
            <div
              key={key}
              className=" bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl rounded-lg p-5 h-full w-full place-items-center space-y-7 min-w-max transform hover:bg-theme-card"
            >
              <div className="m-auto h-2/3 flex place-items-center">
                <Link href={host.website} className="m-auto">
                  <a target="_blank">
                    <img
                      src={host.imgLink}
                      width={host.width}
                      height={host.height}
                      alt={host.alt}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex place-items-center justify-evenly min-w-xl">
                {host.socialMediaHandles.map((social, Socialkey) => (
                  <div key={Socialkey} className="transform hover:scale-110">
                    <Link href={social.link}>
                      <a target="_blank">
                        <img
                          src={social.platformImgLink}
                          alt={social.platform}
                          height={30}
                          width={30}
                        />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { HostSection };
