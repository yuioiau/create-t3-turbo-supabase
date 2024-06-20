import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@acme/ui/accordion";

import MotionWrap from "../../motion-wrap";

export default function FAQ() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="faq">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 md:text-4xl/tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to the most common questions about our website
              builder.
            </p>
          </div>
        </div>
        <div className="mx-auto grid py-12 lg:grid-cols-2 lg:gap-12">
          <Accordion collapsible type="single">
            <AccordionItem value="question1">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                What features are included in Notes Buddy?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Notes Buddy includes a variety of features to enhance your
                  note-sharing experience, such as instant uploads, cross-device
                  sync, secure sharing, and organizational tools. It's free to
                  use forever.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question2">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                How much does Notes Buddy cost?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Notes Buddy is free to use. There are no hidden costs or
                  premium plans. All features are available to every user at no
                  cost.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question3">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Is my data secure with Notes Buddy?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes, Your data privacy is our top priority.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion collapsible type="single">
            <AccordionItem value="question4">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Can I access my notes offline?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes, Notes Buddy allows you to download your notes for offline
                  access. This feature ensures you can view your notes even
                  without an internet connection.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question5">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                How do I share my notes with others?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You can easily share your notes by generating a shareable link
                  or by directly sharing them with other Notes Buddy users.
                  Sharing settings allow you to control who can view or edit
                  your notes.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="question6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                What platforms does Notes Buddy support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Notes Buddy is currently compatible with web devices only.
                  Mobile support is coming soon, so stay tuned for updates!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MotionWrap>
  );
}
