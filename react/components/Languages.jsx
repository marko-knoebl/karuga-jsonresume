const React = require("react");

const Languages = ({ resume }) => (
  <section className="row resume-section languages">
    <div className="headings col-sm-3">
      <h3>Languages</h3>
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
