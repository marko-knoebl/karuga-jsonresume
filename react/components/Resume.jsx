const React = require("react");
const importJsx = require("import-jsx");

const Header = importJsx("./Header.jsx");
const Contact = importJsx("./Contact.jsx");
const AboutMe = importJsx("./AboutMe.jsx");
const Profiles = importJsx("./Profiles.jsx");
const Work = importJsx("./Work.jsx");
const Education = importJsx("./Education.jsx");
const Languages = importJsx("./Languages.jsx");

const Resume = ({ resume }) => (
  <div className="resume container">
    <Header resume={resume} />
    <Contact resume={resume} />
    {resume.basics.summary && <AboutMe resume={resume} />}
    <Profiles resume={resume} />
    <Work resume={resume} />
    <Education resume={resume} />
    <Languages resume={resume} />
  </div>
);

module.exports = Resume;
