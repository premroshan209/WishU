// File: src/components/WishDisplay/ShareWish.jsx

import { useState } from 'react';
import { FiShare2, FiCopy } from 'react-icons/fi';

export default function ShareWish({ shareLink }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-3">
      <h3 className="text-lg font-semibold text-pink-700">🔗 Share this wish</h3>
      <div className="flex items-center gap-2 bg-white p-2 px-4 rounded shadow">
        <input
          type="text"
          value={shareLink}
          readOnly
          className="w-64 px-2 py-1 border-none outline-none text-gray-700"
        />
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-pink-600 hover:text-pink-800"
        >
          <FiCopy />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
