// "॥ अथ वेङ्कटेशमङ्गलाशासनम् । ॥",
const verses = [
  {
    chapter: "SVS_4",
    number: 1,
    sloka: [
      "श्रियः कान्ताय कल्याणनिधये निधयेऽर्थिनां",
      "श्रीवेङ्कटनिवासाय श्रीनिवासाय मङ्गलम् ॥ १॥",
    ],
    vicheda: [
      "श्रियः कान्ताय कल्याणनिधये निधयेऽर्थिनां",
      "श्रीवेङ्कटनिवासाय श्रीनिवासाय मङ्गलम् ॥ १॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa the resident of Mount Venkata, the spouse of Lakshmi, who is the repository of auspiciousness, and a treasury towards those who take refuge in Him.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 2,
    sloka: [
      "लक्ष्मी सविभ्रमालोकसुभ्रूविभ्रमचक्षुषे",
      "चक्षुषे सर्वलोकानां वेङ्कटेशाय मङ्गलम् ॥ २॥",
    ],
    vicheda: [
      "लक्ष्मी सविभ्रमालोकसुभ्रूविभ्रमचक्षुषे",
      "चक्षुषे सर्वलोकानां वेङ्कटेशाय मङ्गलम् ॥ २॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who gazes alluringly at Goddess Lakshmi with elegant eyebrows, and who observes all the worlds with His vacillating eyes. ",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 3,
    sloka: [
      "श्रीवेङ्कटाद्रिश‍ृङ्गाङ्ग्रमङ्गलाभरणाङ्घ्रये",
      "मङ्गलानां निवासाय श्रीनिवासाय मङ्गलम् ॥ ३॥",
    ],
    vicheda: [
      "श्रीवेङ्कटाद्रिश‍ृङ्गाङ्ग्रमङ्गलाभरणाङ्घ्रये",
      "मङ्गलानां निवासाय श्रीनिवासाय मङ्गलम् ॥ ३॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord of Lakshmi Devi, the repository of auspiciousness whose auspicious feet adorn the crest of mount Venkata.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 4,
    sloka: [
      "सर्वावयवसौन्दर्यसम्पदा सर्वचेतसां",
      "सदा सम्मोहनायास्तु वेङ्कटेशाय मङ्गलम् ॥ ४॥",
    ],
    vicheda: [
      "सर्वावयवसौन्दर्यसम्पदा सर्वचेतसां",
      "सदा सम्मोहनायास्तु वेङ्कटेशाय मङ्गलम् ॥ ४॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa, the inestimable beauty of whose form continually enraptures all beings.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 5,
    sloka: [
      "नित्याय निरवद्याय सत्यानन्दचिदात्मने",
      "सर्वान्तरात्मने श्रीमद्वेङ्कटेशाय मङ्गलम् ॥ ५॥",
    ],
    vicheda: [
      "नित्याय निरवद्याय सत्यानन्दचिदात्मने",
      "सर्वान्तरात्मने श्रीमद्वेङ्कटेशाय मङ्गलम् ॥ ५॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa the Supreme Spirit, the Absolute Truth, the Ultimate Joy, who is Eternal, Immaculate, and the indweller in every soul.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 6,
    sloka: [
      "स्वतस्सर्वविदे सर्वशक्तये सर्वशेषिणे",
      "सुलभाय सुशीलाय वेङ्कटेशाय मङ्गलम् ॥ ६॥",
    ],
    vicheda: [
      "स्वतस्सर्वविदे सर्वशक्तये सर्वशेषिणे",
      "सुलभाय सुशीलाय वेङ्कटेशाय मङ्गलम् ॥ ६॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who is Himself omniscient, omnipotent, the Supreme Soul, easily accessible and most amiable.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 7,
    sloka: [
      "परस्मै ब्रह्मणे पूर्णकामाय परमात्मने",
      "प्रयुञ्जे परतत्त्वाय वेङ्कटेशाय मङ्गलम् ॥ ७॥",
    ],
    vicheda: [
      "परस्मै ब्रह्मणे पूर्णकामाय परमात्मने",
      "प्रयुञ्जे परतत्त्वाय वेङ्कटेशाय मङ्गलम् ॥ ७॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa the Supreme Being, fully self-­‐content, the Supreme Lord, the Absolute Truth that is to be known and sought.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 8,
    sloka: [
      "आकालतत्त्वमश्रान्तं आत्मनामनुपश्यतां",
      "अतृप्त्यमृतरूपाय वेङ्कटेशाय मङ्गलम् ॥ ८॥",
    ],
    vicheda: [
      "आकालतत्त्वमश्रान्तं आत्मनामनुपश्यतां",
      "अतृप्त्यमृतरूपाय वेङ्कटेशाय मङ्गलम् ॥ ८॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa whose ambrosial beauty is such, that devotees having the beatific vision are never satiated with gazing upon Him even for eternity.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 9,
    sloka: [
      "प्रायस्स्वचरणौ पुंसां शरण्यत्वेन पाणिना",
      "कृपयाऽऽदिशते श्रीमद्वेङ्कटेशाय मङ्गलम् ॥ ९॥",
    ],
    vicheda: [
      "प्रायस्स्वचरणौ पुंसां शरण्यत्वेन पाणिना",
      "कृपयाऽऽदिशते श्रीमद्वेङ्कटेशाय मङ्गलम् ॥ ९॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who out of unbounded compassion points to His own feet as a refuge for everyone.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 10,
    sloka: [
      "दयामृत तरङ्गिण्यास्तरङ्गैरिव शीतलैः",
      "अपाङ्गैः सिञ्चते विश्वं वेङ्कटेशाय मङ्गलम् ॥ १०॥",
    ],
    vicheda: [
      "दयामृत तरङ्गिण्यास्तरङ्गैरिव शीतलैः",
      "अपाङ्गैः सिञ्चते विश्वं वेङ्कटेशाय मङ्गलम् ॥ १०॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa whose tears of compassion pour out like waves from his eyes and flow down upon the world like cool rivers of ambrosia.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 11,
    sloka: [
      "स्रग्भूषाम्बरहेतीनां सुषमावहमूर्तये",
      "सर्वार्तिशमनायास्तु वेङ्कटेशाय मङ्गलम् ॥ ११॥",
    ],
    vicheda: [
      "स्रग्भूषाम्बरहेतीनां सुषमावहमूर्तये",
      "सर्वार्तिशमनायास्तु वेङ्कटेशाय मङ्गलम् ॥ ११॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who appears most charming wearing beautiful garlands, gorgeous ornaments and fine silk garments, bearing the celestial weapons, dispelling all distress.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 12,
    sloka: [
      "श्रीवैकुण्ठविरक्ताय स्वामिपुष्करिणीतटे",
      "रमया रममाणाय वेङ्कटेशाय मङ्गलम् ॥ १२॥",
    ],
    vicheda: [
      "श्रीवैकुण्ठविरक्ताय स्वामिपुष्करिणीतटे",
      "रमया रममाणाय वेङ्कटेशाय मङ्गलम् ॥ १२॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who being unattached to His Heavenly Abode of Vaikuntha, is sporting with His consort Lakshmi on the banks of this earthly lake of Pushkarini.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 13,
    sloka: [
      "श्रीमत्सुन्दरजामातृमुनिमानसवासिने",
      "सर्वलोकनिवासाय श्रीनिवासाय मङ्गलम् ॥ १३॥",
    ],
    vicheda: [
      "श्रीमत्सुन्दरजामातृमुनिमानसवासिने",
      "सर्वलोकनिवासाय श्रीनिवासाय मङ्गलम् ॥ १३॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Srinivasa, who dwells within the mind of the fortuitous and beautiful sage Manavalamamuni, and is Himself the abode of the entire universe.",
    ],
    notes: [],
  },
  {
    chapter: "SVS_4",
    number: 14,
    sloka: [
      "मङ्गलाशासनपरैर्मदाचार्य पुरोगमैः",
      "सर्वैश्च पूर्वैराचार्यैः सत्कृतायास्तु मङ्गलम् ॥ १४॥",
    ],
    vicheda: [
      "मङ्गलाशासनपरैर्मदाचार्य पुरोगमैः",
      "सर्वैश्च पूर्वैराचार्यैः सत्कृतायास्तु मङ्गलम् ॥ १४॥",
    ],
    anvaya: [],
    transl: [
      "Auspiciousness be to the Lord Venkatesa who is adored by all the Spiritual Preceptors of my lineage and all those that went before them.",
    ],
    notes: [],
  },
];

export default verses;
// "॥ इति वेङ्कटेशमङ्गलाशासनम् ॥",
