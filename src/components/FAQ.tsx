import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does money stay in escrow?",
    answer: "Funds are typically held for 2-7 days, depending on delivery confirmation. Once the buyer confirms receipt or the tracking shows delivery (with auto-confirmation after 48 hours), funds are released immediately."
  },
  {
    question: "What happens if delivery fails or product is damaged?",
    answer: "If there's an issue with delivery or product quality, buyers can open a dispute within 48 hours of delivery. Our mediation team reviews evidence from both parties and resolves disputes within 2-3 business days. Refunds are processed immediately if disputes are resolved in the buyer's favor."
  },
  {
    question: "How much do I pay for using GuardPay?",
    answer: "Standard users pay 2% per successful transaction, while Premium users pay 1.5%. There are no setup fees, monthly subscriptions, or hidden costs. You only pay when you complete a successful transaction."
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, absolutely. GuardPay uses bank-level encryption and is PCI-DSS compliant. All payment data is tokenized and stored on secure servers. We never store your full payment details and use industry-leading security protocols."
  },
  {
    question: "Can I use GuardPay internationally?",
    answer: "Yes! GuardPay supports transactions in 150+ countries with multi-currency support. We handle currency conversion automatically and work with international shipping providers for proof-of-delivery verification."
  },
  {
    question: "How do I get verified as a vendor?",
    answer: "Vendor verification requires submitting government-issued ID, business registration (if applicable), and bank account verification. The process typically takes 24-48 hours. Verified vendors receive a trust badge and can access Premium features."
  },
  {
    question: "What if I need to cancel a transaction?",
    answer: "Transactions can be cancelled before shipping by mutual agreement between buyer and seller. After shipping, cancellations require dispute resolution. Funds are returned to the buyer minus any applicable processing fees."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! Standard users get 24/7 email support with response within 6 hours. Premium users receive priority phone and chat support with dedicated account managers. Our dispute resolution team is available around the clock."
  }
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about using GuardPay.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;