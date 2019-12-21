const fs = require("fs");
const React = require("react");
const ReactDomServer = require("react-dom/server");
const importJsx = require("import-jsx");

const Resume = importJsx("../react/components/Resume.jsx");

const resumeData = {
  en: JSON.parse(fs.readFileSync("./resume.json", { encoding: "utf-8" })),
  de: JSON.parse(fs.readFileSync("./resume-de.json", { encoding: "utf-8" }))
};

const templateString = fs.readFileSync("./template.html", {
  encoding: "utf-8"
});
const materialTemplateString = fs.readFileSync("./template_bootstrap_md.html", {
  encoding: "utf-8"
});

const htmlFragments = {};
const htmlPages = {};
const htmlPagesMaterial = {};

for (let lang of ["en", "de"]) {
  htmlFragments[lang] = ReactDomServer.renderToString(
    React.createElement(Resume, { resume: resumeData[lang], lang: lang })
  );

  htmlPages[lang] = templateString.replace(
    "<body></body>",
    '<body><div class="container">' + htmlFragments[lang] + "</div></body>"
  );

  htmlPagesMaterial[lang] = materialTemplateString.replace(
    "<body></body>",
    '<body><div class="container">' + htmlFragments[lang] + "</div></body>"
  );

  fs.writeFileSync(
    `./dist/resume_react_fragment_${lang}.html`,
    htmlFragments[lang]
  );
  fs.writeFileSync(`./dist/resume_react_${lang}.html`, htmlFragments[lang]);
  fs.writeFileSync(
    `./dist/resume_react_bootstrap_material_${lang}.html`,
    htmlPagesMaterial[lang]
  );
}
