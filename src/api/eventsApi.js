import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/events/";

export function getCampaigns() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function updateCampaign(campaign) {
  return fetch(baseUrl + campaign.id || "", {
    method: campaign.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(campaign),
  })
    .then(handleResponse)
    .catch(handleError);
}
