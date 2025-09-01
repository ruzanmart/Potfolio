import React from 'react';
import { Mail, Dribbble, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ff6f61]">RM</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating compelling motion graphics and visual experiences that bring stories to life.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#ff6f61] transition-colors duration-200">
                <Mail className="h-4 w-4" />
                <a href="mailto:ruzanmart1@gmail.com" className="hover:underline">
                  ruzanmart1@gmail.com
                </a>
              </div>
              <p className="text-gray-300 text-sm">Sacramento, CA</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ff6f61] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff6f61] focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} RM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}