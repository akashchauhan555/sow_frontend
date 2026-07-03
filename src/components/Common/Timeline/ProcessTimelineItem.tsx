import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import * as Icons6 from "react-icons/fa6";
import type { TimelineStep } from "@/types";

interface ProcessTimelineItemProps {
  step: TimelineStep;
  index: number;
  isLast: boolean;
}

function resolveIcon(name: string) {
  return (Icons as any)[name] || (Icons6 as any)[name] || Icons.FaCircle;
}

export default function ProcessTimelineItem({ step, index, isLast }: ProcessTimelineItemProps) {
  const Icon = resolveIcon(step.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center px-4"
    >
      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-card text-xl">
        <Icon />
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-beige-dark -z-0" />
      )}
      <span className="mt-4 text-xs font-semibold text-primary tracking-widest">STEP {step.step}</span>
      <h4 className="font-heading text-lg font-semibold mt-1">{step.title}</h4>
      <p className="text-sm text-charcoal/60 mt-2 max-w-[220px]">{step.description}</p>
    </motion.div>
  );
}
