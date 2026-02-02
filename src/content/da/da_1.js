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
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "By such childhood pastimes as this He is drowning the inhabitants of Gokula in pools of ecstasy, and is revealing to those devotees who are absorbed in knowledge of His supreme majesty and opulence that He is only conquered by devotees whose pure love is imbues with intimacy and is free from all conceptions of awe and reverence. With great love I again offer my obeisances to Lord Damodara hundreds and hundreds of times.",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
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
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "O Lord, although You are able to give all kinds of benedictions, I do not pray to You for the boon of impersonal liberation, nor the highest liberation of eternal life in Vaikuntha, nor any other boon (which may be obtained by executing the nine processes of bhakti). O Lord, I simply wish that this form of Yours as Bala Gopala in Vrndavana may ever be manifest in my heart, for what is the use to me of any other boon besides this?",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
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
    sloka_tel : [],
    vicheda : [],
    anvaya  : [],
    transl  : [],
    essence : [
      "O Lord, Your lotus face, which is encircled by locks of soft black hair tinged with red, is kissed again and again by mother Yasoda, and Your lips are reddish like the bimba fruit. May this beautiful vision of Your lotus face be ever manifest in my heart. Thousands and thousands of other benedictions are of no use to me.",
    ],
    essence_tel: [],
    meanings: [],
    notes   : [],
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