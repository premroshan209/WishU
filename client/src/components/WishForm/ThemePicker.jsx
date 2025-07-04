import { useSelector, useDispatch } from 'react-redux';
import { setThemeId } from '../../redux/wishFormSlice';

const dummyThemes = {
  Birthday: ['cake', 'balloons', 'party'],
  Anniversary: ['roses', 'rings', 'hearts'],
  Promotion: ['office', 'trophy', 'confetti'],
  'New Year': ['fireworks', '2025', 'celebration'],
  Other: ['default1', 'default2'],
};

export default function ThemePicker() {
  const wishType = useSelector((state) => state.wishForm.wishType);
  const themeId = useSelector((state) => state.wishForm.themeId);
  const dispatch = useDispatch();

  const themes = dummyThemes[wishType] || [];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Select a Theme</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <div
            key={theme}
            onClick={() => dispatch(setThemeId(theme))}
            className={`p-4 text-center border rounded-lg cursor-pointer hover:bg-pink-100 ${
              themeId === theme ? 'ring-2 ring-pink-500' : ''
            }`}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
