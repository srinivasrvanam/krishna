const verses = [
  {
    chapter : 1,
    number  : 1,
    sloka   : [
      "नमामीश्वरं सच्-चिद्-आनन्द-रूपं",
      "लसत्-कुण्डलं गोकुले भ्राजमनम्",
      "यशोदा-भियोलूखलाद् धावमानं",
      "परामृष्टम् अत्यन्ततो द्रुत्य गोप्या ॥ १॥",
    ],
    sloka_tel : [
      "నమామీశ్వరం సచ్చిదానందరూపం",
      "లసత్కుండలం గోకులే భ్రాజమానమ్",
      "యశోదాభియోలూఖలాద్ ధావమానం",
      "పరామృష్టమత్యంతతో దృత్య గోప్యా ॥ 1 ॥"
    ],
    vicheda : [
      "नमामि ईश्वरम् सत्-चित्-आनन्द-रूपम्",
      "लसत्-कुण्डलम् गोकुले भ्राजमानम्",
      "यशोदा-भयात् उलूखलात् धावमानम्",
      "परामृष्टम् अत्यन्ततः द्रुत्वा गोप्या"
    ],
    anvaya  : [
      "सत्-चित्-आनन्द-रूपम् लसत्-कुण्डलम् गोकुले भ्राजमानम् ईश्वरम् नमामि । यशोदा-भयात् उलूखलात् धावमानम् गोप्या द्रुत्वा अत्यन्ततः परामृष्टम् (तम् ईश्वरम् नमामि) ।"
    ],
    transl  : [
      "I bow down to the Supreme Lord, whose form is the embodiment of eternal existence, knowledge, and bliss, whose earrings are swinging, and who shines in Gokula. He who, in fear of Mother Yashoda, ran away from the wooden mortar but was caught from behind by her who ran swiftly after Him."
    ],
    essence : [
      "To the Supreme Lord, whose form is the embodiment of eternal existence, knowledge, and bliss, whose shark-shaped earrings are swinging to and fro, who is beautifully shining in the divine realm of Gokula, who I (due to the offense of breaking the pot of yogurt that His mother was churning into butter and then stealing the butter that was kept hanging from a swing) is quickly running from the wooden grinding mortar in fear of mother Yasoda, but who has been caught from behind by her who ran after Him with greater speed--to that Supreme Lord, Sri Damodara, I offer my humble obeisances."
    ],
    essence_tel: [
      "సచ్చిదానంద స్వరూపుడు, ప్రకాశించే కుండలములు కలవాడు, గోకులంలో విరాజిల్లేవాడు, యశోదమ్మకు భయపడి రోలు నుండి దూకి పరుగెడుతూ, ఆమె చేత పట్టుబడినవాడైన ఆ పరమేశ్వరునికి (శ్రీ దామోదరునికి) నా నమస్కారములు."
    ],
    meanings: [
      "namāmi: I offer my obeisances",
      "īśvaram: to the Supreme Lord",
      "sac-cid-ānanda-rūpam: whose form is eternal, full of knowledge and bliss",
      "lasat-kuṇḍalam: whose earrings are swinging/glistening",
      "gokule: in the land of Gokula",
      "bhrājamānam: shining brilliantly",
      "yaśodā-bhiyā: due to fear of Yashoda",
      "ulūkhalāt: from the wooden grinding mortar",
      "dhāvamānam: running away",
      "parāmṛṣṭam: caught/grasped from behind",
      "atyantataḥ: greatly/completely",
      "drutyā: running quickly",
      "gopyā: by the Gopi (Mother Yashoda)"
    ],
    notes   : [
      "The word 'atyantataḥ' emphasizes that Yashoda had to run very fast to catch the Lord, who is usually unreachable by mind or speech.",
      "This lila takes place on the day of Deepavali."
    ]
  },
  {
    chapter : 1,
    number  : 2,
    sloka   : [
      "रुदन्तं मुहुर् नेत्र-युग्मं मृजन्तम्",
      "कराम्भोज-युग्मेन सातङ्क-नेत्रम्",
      "मुहुः श्वास-कम्प-त्रिरेखाङ्क-कण्ठ",
      "स्थित-ग्रैवं दामोदरं भक्ति-बद्धम् ॥ २॥",
    ],
    sloka_tel : [
      "రుదంతం ముహుర్ నేత్ర-యుగ్మం మృజంతమ్",
      "కరాంభోజ-యుగ్మేన సాతఙ్క-నేత్రమ్",
      "ముహుః శ్వాస-కంప-త్రిరేఖాంక-కంఠ",
      "స్థిత-గ్రైవం దామోదరం భక్తి-బద్ధమ్ ॥ 2 ॥",
    ],
    vicheda : [
      "रुदन्तम् मुहुः नेत्र-युग्मम् मृजन्तम्",
      "कर-अम्भोज-युग्मेन स-आतङ्क-नेत्रम्",
      "मुहुः श्वास-कम्प-त्रि-रेखा-अङ्क-कण्ठ",
      "स्थित-ग्रैविकम् दाम-उदरम् भक्ति-बद्धम्",
    ],
    anvaya  : [
      "मुहुः रुदन्तम् कर-अम्भोज-युग्मेन नेत्र-युग्मम् मृजन्तम् स-आतङ्क-नेत्रम् मुहुः श्वास-कम्प-त्रि-रेखा-अङ्क-कण्ठ-स्थित-ग्रैविकम् भक्ति-बद्धम् दाम-उदरम् (नमामि) ।",
    ],
    transl  : [
      "I bow to Lord Damodara, who is crying and rubbing His eyes again and again with His two lotus-like hands. His eyes express great fear, and His breathing is agitated, causing the pearl necklace upon His neck—which is marked with three lines like a conch shell—to shake. To Him, who is bound not by rope but by the love of His devotee, I offer my obeisances.",
    ],
    essence : [
      "(Seeing the whipping stick in His mother's hand) He is crying and rubbing His eyes again and again with His two lotus hands. His eyes are filled with fear, and the necklace of pearls around His neck, which is marked with three lines like a conch shell, is shaking because of His quick breathing due to crying. To this Supreme Lord, Sri Damodara, whose belly is bound not with ropes but with His mother's pure love, I offer my humble obeisances.",
    ],
    essence_tel: [
      "తల్లి చేతిలోని కర్రను చూసి భయంతో ఏడుస్తూ, తన పద్మముల వంటి రెండు చేతులతో కళ్లను పదే పదే తుడుచుకుంటున్నవాడు, భయంతో నిండిన కన్నులు కలవాడు, ఏడుపు వల్ల కలిగే నిట్టూర్పుల చేత కంఠంలోని ముత్యాల హారము కదులుతున్నవాడు, త్రికంఠరేఖలు కలవాడు మరియు కేవలం భక్తి చేతనే కట్టబడినవాడైన ఆ శ్రీ దామోదరునికి నా నమస్కారములు.",
    ],
    meanings: [
      "rudantam: crying",
      "muhuḥ: again and again",
      "netra-yugmam: the pair of eyes",
      "mṛjantam: rubbing",
      "karāmbhoja-yugmena: with His two lotus-like hands",
      "sātaṅka-netram: whose eyes are full of fear",
      "śvāsa-kampa: trembling due to breathing",
      "tri-rekhāṅka-kaṇṭha: whose neck is marked with three lines (like a conch)",
      "sthita-graivam: the pearl necklace situated on His neck",
      "dāma-udaram: whose belly (udara) is bound by a rope (dāma)",
      "bhakti-baddham: who is bound by devotion",
    ],
    notes   : [
      "The term 'tri-rekhā' refers to the three lines on the neck, considered a sign of supreme beauty and divinity, often compared to the spirals of a conch shell.",
      "The phrase 'bhakti-baddham' is the theological heart of this verse, showing that the Infinite can only be captured by pure love.",
    ],
  },
  {
    chapter : 1,
    number  : 3,
    sloka   : [
      "इतीदृक् स्व-लीलाभिर् आनन्द-कुण्डे",
      "स्व-घोषं निमज्जन्तम् आख्यापयन्तम्",
      "तदीयेषित-ज्ञेषु भक्तैर् जितत्वं",
      "पुनः प्रेमतस् तं शतावृत्ति वन्दे ॥ ३॥",
    ],
    sloka_tel : [
      "ఇతీదృక్ స్వ-లీలాభిర్ ఆనంద-కుండే",
      "స్వ-ఘోషం నిమజ్జంతమ్ ఆఖ్యాపయంతమ్",
      "తదీయేషిత-జ్ఞేషు భక్తైర్ జితత్వం",
      "పునః ప్రేమతస్ తం శతావృత్తి వందే ॥ 3 ॥",
    ],
    vicheda : [
      "इति ईदृक् स्व-लीलाभिः आनन्द-कुण्डे",
      "स्व-घोषम् निमज्जन्तम् आख्यापयन्तम्",
      "तदीय-ईषित-ज्ञेषु भक्तैः जितत्वम्",
      "पुनः प्रेमतः तम् शत-आवृत्ति वन्दे",
    ],
    anvaya  : [
      "इति ईदृक् स्व-लीलाभिः स्व-घोषम् आनन्द-कुण्डे निमज्जन्तम्, तदीय-ईषित-ज्ञेषु भक्तैः जितत्वम् आख्यापयन्तम्, तम् पुनः प्रेमतः शत-आवृत्ति वन्दे ।",
    ],
    transl  : [
      "By such childhood pastimes, He drowns the inhabitants of Gokula in pools of ecstasy. To those who are absorbed in His majestic aspect (aisvarya), He declares that He is conquered only by His intimate devotees. To that Lord Damodara, I offer my obeisances hundreds of times with great love.",
    ],
    essence : [
      "By such childhood pastimes as this He is drowning the inhabitants of Gokula in pools of ecstasy, and is revealing to those devotees who are absorbed in knowledge of His supreme majesty and opulence that He is only conquered by devotees whose pure love is imbues with intimacy and is free from all conceptions of awe and reverence. With great love I again offer my obeisances to Lord Damodara hundreds and hundreds of times.",
    ],
    essence_tel: [
      "ఇటువంటి తన బాల్య లీలల ద్వారా గోకులవాసులందరినీ ఆనందమనే కొలనులో ముంచెత్తుతున్నవాడు, తన ఐశ్వర్య జ్ఞానము కలిగిన వారికి తాను కేవలం భక్తుల ప్రేమకు మాత్రమే లొంగుతానని చాటి చెప్పేవాడు అయిన ఆ దామోదరునికి ప్రేమతో వందల పర్యాయాలు నమస్కరిస్తున్నాను.",
    ],
    meanings: [
      "iti: in this way",
      "īdṛk: such (pastimes)",
      "sva-līlābhiḥ: by His own pastimes",
      "ānanda-kuṇḍe: in a pool of bliss",
      "sva-ghoṣam: His own village (Gokula)",
      "nimajjantam: immersion/drowning",
      "ākhyāpayantam: proclaiming/revealing",
      "tadīya-īṣita-jñeṣu: to those who know His majesty",
      "bhaktaiḥ: by His devotees",
      "jitatvam: the state of being conquered",
      "punaḥ: again",
      "premataḥ: with love",
      "tam: to Him",
      "śata-āvṛtti: hundreds of times",
      "vande: I praise/bow",
    ],
    notes   : [
      "The contrast between 'Aisvarya-jnana' (knowledge of majesty) and 'Madhurya' (sweetness) is highlighted here; the Lord prefers the latter.",
      "The phrase 'Sva-ghosam' refers to the cowherd settlement of Vraja, which vibrates with the sound of Krishna's glories.",
    ],
  },
  {
    chapter : 1,
    number  : 4,
    sloka   : [
      "वरं देव मोक्षं न मोक्षावधिं वा",
      "न चन्यं वृणे ‘हं वरेषाद् अपीह",
      "इदं ते वपुर् नाथ गोपाल-बालं",
      "सदा मे मनस्य् आविरास्तां किम् अन्यैः ॥ ४॥",
    ],
    sloka_tel : [
      "వరం దేవ మోక్షం న మోక్షావధిం వా",
      "న చాన్యం వృణేऽహం వరేషాద్ అపీహ",
      "ఇదం తే వపుర్ నాథ గోపాల-బాలం",
      "సదా మే మనస్య్ ఆవిరాస్తాం కిమ్ అన్యైః ॥ 4 ॥",
    ],
    vicheda : [
      "वरम् देव मोक्षम् न मोक्ष-अवधिम् वा",
      "न च अन्यम् वृणे अहम् वरेषात् अपि इह",
      "इदम् ते वपुः नाथ गोपाल-बालम्",
      "सदा मे मनसि आविरास्ताम् किम् अन्यैः",
    ],
    anvaya  : [
      "हे देव! अहम् मोక్షమ్ न (वृणे), मोक्ष-अवधिम् वा न (वृणे), इह वरेषात् अन्यम् अपि न वृणे। हे नाथ! ते इदम् गोपाल-बालम् वपुः सदा मे मनसि आविरास्ताम्, అన్యైః కిమ్?",
    ],
    transl  : [
      "O Lord, I do not pray for liberation, nor the highest limit of liberation (Vaikuntha), nor any other boon even if it is the best. O Lord, may this form of Yours as a cowherd child (Gala Gopala) always remain manifest in my heart. What is the use of any other boon to me?",
    ],
    essence : [
      "O Lord, although You are able to give all kinds of benedictions, I do not pray to You for the boon of impersonal liberation, nor the highest liberation of eternal life in Vaikuntha, nor any other boon (which may be obtained by executing the nine processes of bhakti). O Lord, I simply wish that this form of Yours as Bala Gopala in Vrndavana may ever be manifest in my heart, for what is the use to me of any other boon besides this?",
    ],
    essence_tel: [
      "ఓ దేవా! నీవు సమస్త వరములను ప్రసాదించగలవాడవు అయినప్పటికీ, నాకు మోక్షం వద్దు, మోక్షమునకు పరాకాష్ట అయిన వైకుంఠ ప్రాప్తి వద్దు, మరితర వరములు కూడా వద్దు. ఓ నాథా! నీ ఈ బాల గోపాల రూపం నా మనస్సులో ఎల్లప్పుడూ నిలిచి ఉంటే చాలు. అది లేని నాడు ఇతర వరములతో నాకేమి పని?",
    ],
    meanings: [
      "varam: boon",
      "deva: O Lord",
      "mokṣam: liberation",
      "na: not",
      "mokṣa-avadhim: the highest limit of liberation",
      "vā: or",
      "na ca anyam: nor anything else",
      "vṛṇe 'ham: I choose/ask for",
      "vareṣāt api: even from the best of boons",
      "iha: here/in this world",
      "idam te vapuḥ: this form of Yours",
      "nātha: O Master",
      "gopāla-bālam: a cowherd child",
      "sadā: always",
      "me manasi: in my heart/mind",
      "āvirāstām: may it be manifest",
      "kim anyaiḥ: what is the use of others?",
    ],
    notes   : [
      "The phrase 'mokṣa-avadhim' typically refers to the state of Sayujya-mukti (merging into the Brahman) or the opulences of Vaikuntha, both of which a pure devotee sets aside in favor of seeing the Lord.",
      "The use of 'Gopala-balam' emphasizes the specific beauty of Krishna's childhood form over His more majestic (Aisvarya) forms.",
    ],
  },
  {
    chapter : 1,
    number  : 5,
    sloka   : [
      "इदं ते मुखाम्भोजम् अत्यन्त-नीलैर्",
      "वृतं कुन्तलैः स्निग्ध-रक्तैश् च गोप्या",
      "मुहुश् चुम्बितं बिम्ब-रक्ताधरं मे",
      "मनस्य् आविरास्ताम् अलं लक्ष-लाभैः ॥ ५॥",
    ],
    sloka_tel : [
      "ఇదం తే ముఖాంభోజమ్ అత్యంత-నీలైర్",
      "వృతం కుంతలైః స్నిగ్ధ-రక్తైశ్ చ గోప్యా",
      "ముహుశ్ చుంబితం బింబ-రక్తాధరం మే",
      "మనస్య్ ఆవిరాస్తామ్ అలం లక్ష-లాభైః ॥ 5 ॥",
    ],
    vicheda : [
      "इदम् ते मुख-अम्भोजम् अत्यन्त-नीलैः",
      "वृतम् कुन्तलैः स्निग्ध-रक्तैः च गोप्या",
      "मुहुः चुम्बितम् बिम्ब-रक्त-अधरम् मे",
      "मनसि आविरास्ताम् अलम् लक्ष-लाभैः",
    ],
    anvaya  : [
      "अत्यन्त-नीलैः स्निग्ध-रक्तैः च कुन्तलैः वृतम्, गोप्या मुहुः चुम्बितम्, बिम्ब-रक्त-अधरम् ते इदम् मुख-अम्भोजम् मे मनसि आविरास्ताम्, लक्ष-लाभैः अलम् ।",
    ],
    transl  : [
      "O Lord, Your lotus-like face, encircled by soft black locks of hair tinged with red, is kissed again and again by Mother Yashoda. Your lips are as red as the bimba fruit. May this vision of Your lotus face always be manifest in my heart. Of what use are thousands of other gains to me?",
    ],
    essence : [
      "O Lord, Your lotus face, which is encircled by locks of soft black hair tinged with red, is kissed again and again by mother Yasoda, and Your lips are reddish like the bimba fruit. May this beautiful vision of Your lotus face be ever manifest in my heart. Thousands and thousands of other benedictions are of no use to me.",
    ],
    essence_tel: [
      "ఓ దేవా! చిక్కని నలుపు మరియు ఎరుపు రంగులు కలిసిన మృదువైన ముంగురులతో నిండిన నీ ముఖపద్మమును యశోదమ్మ పదే పదే ముద్దాడుతోంది. దొండపండు వలె ఎర్రని నీ అధరములతో కూడిన ఆ అందమైన ముఖము నా మనస్సులో ఎల్లప్పుడూ నిలిచి ఉండుగాక. వేలకొద్దీ ఇతర లాభములతో నాకు పనిలేదు.",
    ],
    meanings: [
      "idam: this",
      "te: Your",
      "mukha-ambhojam: lotus face",
      "atyanta-nīlaiḥ: very dark blue/black",
      "vṛtam: surrounded/encircled",
      "kuntalaiḥ: by locks of hair",
      "snigdha-raktaiḥ: soft and reddish",
      "ca: and",
      "gopyā: by the Gopi (Yashoda)",
      "muhuḥ: repeatedly",
      "cumbitam: kissed",
      "bimba-rakta-adharam: lips as red as the bimba fruit",
      "me manasi: in my heart",
      "āvirāstām: may it be manifest",
      "alam: enough/useless",
      "lakṣa-lābhaiḥ: with hundreds of thousands of gains",
    ],
    notes   : [
      "The 'bimba' fruit is a traditional poetic comparison in Sanskrit for deep red, luscious lips.",
      "The term 'snigdha-raktaiḥ' describes hair that is naturally glossy (soft) with a reddish-gold hue, often seen in the hair of young children or divine personalities.",
    ],
  },
  {
    chapter : 1,
    number  : 6,
    sloka   : [
      "नमो देव दामोदरानन्त विष्णो",
      "प्रसीद प्रभो दुःख-जालाब्धि-मग्नम्",
      "कृपा-दृष्टि-वृष्ट्याति-दीनं बतानु",
      "गृहाणेष माम् अज्ञम् एध्य् अक्षि-दृश्यः ॥ ६॥",
    ],
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "O Supreme Godhead, I offer my obeisances unto You. O Damodara! O Ananta! O Vishnu! O master! O my Lord, be pleased upon me. By showering Your glance of mercy upon me, deliver this poor ignorant fool who is immersed in an ocean of worldly sorrows, and become visible to my eyes.",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
  },
  {
    chapter : 1,
    number  : 7,
    sloka   : [
      "कुवेरात्मजौ बद्ध-मूर्त्यैव यद्वत्",
      "त्वया मोचितौ भक्ति-भाजौ कृतौ च",
      "तथा प्रेम-भक्तिं स्वकां मे प्रयच्छ",
      "न मोक्षे ग्रहो मे ‘स्ति दामोदरेह ॥ ७॥",
    ],
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "O Lord Damodara, just as the two sons of Kuvera--Manigriva and Nalakuvara--were delivered from the curse of Narada and made into great devotees by You in Your form as a baby tied with rope to a wooden grinding mortar, in the same way, please give to me Your own prema-bhakti. I only long for this and have no desire for any kind of liberation.",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
  },
  {
    chapter : 1,
    number  : 8,
    sloka   : [
      "नमस् ते ‘स्तु दाम्ने स्फुरद्-दीप्ति-धाम्ने",
      "त्वदीयोदरायाथ विश्वस्य धाम्ने",
      "नमो राधिकायै त्वदीय-प्रियायै",
      "नमो ‘नन्त-लीलाय देवाय तुभ्यम् ॥ ८॥",
    ],
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "O Lord Damodara, I first of all offer my obeisances to the brilliantly effulgent rope which binds Your belly. I then offer my obeisances to Your belly, which is the abode of the entire universe. I humbly bow down to Your most beloved Srimati Radharani, and I offer all obeisances to You, the Supreme Lord, who displays unlimited pastimes.",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
  },
];

export default verses;