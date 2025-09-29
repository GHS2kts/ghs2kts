import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { SchoolInfoSection } from "@/components/home/SchoolInfoSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { Dashboard } from "@/pages/Dashboard";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<{ full_name: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Defer profile fetch with setTimeout to prevent callback issues
          setTimeout(async () => {
            try {
              const { data: profileData } = await supabase
                .from('profiles')
                .select('full_name, role')
                .eq('user_id', session.user.id)
                .single();
              
              setProfile(profileData);
            } catch (error) {
              console.error('Error fetching profile:', error);
            }
          }, 0);
        } else {
          setProfile(null);
        }
        
        setLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (user && profile) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          user={{ 
            name: profile.full_name, 
            role: profile.role, 
            avatar: undefined 
          }} 
          onLogout={handleLogout} 
        />
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
