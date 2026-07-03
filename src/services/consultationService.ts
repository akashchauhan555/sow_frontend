import { apiClient } from "./apiClient";
import type { ConsultationFormData } from "@/types";

// Placeholder service layer — wires up once the backend is available.
export async function submitConsultation(data: ConsultationFormData) {
  // return apiClient.post("/consultations", data);
  console.log("Consultation submitted (frontend-only stub):", data);
  return Promise.resolve({ success: true });
}
