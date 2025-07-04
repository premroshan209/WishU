// File: src/components/WishForm/WishFormPage.jsx

import WishForm from './WishForm';
import { motion } from 'framer-motion';

const motivationalQuotes = [
  "A simple wish can brighten someone’s entire day.",
  "Make someone smile with a personalized surprise!",
  "Celebrate moments, create memories, send love.",
  "Wishes are the sparks of happiness – spread them!",
];

export default function WishFormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side: Logo and Quotes */}
        <motion.div
          className="text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold text-pink-600">
            Wish<span className="text-yellow-500">U</span>
          </h1>
          <img
            src="/logo.png"
            alt="WishU Logo"
            className="w-32 h-32 mx-auto md:mx-0"
          />
          <div className="space-y-2">
            {motivationalQuotes.map((q, i) => (
              <p key={i} className="text-lg text-gray-700 italic">“{q}”</p>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">
            🎁 Create & Send Your Wish
          </h2>
          <WishForm />
        </motion.div>
      </div>
    </div>
  );
}
