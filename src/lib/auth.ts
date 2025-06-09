import { supabase } from './supabase';

export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export const adminAuth = {
  async signIn(email: string, password: string): Promise<{ user: AdminUser | null; error: string | null }> {
    try {
      // For demo purposes, we'll use a simple check and then sign in with Supabase
      if (email === 'admin@crownline.co.uk' && password === 'admin123') {
        // Sign in with Supabase using the admin email
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: 'admin123' // In production, this would be a proper hashed password
        });

        if (error) {
          // If the user doesn't exist in Supabase auth, create them
          if (error.message.includes('Invalid login credentials')) {
            const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
              email: email,
              password: 'admin123'
            });

            if (signUpError) {
              return { user: null, error: signUpError.message };
            }

            // After signup, sign in again
            const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
              email: email,
              password: 'admin123'
            });

            if (signInError) {
              return { user: null, error: signInError.message };
            }

            const user: AdminUser = {
              id: signInData.user?.id || '1',
              email: email,
              created_at: new Date().toISOString()
            };

            return { user, error: null };
          }
          return { user: null, error: error.message };
        }

        const user: AdminUser = {
          id: data.user?.id || '1',
          email: email,
          created_at: new Date().toISOString()
        };

        return { user, error: null };
      }
      
      return { user: null, error: 'Invalid credentials' };
    } catch (error) {
      return { user: null, error: 'Authentication failed' };
    }
  },

  async signOut(): Promise<void> {
    await supabase.auth.signOut();
  },

  async getCurrentUser(): Promise<AdminUser | null> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user && user.email === 'admin@crownline.co.uk') {
        return {
          id: user.id,
          email: user.email,
          created_at: user.created_at || new Date().toISOString()
        };
      }
      
      return null;
    } catch {
      return null;
    }
  },

  async isAuthenticated(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return user !== null;
  }
};