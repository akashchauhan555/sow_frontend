import type { TimelineStep } from "@/types";

export const PROCESS_TIMELINE: TimelineStep[] = [
  { id: "st1", step: 1, title: "Consultation", description: "Share your vision, plot details and budget with our experts.", icon: "FaComments" },
  { id: "st2", step: 2, title: "Design & Planning", description: "Our architects craft floor plans and 3D visualisations for approval.", icon: "FaDraftingCompass" },
  { id: "st3", step: 3, title: "Approvals", description: "We handle all necessary permits and regulatory approvals.", icon: "FaFileSignature" },
  { id: "st4", step: 4, title: "Construction", description: "Dedicated project managers oversee every stage with live tracking.", icon: "FaHardHat" },
  { id: "st5", step: 5, title: "Quality Check", description: "Rigorous multi-point quality inspection before handover.", icon: "FaClipboardCheck" },
  { id: "st6", step: 6, title: "Handover", description: "Your dream space is ready, backed by our structural warranty.", icon: "FaKey" },
];
