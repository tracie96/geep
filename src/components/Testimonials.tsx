import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Shield, Check } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Online Boutique Owner",
    content: "GuardPay has transformed my business. Buyers trust me more, and I get paid faster. The verification badge increased my sales by 40%!",
    rating: 5,
    initials: "SJ"
  },
  {
    name: "Mike Chen",
    role: "Instagram Reseller",
    content: "As a buyer, I feel so much safer. No more worrying about getting scammed. GuardPay's dispute resolution saved me $500 last month.",
    rating: 5,
    initials: "MC"
  },
  {
    name: "Lisa Rodriguez",
    role: "Handmade Crafts Seller",
    content: "The platform is incredibly user-friendly. Setup took 5 minutes, and I received my first escrow payment the same day I shipped.",
    rating: 5,
    initials: "LR"
  }
];

const trustSignals = [
  "PCI-DSS Compliant",
  "SSL Secured",
  "Bank-Level Encryption",
  "GDPR Compliant"
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the community of satisfied buyers and sellers who trust GuardPay for their transactions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Shield className="h-6 w-6 text-success" />
            <h3 className="text-lg font-semibold">Enterprise Security Standards</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {trustSignals.map((signal, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 bg-success-light px-4 py-2 rounded-full"
              >
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm font-medium text-success">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;