const BackToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToTop = {
    position: "sticky",
    bottom: "10%",
    right: "5%",
    float: "right"
  }

  return (
    <button
      onClick={scrollToTop}
      className="btn btn-warning btn-sm"
      style={backToTop}
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
