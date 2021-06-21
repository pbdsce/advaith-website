import Image from "next/image";
const Header = () => {
  return (
    <div className="flex flex-col place-items-center p-10">
      <div className="flex flex-col place-items-center space-y-1">
        <Image
          src="/Assets/Images/advaith-logo.svg"
          width={180}
          height={50}
          className="object-contain"
        />
        <p className="text-theme-primary-600 text-sm">
          brought to you by ACM-W and Point Blank
        </p>
      </div>
    </div>
  );
};

export { Header };
