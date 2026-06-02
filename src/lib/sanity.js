import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "gltzk1at",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: false,
});