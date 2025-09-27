import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserCheck, 
  Calendar, 
  BarChart3, 
  Users, 
  BookOpen, 
  Camera,
  Video,
  Settings,
  Monitor 
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Attendance Management",
    description: "Track student and teacher attendance with smart analytics and automated reporting.",
    color: "text-blue-600"
  },
  {
    icon: Calendar,
    title: "Timetable Management", 
    description: "Dynamic scheduling with bi-directional sync between class and teacher views.",
    color: "text-green-600"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights with attendance trends, heatmaps, and performance metrics.",
    color: "text-purple-600"
  },
  {
    icon: Users,
    title: "User Management",
    description: "Role-based access control for administrators, teachers, and display managers.",
    color: "text-orange-600"
  },
  {
    icon: Monitor,
    title: "Display System",
    description: "Full-screen rotating displays with ambient themes and teacher spotlights.",
    color: "text-cyan-600"
  },
  {
    icon: Camera,
    title: "Gallery Manager",
    description: "Upload and manage school images with captions and offline caching.",
    color: "text-pink-600"
  },
  {
    icon: Video,
    title: "Video Manager",
    description: "Organize school video content with titles and smart categorization.",
    color: "text-indigo-600"
  },
  {
    icon: BookOpen,
    title: "Teacher Portal",
    description: "Streamlined interface for attendance submission and summary reports.",
    color: "text-emerald-600"
  },
  {
    icon: Settings,
    title: "Admin Panel",
    description: "Complete control over sessions, schedules, media, and system configuration.",
    color: "text-red-600"
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
            Comprehensive School Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to run a modern educational institution efficiently,
            from attendance tracking to multimedia management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="school-card hover-lift h-full animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button variant="outline" size="sm" className="hover-lift">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};