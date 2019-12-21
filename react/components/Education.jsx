const React = require("react");

const EducationItem = ({ education }) => (
  <div className="col-sm-12">
    <h4 className="strike-through">
      <span>{education.institution}</span>
      <span className="date">
        {education.startDate} — {education.endDate}
      </span>
    </h4>
    <div className="area">🎓 {education.area}</div>
    <div className="studyType">{education.studyType}</div>
  </div>
);

const Education = ({ resume }) => (
  <section className="row resume-section education">
    <div className="headings col-sm-3">
      <h3>Education</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        {resume.education.map((education, index) => (
          <EducationItem education={education} key={index} />
        ))}
      </div>
    </div>
  </section>
);

module.exports = Education;
