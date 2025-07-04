import { useState } from 'react';
import WishTypeSelector from './WishTypeSelector';
import ThemePicker from './ThemePicker';
import RecipientForm from './RecipientForm';
import ImageUploader from './ImageUploader';
import GiftSection from './GiftSection';
import QuoteSection from './QuoteSection';
import PreviewWish from './PreviewWish';

export default function WishForm() {
  const [previewMode, setPreviewMode] = useState(false);

  const handlePreview = (e) => {
    e.preventDefault();
    setPreviewMode(true);
  };

  const handleSubmit = () => {
    alert('🎉 Wish submitted successfully!');
    // You can integrate API call here
  };

  if (previewMode) {
    return <PreviewWish onBack={() => setPreviewMode(false)} onSubmit={handleSubmit} />;
  }

  return (
    <form onSubmit={handlePreview} className="space-y-8">
      <WishTypeSelector />
      <ThemePicker />
      <RecipientForm />
      <ImageUploader />
      <GiftSection />
      <QuoteSection />

      <div className="text-center">
        <button
          type="submit"
          className="px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          Preview Wish 🎁
        </button>
      </div>
    </form>
  );
}
