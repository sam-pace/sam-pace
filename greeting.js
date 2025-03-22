const fs = require('fs');

function generateGreeting() {
  const now = new Date().getHours();

  if (now >= 5 && now < 12) {
    return 'Bom dia! ☀️';
  } else if (now >= 12 && now < 18) {
    return 'Boa tarde! 🌤️';
  } else {
    return 'Boa noite! 🌙';
  }
}

function updateReadme() {
  const greeting = generateGreeting();
  let content = fs.readFileSync('README.md', 'utf8').split('\n');

  for (let i = 0; i < content.length; i++) {
    if (content[i].includes('<greeting>')) {
      content[i] = `## Olá, ${greeting}`;
      break;
    }
  }

  fs.writeFileSync('README.md', content.join('\n'));
}

updateReadme();