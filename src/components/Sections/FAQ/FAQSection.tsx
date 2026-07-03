import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import SectionHeading from "@components/Common/SectionHeading";
import { FAQS } from "@/data/faq";

// Accordion-style FAQ section built with HeadlessUI Disclosure.
export default function FAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before starting your construction journey."
        />
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <Disclosure key={faq.id} as="div" className="rounded-xl2 bg-cream border border-beige overflow-hidden">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between px-6 py-5 text-left">
                    <span className="font-heading font-medium">{faq.question}</span>
                    <FaChevronDown className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    <Disclosure.Panel className="px-6 pb-5 text-sm text-charcoal/60 leading-relaxed">
                      {faq.answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
