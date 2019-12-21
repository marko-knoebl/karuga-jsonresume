const React = require("react");

const Header = ({ resume }) => (
  <header className="resume-header row justify-content-center">
    <div className="col-sm-8">
      <h1>{resume.basics.name}</h1>
      <h2>{resume.basics.label}</h2>
    </div>
  </header>
);

module.exports = Header;
