import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
      }}>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
