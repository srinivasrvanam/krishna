function DarkMode() {
  let theme = "dark"; // Default theme
  document.body.setAttribute("data-bs-theme", theme);

  const toggleTheme = () => {
    theme = theme === "light" ? "dark" : "light";
    document.body.setAttribute("data-bs-theme", theme);
  };

  return (
    <div data-bs-theme={theme} className="container">
      <button className="btn btn-secondary" onClick={toggleTheme}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;
