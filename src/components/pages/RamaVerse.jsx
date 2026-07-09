
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Verse from "../display/Verse";
import verses1 from '../../content/rama/rama_1_bala/rama_1_1';
import Breadcrumbs from "../utility/Breadcrumbs";

function RamaVerse() {
    const { chapter_num, verse_num } = useParams();
    const navigate = useNavigate();

    let verses = [];
    let title = '';
    let verse;
    let prevVerse;
    let nextVerse;

    const isValidVerseRoute = chapter_num !== undefined && chapter_num >= 1 && chapter_num <= 1 && verse_num !== undefined;

    if (isValidVerseRoute) {
      switch (Number(chapter_num)) {
        case 1:
          verses = verses1;
          title = "Ramayanam - Bala Kanda";
          break;
        default:
          verses = [];
      }

      verse = verses.find((item) => item.number === Number(verse_num));

      const sortedArray = [...verses].sort((a, b) => a.number - b.number);
      const targetIndex = sortedArray.findIndex((item) => item.number === Number(verse_num));
      prevVerse = targetIndex > 0 ? sortedArray[targetIndex - 1] : undefined;
      nextVerse = targetIndex < sortedArray.length - 1 ? sortedArray[targetIndex + 1] : undefined;
    }

    useEffect(() => {
      if (!isValidVerseRoute || !verse) {
        return undefined;
      }

      const handleKeyDown = (event) => {
        const target = event.target;
        const tagName = target?.tagName?.toLowerCase();
        const isEditable =
          tagName === "input" ||
          tagName === "textarea" ||
          tagName === "select" ||
          target?.isContentEditable;

        if (isEditable) {
          return;
        }

        if (event.key === "ArrowLeft" && prevVerse) {
          event.preventDefault();
          navigate(`/rama/${chapter_num}/${prevVerse.number}`);
        }

        if (event.key === "ArrowRight" && nextVerse) {
          event.preventDefault();
          navigate(`/rama/${chapter_num}/${nextVerse.number}`);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [chapter_num, isValidVerseRoute, navigate, prevVerse, nextVerse, verse]);

    if (verse !== undefined) {
      return (
        <div className="w-full h-full">
          {/* <h1 className="text-3xl text-center pt-5">{title} - {verse_num}</h1> */}
          <div>
            <br />
            <Breadcrumbs />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2 py-4">
            {prevVerse && prevVerse.number && <Link to={`/rama/${chapter_num}/${prevVerse.number}`} className="sv-btn fixed bottom-4 left-5">Prev - {prevVerse.number}</Link>}
            {nextVerse && nextVerse.number && <Link to={`/rama/${chapter_num}/${nextVerse.number}`} className="sv-btn fixed bottom-4 right-5">Next - {nextVerse.number}</Link>}
          </div>
          <Verse verse={verse} />
          <br />
          <br />
        </div>
      );
    }

    return (
        <div>
            <h1>Incorrect Chapter/Sloka Number - Sloka NOT found</h1>
        </div>
    );
}
 
export default RamaVerse;