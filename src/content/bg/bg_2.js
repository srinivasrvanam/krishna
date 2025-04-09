const verses = [
  {
    chapter : 2,
    number  : 11,
    sloka   : [
      'श्रीभगवानुवाच',
      'अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |',
      'गतासूनगतासूंश्च नानुशोचन्ति पण्डिता: ||'
    ],
    vicheda : [
      'श्रीभगवान् उवाच',
      'अशोच्यान् अन्वशोचः त्वं प्रज्ञावादान् च भाषसे |',
      'गतासून् अगतासूंन् च न अनुशोचन्ति पण्डिता: ||'
    ],
    anvaya  : [
      'श्रीभगवान् उवाच',
      'त्वं (अशोच्यान् अन्वशोचः) च (प्रज्ञावादान् भाषसे) |',
      'पण्डिता: गतासून् अगतासूंन् च न अनुशोचन्ति ||'
    ],
    transl  : [
      'The Supreme Lord said: You grieve for those who should not be grieved for, and yet you speak words of wisdom. The wise, who know the truth, do not lament for the living or the dead.', 
    ],
    notes   : [
      'अशोच्यानन्वशोचस्त्वं = अशोच्यान् + अन्वशोचः + त्वं --- ?? सन्धिः',
      'प्रज्ञावादांश्च = प्रज्ञावादान् + च --- ?? सन्धिः',
      'गतासूनगतासूंश्च = गतासून् + अगतासूंन् + च --- ?? सन्धिः',
      'नानुशोचन्ति = न + अनुशोचन्ति --- सवर्ण धीर्घ सन्धिः',
      'अशोच्यान् =',
      'अन्वशोचः =',
      'प्रज्ञावादान् =',
      'भाषसे =',
      'गतासून् =',
      'अगतासूंन् =',
      'अनुशोचन्ति =',
    ],
  },      
  {
    chapter : 2,
    number  : 12,
    sloka   : [
      'न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः |',
      'न चैव न भविष्याम: सर्वे वयमत: परम् ||'
    ],
    vicheda : [
      'न तु एव अहं जातु न आसं न त्वं न इमे जनाधिपाः |',
      'न च एव न भविष्याम: सर्वे वयम् अतः परम् ||'
    ],
    anvaya  : [
      'जातु',
      '- अहं ( न आसं ) न => अहं आसं',
      '- त्वं (न आसीः) न => त्वं आसीः',
      '- इमे जनाधिपाः (न आसन्) न => इमे जनाधिपाः आसन्',
      '(च एव)',
      'अतः परम्',
      '- वयं सर्वे (न भविष्याम:) न => वयं सर्वे भविष्याम:',
    ],
    transl  : [
      'Never was there a time when I did not exist, nor you, nor all these kings nor in the future shall any of us cease to be.', 
    ],
    notes   : [
      'जातु (avyaya) = कदाचित्'
    ],
  },
  {
    chapter : 2,
    number  : 13,
    sloka   : [
      'देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा |',
      'तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||'
    ],
    vicheda : [
      'देहिनः अस्मिन् यथा देहे कौमारं यौवनं जरा |',
      'तथा देह-अन्तर प्राप्तिः धीरः तत्र न मुह्यति ||'
    ],
    anvaya  : [
      '(यथा) देहिनः अस्मिन् देहे कौमारं यौवनं जरा',
      '(तथा) देह-अन्तर प्राप्तिः',
      'धीरः तत्र न मुह्यति',
    ],
    transl  : [
      'Just as the embodied soul continuously passes from childhood to youth to old age, similarly, at the time of death, the soul passes into another body. The wise are not deluded by this.', 
    ],
    notes   : [
      'देहिनः = देहिन् (embodied) - षष्ठी एक.व.'
    ],
  },
  {
    chapter : 2,
    number  : 14,
    sloka   : [
      'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदु:खदा: |',
      'आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||'
    ],
    vicheda : [
      'मात्रा-स्पर्शा: तु कौन्तेय शीत-उष्ण-सुख-दु:ख-दा: |',
      'आगम-अपायिन: अनित्या: तान् तितिक्षस्व भारत ||'
    ],
    anvaya  : [
      'हे कौन्तेय!',
      'मात्रा-स्पर्शा: तु',
      '(शीत-उष्ण-सुख-दु:ख-दा:) (आगम-अपायिन:) (अनित्या:) (सन्ति) |',
      'हे भारत! तान् तितिक्षस्व |'
    ],
    transl  : [
      'O son of Kunti, the contact between the senses and the sense objects gives rise to fleeting perceptions of happiness and distress. These are non-permanent, and come and go like the winter and summer seasons. O descendent of Bharat, one must learn to tolerate them without being disturbed.', 
    ],
    notes   : [
      'तिज् - endure/tolerate --- कर्तरि लोट्लकारः = तितिक्षस्व',
      'Matrah means those by which are marked off (measured up) sounds etc., i.e. the organs of hearing etc. The sparsah, contacts, of the organs with sound etc. are matra-sparsah. Or, sparsah means those which are contacted, i.e. objects, viz sound etc.'
    ],
  },
  {
    chapter : 2,
    number  : 15,
    sloka   : [
      'यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ |',
      'समदु:खसुखं धीरं सोऽमृतत्वाय कल्पते ||'
    ],
    vicheda : [
      'यं हि न व्यथयन्ति एते पुरुषं पुरुषर्षभ |',
      'सम-दु:ख-सुखं धीरं सः अमृतत्वाय कल्पते ||'
    ],
    anvaya  : [
      'हे पुरुषर्षभ !',
      'एते हि यं (सम-दु:ख-सुखं) (धीरं) पुरुषं न व्यथयन्ति |',
      'सः अमृतत्वाय कल्पते |',
    ],
    transl  : [
      'O Arjun, noblest amongst men, that person who is not affected by happiness and distress, and remains steady in both, becomes eligible for liberation.', 
    ],
    notes   : [
      'व्यथ् - to be vexed/feared/irritated णिजन्ते - व्यथयन्ति',
      'कल्पते (कृप्) - to be able/capable',
    ],
  },
  {
    chapter : 2,
    number  : 16,
    sloka   : [
      'नासतो विद्यते भावो नाभावो विद्यते सत: |',
      'उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभि: ||'
    ],
    vicheda : [
      'न असतः विद्यते भावः न अभावः विद्यते सत: |',
      'उभयोः अपि दृष्टः अन्तः तु अनयोः तत्त्व-दर्शिभिः'
    ],
    anvaya  : [
      'असतः भावः न विद्यते',
      'सत: अभावः न विद्यते',
      '(अपि तु)',
      'उभयोः अनयोः अन्तः तत्त्व-दर्शिभिः दृष्टः'
    ],
    transl  : [
      'Of the transient there is no endurance, and of the eternal there is no cessation. This has verily been observed and concluded by the seers of the Truth, after studying the nature of both.', 
    ],
    notes   : [
      'असतः = असत् (पुं) - षष्ठी - एक.व.',
      'सत: = सत् (पुं) - षष्ठी - एक.व.',
      'विद्यते = विद् (4A - दिवादिः - to exist) - कर्तरि लट् - प्र.पु. - एक.व.',
      'उभयोः = उभ (सर्व पुं - dual) - षष्ठी - द्वि.व. - (only द्विव exists for this प्रातिपदिक)',
      'अनयोः = इदम् (सर्वनाम पुं) - षष्ठी - द्वि.व.',
      'अन्तः = अन्त ( पुं - ending/conclusion) - प्रथमा - एक.व.',
      'तत्त्व = (अकारान्तः नपुं) Truth/Reality',
      'दर्शिभिः = दर्शिन् (पुं - one who sees) - तृतीया - बहु.व.',
      'दृष्टः = दृश् (1P - भ्वादिः - to see) - क्त प्रत्यय (कर्मणि प्रयोगः)',
    ],
  },
  {
    chapter : 2,
    number  : 17,
    sloka   : [
      'अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् |',
      'विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ||'
    ],
    vicheda : [
      'अविनाशि तु तत् विद्धि येन सर्वम् इदं ततम् |',
      'विनाशम् अव्ययस्य अस्य न कश्चित् कर्तुम् अर्हति ||'
    ],
    anvaya  : [
      '(येन इदं सर्वम् ततम्) तत् (तु) अविनाशि विद्धि |',
      'कश्चित् (अस्य) अव्ययस्य विनाशम् कर्तुम् न अर्हति |'
    ],
    transl  : [
      'That which pervades the entire body, know it to be indestructible. No one can cause the destruction of the imperishable soul.',
    ],
    notes   : [
      'इदम् = इदम् (सर्वनाम न.पु.) - प्रथमा - एक.व.',
      'सर्वम् = सर्व (सर्वनाम न.पु.) - प्रथमा - एक.व.',
      'ततम् = तन् (8A - तनादिः - to spread) - क्त प्रत्यय (कर्मणि प्रयोगः)',
      'विद्धि = विद् (2P - अदादिः - to know) - कर्तरि लोट् - म.पु. - एक.व.',
      'अस्य = इदम् (सर्वनाम न.पु.) - षष्ठी - एक.व.',
      'अव्ययस्य = अव्यय ( नपुंसक - unchangeable ) - षष्ठी - एक.व.',
      'अर्हति = अर्ह् (1P, 10U - भ्वादिः, चुरादिः - to be worthy) - कर्तरि लट् - परस्मैपद - प्र.पु. - एक.व.',
    ],
  },
  {
    chapter : 2,
    number  : 18,
    sloka   : [
      'अन्तवन्त इमे देहा नित्यस्योक्ता: शरीरिण: |',
      'अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ||',
    ],
    vicheda : [
      'अन्तवन्तः इमे देहाः नित्यस्य उक्ताः शरीरिण: |',
      'अनाशिनः अप्रमेयस्य तस्मात् युध्यस्व भारत ||',
    ],
    anvaya  : [
      '(नित्यस्य अनाशिनः अप्रमेयस्य) शरीरिण: (इमे) देहाः अन्तवन्तः उक्ताः |',
      'हे भारत! तस्मात् युध्यस्व |',
    ],
    transl  : [
      'Only the material body is perishable; the embodied soul within is indestructible, immeasurable, and eternal. Therefore, fight, O descendent of Bharat.',
    ],
    notes   : [
      'नित्यस्य = नित्य (eternal - पु.लि. - नित्यः) - षष्ठी.वि. - एक.व.',
      'अनाशिनः = अ-नाशिनः - नाशिन् (perishable - पु.लि. - नाशी) - षष्ठी.वि. -एक.व.',
      'अप्रमेयस्य = अ-प्र-मेयस्य - मेय/मान (measurable - पु.लि. - प्रमेयः) -षष्ठी.वि. - एक.व.',
      'शरीरिणः = शरीरिन् (embodied - पु.लि. - शरीरी) - षष्ठी.वि. - एक.व.',
      'इमे = इदम् (सर्वनाम पु.लि.) - प्रथमा - बहु.व.',
      'अन्तवन्तः = अन्त (conclusion/ending - वतुप्) - पु.लि. - बहु.व.',
      'उक्ताः = वच् (2P, 10U - अदादि, चुरादि - to speak) - क्त प्रत्यय(कृदन्त) (कर्मणि प्रयोगः) - उक्त - पु.लि. - बहु.व.',
      'तस्मात् = therefore',
      'युध्यस्व = युध् (4A - दिवादि - to fight) - कर्तरि लोट् - म.पु. - एक.व.',
    ],
  },
  {
    chapter : 2,
    number  : 19,
    sloka   : [
      'य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् |',
      'उभौ तौ न विजानीतो नायं हन्ति न हन्यते ||'
    ],
    vicheda : [
      'य: एनं वेत्ति हन्तारं य: च एनं मन्यते हतम् |',
      'उभौ तौ न विजानीतः न अयं हन्ति न हन्यते ||'
    ],
    anvaya  : [
      '- य: एनं हन्तारं वेत्ति',
      'च',
      '- य: एनं हतं मन्यते',
      '- तौ उभौ न विजानीतः',
      'अयं न हन्ति, न हन्यते'
    ],
    transl  : [
      'Neither of them is in knowledge—the one who thinks the soul can slay and the one who thinks the soul can be slain. For truly, the soul neither kills nor can it be killed.'
    ],
    notes   : [
      'य: = who',
      'एनम् = this (Self / Atman)',
      'वेत्ति = knows / considers',
      'हन्तारम् = as the killer',
      'य: = who',
      'च = and',
      'मन्यते = thinks',
      'हतम् = as killed',
      'उभौ = both',
      'तौ = those two',
      'न = not',
      'विजानीतः = understand / truly know',
      'अयम् = this (Self)',
      'न = not',
      'हन्ति = kills',
      'न = not',
      'हन्यते = is killed'
    ],
  },
  {
    chapter : 2,
    number  : 20,
    sloka   : [
      'न जायते म्रियते वा कदाचि',
      'नायं भूत्वा भविता वा न भूय: |',
      'अजो नित्य: शाश्वतोऽयं पुराणो',
      'न हन्यते हन्यमाने शरीरे ||'
    ],
    vicheda : [
      'न जायते म्रियते वा कदाचित्',
      'न अयं भूत्वा भविता वा न भूय: |',
      'अज: नित्य: शाश्वत: अयं पुराण:',
      'न हन्यते हन्यमाने शरीरे ||'
    ],
    anvaya  : [
      'अयं (आत्मा)',
      '- (कदाचित्) न जायते म्रियते वा',
      '- न भूत्वा (भूयः) भविता वा',
      'अयं (आत्मा) अजः नित्यः शाश्वतः पुराणः',
      '(अयं आत्मा) (हन्यमाने शरीरे) न हन्यते',
    ],
    transl  : [
      'The Self is never born, nor does it ever die;',
      'it does not come into being again, having once existed.',
      'It is unborn, eternal, everlasting, and ancient.',
      'It is not slain when the body is slain.',
    ],
    notes   : [
      'न = not',
      'जायते = is born - (जन् - 4A - दिवादिः - to be born - कर्तरि लट् - प्र.पु. - एक.व.)',
      'म्रियते = dies - (मृ - 6A - तुदादिः - to die - कर्तरि लट् - प्र.पु. - एक.व.)',
      'वा = or',
      'कदाचित् = at any time',
      'न = not',
      'अयम् = this (Self)',
      'भूत्वा = having come into being - (भू - 1P - to exist - क्त्वा - अव्ययम्)',
      'भविता = will be (again) - (भू - 1P - to exist - कर्तरि लुट् - Future - अनद्यतने)',
      'वा = or',
      'न = not',
      'भूय: = again',
      'अज: = unborn',
      'नित्य: = eternal',
      'शाश्वत: = everlasting',
      'अयम् = this (Self)',
      'पुराण: = ancient',
      'न = not',
      'हन्यते = is slain',
      'हन्यमाने = when being killed',
      'शरीरे = the body',
      'हन्यमाने शरीरे - सति सप्तमी प्रयोगः - when the body is being killed'
    ],
  },
  {
    chapter : 2,
    number  : 21,
    sloka   : [
      'वेदाविनाशिनं नित्यं य एनमजमव्ययम् |',
      'कथं स पुरुष: पार्थ कं घातयति हन्ति कम् ||',
    ],
    vicheda : [
      'वेद अविनाशिनं नित्यं यः एनम् अजम् अव्ययम् |',
      'कथं सः पुरुष: पार्थ कं घातयति हन्ति कम् ||',
    ],
    anvaya  : [
      'हे पार्थ!',
      'यः एनम् अविनाशिनं नित्यं अजम् अव्ययम् वेद',
      'सः पुरुष: (कथं) कं घातयति कं हन्ति ?',
    ],
    transl  : [
      'O Arjuna, he who knows the Self as indestructible, eternal, unborn, and unchanging — how can that person slay anyone, or cause anyone to be slain?',
    ],
    notes   : [
      'वेद/वेत्ति = knows - (विद् - 2P - अदादिः - to know - कर्तरि लट् - प्र.पु. - एक.व.)',
      'अविनाशिनम् = indestructible',
      'नित्यम् = eternal',
      'यः = who',
      'एनम् = this (Self)',
      'अजम् = unborn',
      'अव्ययम् = unchanging / undecaying',
      'कथम् = how',
      'सः = that',
      'पुरुषः = person / man',
      'पार्थ = O Arjuna',
      'कं = whom',
      'घातयति = causes to be killed - (हन् - 2P - अदादिः - to kill - णिजन्ते - कर्तरि लट् - प्र.पु. - एक.व.)',
      'हन्ति = kills - (हन् - 2P - अदादिः - to kill - कर्तरि लट् - प्र.पु. - एक.व.)',
      'कम् = whom'
    ],
  },
  {
    chapter : 2,
    number  : 22,
    sloka   : [
      'वासांसि जीर्णानि यथा विहाय',
      'नवानि गृह्णाति नरोऽपराणि |',
      'तथा शरीराणि विहाय जीर्णा',
      'न्यन्यानि संयाति नवानि देही ||',
    ],
    vicheda : [
      'वासांसि जीर्णानि यथा विहाय',
      'नवानि गृह्णाति नर: अपराणि |',
      'तथा शरीराणि विहाय जीर्णानि',
      'अन्यानि संयाति नवानि देही ||',
    ],
    anvaya  : [
      'यथा',
      '- नर: जीर्णानि वासांसि विहाय, नवानि अपराणि गृह्णाति |',
      'तथा',
      '- देही जीर्णानि शरीराणि विहाय, नवानि अन्यानि संयाति |',
    ],
    transl  : [
      'Just as a person discards old clothes and puts on new ones, so too the embodied Self discards old, worn-out bodies and enters new ones.',
    ],
    notes   : [
      'वासांसि = clothes',
      'जीर्णानि = old / worn-out',
      'यथा = just as',
      'विहाय = having discarded',
      'नवानि = new',
      'गृह्णाति = takes / accepts',
      'नर: = man / person',
      'अपराणि = others / different ones',
      'तथा = in the same way',
      'शरीराणि = bodies',
      'विहाय = having given up',
      'जीर्णानि = worn-out / old',
      'अन्यानि = other',
      'संयाति = enters / assumes',
      'नवानि = new',
      'देही = the embodied (Self / soul)'    
    ],
  },
  {
    chapter : 2,
    number  : 23,
    sloka   : [
      'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावक:',
      'न चैनं क्लेदयन्त्यापो न शोषयति मारुत: ||',
    ],
    vicheda : [
      'न एनं छिन्दन्ति शस्त्राणि न एनं दहति पावक:',
      'न च एनं क्लेदयन्ति आप: न शोषयति मारुत: ||',
    ],
    anvaya  : [
      'शस्त्राणि एनं न छिन्दन्ति |',
      'पावकः एनं न दहति |',
      'आपः च एनं न क्लेदयन्ति |',
      'मारुतः एनं न शोषयति |',
    ],
    transl  : [
      'Weapons do not cut this Self, fire does not burn it, water does not wet it, and wind does not dry it.',
    ],
    notes   : [
      'न = not',
      'एनम् = this (Self)',
      'छिन्दन्ति = cut',
      'शस्त्राणि = weapons',
      'दहति = burns',
      'पावक: = fire',
      'क्लेदयन्ति = wet / drench / moisten',
      'आप: = water',
      'शोषयति = dries',
      'मारुत: = wind',
      'च = and'  
    ],
  },
  {
    chapter : 2,
    number  : 24,
    sloka   : [
      'अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च |',
      'नित्य: सर्वगत: स्थाणुरचलोऽयं सनातन: ||',
    ],
    vicheda : [
      'अच्छेद्य: अयम् अदाह्य: अयम् अक्लेद्य: अशोष्य: एव च |',
      'नित्य: सर्वगत: स्थाणु: अचल: अयम् सनातन: ||',
    ],
    anvaya  : [
      'अयम् (आत्मा)',
      '- अच्छेद्य: अदाह्य: अक्लेद्य: अशोष्य: एव च |',
      '- नित्य: सर्वगत: स्थाणु: अचल: सनातन: |',
    ],
    transl  : [
      'This Self is uncuttable, unburnable, unwettable, and undryable. It is eternal, all-pervading, stable, immovable, and everlasting.',
    ],
    notes   : [
      'अच्छेद्य: = uncuttable',
      'अयम् = this (Self)',
      'अदाह्य: = incombustible / unburnable',
      'अक्लेद्य: = unwettable',
      'अशोष्य: = undryable',
      'एव = indeed',
      'च = and',
      'नित्य: = eternal',
      'सर्वगत: = all-pervading',
      'स्थाणु: = stable / firm',
      'अचल: = immovable',
      'सनातन: = everlasting / ancient'
    ],
  },
];

export default verses;