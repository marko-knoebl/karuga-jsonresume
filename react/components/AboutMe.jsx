const React = require("react");

const AboutMe = ({ resume }) => (
  <section className="row resume-section aboutme">
    <aside className="headings col-sm-3">
      <h3>About Me</h3>
    </aside>
    <div className="col-sm-9">
      <p>{resume.basics.summary}</p>
    </div>
  </section>
);

module.exports = AboutMe;
