import Verse from "./Verse";

const Chapter = ({verses, compact}) => {
  console.log('SV: compact:', compact);
    return (
            <>
                {verses.map((verse,index) => (
                    <Verse key={index} verse={verse} compact={compact} />
                ))}
            </>
        );
};

export default Chapter;