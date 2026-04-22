export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Caleb Lwipa</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
           I am a passionate Full Stack Developer skilled in building dynamic and responsive web applications.
           I enjoy creating seamless user experiences and bringing innovative ideas to life through code.

           <br />Am a Software Engineer , Did my degree at the University Of Zambia where I gained a strong foundation in software development and web technologies.
            I am experienced with tools like React, Node.js, MongoDB, and Figma, and I’m always learning to build scalable and efficient solutions.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile--pic.png" alt="Hero Section" />
      </div>
    </section>
  );
}
