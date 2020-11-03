import { html } from "lit-html";

import { pharmacyCardHeader } from "./pharmacy-card-header";
import { pharmacyCardBody } from "./pharmacy-card-body";

export const pharmacyCard = (pharmacy, userInput) => html`
  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-0">
    <div class="m-3 p-3 pharmacy-card">
      ${pharmacyCardHeader(pharmacy["Name of the Pharmacy"], userInput)}
      ${pharmacyCardBody(pharmacy, userInput)}
    </div>
  </div>
`;
