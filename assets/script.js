// Update these with your public contact information before publishing.
const CONTACT = {
  email: '', // e.g. 'hello@example.com'
  github: '', // e.g. 'https://github.com/yourusername'
  linkedin: '' // e.g. 'https://www.linkedin.com/in/yourprofile/'
};

document.getElementById('year').textContent = new Date().getFullYear();
if (CONTACT.github) document.getElementById('githubLink').href = CONTACT.github;
if (CONTACT.linkedin) document.getElementById('linkedinLink').href = CONTACT.linkedin;
const copyButton = document.getElementById('copyEmail');
const status = document.getElementById('emailStatus');
if (CONTACT.email) {
  status.textContent = 'Reach out anytime — I would love to connect.';
  copyButton.title = 'Copy email address';
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      status.textContent = 'Email address copied!';
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  });
} else {
  copyButton.disabled = true;
  copyButton.title = 'Add an email in assets/script.js to enable this button';
}
// Close mobile navigation after clicking a section.
document.querySelectorAll('#navItems a').forEach(a => a.addEventListener('click', () => {
  const nav = document.getElementById('navItems');
  if (nav.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(nav).hide();
}));
