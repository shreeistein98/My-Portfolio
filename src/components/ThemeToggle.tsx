
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative p-2 rounded-full transition-colors ${
        isAnimating ? "scale-110" : "scale-100"
      } duration-300 ease-in-out hover:bg-secondary`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all" />
      ) : (
        <Sun className="h-5 w-5 transition-all" />
      )}
    </button>
  );
};
