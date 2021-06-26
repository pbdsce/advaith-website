const EventDetails = [
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
  {
    date: "20 JULY",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit delectus fugiat accusamus adipisci mollitia facere vero culpa fuga eius!",
  },
];

const ScheduleTimelineSection = () => {
  return (
    <div className="container px-3 py-10 flex flex-col place-items-center w-full m-auto text-gray-200 space-y-10">
      <h2 className="text-4xl font-semibold tracking-wider">Schedule</h2>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
        {EventDetails.map((event, key) =>
          key % 2 == 0 ? (
            <div
              className="flex flex-row-reverse md:contents"
              key={key}
              id="left-timeline-element"
            >
              <div className="bg-theme-bg shadow-md col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto">
                <p>
                  {event.date} {event.time}
                </p>
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quaerat?
                </p>
              </div>
              <div className="bg-theme-cardcol-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-theme-primary-600 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-theme-primary-300 shadow"></div>
              </div>
            </div>
          ) : (
            <div
              className="flex md:contents"
              key={key}
              id="right-timeline-element"
            >
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-theme-primary-600 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-theme-primary-500 shadow"></div>
              </div>
              <div className="bg-theme-bg shadow-md col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                <p>
                  {event.date} {event.time}
                </p>
                <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
                <p className="leading-tight text-justify">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae, facilis.
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { ScheduleTimelineSection };
