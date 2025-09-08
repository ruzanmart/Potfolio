import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MotionDesignerApp from './screens/motion-designer-website/MotionDesignerApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* всё приложение по корню домена */}
        <Route path="/*" element={<MotionDesignerApp />} />
      </Routes>
    </Router>
  );
}

export default App;
