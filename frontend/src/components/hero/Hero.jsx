import "./Hero.scss";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="container">
        <h1 className="heading-primary">
          MovieMagicDatabase has it all.{" "}
          <span>
            But you can still
            <span className="hero-heading-accent">add</span> to it.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
