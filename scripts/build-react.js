const fs = require("fs");
const React = require("react");
const ReactDomServer = require("react-dom/server");
const importJsx = require("import-jsx");

const Resume = importJsx("../react/components/Resume.jsx");

const resumeData = JSON.parse(
  fs.readFileSync("./resume.json", { encoding: "utf-8" })
);

const templateString = fs.readFileSync("./template.html", {
  encoding: "utf-8"
});
const materialTemplateString = fs.readFileSync("./template_bootstrap_md.html", {
  encoding: "utf-8"
});

const html = ReactDomServer.renderToString(
  React.createElement(Resume, { resume: resumeData })
);

const htmlPage = templateString.replace(
  "<body></body>",
  '<body><div class="container">' + html + "</div></body>"
);
const htmlPageMaterial = materialTemplateString.replace(
  "<body></body>",
  '<body><div class="container">' + html + "</div></body>"
);

fs.writeFileSync("./dist/resume_react_fragment.html", html);
fs.writeFileSync("./dist/resume_react.html", htmlPage);
fs.writeFileSync("./dist/resume_react_bootstrap_md.html", htmlPageMaterial);
