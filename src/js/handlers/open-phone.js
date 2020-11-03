export function openPhone(event) {
  const contactNo = event.target.textContent;

  location.href = `tel:${contactNo}`;
}
