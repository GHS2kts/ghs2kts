import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  BarChart3, 
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BookOpen
} from "lucide-react";

interface DashboardProps {
  userRole: string;
}

export const Dashboard = ({ userRole }: DashboardProps) => {
  const stats = [
    { title: "Total Students", value: "1,247", icon: Users, trend: "+5.2%", color: "text-blue-600" },
    { title: "Active Teachers", value: "89", icon: BookOpen, trend: "+2.1%", color: "text-green-600" },
    { title: "Today's Attendance", value: "94.3%", icon: CheckCircle2, trend: "+1.8%", color: "text-emerald-600" },
    { title: "Classes Today", value: "156", icon: Calendar, trend: "0%", color: "text-purple-600" },
  ];

  const quickActions = {
    admin: [
      { title: "Manage Users", description: "Add, edit, or remove user accounts", icon: Users },
      { title: "View Analytics", description: "Attendance trends and performance metrics", icon: BarChart3 },
      { title: "Schedule Management", description: "Manage class and teacher schedules", icon: Calendar },
      { title: "System Settings", description: "Configure application settings", icon: Clock },
    ],
    teacher: [
      { title: "Mark Attendance", description: "Record student attendance for your classes", icon: CheckCircle2 },
      { title: "View Schedule", description: "Check your teaching schedule", icon: Calendar },
      { title: "Print Reports", description: "Generate attendance and summary reports", icon: BarChart3 },
      { title: "Submit Updates", description: "Update class information", icon: BookOpen },
    ],
    display: [
      { title: "Manage Slides", description: "Configure display slide rotation", icon: Calendar },
      { title: "Upload Media", description: "Add images and videos to gallery", icon: Users },
      { title: "Teacher Spotlight", description: "Feature teacher profiles", icon: BookOpen },
      { title: "Display Settings", description: "Configure screen preferences", icon: Clock },
    ]
  };

  const currentActions = quickActions[userRole as keyof typeof quickActions] || quickActions.teacher;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-4xl font-bold mb-2 text-gradient-primary">
            Welcome Back!
          </h1>
          <p className="text-xl text-muted-foreground">
            {userRole === 'admin' && "Manage your school efficiently with our comprehensive admin tools."}
            {userRole === 'teacher' && "Access your teaching dashboard and manage your classes."}
            {userRole === 'display' && "Configure displays and manage multimedia content."}
          </p>
          <Badge variant="secondary" className="mt-2 capitalize">
            {userRole} Dashboard
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="school-card hover-lift animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                      <span className="text-xs text-green-600">{stat.trend}</span>
                    </div>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="school-card animate-fade-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start space-y-2 hover-lift"
                >
                  <action.icon className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-xs text-muted-foreground">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Features Notice */}
        <Card className="school-card mt-8 animate-fade-up border-dashed border-primary/30 bg-primary/5">
          <CardContent className="p-6 text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Connect to Supabase</h3>
            <p className="text-muted-foreground mb-4">
              To unlock the full potential of this school management system, connect to Supabase 
              for authentication, database storage, and advanced features.
            </p>
            <Button className="school-accent hover-lift">
              Connect Supabase Integration
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};