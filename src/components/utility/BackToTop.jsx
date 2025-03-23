const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="sv-btn fixed bottom-15 right-10 "
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
