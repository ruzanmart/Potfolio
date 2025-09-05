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
    <div className="bg-page">

      {/* Hero Section */}
      <section className="relative bg-hero py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-hero-title">
              Motion Designer
              <span className="block text-hero-title">& Visual Storyteller</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed" style={{color: '#FDFFFF'}}>
              Creating compelling motion graphics and visual experiences that bring stories to life. 
              Specializing in brand animation, explainer videos, and digital storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                to="/motion-designer-website/gallery"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 inline-block text-center"
              >
                View My Work
              </Link>
              <Link
                to="/motion-designer-website/contact"
                className="border border-hero-sub text-hero-sub px-8 py-3 rounded-lg font-semibold hover:bg-hero-sub hover:text-hero transition-colors duration-200 inline-block text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{color: '#212517'}}>{stat.value}</div>
                  <div style={{color: '#212517'}}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text mb-6">
              Bringing Ideas to Life Through Motion
            </h2>
            <p className="text-text mb-6 leading-relaxed max-w-4xl mx-auto">
              With over 8 years of experience in motion design, I specialize in creating 
              visually stunning animations that captivate audiences and communicate messages effectively. 
              From concept to final delivery, I work closely with clients to ensure their vision 
              comes to life.
            </p>
            <p className="text-text mb-8 leading-relaxed max-w-4xl mx-auto">
              My expertise spans across various industries including technology, healthcare, 
              education, and entertainment. I believe that great motion design should not only 
              look beautiful but also serve a purpose in telling your story.
            </p>
            <Link
              to="/motion-designer-website/about"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200 inline-block"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
