const FAQSection = () => {
  return (
    <div>
      <section className="text-gray-300">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center mb-4">
              Frequently Asked <span className="text-theme-primary-500">Question</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about the event and what can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  Who can attend?
                </summary>
                <span className="text-sm p-8 decoration-clone">
                  It's open to all College Students. This means you do not have
                  to think twice before registering.{" "}
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  When will applications open?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  Sign up using this form to get updates when applications come
                  out.
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  I’m a first time hacker, what should I do?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  No worries, we love to welcome first time hackers! We’ll have
                  plenty of experiences oriented around first time hackers to
                  introduce you to the idea of a hackathon!
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  Can I compete in the Quests and the Regular category?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  No, you may only compete in Quests or the regular category.
                </span>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  How do I form teams?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  If you already have a team of at most 4 before the hackathon,
                  feel free to apply as a team. If you don’t there’ll be plenty
                  of opportunities for you to meet people and form a team!
                </span>
              </details>
              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  What am I allowed to hack?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  You can build/hack/create anything you want so long as you can
                  get it done within the time limit! Check out our tracks for
                  inspiration!
                </span>
              </details>

              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  What do I need to participate?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  All you need is an internet connection and a desire to build
                  cool stuff!
                </span>
              </details>

              <details className="mb-4 cursor-pointer">
                <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                  Will there be swag?
                </summary>

                <span className="text-sm p-8 decoration-clone">
                  Yes! Participants will be receiving swags.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { FAQSection };
