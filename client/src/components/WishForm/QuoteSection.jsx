import { useSelector, useDispatch } from 'react-redux';
import { setQuotes } from '../../redux/wishFormSlice';

export default function QuoteSection() {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.wishForm.quotes);

  const updateQuote = (index, value) => {
    const updatedQuotes = [...quotes];
    updatedQuotes[index] = value;
    dispatch(setQuotes(updatedQuotes));
  };

  const addQuote = () => {
    dispatch(setQuotes([...quotes, '']));
  };

  const removeQuote = (index) => {
    const updatedQuotes = quotes.filter((_, i) => i !== index);
    dispatch(setQuotes(updatedQuotes));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Wish Quotes</h2>

      {quotes.map((quote, index) => (
        <div key={index} className="flex items-center gap-2 mb-3">
          <input
            type="text"
            value={quote}
            onChange={(e) => updateQuote(index, e.target.value)}
            placeholder={`Quote #${index + 1}`}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          {quotes.length > 1 && (
            <button
              type="button"
              onClick={() => removeQuote(index)}
              className="text-red-500 hover:text-red-700 text-lg font-bold"
              title="Remove Quote"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addQuote}
        className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
      >
        + Add Another Quote
      </button>
    </div>
  );
}
