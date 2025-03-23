import CustomButton from "./CustomButton";

function SVSLinks() {
return (
<>
    <div className="flex flex-wrap justify-center gap-2 mt-2">
    <CustomButton text="Source" link="https://sanskritdocuments.org/doc_vishhnu/venkatsp.html" />
    <CustomButton text="PDF Telugu" link="https://srinivasrvanam.github.io/bhagavadgita/svs/pdf-telugu.html" />
    <CustomButton text="SVS - Greenmesg" link="https://greenmesg.org/stotras/vishnu/venkatesa_suprabhatam.php" />
    <CustomButton text="SVS - Sri Vaishnava" link="https://www.srimatham.com/uploads/5/5/4/9/5549439/srivaishnava_prayer_book_2014.pdf" />
    </div>
    <div className="flex flex-wrap justify-center gap-2 mt-2">
    <CustomButton text="YT - Chaganti Garu" link="https://www.youtube.com/watch?v=BNqptl2B41w&list=PLBOxfGBzDiKb9u1c4fjbw9xRQCLEbrWzb&index=1" />
    <CustomButton text="YT - Sriram Cadambi" link="https://www.youtube.com/watch?v=Qs8Sp5xLvTs&list=PL22hzwyT6JRbSMuA0bmCNodP8NXcXACjq&index=1" />
    <CustomButton text="YT - SVS Full - Telugu Subs - VFX" link="https://www.youtube.com/watch?v=VGSy_p5epsw" />
    <CustomButton text="YT - SVS Full - Telugu Exp" link="https://www.youtube.com/watch?v=nizFIONj37U" />
    </div>
    <div className="flex flex-wrap justify-center gap-2 mt-2">
    <CustomButton text="YT - SVS Full - English Exp - Other in Channel" link="https://www.youtube.com/watch?v=YMt3th4TmAQ" />
    </div>
</>
);
}

export default SVSLinks;