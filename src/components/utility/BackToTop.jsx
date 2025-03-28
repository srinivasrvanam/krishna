import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(true);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener when component unmounts
    };
  }, []); // [] (dependency array) indicates the useEffect runs only once when the component mounts

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && <button
      onClick={scrollToTop}
      className="sv-btn fixed bottom-15 right-10 "
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
