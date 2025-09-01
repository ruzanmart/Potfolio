import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Award, Users, Zap } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Play, label: 'Projects Completed', value: '150+' },
    { icon: Award, label: 'Animation Tools Mastered', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '80+' },
    { icon: Zap, label: 'Years Experience', value: '8' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Motion Designer
              <span className="block text-[#ff6f61]">& Visual Storyteller</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Creating compelling motion graphics and visual experiences that bring stories to life. 
              Specializing in brand animation, explainer videos, and digital storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                to="/motion-designer-website/gallery"
                className="bg-[#ff6f61] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e55a4d] transition-colors duration-200 inline-block text-center"
              >
                View My Work
              </Link>
              <Link
                to="/motion-designer-website/contact"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 inline-block text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-[#ff6f61] rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bringing Ideas to Life Through Motion
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 8 years of experience in motion design, I specialize in creating 
                visually stunning animations that captivate audiences and communicate messages effectively. 
                From concept to final delivery, I work closely with clients to ensure their vision 
                comes to life.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My expertise spans across various industries including technology, healthcare, 
                education, and entertainment. I believe that great motion design should not only 
                look beautiful but also serve a purpose in telling your story.
              </p>
              <Link
                to="/motion-designer-website/about"
                className="bg-[#ff6f61] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e55a4d] transition-colors duration-200 inline-block"
              >
                Learn More About Me
              </Link>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start?</h3>
              <p className="text-gray-600">Let's discuss your next project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}