import { Illustration } from "../../svg/svg";
const About = () => {
  return (
    <div className="flex w-full justify-evenly place-items-center">
      <div className="w-1/2  text-white">
        <h2 className="text-2xl space-y-5">YeAh</h2>
        <p className="">
            Yet Another Hackathon
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorum reiciendis eos inventore placeat obcaecati voluptatibus nesciunt, odit consequatur suscipit iste optio sunt eveniet consequuntur eligendi temporibus repellat voluptas doloremque. Numquam, enim aspernatur illum quibusdam mollitia, eaque vero magnam unde pariatur
        </p>
      </div>
      <div className="w-1/2 m-auto">
        <Illustration />
      </div>
    </div>
  );
};

export { About };
