import { Shield, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">GuardPay</span>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
              Secure escrow payments for confident transactions. Protecting buyers and sellers worldwide with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Facebook className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="h-5 w-5 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="opacity-80 hover:opacity-100 transition-opacity">How It Works</a></li>
              <li><a href="#features" className="opacity-80 hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#pricing" className="opacity-80 hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">API Documentation</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Integrations</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#faqs" className="opacity-80 hover:opacity-100 transition-opacity">FAQs</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact Support</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Status Page</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Community</a></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Press Kit</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Partners</a></li>
              <li>
                <div className="pt-2">
                  <p className="text-xs opacity-70 mb-1">Contact Sales:</p>
                  <p className="text-sm">sales@guardpay.com</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm opacity-80">
            © 2024 GuardPay. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;