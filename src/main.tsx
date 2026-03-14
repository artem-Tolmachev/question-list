import { createRoot } from 'react-dom/client';
import AppEntries from './app/AppEntries';
import './index.css';
import './shared/styles/global.scss';
import './shared//styles/variables.scss';

createRoot(document.getElementById('root')!).render(
  <>
    <AppEntries/>
  </>
)
