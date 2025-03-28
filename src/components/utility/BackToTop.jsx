import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
        setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener when component unmounts
    };
  }, []); // [] (dependency array) indicates the useEffect runs only once when the component mounts

  /* Smooth scroll to top - with same speed */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Smooth scroll to top - with reduced speed like a car break */
  const smoothScrollToTop = () => {
    let currentScroll = window.scrollY;

    const scrollStep = () => {
      if (currentScroll > 0) {
        const scrollSpeed = Math.max(10, currentScroll / 10); // Slows down as it approaches the top
        window.scrollBy(0, -scrollSpeed);
        currentScroll -= scrollSpeed;
        requestAnimationFrame(scrollStep); // Continue animation
      }
    };

    requestAnimationFrame(scrollStep);
  };


  return (
    showButton && <button
      onClick={smoothScrollToTop}
      className="sv-btn fixed bottom-15 right-10 "
    >
      ↑ Back to Top
    </button>
  );
};

export default BackToTop;
