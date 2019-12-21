const React = require("react");

const texts = {
  heading: {
    en: "About Me",
    de: "Über Mich"
  }
};

const AboutMe = ({ resume, lang }) => (
  <section className="row resume-section aboutme">
    <aside className="headings col-sm-3">
      <h3>{texts.heading[lang]}</h3>
    </aside>
    <div className="col-sm-9">
      <p>{resume.basics.summary}</p>
    </div>
  </section>
);

module.exports = AboutMe;
