const React = require("react");

const texts = {
  heading: {
    en: "Languages",
    de: "Sprachen"
  }
};

const Languages = ({ resume, lang }) => (
  <section className="row resume-section languages">
    <div className="headings col-sm-3">
      <h3>{texts.heading[lang]}</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        {resume.languages.map(language => (
          <div className="col-sm-6" key={language.language}>
            <div className="language">
              <strong>{language.language}</strong>
            </div>
            <div className="fluency">{language.fluency}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

module.exports = Languages;
