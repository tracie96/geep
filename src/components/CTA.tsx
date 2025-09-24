import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
      </div>
      
      <div className="container relative">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start Using GuardPay Today
          </h2>
          <p className="text-xl opacity-90">
            Join thousands of satisfied users who trust GuardPay for secure transactions. 
            No setup fees, no monthly costs - pay only when you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
            >
              Sign Up as Vendor
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Sign Up as Buyer
            </Button>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              Ready for a demo? <a href="#contact" className="underline hover:opacity-100">Contact our sales team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;