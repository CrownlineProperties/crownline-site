export interface AdminUser {
  id: string;
  email: string;
  created_at: string;
}

export const adminAuth = {
  async signIn(password: string): Promise<{ user: AdminUser | null; error: string | null }> {
    try {
      // Updated password check
      if (password === 'CrownlineKing2024$') {
        const user: AdminUser = {
          id: '1',
          email: 'admin@crownlineproperties.co.uk',
          created_at: new Date().toISOString()
        };
        
        // Store in localStorage for demo
        localStorage.setItem('admin_user', JSON.stringify(user));
        return { user, error: null };
      }
      
      return { user: null, error: 'Invalid password' };
    } catch (error) {
      return { user: null, error: 'Authentication failed' };
    }
  },

  async signOut(): Promise<void> {
    localStorage.removeItem('admin_user');
  },

  getCurrentUser(): AdminUser | null {
    try {
      const stored = localStorage.getItem('admin_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  },

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }
};