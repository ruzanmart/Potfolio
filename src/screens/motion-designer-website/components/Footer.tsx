import React from 'react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">RM</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              Creating compelling motion graphics and visual experiences that bring stories to life.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-200 hover:text-accent transition-colors duration-200">
                <Mail className="h-4 w-4" />
                <a href="mailto:ruzanmart1@gmail.com" className="hover:underline">
                  ruzanmart1@gmail.com
                </a>
              </div>
              <p className="text-gray-200 text-sm">Sacramento, CA</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-text rounded"
              >
                <svg className="h-6 w-6" viewBox="200 320 600 400" fill="none" stroke="currentColor" strokeWidth="35">
                  <path d="M448.31,487.24c-2.41-0.84-2.68-4.11-0.44-5.33c13.54-7.36,23.92-16.44,31.3-27.19
			c8.41-12.38,12.62-27.87,12.62-46.41c0-17.14-2.81-31.64-8.43-43.22c-5.75-11.75-13.78-21.08-24.04-28.09
			c-10.42-7.01-22.76-12.13-37.21-15.19c-14.53-3.15-30.43-4.67-48.05-4.67H203.34c-1.61,0-2.92,1.31-2.92,2.92v362.48
			c0,1.61,1.31,2.92,2.92,2.92h175.6c16.5,0,32.62-2.07,48.13-6.2c15.69-4.12,29.71-10.46,41.9-19.1
			c12.1-8.56,21.92-19.66,29.13-33.35c7.14-13.52,10.72-29.6,10.72-48.28c0-23.04-5.48-42.7-16.66-59.12
			C482.17,504.74,467.6,493.99,448.31,487.24z M281.51,382.8c0-1.61,1.31-2.92,2.92-2.92h72.95c7.17,0,14.18,0.51,20.86,1.82
			c6.8,1.17,12.66,3.33,17.85,6.47c5.23,3.01,9.37,7.32,12.5,12.81c3.02,5.5,4.52,12.58,4.52,21.15c0,15.43-4.52,26.69-13.85,33.5
			c-9.42,6.92-21.32,10.33-35.69,10.33h-79.14c-1.61,0-2.92-1.31-2.92-2.92V382.8z M423.08,597.91c-3.26,6.23-7.76,11.12-13.18,14.7
			c-5.42,3.71-11.86,6.23-19.11,7.81c-7.14,1.6-14.74,2.31-22.74,2.31h-83.62c-1.61,0-2.92-1.31-2.92-2.92v-95.58
			c0-1.61,1.31-2.92,2.92-2.92h85.24c17.46,0,31.65,4.02,42.29,12.09c10.63,8.19,15.97,21.66,15.97,40.65
			C427.93,583.72,426.36,591.74,423.08,597.91z"/>
                  <path d="M793.65,510.37c-4.83-18.95-12.57-35.84-23.44-50.62c-10.87-14.8-24.71-26.62-41.59-35.34
			c-16.94-8.84-36.7-13.19-59.26-13.19c-20.43,0-38.89,3.63-55.62,10.85c-16.73,7.24-31.1,17.17-43.22,29.74
			c-12.09,12.51-21.28,27.41-27.93,44.69c-6.52,17.22-9.85,35.85-9.85,55.79c0,20.63,3.21,39.66,9.57,56.85
			c6.43,17.28,15.46,31.99,27.09,44.44c11.92,12.39,26.1,21.89,43.06,28.68c16.98,6.7,35.88,10.1,56.89,10.1
			c30.14,0,56.01-6.9,77.22-20.76c20.58-13.23,35.9-34.86,46.26-64.93c0.66-1.9-0.75-3.89-2.76-3.89h-58.36
			c-1.21,0-2.29,0.74-2.72,1.87c-2.87,7.59-9.13,14.9-18.94,21.77c-10.71,7.44-23.48,11.18-38.26,11.18
			c-20.54,0-36.4-5.39-47.37-16.1c-10.48-10.2-17.44-28.78-18.09-48.73c-0.05-1.66,1.27-3.03,2.93-3.03h186.71
			c1.55,0,2.84-1.21,2.93-2.76C799.97,547.3,798.23,528.45,793.65,510.37z M609.51,523.58c-1.74,0-3.12-1.51-2.91-3.24
			c0.52-4.37,1.54-9.16,3.04-14.34c1.87-6.66,5.09-12.89,9.82-18.79c4.75-5.81,10.97-10.74,18.55-14.7
			c7.76-4.02,17.44-5.98,29.14-5.98c17.99,0,32.74,5.21,41.44,14.85c8.22,9.13,14.36,21.88,16.52,38.9c0.22,1.75-1.14,3.3-2.91,3.3
			H609.51z"/>
                  <path d="M737.69,341.84H594.24c-1.61,0-2.92,1.31-2.92,2.92v30.5c0,1.61,1.31,2.92,2.92,2.92h143.45
			c1.61,0,2.92-1.31,2.92-2.92v-30.5C740.61,343.15,739.31,341.84,737.69,341.84z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-text rounded"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-text rounded"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-600">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} RM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}