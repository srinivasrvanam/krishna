const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-15 right-10 bg-yellow-500 dark:text-gray-900 px-4 py-1 rounded-full shadow-lg hover:bg-yellow-400 focus:outline-none transition duration-300 cursor-pointer"
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
