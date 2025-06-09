import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown, Lock, Mail } from 'lucide-react';
import Button from '../../components/ui/Button';
import { adminAuth } from '../../lib/auth';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Redirect if already authenticated
    if (adminAuth.isAuthenticated()) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { user, error } = await adminAuth.signIn(formData.email, formData.password);
      
      if (error) {
        setError(error);
      } else if (user) {
        navigate('/admin');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
            Sign in to manage properties
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
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input pl-10"
                  placeholder="admin@crownline.co.uk"
                  required
                />
              </div>
            </div>

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
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input pl-10"
                  placeholder="Enter your password"
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
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-semibold mb-2">Demo Credentials:</h3>
            <p className="text-sm text-gray-600">
              Email: admin@crownline.co.uk<br />
              Password: admin123
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button href="/" variant="outline">
            ← Back to Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;