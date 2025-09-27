import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, School } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string; role: string }) => void;
  onClose: () => void;
}

export const LoginForm = ({ onLogin, onClose }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSupabaseMessage, setShowSupabaseMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !role) {
      setShowSupabaseMessage(true);
      return;
    }

    setIsLoading(true);
    setShowSupabaseMessage(true);
    
    // Simulate login attempt
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md school-card animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <img src={schoolLogo} alt="School Logo" className="h-16 w-16" />
          </div>
          <CardTitle className="text-2xl text-gradient-primary">
            Welcome Back
          </CardTitle>
          <p className="text-muted-foreground">
            Sign in to access your school portal
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {showSupabaseMessage && (
            <Alert className="border-primary/20 bg-primary/5">
              <School className="h-4 w-4" />
              <AlertDescription className="text-sm">
                To enable authentication, please connect this project to Supabase using the integration button in the top toolbar.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@school.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="transition-all duration-200 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="transition-all duration-200 focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger className="transition-all duration-200">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Administrator</SelectItem>
                  <SelectItem value="teacher">Teacher</SelectItem>
                  <SelectItem value="display">Display Manager</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 school-accent hover-lift"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            <p>Forgot your password? Contact the administrator</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};