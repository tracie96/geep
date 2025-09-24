import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay only when you succeed. No monthly fees, no hidden costs. Just a small percentage for complete protection.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
          {/* Standard Plan */}
          <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Standard</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">2%</div>
                <p className="text-muted-foreground">per successful transaction</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Secure escrow protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Proof-of-delivery verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>24/7 dispute resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Email & SMS notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Standard payout (2-3 days)</span>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                Get Started Free
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No setup fees • No monthly costs
              </p>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-2 border-primary hover:shadow-xl transition-all duration-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
                <Zap className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="space-y-2">
                <div className="text-4xl font-bold">1.5%</div>
                <p className="text-muted-foreground">per successful transaction</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="font-medium">Everything in Standard, plus:</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Verified vendor badge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Instant payouts (same day)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Priority customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Advanced analytics dashboard</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0" />
                  <span>Lower transaction fees</span>
                </div>
              </div>
              <Button className="w-full btn-hero">
                Upgrade to Premium
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Minimum 50 transactions/month required
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include: Unlimited transactions • Global coverage • Multi-currency support
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;