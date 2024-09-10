import './index.css';
import { useState, useEffect } from 'react';
import { createClient, Session } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

// Define the type for the Supabase client
const supabaseUrl = 'https://smprgklslesnynjvgtcu.supabase.co';
const supabaseAnonKey = '<your-anon-key>';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // Check if there's an active session on component mount
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();

    // Set up a subscription to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    // Clean up subscription on component unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Render the Auth UI if there is no active session
  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  }

  // Render logged-in state
  return <div>Logged in!</div>;
}
