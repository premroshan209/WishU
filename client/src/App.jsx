import { useEffect } from "react";
import axios from "axios";
import WishForm from './components/WishForm/WishForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-6">
        🎁 Create & Send Your Wish
      </h1>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <WishForm />
      </div>
    </div>
  );
}
