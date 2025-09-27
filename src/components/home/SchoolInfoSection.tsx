import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Users,
  Award,
  BookOpen,
  GraduationCap
} from "lucide-react";

export const SchoolInfoSection = () => {
  const achievements = [
    { title: "Excellence in Education Award", year: "2023", icon: Award },
    { title: "Top STEM School Recognition", year: "2022", icon: GraduationCap },
    { title: "Community Service Award", year: "2023", icon: Users },
    { title: "Academic Excellence", year: "2021-2023", icon: BookOpen }
  ];

  const quickInfo = [
    { icon: Clock, label: "School Hours", value: "8:00 AM - 3:30 PM" },
    { icon: Calendar, label: "Academic Year", value: "September - June" },
    { icon: Users, label: "Student-Teacher Ratio", value: "15:1" },
    { icon: MapPin, label: "Campus Size", value: "25 Acres" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-6 text-gradient-primary">
            About Excellence Academy
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Founded in 1998, Excellence Academy has been a cornerstone of educational
              excellence in our community for over 25 years. We are committed to fostering
              an environment where students can thrive academically, socially, and personally.
            </p>
            <p>
              Our state-of-the-art facility spans 25 acres and houses modern classrooms,
              science laboratories, a comprehensive library, sports facilities, and
              technology centers designed to support 21st-century learning.
            </p>
          </div>
        </div>

        {/* Quick Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickInfo.map((info, index) => (
            <Card key={index} className="school-card hover-lift text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <info.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold mb-2">{info.label}</h3>
                <p className="text-muted-foreground">{info.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="school-card hover-lift animate-fade-up">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gradient-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                To provide a comprehensive, innovative educational experience that empowers
                students to become critical thinkers, responsible citizens, and lifelong learners
                who contribute positively to our global community.
              </p>
              <Badge variant="secondary" className="school-accent">
                Knowledge · Discipline · Pride
              </Badge>
            </CardContent>
          </Card>

          <Card className="school-card hover-lift animate-fade-up">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gradient-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                To be recognized as a leading educational institution that nurtures excellence,
                innovation, and character development, preparing students for success in an
                ever-changing world while maintaining our core values.
              </p>
              <Badge variant="outline">Inspiring Future Leaders</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="school-card animate-fade-up">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-gradient-primary mb-4">
              Recent Achievements
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Recognition of our commitment to educational excellence
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="text-center space-y-3 p-4 rounded-lg hover:bg-muted/50 transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <achievement.icon className="h-10 w-10 mx-auto text-accent" />
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <Badge variant="outline">{achievement.year}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about enrollment, programs, or to schedule a campus tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="school-accent hover-lift">
              <Phone className="mr-2 h-4 w-4" />
              Call Us: (555) 123-4567
            </Button>
            <Button variant="outline" className="hover-lift">
              <Mail className="mr-2 h-4 w-4" />
              Email: admissions@excellenceacademy.edu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};