import { StatusBar } from 'expo-status-bar';
import { Home } from './src/Home';
import { LoadFonts } from './src/LoadData';
import { theme } from './src/theme';

export default function App() {

  const loadingFonts = LoadFonts();

  if (!loadingFonts) {
    return null;
  } else {
    return (
      <>
        <StatusBar style='light' backgroundColor={theme.colors.gray700} />
        <Home />
      </>
    );
  }
}

