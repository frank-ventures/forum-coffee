import OpeningHours from "@/components/OpeningHours";

export default function Home() {
  return (
    <>
      <section className="w-full h-80 flex flex-col items-center justify-center gap-4 bg-[#0a0a0a] text-[#fbfbfb]">
        <h1 className="font-bebas text-[5rem]">FORUM M8</h1>
        <h2 className="uppercase">Speciality Coffee</h2>
      </section>

      <section className="">
        <OpeningHours />
      </section>
    </>
  );
}
