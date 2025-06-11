import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Lock } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';
import PropertyList from '../../components/admin/PropertyList';
import Button from '../../components/ui/Button';
import { adminAuth } from '../../lib/auth';

const AdminDashboardPage = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if already authenticated
    if (adminAuth.isAuthenticated()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { user, error } = await adminAuth.signIn(password);
      
      if (error) {
        setError(error);
      } else if (user) {
        setIsAuthenticated(true);
        setPassword('');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Crown className="h-12 w-12 text-gold" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-navy">
              Crownline Admin
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter password to access admin panel
            </p>
          </div>

          <div className="card">
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input pl-10"
                    placeholder="Enter admin password"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Access Admin Panel'}
              </Button>
            </form>
          </div>

          <div className="text-center">
            <Button href="/" variant="outline">
              ← Back to Website
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show admin dashboard if authenticated
  return (
    <AdminLayout>
      <PropertyList />
    </AdminLayout>
  );
};

export default AdminDashboardPage;