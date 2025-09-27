import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import schoolHero from "@/assets/school-hero.jpg";

interface HeroSectionProps {
  onLoginClick: () => void;
}

export const HeroSection = ({ onLoginClick }: HeroSectionProps) => {
  const stats = [
    { icon: Users, value: "500+", label: "Students" },
    { icon: BookOpen, value: "50+", label: "Teachers" },
    { icon: Award, value: "25+", label: "Years" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${schoolHero})` }}
      >
        <div className="absolute inset-0 school-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-gradient-accent">Excellence Academy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Empowering education through modern technology. Streamlined management
            for administrators, teachers, and students.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="school-accent hover-lift text-lg px-8 py-4"
              onClick={onLoginClick}
            >
              Access Portal
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-in">
          {stats.map((stat, index) => (
            <Card key={index} className="school-card hover-lift bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Motto Banner */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="school-accent px-8 py-3 rounded-full">
          <p className="font-semibold text-primary tracking-wide">
            Knowledge · Discipline · Pride
          </p>
        </div>
      </div>
    </section>
  );
};