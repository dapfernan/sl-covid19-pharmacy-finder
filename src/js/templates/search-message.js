import { html } from "lit-html";

export const searchMessage = (message) => html`
  <div
    class="col-12 d-flex flex-column align-items-center align-items-sm-center align-items-md-start align-items-lg-start align-items-xl-start"
  >
    <span
      class="text-center text-sm-center text-md-left text-lg-left text-xl-left pb-3"
    >
      ${message}
    </span>
  </div>
`;
