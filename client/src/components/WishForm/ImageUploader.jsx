import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/wishFormSlice';
import { useRef, useState } from 'react';

export default function ImageUploader() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const reduxImages = useSelector((state) => state.wishForm.images);
  const [localPreviews, setLocalPreviews] = useState([]);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);

    fileArray.forEach((file) => {
      dispatch(addImage(file));
    });

    const previews = fileArray.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setLocalPreviews((prev) => [...prev, ...previews]);
  };

  const handleFileInput = (e) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const openFilePicker = () => {
    inputRef.current.click();
  };

  const removeImage = (index) => {
    const updated = [...localPreviews];
    updated.splice(index, 1);
    setLocalPreviews(updated);
    // Optional: update Redux if needed
    // dispatch(removeImage(index));
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Upload Showcase Images</h2>

      <div
        onClick={openFilePicker}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full p-6 text-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-pink-50"
      >
        Drag & Drop or Click to Upload
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />

      {localPreviews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {localPreviews.map((img, index) => (
            <div key={index} className="relative group">
              <img
                src={img.url}
                alt={`preview-${index}`}
                className="w-full h-40 object-cover rounded shadow"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-sm hidden group-hover:flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
