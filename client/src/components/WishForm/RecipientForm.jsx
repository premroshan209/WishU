// src/components/WishForm/RecipientForm.jsx
import { useSelector, useDispatch } from 'react-redux';
import { setRecipientType, setRecipientDetails } from '../../redux/wishFormSlice';

export default function RecipientForm() {
  const dispatch = useDispatch();
  const { type, details } = useSelector((state) => state.wishForm.recipients);

  const handleTypeChange = (e) => {
    dispatch(setRecipientType(e.target.value));
    if (e.target.value === 'individual') {
      dispatch(setRecipientDetails([{ name: '', email: '', dob: '' }]));
    }
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...details];
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: value,
    };
    dispatch(setRecipientDetails(updatedDetails));
  };

  const addRecipient = () => {
    dispatch(setRecipientDetails([...details, { name: '', email: '', dob: '' }]));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Recipient Details</h2>

      <div className="flex items-center gap-4 mb-4">
        <label>
          <input
            type="radio"
            value="individual"
            checked={type === 'individual'}
            onChange={handleTypeChange}
            className="mr-2"
          />
          Individual
        </label>
        <label>
          <input
            type="radio"
            value="group"
            checked={type === 'group'}
            onChange={handleTypeChange}
            className="mr-2"
          />
          Group
        </label>
      </div>

      {details.map((recipient, index) => (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Name"
            value={recipient.name}
            onChange={(e) => handleDetailChange(index, 'name', e.target.value)}
          />
          <input
            type="email"
            className="p-2 border border-gray-300 rounded"
            placeholder="Email"
            value={recipient.email}
            onChange={(e) => handleDetailChange(index, 'email', e.target.value)}
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded"
            value={recipient.dob}
            onChange={(e) => handleDetailChange(index, 'dob', e.target.value)}
          />
        </div>
      ))}

      {type === 'group' && (
        <button
          onClick={addRecipient}
          type="button"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          + Add Person
        </button>
      )}
    </div>
  );
}
