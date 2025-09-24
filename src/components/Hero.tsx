import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Secure Payments,{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Confident Transactions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                GuardPay holds funds safely until products are delivered — keeping buyers and sellers protected.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group">
                Start Selling Safely
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Buy with Confidence
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Dispute Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Instant Release</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-success/20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="GuardPay secure payment flow illustration"
              className="relative rounded-2xl shadow-2xl animate-float"
              width={640}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;