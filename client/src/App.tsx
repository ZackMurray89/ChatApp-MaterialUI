import { useThemeContext } from './hooks/useThemeContext';

function App() {
  const { mode, handleSetTheme } = useThemeContext();

  return (
    <div>
      {mode}
      <button
        onClick={() => {
          handleSetTheme(mode === 'dark' ? 'light' : 'dark');
        }}
      >
        Theme
      </button>
    </div>
  );
}

export default App;
