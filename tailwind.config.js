/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        'bg': '#212517',        // фон футера
        'hero': '#212517',      // фон hero
        'page': '#F2F2EF',      // фон секций
        'text': '#0C2123',      // текст основной
        'text-2': '#2B616D',    // второстепенный текст
        'hero-title': '#DED3A6',   // главный заголовок в hero
        'hero-sub': '#F2F2EF',     // подзаголовки / описание
        'accent': '#759242',    // CTA кнопка
        'accent-2': '#759242',  // outline/hover
        'stroke': '#759242',    // границы
        'primary-text': '#0C2123',  // primary text for gallery
        'secondary-text': '#2B616D', // secondary text for gallery
        'primary-bg': '#FDFFFF',     // primary background
        'text-hero': '#618587',      // hero text color for about
      },
    },
  },
  plugins: [],
};
