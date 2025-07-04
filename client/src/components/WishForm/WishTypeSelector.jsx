import { useSelector, useDispatch } from 'react-redux';
import { setWishType } from '../../redux/wishFormSlice';

const wishTypes = ['Birthday', 'Anniversary', 'Promotion', 'New Year', 'Other'];

export default function WishTypeSelector() {
  const dispatch = useDispatch();
  const selectedWishType = useSelector((state) => state.wishForm.wishType);

  const handleChange = (e) => {
    dispatch(setWishType(e.target.value));
  };

  return (
    <div className="mb-6">
      <label className="block mb-2 text-lg font-semibold text-gray-700">
        Select Wish Type
      </label>
      <select
        value={selectedWishType}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <option value="">-- Select Type --</option>
        {wishTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
