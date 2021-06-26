import { Card } from "./Card";
import { CardA } from "./CardA";
import { CardB } from "./CardB";
import { CardC } from "./CardC";
import { CardD } from "./CardD";

const EventsSection = () => {
  return (
    <div className="container flex flex-col place-items-center m-auto justify-evenly w-full space-y-10 py-10 my-10">
      <p className="text-4xl font-semibold text-white">Events</p>
      <div className="flex flex-wrap w-full justify-evenly gap-7 place-items-center">
        <CardA />
        <CardB />
        <CardC />
        <CardD />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { EventsSection };
