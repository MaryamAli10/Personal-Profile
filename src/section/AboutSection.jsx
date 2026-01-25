import "./section.css";

function AboutSection() {
  return (
    <div className="about-section-layout">
      <div className="intro-section">
        <h2>{introHeader}</h2>
        <p>{introParagraph}</p>
      </div>
      <div className="profile-section">
        <img src="./uncut.jpg" alt="profile" />
      </div>
    </div>
  );
}

const introHeader = "Hello,\n I'm Maryam Ali.";
const introParagraph =
  "I'm a front-end web developer with 1 year of experience. I have experience with HTML, CSS, Javascript, React, ect... I have a passion for software development and learning new things. I am willing to adapt and gain new skills for what is needed. My Portfolio showcase some of my pojects I have worked on.";

export default AboutSection;
