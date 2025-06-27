import React from 'react';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-gray-800 hover:text-gray-900 transition-colors">
          <Lock className="h-5 w-5 text-gray-600" />
          <span>Login Hub</span>
        </Link>
        {/* Navigation could be added here in the future if needed */}
      </div>
    </header>
  );
};

export default Header;