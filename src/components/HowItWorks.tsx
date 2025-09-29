import { Shield, Package, CheckCircle, RefreshCw } from "lucide-react";
import processImage from "@/assets/geep.png";

const steps = [
  {
    icon: Shield,
    title: "Buyer Pays into Escrow",
    description: "Payment is securely held in GuardPay's protected escrow system until delivery confirmation."
  },
  {
    icon: Package,
    title: "Vendor Ships Product", 
    description: "Seller ships the product with tracking information automatically shared with the buyer."
  },
  {
    icon: CheckCircle,
    title: "Delivery Confirmed",
    description: "Buyer confirms receipt and product satisfaction, or auto-confirmation after delivery."
  },
  {
    icon: RefreshCw,
    title: "Funds Released",
    description: "Payment is instantly released to the seller, or dispute resolution if issues arise."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            How GuardPay Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, secure, and transparent. Our 4-step process ensures safe transactions for everyone.
          </p>
        </div>

        <div className="mb-16">
          <img
            src={processImage}
            alt="GuardPay 4-step process flow"
            className="w-full "
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center space-y-4 p-6 rounded-xl bg-card border hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;