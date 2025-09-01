import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MotionDesignerApp from './screens/motion-designer-website/MotionDesignerApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/motion-designer-website" replace />} />
        <Route path="/motion-designer-website/*" element={<MotionDesignerApp />} />
      </Routes>
    </Router>
  );
}

export default App;