import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Crown, LogOut, Home, Building, Plus } from 'lucide-react';
import { adminAuth } from '../../lib/auth';
import Button from '../ui/Button';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await adminAuth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-navy text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link to="/admin" className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-gold" />
                <span className="text-xl font-poppins font-semibold">Crownline Admin</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/admin" 
                className="flex items-center space-x-2 hover:text-gold transition duration-300"
              >
                <Building size={18} />
                <span>Properties</span>
              </Link>
              <Link 
                to="/admin/properties/new" 
                className="flex items-center space-x-2 hover:text-gold transition duration-300"
              >
                <Plus size={18} />
                <span>Add Property</span>
              </Link>
              <Link 
                to="/" 
                className="flex items-center space-x-2 hover:text-gold transition duration-300"
              >
                <Home size={18} />
                <span>View Site</span>
              </Link>
            </nav>

            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              <LogOut size={16} className="mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;