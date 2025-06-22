import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  
  // List of paths where we don't want to show the navbar and footer
  const noLayoutPaths = [
    '/journey',
    '/policy-management',
    '/compliance-dashboard',
    '/microbiome-analysis',
    '/microbiome-results'
  ];

  // Check if current path starts with any of the noLayoutPaths
  const shouldShowLayout = !noLayoutPaths.some(path => 
    location.pathname.startsWith(path)
  );

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      {shouldShowLayout && <Navbar />}
      <main className="flex-grow w-full overflow-x-hidden">
        <Outlet />
      </main>
      {shouldShowLayout && <Footer />}
    </div>
  );
};

export default Layout;
