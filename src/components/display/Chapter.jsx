import Verse from "./Verse";

const Chapter = ({verses}) => {
    return (
            <>
                {verses.map((verse,index) => (
                    <Verse key={index} verse={verse} />
                ))}
            </>
        );
};

export default Chapter;