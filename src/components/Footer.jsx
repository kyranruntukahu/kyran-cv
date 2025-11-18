import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Section */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-sm">
              © {currentYear} Kyran Natalie Runtukahu. All rights reserved.
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 text-sm">
            <span>Made with</span>
            <Heart size={16} className="fill-current animate-pulse" />
            <span>using React & TailwindCSS</span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
