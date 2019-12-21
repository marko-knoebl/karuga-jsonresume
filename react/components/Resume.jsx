const React = require("react");
const importJsx = require("import-jsx");

const Header = importJsx("./Header.jsx");
const Contact = importJsx("./Contact.jsx");
const AboutMe = importJsx("./AboutMe.jsx");
const Profiles = importJsx("./Profiles.jsx");
const Work = importJsx("./Work.jsx");
const Education = importJsx("./Education.jsx");
const Languages = importJsx("./Languages.jsx");

const Resume = ({ resume, lang }) => (
  <div className="resume container">
    <Header resume={resume} lang={lang} />
    <Contact resume={resume} lang={lang} />
    {resume.basics.summary && <AboutMe resume={resume} lang={lang} />}
    <Profiles resume={resume} lang={lang} />
    <Work resume={resume} lang={lang} />
    <Education resume={resume} lang={lang} />
    <Languages resume={resume} lang={lang} />
  </div>
);

module.exports = Resume;
