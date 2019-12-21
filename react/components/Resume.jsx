const React = require("react");

const Header = require("./Header.jsx");
const Contact = require("./Contact.jsx");
const AboutMe = require("./AboutMe.jsx");
const Profiles = require("./Profiles.jsx");
const Work = require("./Work.jsx");
const Education = require("./Education.jsx");
const Languages = require("./Languages.jsx");

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
