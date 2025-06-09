import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout';
import PropertyForm from '../../components/admin/PropertyForm';
import { adminAuth } from '../../lib/auth';

const AdminPropertyFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

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
      <PropertyForm propertyId={id} isEdit={isEdit} />
    </AdminLayout>
  );
};

export default AdminPropertyFormPage;