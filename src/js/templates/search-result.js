import { html } from "lit-html";
import { until } from "lit-html/directives/until";

export const searchResult = (result, message) =>
  html`${until(result, message)}`;
