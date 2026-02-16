import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, LayoutGrid, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <LayoutGrid className="h-8 w-8 text-brand-600" />
            <span className="text-xl font-bold text-gray-900">TaskFlow</span>
          </Link>

          {isAuthenticated && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <User className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">{user?.email}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-700 hover:text-brand-600 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
