const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top"
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
