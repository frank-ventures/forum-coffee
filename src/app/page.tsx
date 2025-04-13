import Events from "@/components/Events";
// import HamburgerMenu from "@/components/navigation/HamburgerMenu";
import OpeningHours from "@/components/OpeningHours";

export default function Home() {
  return (
    <>
      <header className="w-full h-24 flex items-center justify-between px-4 gap-4 bg-[#0a0a0a] text-[#fbfbfb] text-center sticky top-0 z-50">
        <div>
          <h1 className="font-bebas text-5xl font-semibold">FORUM</h1>
          <h2 className="uppercase text-sm tracking-wider">
            Speciality Coffee
          </h2>
        </div>

        <nav className="flex gap-4">
          <a href="#events">Events</a>
          <a href="#times">Time</a>
        </nav>
        {/* <HamburgerMenu /> */}
      </header>

      <main className="flex flex-col gap-20">
        <div className="hero-image w-full h-[90dvh] relative flex justify-center items-center">
          <div className="overlay absolute w-full h-full bg-black opacity-50"></div>
          <img
            src="interior-second-space.jpg"
            alt=""
            className="m4 object-cover w-full h-full"
          />
          <h2 className="absolute font-bebas text-5xl font-extralight text-white">
            Draycott
          </h2>
        </div>

        <div
          id="events"
          className="events-section flex gap-4 flex-col justify-center items-center w-full"
        >
          <h2 className="font-bebas text-5xl font-extralight ">
            Upcoming Events
          </h2>
          <Events />
        </div>

        <OpeningHours />
      </main>
    </>
  );
}
