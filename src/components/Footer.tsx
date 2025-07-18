
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-600 to-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤰</span>
              </div>
              <span className="text-2xl font-bold">MaternAI</span>
            </div>
            <p className="text-pink-100 mb-4 leading-relaxed">
              Advanced AI-powered pregnancy risk prediction system designed to support expectant mothers 
              and healthcare providers with accurate, reliable risk assessments.
            </p>
            <div className="flex items-center gap-2 text-pink-200">
              <Heart className="h-4 w-4" />
              <span className="text-sm">Made with care for mothers worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-pink-200 hover:text-white transition-colors">
                  About MaternAI
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-200 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-pink-200">
                <Mail className="h-4 w-4" />
                <span className="text-sm">support@maternai.com</span>
              </div>
              <div className="flex items-center gap-2 text-pink-200">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-pink-200">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Healthcare Innovation Center</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400/30 mt-8 pt-8 text-center">
          <p className="text-pink-200 text-sm">
            © 2024 MaternAI. All rights reserved. | 
            <span className="font-semibold"> For informational purposes only - Always consult healthcare professionals.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
