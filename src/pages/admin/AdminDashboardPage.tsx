import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import PropertyList from '../../components/admin/PropertyList';
import { adminAuth } from '../../lib/auth';

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!adminAuth.isAuthenticated()) {
      navigate('/admin/login');
    }
  }, [navigate]);

  if (!adminAuth.isAuthenticated()) {
    return null;
  }

  return (
    <AdminLayout>
      <PropertyList />
    </AdminLayout>
  );
};

export default AdminDashboardPage;