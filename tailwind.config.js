/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        'bg': '#0C2123',        // фон футера
        'hero': '#2B616D',      // фон hero
        'page': '#FDFFFF',      // фон секций
        'text': '#0C2123',      // текст основной
        'text-2': '#618587',    // второстепенный текст
        'hero-title': '#B2DBD5',   // главный заголовок в hero
        'hero-sub': '#FDFFFF',     // подзаголовки / описание
        'accent': '#FA8D62',    // CTA кнопка
        'accent-2': '#2E6D6F',  // outline/hover
        'stroke': '#CFE3E1',    // границы
      },
    },
  },
  plugins: [],
};
