/* =============================================
   TSAKANI HOLIDAYS — MAIN JAVASCRIPT
   - Language switcher (EN / NL)
   - Mobile navigation toggle
   - Navbar scroll effect
   - FAQ accordion
   - Gallery lightbox
   - Booking form → WhatsApp
   - Scroll-reveal animations
   ============================================= */

/* ===== TRANSLATIONS ===== */
const translations = {
  de: {
    nav_tours:    'Touren',
    nav_parks:    'Parks',
    nav_about:    'Über uns',
    nav_gallery:  'Galerie',
    nav_faq:      'FAQ',
    nav_book:     'Jetzt Buchen',

    hero_eyebrow: 'Kenianische Küste — Authentische Safaris',
    hero_title:   'Erlebe das Wilde Herz Kenias',
    hero_sub:     'Direkt bei Furry buchen — dein lokaler Guide. Keine Agenturen, keine versteckten Kosten. Einfach Kenia pur.',
    hero_cta_book:    'Safari Buchen',
    hero_cta_explore: 'Touren Entdecken',

    usp_local:       '100% Lokaler Guide',
    usp_whatsapp:    'Buchung per WhatsApp',
    usp_price:       'Faire & transparente Preise',
    usp_sustainable: 'Nachhaltiger Tourismus',

    tours_tag:   'Unsere Safari-Touren',
    tours_title: 'Top 5 Safari-Erlebnisse',
    tours_sub:   'Jede Tour wird persönlich von Furry geleitet — einem lokalen Experten, der diese Parks wie seinen eigenen Garten kennt.',
    badge_popular: 'Am beliebtesten',

    tour1_name: 'Tsavo-Ost-Nationalpark',
    tour1_tag:  'Heimat der berühmten roten Elefanten Kenias',
    tour1_desc: 'Kenias größter Nationalpark. Erlebe riesige Herden rotbestäubter Elefanten, Löwen, Leoparden und endlose goldene Savanne — nur 3 Stunden von Mombasa entfernt.',
    tour1_dur:  '1–2 Tage',
    tour1_dist: '~3 Std. von Mombasa',

    tour2_name: 'Tsavo-West-Nationalpark',
    tour2_tag:  'Dramatische Landschaft & kristallklare Quellen',
    tour2_desc: 'Schroffe Vulkanhügel, die berühmten Mzima-Quellen, schwarze Nashörner und unglaubliche Tierwelt in einer einzigartigen, wilden Kulisse.',
    tour2_dur:  '1–2 Tage',
    tour2_dist: '~3 Std. von Mombasa',

    tour3_name: 'Amboseli-Nationalpark',
    tour3_tag:  'Elefanten am Fuße des Kilimandscharo',
    tour3_desc: 'Beobachte riesige Elefantenherden mit dem majestätischen, schneebedeckten Kilimandscharo als Kulisse. Ein Anblick, den du nie vergessen wirst.',
    tour3_dur:  '1–2 Tage',
    tour3_dist: '~5 Std. von Mombasa',

    tour4_name: 'Shimba-Hills-Reservat',
    tour4_tag:  'Küstenregenwald mit seltener Pferdeantilope',
    tour4_desc: 'Nur 30 Minuten vom Diani Beach — ein verborgenes Juwel. Dichter Küstenregenwald, die seltene Pferdeantilope, Elefanten und beeindruckende Sheldrick-Wasserfälle.',
    tour4_dur:  'Halber oder ganzer Tag',
    tour4_dist: '30 Min. von Diani',

    tour5_name: 'Wasini-Insel',
    tour5_tag:  'Delfine, Schnorcheln & Suaheli-Kultur',
    tour5_desc: 'Eine ganztägige Dhow-Kreuzfahrt zur Wasini-Insel. Schwimme mit Delfinen, schnorchere im Kisite-Meeresschutzgebiet und genieße ein frisches Meeresfrüchtemittagessen.',
    tour5_dur:  'Ganzer Tag',
    tour5_dist: 'Südküste',

    btn_book_tour: 'Tour Buchen',

    parks_tag:  'Vergleichen',
    parks_title:'Welcher Park ist der Richtige für Dich?',
    parks_sub:  'Nicht sicher, welche Safari du wählen sollst? Hier ist ein schneller Überblick, der dir bei der Entscheidung hilft.',

    park_col_park:      'Park',
    park_col_dist:      'Entfernung von Mombasa',
    park_col_best:      'Ideal für',
    park_col_dur:       'Dauer',
    park_col_highlight: 'Highlight',

    p1_dist: '~230 km (3 Std.)', p1_best: 'Artenvielfalt',         p1_dur: '1–2 Tage',        p1_hl: 'Rote Elefanten & Löwen',
    p2_dist: '~250 km (3 Std.)', p2_best: 'Landschaft & Nashörner', p2_dur: '1–2 Tage',        p2_hl: 'Mzima-Quellen',
    p3_dist: '~340 km (5 Std.)', p3_best: 'Fotografie',             p3_dur: '1–2 Tage',        p3_hl: 'Kilimandscharo-Panorama',
    p4_dist: '~60 km (30 Min.)', p4_best: 'Kurze Tagestouren',      p4_dur: 'Halber–ganzer Tag', p4_hl: 'Seltene Pferdeantilope',
    p5_dist: '~80 km Südküste',  p5_best: 'Meer & Kultur',          p5_dur: 'Ganzer Tag',       p5_hl: 'Schwimmen mit Delfinen',

    about_tag:  'Über Uns',
    about_title:'Lerne Furry kennen — Deinen Guide von der kenianischen Küste',
    about_p1:   'Ich bin Furry Ambari, ein lokaler Safariführer und Fahrer an der wunderschönen kenianischen Küste. Ich habe Jahre damit verbracht, Kenias großartigste Parks zu erkunden — von den weiten roten Ebenen des Tsavo bis zu den nebelumhüllten Hochländern des Amboseli.',
    about_p2:   'Tsakani Holidays entstand aus einer einfachen Idee: Touristen ein authentisches, persönliches Erlebnis bieten und das Tourismusgeld in der lokalen Gemeinschaft halten. Wenn du direkt bei mir buchst, bekommst du mehr Wert und dein Geld unterstützt eine echte kenianische Familie.',
    about_p3:   'Ich bin Vater, Guide und stolzer Kenianer. Ich möchte, dass meine Kinder Zugang zu Bildung haben, und ich möchte, dass meine Gäste mit Erinnerungen für das Leben abreisen.',
    about_f1:   'Lizenzierter professioneller Guide',
    about_f2:   '10+ Jahre Erfahrung in Kenias Parks',
    about_f3:   'Direktbuchung — keine Agenturen',
    about_f4:   'Englisch, Suaheli & etwas Niederländisch',
    about_cta:  'Starte dein Abenteuer',

    gallery_tag:   'Galerie',
    gallery_title: 'Kenia durch unsere Linse',
    gallery_sub:   'Echte Fotos von echten Safaris mit Furry und seinen Gästen.',

    reviews_tag:   'Erfahrungsberichte',
    reviews_title: 'Was unsere Gäste sagen',
    r1_text: '„Furry war ein ausgezeichneter Guide. Er wusste genau, wo er die Löwen finden würde, und sorgte dafür, dass wir uns völlig wohlfühlten. Direkt buchen war die beste Entscheidung!"',
    r1_name: 'Sarah & Tom', r1_loc: 'Vereinigtes Königreich — Tsavo-Ost',
    r2_text: '„Einer der schönsten Tage unseres gesamten Kenia-Urlaubs. Die Delfintour bei Wasini war absolut magisch. Furry hat alles perfekt organisiert und der Preis war sehr fair."',
    r2_name: 'Familie de Vries', r2_loc: 'Niederlande — Wasini-Insel',
    r3_text: '„Amboseli mit dem Kilimandscharo im Hintergrund ... absolut atemberaubend. Furry war professionell, freundlich und wirklich leidenschaftlich für die Tierwelt und das Land."',
    r3_name: 'Michael R.', r3_loc: 'Deutschland — Amboseli',

    faq_tag:  'FAQ',
    faq_title:'Praktische Informationen',
    faq_sub:  'Alles, was du vor deiner Safari wissen musst.',
    faq1_q: 'Was ist im Tourpreis enthalten?',
    faq1_a: 'Alle Touren beinhalten privaten 4x4-Transport, Parkeintrittsgebühren, Mineralwasser und einen englischsprachigen Guide (Furry). Bei mehrtägigen Touren sind Unterkunftsmöglichkeiten in günstigen Lodges nahe der Parks inklusive.',
    faq2_q: 'Wie buche ich eine Tour?',
    faq2_a: 'Du kannst direkt per WhatsApp buchen (am schnellsten) oder das Buchungsformular unten ausfüllen. Furry antwortet persönlich innerhalb weniger Stunden, um deine Tour zu bestätigen.',
    faq3_q: 'Ist Reisen in Kenia sicher?',
    faq3_a: 'Ja — die kenianische Küste und die Nationalparks sind etablierte und gut besuchte Touristenziele. Furry kennt alle Routen in- und auswendig und stellt die Sicherheit seiner Gäste an erste Stelle. Wir empfehlen allen internationalen Besuchern eine Reiseversicherung.',
    faq4_q: 'Was soll ich auf Safari mitnehmen?',
    faq4_a: 'Leichte, neutrale Kleidung (Khaki, Beige), Sonnencreme, Insektenspray, einen Hut, Sonnenbrille, deine Kamera und Abenteuerlust! Wasser und Snacks werden bereitgestellt.',
    faq5_q: 'Kann ich kurzfristig buchen?',
    faq5_a: 'Ja! Wir haben oft noch Plätze für Touren am nächsten Tag. Schick Furry eine WhatsApp-Nachricht und er tut sein Bestes, um dich unterzubringen.',
    faq6_q: 'Bietet ihr Homestays an?',
    faq6_a: 'Homestays kommen bald! Tsakani Holidays wird Aufenthalte bei einheimischen Familien an der kenianischen Küste anbieten — ein wirklich authentisches Kulturerlebnis. Registriere dein Interesse über das Kontaktformular.',

    contact_tag:   'Kontakt',
    contact_title: 'Buche deine Safari heute',
    contact_sub:   'Fülle das Formular aus und Furry meldet sich persönlich bei dir — in der Regel innerhalb weniger Stunden. Oder schreib direkt per WhatsApp.',
    c_loc_label:   'Standort',  c_loc:  'Mombasa, Diani, Mtwapa, Malindi — Kenianische Küste',
    c_wa_label:    'WhatsApp',
    c_lang_label:  'Sprachen', c_lang: 'Englisch, Suaheli, etwas Niederländisch',
    btn_whatsapp:  'WhatsApp Furry',

    f_name:    'Vollständiger Name',
    f_email:   'E-Mail-Adresse',
    f_whatsapp:'WhatsApp-Nummer',
    f_tour:    'Tour wählen',
    f_tour_sel:'Tour auswählen…',
    f_t1:'Tsavo-Ost', f_t2:'Tsavo-West', f_t3:'Amboseli', f_t4:'Shimba Hills', f_t5:'Wasini-Insel', f_t6:'Individuell / Mehrere',
    f_date:    'Gewünschtes Datum',
    f_persons: 'Anzahl Personen',
    f_message: 'Nachricht (optional)',
    f_submit:  'Buchungsanfrage senden',
    f_note:    '* Nach dem Klicken öffnet sich WhatsApp mit deinen vorausgefüllten Daten, damit Furry schnell antworten kann.',

    hs_tag:   'Demnächst verfügbar',
    hs_title: 'Homestays an der kenianischen Küste',
    hs_desc:  'Bald kannst du bei einheimischen Familien in Mtwapa, Malindi oder Diani übernachten. Teile Mahlzeiten, erlebe den Küstenalltag und lerne Kenia weit jenseits der Parks kennen.',
    hs_cta:   'Interesse anmelden',

    ft_tagline: 'Authentische Safari-Erlebnisse von der kenianischen Küste. Direkt buchen, echt reisen.',
    ft_langs:   'Verfügbar in: English · Nederlands · Deutsch',
    ft_nav:     'Schnelllinks',
    ft_contact: 'Kontakt',
    ft_wa:      'WhatsApp Furry',
    ft_owner:   'Inhaber & Guide: Furry Ambari',
    ft_copy:    '© 2025 Tsakani Holidays — Alle Rechte vorbehalten.',
    ft_impact:  '🌍 Mit Wirkung gebaut — zur Unterstützung lokaler Bildung in Kenia',

    err_name:  'Bitte gib deinen vollständigen Namen ein.',
    err_email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    err_tour:  'Bitte wähle eine Tour aus.',
  },
  en: {
    nav_tours:    'Tours',
    nav_parks:    'Parks',
    nav_about:    'About',
    nav_gallery:  'Gallery',
    nav_faq:      'FAQ',
    nav_book:     'Book Now',

    hero_eyebrow: 'Kenyan Coast — Authentic Safaris',
    hero_title:   'Experience the Wild Heart of Kenya',
    hero_sub:     'Book directly with Furry — your local guide. No agencies, no hidden fees. Just Kenya at its best.',
    hero_cta_book:    'Book Your Safari',
    hero_cta_explore: 'Explore Tours',

    usp_local:       '100% Local Guide',
    usp_whatsapp:    'Book via WhatsApp',
    usp_price:       'Fair & Transparent Pricing',
    usp_sustainable: 'Sustainable Tourism',

    tours_tag:  'Our Safari Tours',
    tours_title:'Top 5 Safari Experiences',
    tours_sub:  'Every tour is personally guided by Furry — a local expert who knows these parks like his own backyard.',
    badge_popular: 'Most Popular',

    tour1_name: 'Tsavo East National Park',
    tour1_tag:  "Home of Kenya's famous red elephants",
    tour1_desc: "Kenya's largest national park. Witness massive herds of red-dusted elephants, lions, leopards, and endless golden savanna — just 3 hours from Mombasa.",
    tour1_dur:  '1–2 days',
    tour1_dist: '~3h from Mombasa',

    tour2_name: 'Tsavo West National Park',
    tour2_tag:  'Dramatic landscapes & crystal springs',
    tour2_desc: 'Rugged volcanic hills, the famous Mzima Springs, black rhinos, and incredible wildlife in a dramatic and wild setting unlike any other.',
    tour2_dur:  '1–2 days',
    tour2_dist: '~3h from Mombasa',

    tour3_name: 'Amboseli National Park',
    tour3_tag:  'Elephants beneath Mt. Kilimanjaro',
    tour3_desc: 'Watch giant elephant herds roam freely with the majestic, snow-capped peak of Kilimanjaro as your backdrop. A once-in-a-lifetime view you will never forget.',
    tour3_dur:  '1–2 days',
    tour3_dist: '~5h from Mombasa',

    tour4_name: 'Shimba Hills Reserve',
    tour4_tag:  'Coastal forest with rare sable antelope',
    tour4_desc: 'Only 30 minutes from Diani Beach — a hidden gem. Dense coastal rainforest, the rare sable antelope, elephants, and stunning Sheldrick waterfalls.',
    tour4_dur:  'Half or full day',
    tour4_dist: '30 min from Diani',

    tour5_name: 'Wasini Island',
    tour5_tag:  'Dolphins, snorkelling & Swahili culture',
    tour5_desc: 'A full-day dhow cruise to Wasini Island. Swim with dolphins, snorkel the Kisite Marine Park, and enjoy a fresh seafood lunch on a tropical island.',
    tour5_dur:  'Full day',
    tour5_dist: 'South Coast',

    btn_book_tour: 'Book This Tour',

    parks_tag:  'Compare',
    parks_title:'Which Park is Right for You?',
    parks_sub:  "Not sure which safari to choose? Here's a quick overview to help you decide.",

    park_col_park:  'Park',
    park_col_dist:  'Distance from Mombasa',
    park_col_best:  'Best For',
    park_col_dur:   'Duration',
    park_col_highlight: 'Highlight',

    p1_dist: '~230 km (3 hrs)', p1_best: 'Wildlife variety',  p1_dur: '1–2 days',       p1_hl: 'Red elephants & lions',
    p2_dist: '~250 km (3 hrs)', p2_best: 'Scenery & rhinos',  p2_dur: '1–2 days',       p2_hl: 'Mzima Springs',
    p3_dist: '~340 km (5 hrs)', p3_best: 'Photography',       p3_dur: '1–2 days',       p3_hl: 'Kilimanjaro backdrop',
    p4_dist: '~60 km (30 min)', p4_best: 'Short day trips',   p4_dur: 'Half–full day',  p4_hl: 'Rare sable antelope',
    p5_dist: '~80 km south',    p5_best: 'Ocean & culture',   p5_dur: 'Full day',       p5_hl: 'Dolphin swimming',

    about_tag:  'About Us',
    about_title:"Meet Furry — Your Guide from the Kenyan Coast",
    about_p1:   "I'm Furry Ambari, a local safari guide and driver based on the beautiful Kenyan coast. I've spent years exploring Kenya's greatest parks — from the vast red plains of Tsavo to the misty highlands of Amboseli.",
    about_p2:   "Tsakani Holidays was born out of a simple idea: give tourists an authentic, personal experience while keeping tourism money in the local community. When you book with me directly, you get more value and your money supports a real Kenyan family.",
    about_p3:   "I'm a father, a guide, and a proud Kenyan. I want my children to have access to education, and I want my guests to leave with memories that last a lifetime.",
    about_f1:   'Licensed professional guide',
    about_f2:   "10+ years exploring Kenya's parks",
    about_f3:   'Direct booking — no agencies',
    about_f4:   'English, Swahili & some Dutch',
    about_cta:  'Start Your Adventure',

    gallery_tag: 'Gallery',
    gallery_title:'Kenya Through Our Lens',
    gallery_sub: 'Real photos from real safaris with Furry and his guests.',

    reviews_tag:  'Testimonials',
    reviews_title:'What Our Guests Say',
    r1_text: '"Furry was an outstanding guide. He knew exactly where to find the lions and made us feel completely at ease. Booking directly was the best decision — no agency nonsense!"',
    r1_name: 'Sarah & Tom', r1_loc: 'United Kingdom — Tsavo East',
    r2_text: '"One of the best days of our entire Kenya holiday. The Wasini dolphin trip was absolutely magical. Furry arranged everything perfectly and the price was very honest and fair."',
    r2_name: 'Familie de Vries', r2_loc: 'Netherlands — Wasini Island',
    r3_text: '"Amboseli with Kilimanjaro in the background... absolutely breathtaking. Furry was professional, friendly, and genuinely passionate about the wildlife and the land."',
    r3_name: 'Michael R.', r3_loc: 'Germany — Amboseli',

    faq_tag:  'FAQ',
    faq_title:'Practical Information',
    faq_sub:  'Everything you need to know before your safari.',
    faq1_q: 'What is included in the tour price?',
    faq1_a: 'All tours include private 4x4 transport, park entrance fees, bottled water, and an English-speaking guide (Furry). Overnight tours include accommodation options at affordable lodges near the parks.',
    faq2_q: 'How do I book a tour?',
    faq2_a: 'You can book via WhatsApp (fastest) or use the booking form below. Furry responds personally within a few hours to confirm your tour and details.',
    faq3_q: 'Is it safe to travel in Kenya?',
    faq3_a: 'Yes — the Kenyan coast and national parks are well-established, well-visited tourist destinations. Furry knows all the routes intimately and puts guest safety first. We recommend travel insurance for all international visitors.',
    faq4_q: 'What should I bring on safari?',
    faq4_a: 'Light neutral-coloured clothing (khaki, beige), sunscreen, insect repellent, a hat, sunglasses, your camera, and a sense of adventure! Water and snacks are provided.',
    faq5_q: 'Can I book last minute?',
    faq5_a: 'Yes! We often have availability for next-day tours. Send a WhatsApp message and Furry will do his very best to accommodate you.',
    faq6_q: 'Do you offer homestays?',
    faq6_a: "Homestays are coming soon! Tsakani Holidays will offer stays with local families on the Kenyan coast — a truly authentic cultural experience. Register your interest via the contact form below.",

    contact_tag:   'Get in Touch',
    contact_title: 'Book Your Safari Today',
    contact_sub:   'Fill in the form and Furry will contact you personally — usually within a few hours. Or reach out directly on WhatsApp.',
    c_loc_label:   'Location',   c_loc:  'Mombasa, Diani, Mtwapa, Malindi — Kenyan Coast',
    c_wa_label:    'WhatsApp',
    c_lang_label:  'Languages',  c_lang: 'English, Swahili, some Dutch',
    btn_whatsapp:  'Chat on WhatsApp',

    f_name:    'Full Name',
    f_email:   'Email Address',
    f_whatsapp:'WhatsApp Number',
    f_tour:    'Choose Tour',
    f_tour_sel:'Select a tour…',
    f_t1:'Tsavo East', f_t2:'Tsavo West', f_t3:'Amboseli', f_t4:'Shimba Hills', f_t5:'Wasini Island', f_t6:'Custom / Multiple',
    f_date:    'Preferred Date',
    f_persons: 'Number of Persons',
    f_message: 'Message (optional)',
    f_submit:  'Send Booking Request',
    f_note:    '* Clicking submit will open WhatsApp with your details pre-filled so Furry can reply quickly.',

    hs_tag:   'Coming Soon',
    hs_title: 'Homestays on the Kenyan Coast',
    hs_desc:  'Soon you can stay with local families in Mtwapa, Malindi, or Diani. Share meals, experience daily coastal life, and connect with Kenya far beyond the parks. Cultural exchange, authentic and fair.',
    hs_cta:   'Register Your Interest',

    ft_tagline: 'Authentic safari experiences from the Kenyan coast. Book direct, travel real.',
    ft_langs:   'Available in: English · Nederlands · Deutsch',
    ft_nav:     'Quick Links',
    ft_contact: 'Contact',
    ft_wa:      'WhatsApp Furry',
    ft_owner:   'Owner & Guide: Furry Ambari',
    ft_copy:    '© 2025 Tsakani Holidays — All rights reserved.',
    ft_impact:  '🌍 Built with impact — supporting local education in Kenya',

    err_name:  'Please enter your full name.',
    err_email: 'Please enter a valid email address.',
    err_tour:  'Please select a tour.',
  },

  nl: {
    nav_tours:    'Reizen',
    nav_parks:    'Parken',
    nav_about:    'Over ons',
    nav_gallery:  'Galerij',
    nav_faq:      'FAQ',
    nav_book:     'Boek Nu',

    hero_eyebrow: 'Keniaanse Kust — Authentieke Safari\'s',
    hero_title:   'Beleef het Wilde Hart van Kenia',
    hero_sub:     'Boek direct bij Furry — jouw lokale gids. Geen tussenpersonen, geen verborgen kosten. Gewoon Kenia op zijn best.',
    hero_cta_book:    'Boek Jouw Safari',
    hero_cta_explore: 'Bekijk Reizen',

    usp_local:       '100% Lokale Gids',
    usp_whatsapp:    'Boeken via WhatsApp',
    usp_price:       'Eerlijke & Transparante Prijzen',
    usp_sustainable: 'Duurzaam Toerisme',

    tours_tag:   'Onze Safari Reizen',
    tours_title: 'Top 5 Safari Ervaringen',
    tours_sub:   'Elke reis wordt persoonlijk begeleid door Furry — een lokale expert die deze parken als zijn achtertuin kent.',
    badge_popular: 'Meest Populair',

    tour1_name: 'Tsavo East Nationaal Park',
    tour1_tag:  "Thuis van Kenia's beroemde rode olifanten",
    tour1_desc: "Kenia's grootste nationaal park. Aanschouw enorme kuddes olifanten met rood stof, leeuwen, luipaarden en eindeloze gouden savanne — slechts 3 uur van Mombasa.",
    tour1_dur:  '1–2 dagen',
    tour1_dist: '~3u van Mombasa',

    tour2_name: 'Tsavo West Nationaal Park',
    tour2_tag:  'Dramatisch landschap & kristalhelder water',
    tour2_desc: 'Ruige vulkanische heuvels, de beroemde Mzima Springs, zwarte neushoorns en ongelooflijk veel wildlife in een wild en dramatisch decor.',
    tour2_dur:  '1–2 dagen',
    tour2_dist: '~3u van Mombasa',

    tour3_name: 'Amboseli Nationaal Park',
    tour3_tag:  'Olifanten aan de voet van de Kilimanjaro',
    tour3_desc: 'Zie reusachtige olifantskuddes vrij rondtrekken met de majestueuze, besneeuwde Kilimanjaro als achtergrond. Een uitzicht dat je nooit vergeet.',
    tour3_dur:  '1–2 dagen',
    tour3_dist: '~5u van Mombasa',

    tour4_name: 'Shimba Hills Reservaat',
    tour4_tag:  'Kustregenwoud met zeldzame sabelantilopen',
    tour4_desc: 'Slechts 30 minuten van Diani Beach — een verborgen parel. Dicht kustregenwoud, de zeldzame sabelantilope, olifanten en prachtige Sheldrick-watervallen.',
    tour4_dur:  'Halve of hele dag',
    tour4_dist: '30 min van Diani',

    tour5_name: 'Wasini Eiland',
    tour5_tag:  'Dolfijnen, snorkelen & Swahili cultuur',
    tour5_desc: 'Een dagtocht per dhow naar Wasini Eiland. Zwem met dolfijnen, snorkel in het Kisite Marine Park en geniet van een verse zeevruchtenmaaltijd op het eiland.',
    tour5_dur:  'Hele dag',
    tour5_dist: 'Zuidkust',

    btn_book_tour: 'Boek Deze Reis',

    parks_tag:  'Vergelijken',
    parks_title:'Welk Park Past Bij Jou?',
    parks_sub:  'Twijfel je welke safari je moet kiezen? Hier is een handig overzicht om je te helpen beslissen.',

    park_col_park:      'Park',
    park_col_dist:      'Afstand van Mombasa',
    park_col_best:      'Ideaal voor',
    park_col_dur:       'Duur',
    park_col_highlight: 'Hoogtepunt',

    p1_dist: '~230 km (3 uur)', p1_best: 'Verscheidenheid wildlife', p1_dur: '1–2 dagen',     p1_hl: 'Rode olifanten & leeuwen',
    p2_dist: '~250 km (3 uur)', p2_best: 'Landschap & neushoorns',  p2_dur: '1–2 dagen',     p2_hl: 'Mzima Springs',
    p3_dist: '~340 km (5 uur)', p3_best: 'Fotografie',              p3_dur: '1–2 dagen',     p3_hl: 'Kilimanjaro uitzicht',
    p4_dist: '~60 km (30 min)', p4_best: 'Korte uitstapjes',        p4_dur: 'Halve–hele dag', p4_hl: 'Zeldzame sabelantilope',
    p5_dist: '~80 km zuidkust', p5_best: 'Zee & cultuur',           p5_dur: 'Hele dag',      p5_hl: 'Zwemmen met dolfijnen',

    about_tag:  'Over Ons',
    about_title:'Maak Kennis met Furry — Jouw Gids van de Keniaanse Kust',
    about_p1:   "Ik ben Furry Ambari, een lokale safarigids en chauffeur aan de prachtige Keniaanse kust. Ik heb jaren doorgebracht in de mooiste parken van Kenia — van de wijdse rode vlaktes van Tsavo tot de mistige hooglanden van Amboseli.",
    about_p2:   "Tsakani Holidays ontstond uit een simpel idee: toeristen een authentieke, persoonlijke ervaring geven en het toerismegeld in de lokale gemeenschap houden. Als je direct bij mij boekt, krijg je meer waarde en steun je een echt Keniaans gezin.",
    about_p3:   "Ik ben een vader, een gids en een trotse Keniaan. Ik wil dat mijn kinderen toegang houden tot onderwijs en dat mijn gasten vertrekken met herinneringen voor het leven.",
    about_f1:   'Erkend professioneel gids',
    about_f2:   "10+ jaar ervaring in Kenia's parken",
    about_f3:   'Direct boeken — geen tussenpersonen',
    about_f4:   'Engels, Swahili & een beetje Nederlands',
    about_cta:  'Begin Jouw Avontuur',

    gallery_tag:  'Galerij',
    gallery_title:"Kenia Door Onze Lens",
    gallery_sub:  'Echte foto\'s van echte safari\'s met Furry en zijn gasten.',

    reviews_tag:   'Ervaringen',
    reviews_title: 'Wat Onze Gasten Zeggen',
    r1_text: '"Furry was een uitstekende gids. Hij wist precies waar hij de leeuwen kon vinden en zorgde dat we ons altijd op ons gemak voelden. Direct boeken was de beste beslissing!"',
    r1_name: 'Sarah & Tom', r1_loc: 'Verenigd Koninkrijk — Tsavo East',
    r2_text: '"Een van de mooiste dagen van onze hele Kenia-vakantie. De dolfijntocht bij Wasini was absoluut magisch. Furry regelde alles perfect en de prijs was heel eerlijk."',
    r2_name: 'Familie de Vries', r2_loc: 'Nederland — Wasini Eiland',
    r3_text: '"Amboseli met de Kilimanjaro op de achtergrond... adembenemend. Furry was professioneel, vriendelijk en oprecht gepassioneerd over de wildlife en het land."',
    r3_name: 'Michael R.', r3_loc: 'Duitsland — Amboseli',

    faq_tag:  'FAQ',
    faq_title:'Praktische Informatie',
    faq_sub:  'Alles wat je moet weten voordat je jouw safari boekt.',
    faq1_q: 'Wat is inbegrepen in de tourprijs?',
    faq1_a: 'Alle reizen zijn inclusief privévervoer in onze 4x4, parkentreden, mineraalwater en een Engelstalige gids (Furry). Meerdaagse reizen zijn inclusief accommodatie in betaalbare lodges bij de parken.',
    faq2_q: 'Hoe boek ik een reis?',
    faq2_a: 'Je kunt direct via WhatsApp boeken (snelst) of het boekingsformulier hieronder invullen. Furry reageert persoonlijk binnen een paar uur om jouw boeking te bevestigen.',
    faq3_q: 'Is het veilig om in Kenia te reizen?',
    faq3_a: 'Ja — de Keniaanse kust en de nationale parken zijn gevestigde en druk bezochte toeristische bestemmingen. Furry kent alle routes door en door en stelt de veiligheid van zijn gasten voorop. We raden reisverzekering aan voor alle internationale bezoekers.',
    faq4_q: 'Wat moet ik meenemen op safari?',
    faq4_a: 'Lichte, neutrale kleding (khaki, beige), zonnebrandcrème, insectenspray, een hoed, zonnebril, je camera en avontuurslust! Water en snacks worden verzorgd.',
    faq5_q: 'Kan ik last minute boeken?',
    faq5_a: 'Ja! We hebben vaak ruimte voor reizen van de volgende dag. Stuur Furry een WhatsApp-bericht en hij doet zijn uiterste best om je te accommoderen.',
    faq6_q: 'Bieden jullie homestays aan?',
    faq6_a: "Homestays komen eraan! Tsakani Holidays gaat verblijven bij lokale gezinnen aan de Keniaanse kust aanbieden — een echte, authentieke culturele ervaring. Registreer je interesse via het contactformulier.",

    contact_tag:   'Neem Contact Op',
    contact_title: 'Boek Jouw Safari Vandaag',
    contact_sub:   'Vul het formulier in en Furry neemt persoonlijk contact op — meestal binnen een paar uur. Of stuur direct een WhatsApp.',
    c_loc_label:   'Locatie',    c_loc:  'Mombasa, Diani, Mtwapa, Malindi — Keniaanse Kust',
    c_wa_label:    'WhatsApp',
    c_lang_label:  'Talen',      c_lang: 'Engels, Swahili, een beetje Nederlands',
    btn_whatsapp:  'WhatsApp Furry',

    f_name:    'Volledige Naam',
    f_email:   'E-mailadres',
    f_whatsapp:'WhatsApp Nummer',
    f_tour:    'Kies een Reis',
    f_tour_sel:'Selecteer een reis…',
    f_t1:'Tsavo East', f_t2:'Tsavo West', f_t3:'Amboseli', f_t4:'Shimba Hills', f_t5:'Wasini Eiland', f_t6:'Meerdere / Eigen wens',
    f_date:    'Gewenste Datum',
    f_persons: 'Aantal Personen',
    f_message: 'Bericht (optioneel)',
    f_submit:  'Stuur Boekingsverzoek',
    f_note:    '* Na klikken opent WhatsApp met jouw gegevens vooringevuld, zodat Furry snel kan reageren.',

    hs_tag:   'Binnenkort Beschikbaar',
    hs_title: 'Homestays aan de Keniaanse Kust',
    hs_desc:  'Binnenkort kun je verblijven bij lokale gezinnen in Mtwapa, Malindi of Diani. Deel maaltijden, ervaar het dagelijkse kustleven en maak écht contact met Kenia — ver voorbij de parken.',
    hs_cta:   'Meld Je Interesse',

    ft_tagline: 'Authentieke safari-ervaringen van de Keniaanse kust. Direct boeken, écht reizen.',
    ft_langs:   'Beschikbaar in: English · Nederlands · Deutsch',
    ft_nav:     'Snelle Links',
    ft_contact: 'Contact',
    ft_wa:      'WhatsApp Furry',
    ft_owner:   'Eigenaar & Gids: Furry Ambari',
    ft_copy:    '© 2025 Tsakani Holidays — Alle rechten voorbehouden.',
    ft_impact:  '🌍 Gebouwd met impact — ten behoeve van onderwijs in Kenia',

    err_name:  'Vul je volledige naam in.',
    err_email: 'Vul een geldig e-mailadres in.',
    err_tour:  'Selecteer een reis.',
  }
};

/* ===== STATE ===== */
let currentLang = localStorage.getItem('tsak_lang') || 'en';
let lightboxImages = [];
let lightboxIndex = 0;

/* ===== LANGUAGE SWITCHER ===== */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  document.documentElement.lang = lang;
  localStorage.setItem('tsak_lang', lang);
  currentLang = lang;
}

function initLangSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    if (btn.dataset.lang === currentLang) btn.classList.add('active');
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTranslations(btn.dataset.lang);
    });
  });
  applyTranslations(currentLang);
}

/* ===== NAVBAR ===== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });
}

/* ===== FAQ ACCORDION ===== */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(openBtn => {
        openBtn.setAttribute('aria-expanded', 'false');
        openBtn.nextElementSibling.hidden = true;
      });

      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });
}

/* ===== GALLERY LIGHTBOX ===== */
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  lightboxImages = Array.from(grid.querySelectorAll('img')).map(i => ({
    src: i.src,
    alt: i.alt
  }));

  grid.querySelectorAll('.gallery-item').forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
  });

  function openLightbox(idx) {
    lightboxIndex = idx;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const entry = lightboxImages[lightboxIndex];
    img.src = entry.src;
    img.alt = entry.alt;
  }

  function navigate(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
  }

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn.addEventListener('click', () => navigate(1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

/* ===== BOOKING FORM → WHATSAPP ===== */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const WHATSAPP_NUMBER = '31653728882';

  function showError(fieldId, key) {
    const el = document.getElementById('error-' + fieldId);
    if (el) el.textContent = translations[currentLang][key] || '';
  }

  function clearErrors() {
    document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    document.querySelectorAll('.form-group input, .form-group select').forEach(el => {
      el.style.borderColor = '';
    });
  }

  function markInvalid(input) {
    input.style.borderColor = '#D0342C';
    input.focus();
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();

    const name     = form.querySelector('#fname').value.trim();
    const email    = form.querySelector('#femail').value.trim();
    const tour     = form.querySelector('#ftour').value;
    const date     = form.querySelector('#fdate').value;
    const persons  = form.querySelector('#fpersons').value;
    const whatsapp = form.querySelector('#fwhatsapp').value.trim();
    const message  = form.querySelector('#fmessage').value.trim();

    let valid = true;

    if (!name) {
      showError('name', 'err_name');
      markInvalid(form.querySelector('#fname'));
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'err_email');
      if (valid) markInvalid(form.querySelector('#femail'));
      valid = false;
    }
    if (!tour) {
      showError('tour', 'err_tour');
      if (valid) markInvalid(form.querySelector('#ftour'));
      valid = false;
    }

    if (!valid) return;

    const lines = [
      'Hello Furry! I would like to book a safari with Tsakani Holidays.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      whatsapp ? `WhatsApp: ${whatsapp}` : null,
      `Tour: ${tour}`,
      date     ? `Date: ${date}` : null,
      persons  ? `Persons: ${persons}` : null,
      message  ? `Message: ${message}` : null,
    ].filter(l => l !== null);

    const text = lines.join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/* ===== SCROLL REVEAL ===== */
function initReveal() {
  const targets = document.querySelectorAll(
    '.tour-card, .review-card, .faq-item, .about-content, .about-images, .parks-table-wrap, .gallery-item, .contact-info, .contact-form-wrap, .homestay-text, .homestay-imgs, .usp-item'
  );

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach(el => observer.observe(el));
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
  initNavbar();
  initFaq();
  initGallery();
  initBookingForm();
  initReveal();
});
