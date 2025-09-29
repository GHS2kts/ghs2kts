import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { SchoolInfoSection } from "@/components/home/SchoolInfoSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { Dashboard } from "@/pages/Dashboard";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { user, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      // User is not authenticated, show landing page
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (user && profile) {
    const userData = {
      name: profile.full_name,
      role: profile.role,
      avatar: undefined
    };

    return (
      <div className="min-h-screen bg-background">
        <Header user={userData} onLogout={signOut} />
        <Dashboard userRole={profile.role} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onLogin={() => navigate('/auth')} />
      
      <main>
        <HeroSection onLoginClick={() => navigate('/auth')} />
        <FeatureGrid />
        <SchoolInfoSection />
        <AnnouncementsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
