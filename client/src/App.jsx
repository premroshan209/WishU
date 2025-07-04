// File: src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WishForm from './components/WishForm/WishForm';
import WishDisplayWrapper from './components/WishDisplay/WishDisplayWrapper';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page → Wish Form only */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
              <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
                🎁 Create & Send Your Wish
              </h1>
              <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
                <WishForm />
              </div>
            </div>
          }
        />

        {/* Display Page → Animated Wish View */}
        <Route path="/wish/:id" element={<WishDisplayWrapper />} />
      </Routes>
    </Router>
  );
}