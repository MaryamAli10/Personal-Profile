import "./section.css";

function Intro() {
  return (
    <div className="intro-section">
      <h1>
        Hi,
        <br />
        I'm Maryam Ali
      </h1>
      <p>{introParagraph}</p>
      <div id="socials">
        <a href="">Email</a>
        <a href="">Github</a>
        <a href="">LinkedIn</a>
        <a href="">Resume</a>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="profile-section">
      <div className="shapes" id="big-animated-circle"></div>
      <div className="shapes" id="small-animated-circle"></div>
      <div className="profile-background">
        <img src="./uncut.jpg" alt="profile" />{" "}
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
function AboutSection() {
  return (
    <div className="about-section-layout">
      <Intro />
      <Profile />
    </div>
  );
}

const introParagraph =
  "I'm a front-end web developer with 1 year of experience. I have experience with HTML, CSS, Javascript, React, ect... I have a passion for software development and learning new things. I am willing to adapt and gain new skills for what is needed. My Portfolio showcase some of my pojects I have worked on.";

export default AboutSection;
