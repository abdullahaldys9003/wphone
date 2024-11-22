import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
/*
import '@fontsource/ibm-plex-sans-arabic';

import '@fontsource/roboto/400.css'; // الخط العادي
import '@fontsource/roboto/700.css'; // الخط العريض
import '@fontsource/montserrat/400.css'; // الخط العادي للعناوين
import '@fontsource/montserrat/700.css'; // الخط العريض للعناوين
import '@fontsource/scheherazade-new/index.css';
import '@fontsource/amiri/index.css'; // استيراد خط amiri
*/
createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
      <App />
    </BrowserRouter>,
)


