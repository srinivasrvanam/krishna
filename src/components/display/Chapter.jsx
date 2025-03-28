import Verse from "./Verse";

const Chapter = ({verses, type, compact}) => {
  console.log('SV: compact:', compact);
    return (
            <>
                {verses.map((verse,index) => (
                    <Verse key={index} verse={verse} type={type} compact={compact} />
                ))}
            </>
        );
};

export default Chapter;