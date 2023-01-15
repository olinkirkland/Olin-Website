import { useState } from 'react';
import { currentLanguage, setAppLanguage, text } from '../locale/locale';

function LanguagePicker() {
  const [showPicker, setShowPicker] = useState(true);
  const oppositeLanguage = currentLanguage === 'en' ? 'de' : 'en';

  return (
    showPicker && (
      <div className="language-picker">
        <button
          className="btn btn-looking-for"
          onClick={() => changeLanguage(oppositeLanguage)}
        >
          <img src={`images/flags/${oppositeLanguage}.png`} alt="flag" />
          {text(
            'language-picker.looking-for',
            text('language-picker.languages.' + oppositeLanguage)
          )}
        </button>

        <button
          className="btn btn-icon btn-close"
          onClick={() => setShowPicker(false)}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    )
  );
}

function changeLanguage(language) {
  if (language === currentLanguage) return;

  setAppLanguage(language);
  window.location.reload();
}

export default LanguagePicker;
