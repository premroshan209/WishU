import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGift } from 'react-icons/fi';
import ShareWish from './ShareWish';

export default function WishDisplay({ wishData }) {
  const [opened, setOpened] = useState(false);
  const {
    wishType,
    recipients,
    gifts,
    quotes,
    images,
    _id
  } = wishData;

  const recipientName = recipients?.[0]?.name || 'Dear Friend';
  const shareLink = `${window.location.origin}/wish/${_id}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-6 text-center">
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {wishType || 'A Special Wish'} 🎉
      </motion.h1>

      <motion.h2
        className="text-2xl text-gray-700 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        To: {recipientName}
      </motion.h2>

      {!opened ? (
        <motion.div
          className="mx-auto w-40 h-40 bg-pink-500 rounded-xl flex items-center justify-center text-white text-5xl shadow-lg cursor-pointer hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpened(true)}
        >
          <FiGift />
        </motion.div>
      ) : (
        <motion.div
          className="mt-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-pink-700 mb-4">🎁 Your Gift</h3>

          {gifts.map((gift, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-md mx-auto">
              <p className="font-bold capitalize">🎈 {gift.type}</p>
              {gift.type === 'code' && <p className="text-green-600">{gift.code}</p>}
              {gift.type === 'link' && (
                <a href={gift.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{gift.url}</a>
              )}
              {gift.type === 'image' && gift.imageUrl && (
                <img src={gift.imageUrl} alt="Gift" className="rounded-lg mt-2" />
              )}
              {gift.description && <p className="text-gray-600 italic mt-1">{gift.description}</p>}
            </div>
          ))}

          {quotes.length > 0 && (
            <motion.div
              className="mt-8 space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3
                  }
                }
              }}
            >
              {quotes.map((q, i) => (
                <motion.p
                  key={i}
                  className="text-lg text-gray-700 italic"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  "{q}"
                </motion.p>
              ))}
            </motion.div>
          )}
        </motion.div>
      )}

      {images.length > 0 && (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`wish-${i}`}
              className="rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            />
          ))}
        </div>
      )}

      <ShareWish shareLink={shareLink} />
    </div>
  );
}
