import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="school-hero text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Excellence Academy</h3>
            <p className="text-primary-foreground/80">
              Empowering minds, shaping futures through quality education
              and innovative learning experiences.
            </p>
            <div className="flex items-center space-x-2">
              <Facebook className="h-5 w-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">1234 Education Boulevard, Knowledge City, KC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">Main: (555) 123-4567 | Admissions: (555) 123-4568</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@excellenceacademy.edu</span>
              </div>
              <div className="mt-3 text-sm">
                <p className="font-medium">Office Hours:</p>
                <p className="text-primary-foreground/80">Monday - Friday: 7:30 AM - 4:30 PM</p>
                <p className="text-primary-foreground/80">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                About Us
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Admissions
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Academic Programs
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Faculty & Staff
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Student Life
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Parent Resources
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                Alumni
              </Button>
              <Button variant="ghost" size="sm" className="justify-start text-white hover:bg-white/10">
                News & Events
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Excellence Academy. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 animate-fade-up">
            <p className="text-sm text-gradient-accent font-medium">
              Crafted by Khurram Irshad Khan · SST(IT)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};