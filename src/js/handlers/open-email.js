export function openEmail(event) {
  event.preventDefault();

  const email = event.target.textContent;

  location.href = `mailto:${email}`;
}
