import { useDispatch, useSelector } from 'react-redux';
import { setGifts } from '../../redux/wishFormSlice';

export default function GiftSection() {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.wishForm.gifts);

  const updateGift = (index, field, value) => {
    const updated = [...gifts];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    dispatch(setGifts(updated));
  };

  const addGift = () => {
    dispatch(
      setGifts([
        ...gifts,
        { type: 'code', code: '', url: '', file: null, description: '' },
      ])
    );
  };

  const removeGift = (index) => {
    const updated = [...gifts];
    updated.splice(index, 1);
    dispatch(setGifts(updated));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Add Gifts</h2>

      {gifts.map((gift, index) => (
        <div
          key={index}
          className="border p-4 rounded-lg mb-4 space-y-3 bg-gray-50"
        >
          <div className="flex items-center justify-between">
            <label className="font-medium">Gift #{index + 1}</label>
            <button
              type="button"
              onClick={() => removeGift(index)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              ✕ Remove
            </button>
          </div>

          {/* Gift Type Selector */}
          <select
            value={gift.type}
            onChange={(e) => updateGift(index, 'type', e.target.value)}
            className="p-2 w-full border rounded"
          >
            <option value="code">Gift Code</option>
            <option value="link">Gift Link</option>
            <option value="image">Gift Image</option>
          </select>

          {/* Conditional Inputs */}
          {gift.type === 'code' && (
            <>
              <input
                type="text"
                placeholder="Gift Code"
                value={gift.code}
                onChange={(e) => updateGift(index, 'code', e.target.value)}
                className="p-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={gift.description}
                onChange={(e) => updateGift(index, 'description', e.target.value)}
                className="p-2 w-full border rounded"
              />
            </>
          )}

          {gift.type === 'link' && (
            <>
              <input
                type="url"
                placeholder="Gift URL"
                value={gift.url}
                onChange={(e) => updateGift(index, 'url', e.target.value)}
                className="p-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={gift.description}
                onChange={(e) => updateGift(index, 'description', e.target.value)}
                className="p-2 w-full border rounded"
              />
            </>
          )}

          {gift.type === 'image' && (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => updateGift(index, 'file', e.target.files[0])}
                className="p-2 w-full border rounded"
              />
              <input
                type="text"
                placeholder="Description"
                value={gift.description}
                onChange={(e) => updateGift(index, 'description', e.target.value)}
                className="p-2 w-full border rounded"
              />
            </>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addGift}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        + Add Gift
      </button>
    </div>
  );
}
