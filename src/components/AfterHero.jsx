import afterHero from "../assets/afterHero.png";

export default function AfterHero() {
  return (
    <div className="relative rounded-xl container mx-auto pt-20">
      <div className="mx-auto max-w-6xl relative">
        <div className="flex p-12 rounded-3xl bg-[#020B2D] justify-between flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="max-w-md space-y-6 text-center md:text-left">
            <h1 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              Early Learning AI Teacher
            </h1>
            <p className="text-sm text-gray-300 md:text-base">
              Develop the skills your child needs to succeed with 1:1 voice-based learning games and lessons.
            </p>
            <button className="transform rounded-lg bg-[#B372B0] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95">
              Try Buddy Free
            </button>
          </div>
        </div>

        {/* Image positioned outside the main div */}
        <div className="absolute top-[-80px] right-[24px]">
          <img src={afterHero} className="w-72" alt="" />
        </div>
      </div>
    </div>
  );
}