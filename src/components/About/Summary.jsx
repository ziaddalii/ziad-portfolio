import { Trail } from "../animations/Trial";

function Summary() {
  return (
    <article className="space-y-12">
      <div className="w-fit">
        <Trail>
          <h2 className="uppercase sm:text-8xl text-7xl text-secondary font-mono">
            Hello, I AM Ziad
          </h2>
          <p className="font-playfair text-accent text-right sm:text-lg">
            Ziad Ali
          </p>
        </Trail>
      </div>
      <Trail>
        <p className="lg:text-3xl md:text-xl text-sm uppercase">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I use my passion and skills in frontend development to create
          high-performance digital experiences. I’ve contributed to a wide range
          of projects for companies both in Egypt and internationally. I work
          closely with businesses and startups to develop impactful web
          solutions and am committed to continuously refining my skills to stay
          at the forefront of frontend development.
        </p>
      </Trail>
    </article>
  );
}

export default Summary;
