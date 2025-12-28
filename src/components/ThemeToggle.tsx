import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="theme-toggle-btn"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun className="theme-icon theme-icon-sun" />
      <Moon className="theme-icon theme-icon-moon" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
