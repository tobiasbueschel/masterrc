const fs = require('fs');

const lines = fs.readFileSync(__dirname + '/.masterrc', 'utf8').split(/\n/);
const templates = [];
let template = {
  name: '',
  contents: [],
}
lines.forEach(line => {
  if(line.match(/```/) && template.name === '') {
    template.name = line.replace(/```/,'');
  } else if (line.match(/```/)) {
    template.contents = template.contents.join('\n').trim();
    templates.push(template);
    template = {
      name: '',
      contents: [],
    }
  }
  else {
    template.contents.push(line);
  }
});

console.log(templates);

templates.forEach(x => {
  fs.writeFileSync(__dirname + '/' + x.name, x.contents);
})
