export function openWhatsApp(event) {
  const whatsappNo = event.target.textContent;

  window.open(`https://api.whatsapp.com/send?phone=${whatsappNo}`);
}
