import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Store, Shield, CheckCircle, Users, Star } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built for Buyers & Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            GuardPay provides unique benefits tailored to protect and empower both sides of every transaction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* For Buyers */}
          <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-glow"></div>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <ShoppingCart className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">For Buyers</CardTitle>
              <Badge variant="secondary" className="mx-auto">Shop with Confidence</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Money Back Guarantee</h4>
                    <p className="text-sm text-muted-foreground">Funds only released when you receive your product</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Easy Dispute Resolution</h4>
                    <p className="text-sm text-muted-foreground">Fair and fast resolution process with expert mediation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Verified Sellers</h4>
                    <p className="text-sm text-muted-foreground">Shop from trusted, KYC-verified vendors only</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* For Vendors */}
          <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-success to-success/70"></div>
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                <Store className="h-10 w-10 text-success" />
              </div>
              <CardTitle className="text-2xl">For Vendors</CardTitle>
              <Badge variant="secondary" className="mx-auto">Sell with Security</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Guaranteed Payment</h4>
                    <p className="text-sm text-muted-foreground">Get paid as soon as delivery is confirmed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Attract More Buyers</h4>
                    <p className="text-sm text-muted-foreground">Trusted platform brings confident customers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Verified Badges</h4>
                    <p className="text-sm text-muted-foreground">Build credibility with official verification status</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;