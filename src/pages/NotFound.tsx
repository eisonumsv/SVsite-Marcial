
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout title="404 - Page Not Found">
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-yellow-300">404</h1>
        <p className="text-xl text-white mb-4">Oops! Page not found</p>
        <a href="/" className="text-yellow-300 hover:text-yellow-100 underline">
          Return to Home
        </a>
      </div>
    </Layout>
  );
};

export default NotFound;
