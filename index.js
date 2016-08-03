#! /usr/bin/env node
const fs = require('fs');
const templates = [];
let template = {
  name: '',
  contents: [],
}

let lines;

try {
  lines = fs.readFileSync(process.cwd() + '/.masterrc', 'utf8').split(/\n/);
} catch(e) {
  console.log('[ERR] .masterrc file was not found');
  return;
}

// Parse masterrc file by line into file templates
lines.forEach(line => {
  // Line indicates start of a file
  if(line.match(/```/) && template.name === '') {
    // Extract and set template name from line
    template.name = line.replace(/```/,'');
  // Line indicates end of a file
  } else if (line.match(/```/)) {
    // Concat template contents and trim whitespace
    template.contents = template.contents.join('\n').trim();
    // Push template to list of templates
    templates.push(template);
    // Reset template for next line
    template = {
      name: '',
      contents: [],
    }
  }
  // Line was contents of file
  else {
    // Append line to current template contents
    template.contents.push(line);
  }
});

// Create a file from each template
templates.forEach(x => {
  fs.writeFileSync(process.cwd() + '/' + x.name, x.contents);
});
