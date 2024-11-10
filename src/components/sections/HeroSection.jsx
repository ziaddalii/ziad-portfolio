import MarqueeButton from "../buttons/MarqueeButton";
import CurrentTime from "../Hero/Time";
import { Trail } from "./../animations/Trial";
function HeroSection() {
  return (
    <section className="grid xl:grid-cols-7 sm:grid-cols-2 grid-cols-1 gap-6 uppercase justify-center items-center h-full px-8 py-32">
      <div className="xl:col-span-7 col-span-1 flex justify-end">
        <div className="xl:w-1/2">
          <CurrentTime />
        </div>
      </div>
      <div className="xl:col-span-3 col-span-1 font-bold xl:text-[15rem] sm:text-[10rem] text-[7rem] leading-none text-secondary font-mono">
        <Trail>
          <h2>Frontend</h2>
          <h2>Developer</h2>
        </Trail>
      </div>

      <div className="xl:col-span-4 sm:col-span-2 col-span-1 space-y-6">
        <div className="flex justify-end">
          <p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs xl:max-w-[37rem] max-w-[48rem]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I am a front-end developer based in Egypt, with main passion towards
            creativity and exploring. I have experience in building projects
            using React and Next.js, I love cultures, koshary and rap.
          </p>
        </div>
        <div className="flex justify-end">
          <Trail>
            <MarqueeButton href={"#contact"}>Contact Me</MarqueeButton>
          </Trail>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
