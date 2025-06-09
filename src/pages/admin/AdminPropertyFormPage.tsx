import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import PropertyForm from '../../components/admin/PropertyForm';
import { adminAuth } from '../../lib/auth';

const AdminPropertyFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await adminAuth.isAuthenticated();
      setIsAuthenticated(authenticated);
      
      if (!authenticated) {
        navigate('/admin/login');
      }
      
      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-navy"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminLayout>
      <PropertyForm propertyId={id} isEdit={isEdit} />
    </AdminLayout>
  );
};

export default AdminPropertyFormPage;