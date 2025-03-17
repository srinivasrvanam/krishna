const Sloka = ({lines}) => {
    return (
        <div className="sloka">
            <div className="heading">श्लोकः</div>
            {lines.map((line,index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
};

export default Sloka;