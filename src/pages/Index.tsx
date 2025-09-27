import { useState } from "react";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { SchoolInfoSection } from "@/components/home/SchoolInfoSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { LoginForm } from "@/components/auth/LoginForm";
import { Dashboard } from "@/pages/Dashboard";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<{ name: string; role: string; avatar?: string } | null>(null);

  const handleLogin = (credentials: { email: string; password: string; role: string }) => {
    // For demo purposes, simulate successful login
    setUser({
      name: credentials.role === 'admin' ? 'John Administrator' : 
            credentials.role === 'teacher' ? 'Sarah Johnson' : 'Mike Display',
      role: credentials.role,
      avatar: undefined
    });
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return (
      <div className="min-h-screen bg-background">
        <Header user={user} onLogout={handleLogout} />
        <Dashboard userRole={user.role} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onLogin={() => setShowLogin(true)} />
      
      <main>
        <HeroSection onLoginClick={() => setShowLogin(true)} />
        <FeatureGrid />
        <SchoolInfoSection />
        <AnnouncementsSection />
      </main>

      <Footer />

      {showLogin && (
        <LoginForm 
          onLogin={handleLogin} 
          onClose={() => setShowLogin(false)} 
        />
      )}
    </div>
  );
};

export default Index;
