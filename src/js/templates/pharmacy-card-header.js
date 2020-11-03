import { html } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import { highlightMatchingTexts } from "../utils/highlight-matching-texts";

export const pharmacyCardHeader = (name, userInput) => html`
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <h5 class="font-italic pharmacy-card-header-title">
        ${unsafeHTML(highlightMatchingTexts(name, userInput))}
      </h5>
      <hr class="pharmacy-card-header-underline" />
    </div>
  </div>
`;
