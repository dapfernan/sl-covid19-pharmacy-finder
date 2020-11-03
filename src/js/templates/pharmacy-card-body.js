import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { highlightMatchingTexts } from "../utils/highlight-matching-texts";
import { removeWhiteSpaces } from "../utils/remove-white-spaces";
import { removeCommas } from "../utils/remove-commas";
import { formatContactNumber } from "../utils/format-contact-number";
import { openMap } from "../handlers/open-map";
import { openPhone } from "../handlers/open-phone";
import { openWhatsApp } from "../handlers/open-whatsapp";
import { openEmail } from "../handlers/open-email";

const displayAddress = (address, userInput) => {
  if (address === "N/A") {
    return html`<span class="pharmacy-card-body-item-value">${address}</span>`;
  } else {
    return html`<a class="link-blue" href="#" @click=${openMap}>
      <span class="pharmacy-card-body-item-value"
        >${unsafeHTML(highlightMatchingTexts(address, userInput))}
      </span>
    </a>`;
  }
};

const displayContactNo = (contactNo) => {
  if (contactNo === "N/A") {
    return html`<span class="pharmacy-card-body-item-value"
      >${contactNo}</span
    >`;
  } else {
    return html`<a class="link-blue" href="#" @click=${openPhone}>
      <span class="pharmacy-card-body-item-value">+${contactNo} </span>
    </a>`;
  }
};

const displayWhatsAppNo = (whatsappNo) => {
  if (whatsappNo === "N/A") {
    return html`<span class="pharmacy-card-body-item-value"
      >${whatsappNo}</span
    >`;
  } else {
    return html`<a class="link-blue" href="#" @click=${openWhatsApp}>
      <span class="pharmacy-card-body-item-value">+${whatsappNo} </span>
    </a>`;
  }
};

const displayViberNo = (viberNo) => {
  if (viberNo === "N/A") {
    return html`<span class="pharmacy-card-body-item-value">${viberNo}</span>`;
  } else {
    return html`<span class="pharmacy-card-body-item-value">+${viberNo}</span>`;
  }
};

const displayEmail = (email) => {
  if (email === "N/A") {
    return html`<span class="pharmacy-card-body-item-value">${email}</span>`;
  } else {
    return html`<a class="link-blue" href="#" @click=${openEmail}>
      <span class="pharmacy-card-body-item-value">${email} </span>
    </a>`;
  }
};

export const pharmacyCardBody = (pharmacy, userInput) => {
  const district = unsafeHTML(
    highlightMatchingTexts(pharmacy["District"], userInput)
  );
  const mohArea = unsafeHTML(
    highlightMatchingTexts(pharmacy["MOH Area"], userInput)
  );
  const address = pharmacy["Address"];
  const contactNo = formatContactNumber(
    removeCommas(
      removeWhiteSpaces(
        typeof pharmacy["Contact No."] !== "string"
          ? pharmacy["Contact No."].toString()
          : pharmacy["Contact No."]
      )
    )
  );
  const whatsappNo = formatContactNumber(
    removeCommas(
      removeWhiteSpaces(
        typeof pharmacy["Whatsapp No."] !== "string"
          ? pharmacy["Whatsapp No."].toString()
          : pharmacy["Whatsapp No."]
      )
    )
  );
  const viberNo = formatContactNumber(
    removeCommas(
      removeWhiteSpaces(
        typeof pharmacy["Viber No."] !== "string"
          ? pharmacy["Viber No."].toString()
          : pharmacy["Viber No."]
      )
    )
  );
  const email = removeWhiteSpaces(pharmacy["E mail"]);

  return html`
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">District</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        <span class="pharmacy-card-body-item-value">${district}</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">MOH Area</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        <span class="pharmacy-card-body-item-value">${mohArea}</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">Address</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        ${displayAddress(address, userInput)}
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">Contact</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        ${displayContactNo(contactNo)}
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">WhatsApp</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        ${displayWhatsAppNo(whatsappNo)}
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">Viber</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        ${displayViberNo(viberNo)}
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 mt-1">
        <span class="font-weight-bold">Email</span>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mt-1">
        ${displayEmail(email)}
      </div>
    </div>
  `;
};
