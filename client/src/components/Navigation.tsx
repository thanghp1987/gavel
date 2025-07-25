import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/ex-comm', label: 'Executive Committee' },
    { path: '/members', label: 'Members' },
    { path: '/achievements', label: 'Achievements' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top contact bar */}
        <div className="border-b border-gray-100 py-2 hidden md:block">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+84 905 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@merakigavel.club</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="text-teal-600 border-teal-600 hover:bg-teal-50">
                  Member Login
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="sm" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                  Exco Login
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-gradient-to-br from-teal-500 to-purple-600 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-teal-600">Meraki Gavel Club</h1>
              <p className="text-sm text-purple-600">Inspiring Tomorrow's Leaders</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-teal-600 ${
                  isActive(item.path) ? 'text-teal-600 border-b-2 border-teal-600 pb-1' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/login">
              <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white px-6">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-300 hover:text-teal-600 ${
                    isActive(item.path) ? 'text-teal-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/login">
                <Button className="bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 text-white w-fit">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;