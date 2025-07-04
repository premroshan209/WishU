import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WishDisplay from './WishDisplay';
import { BASE_URL } from '../../config/api';

export default function WishDisplayWrapper() {
  const { id } = useParams();
  const [wishData, setWishData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWish = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/wishes/${id}`);
        setWishData(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load the wish. It may have expired or been deleted.');
      } finally {
        setLoading(false);
      }
    };

    fetchWish();
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-500 py-20 text-xl">⏳ Loading your wish...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-20 text-xl">{error}</div>;
  }

  return <WishDisplay wishData={wishData} />;
}
