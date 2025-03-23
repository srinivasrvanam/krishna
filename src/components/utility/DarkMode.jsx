function DarkMode() {

  let darkModeIcon;
  localStorage.removeItem("theme"); // Going with system mode by default
  const theme = localStorage.getItem("theme") || "system";

  applyTheme(theme);

  function applyTheme(mode) {
    const root = document.documentElement;
    const icon = document.getElementById("theme-icon");

    if (mode === "light") {
        root.classList.remove("dark");
        darkModeIcon = "🌞"; // Light Mode Icon
    } else if (mode === "dark") {
        root.classList.add("dark");
        darkModeIcon = "🌙"; // Dark Mode Icon
    } else {
        root.classList.toggle("dark", window.matchMedia("(prefers-color-scheme: dark)").matches);
        darkModeIcon = "🖥️"; // System Mode Icon
    }
    if(icon) {
        icon.innerHTML = darkModeIcon;
    }
    localStorage.setItem("theme", mode);
  }

  function toggleTheme() {
    const current = localStorage.getItem("theme") || "system";
    // console.log(`Current theme: ${current}`);
    const nextMode = current === "light" ? "dark" : current === "dark" ? "system" : "light";
    // console.log(`Next theme: ${nextMode}`);
    applyTheme(nextMode);
  }

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded-xl text-4xl bg-orange-50 dark:bg-orange-900">            
        <span id="theme-icon">{darkModeIcon}</span> 
    </button>
  );
}

export default DarkMode;
