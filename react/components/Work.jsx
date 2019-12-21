const React = require("react");

const Occuppation = ({ occupation }) => (
  <div className="col-sm-12">
    <h4 className="strike-through">
      <span>{occupation.company}</span>
      <span className="date">
        {occupation.startDate} — {occupation.endDate}
      </span>
    </h4>
    <div className="website float-right">
      <a href={occupation.website}>{occupation.website}</a>
    </div>
    <div className="position">{occupation.position}</div>
    <div className="summary">
      <p>{occupation.summary}</p>
    </div>
    {occupation.highlights && (
      <div>
        <h4>Highlights</h4>
        <ul>
          {occupation.highlights.map(highlight => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const Work = ({ resume }) => (
  <section className="row resume-section work">
    <div className="headings col-sm-3">
      <h3>Work</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        {resume.work.map((occupation, index) => (
          <Occuppation occupation={occupation} key={index} />
        ))}
      </div>
    </div>
  </section>
);

module.exports = Work;
