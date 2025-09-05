import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      name: 'After Effects',
      icon: '🎬',
      description: 'Motion Graphics & Animation'
    },
    {
      name: 'Cinema 4D',
      icon: '🎯',
      description: '3D Modeling & Rendering'
    },
    {
      name: 'Photoshop',
      icon: '🎨',
      description: 'Digital Art & Compositing'
    },
    {
      name: 'Premiere Pro',
      icon: '🎞️',
      description: 'Video Editing & Post'
    },
    {
      name: 'Illustrator',
      icon: '✏️',
      description: 'Vector Graphics & Design'
    }
  ];

  const highlights = [
    {
      id: 1,
      title: 'Animation for Sales and Marketing Strategy Company',
      category: 'Branding',
      image: '/media/branding/Armenita.webp',
      description: 'Dynamic brand animation showcasing strategic marketing solutions and business growth methodologies'
    },
    {
      id: 2,
      title: 'Reena Foundation Impact Story',
      category: 'Explainer Video',
      image: '/media/gallery-explainer-video/ReenaFoundation.webp',
      description: 'Compelling explainer video highlighting the Reena Foundation\'s mission and impact in supporting individuals with developmental disabilities.'
    },
    {
      id: 3,
      title: 'Elaupro App Animation',
      category: 'App Animation',
      image: '/media/gallery-app-animation/ElauproApp.webp',
      description: 'Elaupro App animation demonstrates how easy and effective it is to use the application. Smooth transitions highlight its quality and main advantage — simplicity in use.'
    }
  ];


  return (
    <div className="bg-primary-bg min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Link
              to="/motion-designer-website"
              className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200 absolute top-8 left-8"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Passionate motion designer creating compelling visual stories
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary-text">Hi, I'm Ruzanna Martirosyan</h1>
          <p className="mt-4 text-secondary-text">
            Hi, I'm Ruzanna Martirosyan. With over 7 years of experience in motion design, I specialize in creating animations that don't just look beautiful, but actually solve business problems — from grabbing attention in social media to simplifying complex product ideas in explainer videos. Motion design helps brands tell stories faster, build trust, and guide users through products with clarity. My strength is in combining a clean, modern style with technical precision, so every animation feels both creative and functional. Whether it's a logo reveal, UI motion, or a full explainer, I make sure the final result works for your goals, not just for aesthetics.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Logo Animation","Explainer Videos","UI Motion","Social Content","Lottie"].map(x => (
              <span key={x} className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-secondary-text">{x}</span>
            ))}
          </div>
        </section>

        {/* Step 2: Skills Grid */}
        <section className="mb-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-text mb-4">Tools & Skills</h2>
            <p className="text-xl text-secondary-text">
              Professional software I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-text mb-2">{skill.name}</h3>
                <p className="text-sm text-secondary-text">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step 3: Selected Work Highlights */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-text mb-4">Selected Work Highlights</h2>
            <p className="text-xl text-secondary-text">
              A few projects I'm particularly proud of
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <Link
                key={highlight.id}
                to="/motion-designer-website/gallery"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={highlight.image}
                    alt={`${highlight.title} - ${highlight.category} project showcase`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-2 bg-white rounded-full">
                      <ExternalLink className="h-4 w-4 text-primary-text" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">{highlight.category}</div>
                  <h3 className="text-xl font-semibold text-primary-text mb-2 group-hover:text-accent transition-colors duration-200">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/motion-designer-website/gallery"
              className="inline-flex items-center text-accent font-semibold hover:text-accent/90 transition-colors duration-200"
            >
              View All Work
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Step 4: CTA Section */}
        <section className="bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing that tells your story and engages your audience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/motion-designer-website/contact"
              className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Start a Project
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link
              to="/motion-designer-website/gallery"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors duration-200"
            >
              View Portfolio
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;