export function openMap(event) {
  const address = event.target.textContent;

  window.open(`http://maps.google.com/?q=${address}`);
}
