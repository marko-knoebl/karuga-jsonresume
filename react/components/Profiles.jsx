const React = require("react");

const Profile = ({ profile }) => (
  <div className="col-sm-6">
    <strong className="network">{profile.network}</strong>
    <div className="username">
      <div className="url">
        <a href={profile.url}>{profile.username}</a>
      </div>
    </div>
  </div>
);

const Profiles = ({ resume }) => (
  <section className="row resume-section profiles">
    <div className="headings col-sm-3">
      <h3>Profiles</h3>
    </div>
    <div className="col-sm-9">
      <div className="row">
        {resume.basics.profiles.map(profile => (
          <Profile profile={profile} key={profile.url} />
        ))}
      </div>
    </div>
  </section>
);

module.exports = Profiles;
