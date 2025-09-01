import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Palette } from 'lucide-react';

const MainMenu: React.FC = () => {
  const demos = [
    {
      id: 'motion-designer-website',
      title: 'Motion Designer Website',
      description: 'Профессиональный сайт моушн-дизайнера с хедером, футером и навигацией',
      icon: Palette,
      path: '/motion-designer-website',
      color: 'from-purple-500 to-pink-500',
    },
    // Здесь будут добавляться новые демо
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Demo Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Коллекция интерактивных демо и прототипов. Выберите проект для просмотра.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            return (
              <Link
                key={demo.id}
                to={demo.path}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${demo.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className={`p-4 bg-gradient-to-br ${demo.color} rounded-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {demo.title}
                  </h3>
                  
                  <p className="text-gray-300 text-center leading-relaxed">
                    {demo.description}
                  </p>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                      Открыть демо →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">
            Новые демо добавляются регулярно
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;