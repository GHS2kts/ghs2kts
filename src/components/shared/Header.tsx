import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Settings, LogOut } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

interface HeaderProps {
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header = ({ user, onLogin, onLogout }: HeaderProps) => {
  return (
    <header className="school-card border-b bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={schoolLogo} alt="School Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-gradient-primary">
                Excellence Academy
              </h1>
              <p className="text-sm text-muted-foreground">
                Knowledge · Discipline · Pride
              </p>
            </div>
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="hover-lift">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="hover-lift">
                  <Settings className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onLogout}
                  className="hover-lift"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button onClick={onLogin} className="school-accent hover-lift">
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};