import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Users, Award, Calendar, Phone } from "lucide-react";

export const AnnouncementsSection = () => {
  const announcements = [
    {
      title: "Parent-Teacher Conference Week",
      date: "December 15-19, 2024",
      type: "Important",
      description: "Schedule your appointments through the parent portal. Conference slots available from 8:00 AM to 6:00 PM.",
      priority: "high"
    },
    {
      title: "Winter Break Schedule",
      date: "December 23 - January 8",
      type: "Schedule",
      description: "School will be closed for winter break. Classes resume on January 9, 2025.",
      priority: "medium"
    },
    {
      title: "Science Fair Registration Open",
      date: "Due: January 15, 2025",
      type: "Academic",
      description: "Students in grades 6-12 can register for the annual science fair. Projects due March 15.",
      priority: "low"
    },
    {
      title: "New Digital Library System",
      date: "Available Now",
      type: "Technology",
      description: "Access thousands of digital books and resources through our new online library portal.",
      priority: "medium"
    }
  ];

  const upcomingEvents = [
    { event: "Holiday Concert", date: "Dec 20", time: "7:00 PM", location: "Main Auditorium" },
    { event: "Basketball Championship", date: "Jan 12", time: "6:00 PM", location: "Gymnasium" },
    { event: "Art Exhibition Opening", date: "Jan 18", time: "5:30 PM", location: "Art Gallery" },
    { event: "Career Fair", date: "Feb 2", time: "10:00 AM", location: "Cafeteria" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gradient-primary">
            News & Announcements
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest school news and important information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Latest Announcements</h3>
            {announcements.map((announcement, index) => (
              <Card 
                key={index} 
                className="school-card hover-lift animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold">{announcement.title}</h4>
                        <Badge className={getPriorityColor(announcement.priority)}>
                          {announcement.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{announcement.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {announcement.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <Card className="school-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4 py-2">
                      <h4 className="font-medium">{event.event}</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="school-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gradient-primary">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start hover-lift">
                    <Calendar className="mr-2 h-4 w-4" />
                    School Calendar
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover-lift">
                    <Users className="mr-2 h-4 w-4" />
                    Parent Portal
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover-lift">
                    <Award className="mr-2 h-4 w-4" />
                    Student Achievements
                  </Button>
                  <Button variant="outline" className="w-full justify-start hover-lift">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Directory
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="school-card border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  Emergency Contact
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent school-related matters
                </p>
                <Button className="school-accent hover-lift w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};