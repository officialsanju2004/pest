// src/api/enquiryApi.js

const API_BASE_URL =
  import.meta.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export const ENQUIRY_ENDPOINT = `${API_BASE_URL}/web/api/enquiry/enquiry-insert`;

export async function submitEnquiry(payload) {
  const res = await fetch(ENQUIRY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const message =
      (data && (data.message || data.error)) ||
      `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  return data;
}