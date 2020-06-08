import { handleResponse, handleError } from "./apiUtils";
import { BASE_URI, ENDPOINTS } from "../utils/constants";

const uri = BASE_URI + ENDPOINTS.EVENTS;

export function getCampaigns() {
  return fetch(uri).then(handleResponse).catch(handleError);
}

export function updateCampaign(campaign) {
  return fetch(uri + "/" + campaign.id || "", {
    method: campaign.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(campaign),
  })
    .then(handleResponse)
    .catch(handleError);
}
