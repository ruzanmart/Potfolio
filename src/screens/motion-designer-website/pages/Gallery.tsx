import React from 'react';
import { useState } from 'react';
import { Play, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import galleryData from '../../../data/galleryItems.json';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Transform JSON data to match expected format
  const projects = galleryData.galleryItems.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.shortDescription,
    image: item.thumbnailUrl,
    video: '#'
  }));

  // Get unique categories from data
  const uniqueCategories = [...new Set(galleryData.galleryItems.map(item => item.category))];
  const categories = ['All', ...uniqueCategories.map(cat => 
    cat === 'Logo' ? 'Logo Animation' : 
    cat === 'Explainer' ? 'Explainer Video' : 
    cat === 'App Animation' ? 'App Animation' :
    cat === 'Branding' ? 'Branding' :
    cat
  )];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => {
        // Map display categories back to data categories
        const dataCategory = selectedCategory === 'Logo Animation' ? 'Logo' :
                            selectedCategory === 'Explainer Video' ? 'Explainer' :
                            selectedCategory;
        return project.category === dataCategory;
      });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="bg-primary-bg min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Link
              to="/motion-designer-website"
              className="inline-flex items-center text-secondary-text hover:text-accent transition-colors duration-200 absolute top-8 left-8"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-primary-text mb-4">My Work</h1>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            A collection of motion design projects showcasing creativity, technical skill, and storytelling
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                selectedCategory === category
                  ? 'bg-accent text-white border-accent font-semibold'
                  : 'border-secondary-text text-primary-text hover:border-accent hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onClick={() => {
                    // Check if this is the first branding item (Fintech Startup Branding)
                    if (project.id === 'ui-1') {
                      window.open('https://vimeo.com/1007709496', '_blank');
                    } else if (project.id === 'ui-2') {
                      window.open('https://vimeo.com/903014977', '_blank');
                    } else if (project.id === 'ui-3') {
                      window.open('https://vimeo.com/1111788889', '_blank');
                    } else if (project.id === 'ui-4') {
                      window.open('https://vimeo.com/1111792513', '_blank');
                    } else if (project.id === 'branding-2') {
                      window.open('https://vimeo.com/926576923', '_blank');
                    } else if (project.id === 'branding-3') {
                      window.open('https://vimeo.com/892904559', '_blank');
                    } else if (project.id === 'branding-4') {
                      window.open('https://vimeo.com/1111485157', '_blank');
                    } else if (project.id === 'branding-5') {
                      window.open('https://vimeo.com/1085869676', '_blank');
                    } else if (project.id === 'branding-6') {
                      window.open('https://vimeo.com/553688315', '_blank');
                    } else if (project.id === 'branding-1') {
                      window.open('https://vimeo.com/861979012', '_blank');
                    } else if (project.id === 'logo-8') {
                      window.open('https://vimeo.com/809499647', '_blank');
                    } else if (project.id === 'logo-7') {
                      window.open('https://vimeo.com/879289494', '_blank');
                    } else if (project.id === 'logo-6') {
                      window.open('https://vimeo.com/767171153', '_blank');
                    } else if (project.id === 'logo-5') {
                      window.open('https://vimeo.com/737236317', '_blank');
                    } else if (project.id === 'explainer-2') {
                      window.open('https://vimeo.com/1085871809', '_blank');
                    } else if (project.id === 'explainer-4') {
                      window.open('https://vimeo.com/675932209', '_blank');
                    } else if (project.id === 'explainer-3') {
                      window.open('https://www.youtube.com/watch?v=Hc-v0h-at2w&t=128s', '_blank');
                    } else {
                      openLightbox(index);
                    }
                  }}
                  style={{ cursor: (project.id === 'ui-1' || project.id === 'ui-2' || project.id === 'ui-3' || project.id === 'ui-4' || project.id === 'branding-2' || project.id === 'branding-3' || project.id === 'branding-4' || project.id === 'branding-5' || project.id === 'branding-6' || project.id === 'branding-1' || project.id === 'logo-8' || project.id === 'logo-7' || project.id === 'logo-6' || project.id === 'logo-5' || project.id === 'explainer-2' || project.id === 'explainer-4') ? 'pointer' : 'pointer' }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button 
                      onClick={() => {
                        // Check if this is the first branding item (Fintech Startup Branding)
                        if (project.id === 'ui-1') {
                          window.open('https://vimeo.com/1007709496', '_blank');
                        } else if (project.id === 'ui-2') {
                          window.open('https://vimeo.com/903014977', '_blank');
                        } else if (project.id === 'ui-3') {
                          window.open('https://vimeo.com/1111788889', '_blank');
                        } else if (project.id === 'ui-4') {
                          window.open('https://vimeo.com/1111792513', '_blank');
                        } else if (project.id === 'branding-2') {
                          window.open('https://vimeo.com/926576923', '_blank');
                        } else if (project.id === 'branding-3') {
                          window.open('https://vimeo.com/892904559', '_blank');
                        } else if (project.id === 'branding-4') {
                          window.open('https://vimeo.com/1111485157', '_blank');
                        } else if (project.id === 'branding-5') {
                          window.open('https://vimeo.com/1085869676', '_blank');
                        } else if (project.id === 'branding-6') {
                          window.open('https://vimeo.com/553688315', '_blank');
                        } else if (project.id === 'branding-1') {
                          window.open('https://vimeo.com/861979012', '_blank');
                        } else if (project.id === 'logo-8') {
                          window.open('https://vimeo.com/809499647', '_blank');
                        } else if (project.id === 'logo-7') {
                          window.open('https://vimeo.com/879289494', '_blank');
                        } else if (project.id === 'logo-6') {
                          window.open('https://vimeo.com/767171153', '_blank');
                        } else if (project.id === 'logo-5') {
                          window.open('https://vimeo.com/737236317', '_blank');
                        } else if (project.id === 'explainer-2') {
                          window.open('https://vimeo.com/1085871809', '_blank');
                        } else if (project.id === 'explainer-4') {
                          window.open('https://vimeo.com/675932209', '_blank');
                        } else if (project.id === 'explainer-3') {
                          window.open('https://www.youtube.com/watch?v=Hc-v0h-at2w&t=128s', '_blank');
                        } else {
                          openLightbox(index);
                        }
                      }}
                      className="p-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50"
                      aria-label={`Watch ${project.title} video`}
                    >
                      <Play className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => {
                        if (project.id === 'ui-1') {
                          window.open('https://vimeo.com/1007709496', '_blank');
                        } else if (project.id === 'ui-2') {
                          window.open('https://vimeo.com/903014977', '_blank');
                        } else if (project.id === 'ui-3') {
                          window.open('https://vimeo.com/1111788889', '_blank');
                        } else if (project.id === 'ui-4') {
                          window.open('https://vimeo.com/1111792513', '_blank');
                        } else if (project.id === 'branding-2') {
                          window.open('https://vimeo.com/926576923', '_blank');
                        } else if (project.id === 'branding-3') {
                          window.open('https://vimeo.com/892904559', '_blank');
                        } else if (project.id === 'branding-4') {
                          window.open('https://vimeo.com/1111485157', '_blank');
                        } else if (project.id === 'branding-5') {
                          window.open('https://vimeo.com/1085869676', '_blank');
                        } else if (project.id === 'branding-6') {
                          window.open('https://vimeo.com/553688315', '_blank');
                        } else if (project.id === 'branding-1') {
                          window.open('https://vimeo.com/861979012', '_blank');
                        } else if (project.id === 'logo-8') {
                          window.open('https://vimeo.com/809499647', '_blank');
                        } else if (project.id === 'logo-7') {
                          window.open('https://vimeo.com/879289494', '_blank');
                        } else if (project.id === 'logo-6') {
                          window.open('https://vimeo.com/767171153', '_blank');
                        } else if (project.id === 'logo-5') {
                          window.open('https://vimeo.com/737236317', '_blank');
                        } else if (project.id === 'explainer-2') {
                          window.open('https://vimeo.com/1085871809', '_blank');
                        } else if (project.id === 'explainer-4') {
                          window.open('https://vimeo.com/675932209', '_blank');
                        } else if (project.id === 'explainer-3') {
                          window.open('https://www.youtube.com/watch?v=Hc-v0h-at2w&t=128s', '_blank');
                        } else {
                          openLightbox(index);
                        }
                      }}
                      className="p-3 bg-white text-primary-text rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
                      aria-label={`View ${project.title} details`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-accent font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold text-primary-text mb-2">{project.title}</h3>
                <p className="text-secondary-text text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-primary-text mb-4">Like What You See?</h2>
          <p className="text-secondary-text mb-8">Let's create something amazing together</p>
          <Link
            to="/motion-designer-website/contact"
            className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-200"
          >
            Start a Project
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentIndex={currentImageIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
        items={filteredProjects}
      />
    </div>
  );
}