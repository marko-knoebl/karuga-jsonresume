const React = require("react");

const Contact = ({ resume }) => (
  <section className="row resume-section contact">
    <div className="headings col-sm-3">
      <h3>Contact</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        <div className="col-sm-6">
          <strong>Email</strong>
          <div className="email">
            <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
          </div>
        </div>
        <div className="col-sm-6">
          <strong>Phone</strong>
          <div className="phone">{resume.basics.phone}</div>
        </div>
        <div className="col-sm-6">
          <strong>Website</strong>
          <div className="website">
            <a href={resume.basics.website}>{resume.basics.website}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

module.exports = Contact;
