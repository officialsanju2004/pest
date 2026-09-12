// src/api/enquiryApi.js

// IMPORTANT: This project is built with Vite, so client-exposed env vars
// MUST be prefixed with VITE_ (not REACT_APP_, which is a Create React App
// convention and is never exposed by Vite). Set VITE_API_BASE_URL in a
// .env file locally, and in your Vercel project settings for production.
const RAW_API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

// Strip any trailing slash so we never end up with a double slash when
// joining with the endpoint path below.
const API_BASE_URL = RAW_API_BASE_URL.replace(/\/+$/, "");

export const ENQUIRY_ENDPOINT = `${API_BASE_URL}/web/api/enquiry/enquiry-insert`;

export async function submitEnquiry(payload) {
  let res;
  try {
    res = await fetch(ENQUIRY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    // fetch throws (rather than rejecting with a response) on network
    // failures, e.g. the API server is unreachable or misconfigured.
    throw new Error(
      "Could not reach the server. Please check your connection and try again."
    );
  }

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