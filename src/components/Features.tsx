import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wallet, 
  Package, 
  MessageSquare, 
  UserCheck, 
  Bell, 
  Crown 
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Escrow Wallet",
    description: "Secure digital wallet that holds funds safely until transaction completion with military-grade encryption."
  },
  {
    icon: Package,
    title: "Proof-of-Delivery",
    description: "Automated verification system that confirms delivery through tracking integration and photo evidence."
  },
  {
    icon: MessageSquare,
    title: "Dispute Resolution",
    description: "Expert mediation team provides fair and fast resolution for any transaction disputes within 48 hours."
  },
  {
    icon: UserCheck,
    title: "KYC Verification",
    description: "Complete vendor verification process ensures all sellers are legitimate and trustworthy businesses."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time updates via SMS, email, and push notifications keep everyone informed throughout the process."
  },
  {
    icon: Crown,
    title: "Premium Features",
    description: "Enhanced services including verified badges, instant payouts, and priority customer support."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for secure, confident transactions. Built with cutting-edge technology and user experience in mind.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;