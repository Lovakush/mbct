const Footer = () => {
    return (
      <footer className="bg-orange-500 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            <a href="/contact" className="hover:text-orange-200">Contact Us</a>
            <a href="/about" className="hover:text-orange-200">About Us</a>
            <a href="/privacy" className="hover:text-orange-200">Privacy Policy</a>
            <a href="/feedback" className="hover:text-orange-200">Feedback</a>
          </div>
          <div className="text-center py-4 border-t border-orange-400">
            © 2024 MBCT. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;