import { Card } from "./Card";

const EventsSection = () => {
  return (
    <div className="container flex flex-col place-items-center m-auto justify-evenly w-full space-y-10 py-10 my-10">
      <p className="text-4xl font-semibold text-white">Events</p>
      <div className="flex flex-wrap w-full justify-evenly gap-7 place-items-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export { EventsSection };
