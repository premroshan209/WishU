import { useSelector } from 'react-redux';

export default function PreviewWish({ onBack, onSubmit }) {
  const { wishType, themeId, recipients, images, gifts, quotes } = useSelector(
    (state) => state.wishForm
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-pink-700">🎉 Preview Your Wish</h2>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Wish Type</h3>
        <p>{wishType}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Selected Theme</h3>
        <p>{themeId || 'No theme selected'}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Recipients</h3>
        {recipients.details.map((r, i) => (
          <div key={i} className="mb-2">
            <p>
              👤 {r.name} ({r.email}) {r.dob && `🎂 ${r.dob}`}
            </p>
          </div>
        ))}
      </div>

      {images.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Images</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((file, i) => (
              <img
                key={i}
                src={URL.createObjectURL(file)}
                alt={`img-${i}`}
                className="h-40 object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      )}

      {gifts.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Gifts</h3>
          {gifts.map((g, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold capitalize">{g.type}</p>
              {g.type === 'code' && <p>🧧 Code: {g.code}</p>}
              {g.type === 'link' && <a href={g.url} className="text-blue-500">{g.url}</a>}
              {g.type === 'image' && g.file && (
                <img
                  src={URL.createObjectURL(g.file)}
                  alt={`gift-img-${i}`}
                  className="h-32 rounded"
                />
              )}
              {g.description && <p>📝 {g.description}</p>}
            </div>
          ))}
        </div>
      )}

      {quotes.length > 0 && (
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Quotes</h3>
          {quotes.map((q, i) => (
            <p key={i}>💬 "{q}"</p>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          ← Back to Edit
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ✅ Confirm & Submit
        </button>
      </div>
    </div>
  );
}
