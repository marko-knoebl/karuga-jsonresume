const React = require("react");

const texts = {
  heading: {
    en: "Contact",
    de: "Kontakt",
  },
  address: {
    en: "Address",
    de: "Adresse",
  },
  phone: {
    en: "Phone",
    de: "Telefon",
  },
};

const Contact = ({ resume, lang }) => (
  <section className="row resume-section contact">
    <div className="headings col-sm-3">
      <h3>{texts.heading[lang]}</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        <div className="col-sm-6">
          <strong>Website</strong>
          <div className="website">
            <a href={resume.basics.website}>{resume.basics.website}</a>
          </div>
        </div>
        <div className="col-sm-6">
          <strong>Email</strong>
          <div className="email">
            <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
          </div>
        </div>
        <div className="col-sm-6">
          <strong>{texts.address[lang]}</strong>
          <div className="address">
            {resume.basics.location.address}, {resume.basics.location.city},{" "}
            {resume.basics.location.countryCode}
          </div>
        </div>
        <div className="col-sm-6">
          <strong>{texts.phone[lang]}</strong>
          <div className="phone">{resume.basics.phone}</div>
        </div>
      </div>
    </div>
  </section>
);

module.exports = Contact;
