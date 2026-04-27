import { CountryDetail } from "@/types/app-types";

export const countryDetailData: CountryDetail[] = [
  {
    slug: "india",
    name: "India",
    code: "IN",
    heroTagline: "A billion stories in one incredible land",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "Unlimited (home country)",
      notes: "No visa required for Indian citizens.",
      cost: "Free",
    },
    cities: [
      { name: "Delhi", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Mumbai", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Jaipur", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Varanasi", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Metro in Delhi, Mumbai, Bangalore, and other major cities. Auto-rickshaws and Ola/Uber widely available.",
      intercity:
        "Extensive railway network via IRCTC. Domestic flights are affordable. Volvo buses on major routes.",
      fromAirport:
        "Metro connectivity at major airports. Prepaid taxis and Ola/Uber available at all airports.",
      tips: "Book trains well in advance on IRCTC. Use Tatkal for last-minute bookings. Metro is the fastest way around Delhi and Bangalore.",
    },
    money: {
      currency: "Indian Rupee (INR)",
      atmNotes:
        "ATMs are everywhere in cities and towns. SBI, HDFC, and ICICI are the most common.",
      cardAcceptance:
        "Widely accepted in cities. UPI (Google Pay, PhonePe) is the dominant payment method even at small shops.",
      budgetPerDay: "1,500-3,000 INR ($18-36 USD)",
      tips: "UPI is king. Almost every vendor accepts it. Keep some cash for very rural areas.",
    },
    sim: {
      provider: "Jio, Airtel, Vi (Vodafone Idea)",
      cost: "149-699 INR ($2-8 USD) for prepaid plans",
      purchaseLocation:
        "Official stores, mobile shops, and airports. Requires Aadhaar verification.",
      dataPlan: "1.5-2 GB/day for 28-84 days depending on plan",
      tips: "Jio offers the best value for data. Airtel has slightly better coverage in remote areas.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Complete travel guide to India - visa info, transport, budget tips, SIM cards, and city highlights for an unforgettable Indian adventure.",
    bestTimeToVisit:
      "October to March for most regions. Avoid May-June heat. Monsoon (July-September) is great for Kerala and the Northeast.",
    language:
      "Hindi and English are widely spoken. Each state has its own regional language. English works well in cities and tourist areas.",
    safety:
      "Generally safe for travelers. Exercise normal precautions in crowded areas. Avoid isolated areas at night. Tourist police available in major cities.",
  },
  {
    slug: "portugal",
    name: "Portugal",
    code: "PT",
    heroTagline: "Where cobblestone streets lead to the edge of the world",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "sticker-visa",
      duration: "Up to 90 days (Schengen visa)",
      notes:
        "Indian passport holders need a Schengen visa. Apply at the Portuguese embassy or VFS Global. Requires travel insurance, hotel bookings, and bank statements.",
      cost: "80 EUR (~$87 USD) for adults",
    },
    cities: [
      { name: "Lisbon", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Porto", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Sintra", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Lisbon has metro, trams (iconic Tram 28), and buses. Porto has metro and buses. Uber is widely available.",
      intercity:
        "CP (Comboios de Portugal) trains connect major cities. Rede Expressos and FlixBus for bus travel.",
      fromAirport:
        "Lisbon Airport: Metro Red Line to city center in 20 min. Porto Airport: Metro Line E to city center.",
      tips: "Get a Viva Viagem card in Lisbon for metro and tram travel. Lisboa Card offers unlimited transport plus museum entry.",
    },
    money: {
      currency: "Euro (EUR)",
      atmNotes:
        "ATMs (Multibanco) are widely available. Avoid Euronet ATMs which charge high fees. Use bank-operated ATMs.",
      cardAcceptance:
        "Widely accepted everywhere including small shops and cafes. Contactless payments are common.",
      budgetPerDay: "50-80 EUR ($55-87 USD)",
      tips: "Multibanco ATMs are the best - they have low fees. Always choose to be charged in EUR, not your home currency.",
    },
    sim: {
      provider: "MEO, NOS, Vodafone Portugal",
      cost: "10-20 EUR ($11-22 USD) for tourist SIM",
      purchaseLocation:
        "Available at airport shops, official stores in city centers, and some newsagents.",
      dataPlan: "10-30 GB for 15-30 days",
      tips: "Vodafone and NOS have good tourist SIM packages. EU roaming is included so the SIM works across Europe.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Your complete guide to traveling Portugal - Schengen visa tips for Indians, Lisbon and Porto travel advice, budget info, and local insights.",
    bestTimeToVisit:
      "March to May and September to October for pleasant weather and fewer crowds. Summer (June-August) is hot and busy.",
    language:
      "Portuguese is the official language. English is widely spoken in Lisbon, Porto, and tourist areas, especially by younger people.",
    safety:
      "Very safe country for travelers. One of the safest in Europe. Pickpocketing can occur in crowded tourist areas in Lisbon. Generally welcoming to Indian travelers.",
  },
  {
    slug: "spain",
    name: "Spain",
    code: "ES",
    heroTagline: "Fiesta, flamenco, and flavors that ignite the soul",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "sticker-visa",
      duration: "Up to 90 days (Schengen visa)",
      notes:
        "Indian passport holders need a Schengen visa. Apply at the Spanish embassy or BLS International. A Portugal/other Schengen visa also works if Spain is not your main destination.",
      cost: "80 EUR (~$87 USD) for adults",
    },
    cities: [
      { name: "Barcelona", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Madrid", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Seville", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Granada", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Excellent metro systems in Madrid and Barcelona. Buses and trams in most cities. Uber/Cabify available.",
      intercity:
        "Renfe high-speed AVE trains connect major cities (Madrid-Barcelona in 2.5 hrs). FlixBus and ALSA for budget travel.",
      fromAirport:
        "Madrid Barajas: Metro Line 8 to city center. Barcelona El Prat: Aerobus to Placa Catalunya in 35 min.",
      tips: "Book Renfe AVE tickets early for big discounts. T-Casual card in Barcelona gives 10 rides on public transport.",
    },
    money: {
      currency: "Euro (EUR)",
      atmNotes:
        "ATMs are plentiful. Major banks like Santander, BBVA, and CaixaBank have ATMs everywhere. Avoid independent ATMs with high fees.",
      cardAcceptance:
        "Very widely accepted. Even small tapas bars and markets accept cards. Contactless is standard.",
      budgetPerDay: "50-90 EUR ($55-98 USD)",
      tips: "Spain is slightly cheaper than Western Europe. Menú del día (daily lunch menu) at restaurants offers great value at 10-15 EUR.",
    },
    sim: {
      provider: "Movistar, Vodafone Spain, Orange",
      cost: "10-20 EUR ($11-22 USD) for prepaid SIM",
      purchaseLocation:
        "Official stores in city centers and airports. Bring your passport for registration.",
      dataPlan: "10-25 GB for 28-30 days",
      tips: "Orange holiday SIM is popular with tourists. Works across EU with roaming. Available at airports and official stores.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Complete Spain travel guide for Indian travelers - Schengen visa info, Barcelona and Madrid tips, transport, budget, and local SIM details.",
    bestTimeToVisit:
      "April to June and September to November. Summer (July-August) is extremely hot in the south. Spring is ideal for festivals.",
    language:
      "Spanish (Castellano) is the official language. Catalan in Barcelona, Basque in the north. English is moderate in tourist areas but limited elsewhere.",
    safety:
      "Generally very safe. Watch for pickpockets on Las Ramblas in Barcelona and in crowded metro stations. Tourist police available in major cities.",
  },
  {
    slug: "nepal",
    name: "Nepal",
    code: "NP",
    heroTagline: "Where the Himalayas touch the sky and the spirit soars",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-on-arrival",
      duration: "15, 30, or 90 days",
      notes:
        "Indian citizens do not need a visa for Nepal. Entry is free with a valid Indian passport or Voter ID. No time limit on stay.",
      cost: "Free for Indian citizens",
    },
    cities: [
      { name: "Kathmandu", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Pokhara", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Chitwan", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Local buses, taxis, and rickshaws in Kathmandu. Taxis are the most convenient - negotiate the fare before riding.",
      intercity:
        "Tourist buses connect Kathmandu-Pokhara (6-7 hrs). Domestic flights by Yeti Airlines and Buddha Air to Pokhara and Lukla.",
      fromAirport:
        "Tribhuvan Airport (KTM): Prepaid taxis available outside arrivals. About 20-30 min to Thamel.",
      tips: "Domestic flights offer stunning Himalayan views - sit on the left side. Tourist buses are more comfortable than local ones.",
    },
    money: {
      currency: "Nepalese Rupee (NPR)",
      atmNotes:
        "ATMs available in Kathmandu, Pokhara, and major towns. Nabil Bank and Himalayan Bank ATMs are reliable. Limited ATMs on trekking routes.",
      cardAcceptance:
        "Accepted at hotels and larger restaurants in Kathmandu and Pokhara. Cash is essential for smaller shops and trekking areas.",
      budgetPerDay: "2,000-5,000 NPR ($15-38 USD)",
      tips: "Indian Rupee (up to INR 100 denomination notes) is widely accepted. Carry cash for trekking routes - no ATMs above certain altitudes.",
    },
    sim: {
      provider: "Ncell, Nepal Telecom (NTC)",
      cost: "100-500 NPR ($0.75-3.75 USD)",
      purchaseLocation:
        "Available at the airport and phone shops in Thamel, Kathmandu. Bring passport photos.",
      dataPlan: "5-30 GB for 28 days",
      tips: "Ncell generally has better data speeds and coverage in tourist areas. NTC is better in remote trekking regions.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Nepal travel guide for Indian travelers - no visa needed, Kathmandu and Pokhara tips, trekking advice, budget breakdown, and Himalayan adventures.",
    bestTimeToVisit:
      "October to December for clear Himalayan views and trekking. March to April for spring blooms and warmer weather. Avoid monsoon (June-September).",
    language:
      "Nepali is the official language. Hindi is widely understood due to cultural proximity with India. English is spoken in tourist areas.",
    safety:
      "Very safe for Indian travelers. Strong cultural affinity. Exercise caution on trekking routes - altitude sickness is a real concern. Hire experienced guides for remote treks.",
  },
  {
    slug: "singapore",
    name: "Singapore",
    code: "SG",
    heroTagline: "A tiny island with towering ambitions and endless flavors",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "30 days",
      notes:
        "Indian passport holders with a valid visa/residence permit of certain countries (US, UK, Australia, etc.) can get visa-free entry. Otherwise, an e-visa is required. Check the latest SG Arrival Card requirements.",
      cost: "Free (visa-free) or ~30 SGD for e-visa",
    },
    cities: [
      {
        name: "Singapore City",
        highlights: "TODO: Add highlights",
        daysSpent: 4,
      },
      { name: "Sentosa", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "MRT (Mass Rapid Transit) is excellent and covers the entire island. Buses are extensive. Grab (ride-hailing) is widely used.",
      intercity: "Not applicable - Singapore is a city-state.",
      fromAirport:
        "Changi Airport: MRT East-West Line or Downtown Line to city center in 30 min. Also taxi and Grab available.",
      tips: "Get an EZ-Link or SimplyGo card for MRT and bus travel. Changi Airport itself is an attraction - explore the Jewel waterfall.",
    },
    money: {
      currency: "Singapore Dollar (SGD)",
      atmNotes:
        "ATMs are everywhere - DBS, OCBC, UOB are major banks. All accept international cards.",
      cardAcceptance:
        "Extremely high. Cards and contactless payment accepted virtually everywhere. Some hawker centres are cash-only.",
      budgetPerDay: "80-150 SGD ($60-112 USD)",
      tips: "Singapore is expensive. Eat at hawker centres for affordable meals ($3-5 SGD). Grab water from taps - it is safe to drink.",
    },
    sim: {
      provider: "Singtel, StarHub, M1",
      cost: "12-30 SGD ($9-22 USD) for tourist SIM",
      purchaseLocation:
        "Available at Changi Airport arrivals, 7-Eleven stores, and official telco stores.",
      dataPlan: "50-100 GB for 7-28 days",
      tips: "Singtel hi! Tourist SIM is the most popular. Available at the airport for immediate use. Free Wi-Fi is widely available across the city.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Singapore travel guide for Indians - visa info, MRT transport tips, hawker centre food, budget advice, and must-visit attractions in the Lion City.",
    bestTimeToVisit:
      "Year-round destination due to tropical climate. February to April is slightly drier. Avoid November to January for the heaviest rains.",
    language:
      "English is one of four official languages and is widely spoken everywhere. Mandarin, Malay, and Tamil are also official. Singlish is the local English dialect.",
    safety:
      "Extremely safe - one of the safest countries in the world. Very low crime rates. Strict laws (no chewing gum, no littering - fines are heavy). Very welcoming to Indian travelers with a large Indian community.",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    code: "MY",
    heroTagline: "A melting pot of cultures, jungles, and jaw-dropping food",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "e-visa",
      duration: "30 days",
      notes:
        "Indian passport holders can apply for an eNTRI (Electronic Travel Registration & Information) for stays up to 15 days, or an eVisa for up to 30 days. eNTRI is faster to process.",
      cost: "eNTRI: 20 USD, eVisa: 25 USD",
    },
    cities: [
      {
        name: "Kuala Lumpur",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      { name: "Penang", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Langkawi", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Malacca", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "KL has extensive LRT, MRT, Monorail, and KTM Komuter trains. Grab is the dominant ride-hailing app. RapidKL buses.",
      intercity:
        "KTM trains and ETS (Electric Train Service) connect major cities. Long-distance buses are affordable. AirAsia for domestic flights.",
      fromAirport:
        "KLIA: KLIA Ekspres train to KL Sentral in 28 min (55 MYR). Also Grab and airport buses available.",
      tips: "Get a Touch 'n Go card for seamless public transport and toll payments. KLIA Ekspres is the fastest way to the city.",
    },
    money: {
      currency: "Malaysian Ringgit (MYR)",
      atmNotes:
        "ATMs are widely available. Maybank, CIMB, and Public Bank are common. Most accept international cards.",
      cardAcceptance:
        "Widely accepted in malls, restaurants, and hotels. Street food stalls and small shops are often cash-only. Touch 'n Go eWallet is growing.",
      budgetPerDay: "100-250 MYR ($22-55 USD)",
      tips: "Malaysia is very affordable for Indian travelers. Street food is incredibly cheap and delicious. Haggle at markets.",
    },
    sim: {
      provider: "Maxis (Hotlink), Digi, Celcom",
      cost: "10-30 MYR ($2-7 USD) for tourist SIM",
      purchaseLocation:
        "Available at KLIA arrivals, convenience stores (7-Eleven), and official telco shops.",
      dataPlan: "10-40 GB for 7-30 days",
      tips: "Hotlink Tourist SIM by Maxis is popular and available at the airport. Good 4G coverage across the country.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Malaysia travel guide for Indians - eVisa and eNTRI info, Kuala Lumpur tips, island hopping advice, street food guide, and budget travel essentials.",
    bestTimeToVisit:
      "West coast (KL, Penang, Langkawi): December to April. East coast: March to October. Year-round for KL. Avoid east coast monsoon (November-February).",
    language:
      "Bahasa Melayu (Malay) is the official language. English is widely spoken, especially in cities and tourist areas. Tamil and Mandarin also common due to diverse population.",
    safety:
      "Generally safe for Indian travelers. Large Indian community (Tamil diaspora). Petty theft can occur in tourist areas. Avoid flashing valuables. Very welcoming country overall.",
  },
  {
    slug: "thailand",
    name: "Thailand",
    code: "TH",
    heroTagline: "The Land of Smiles where temples meet tropical paradise",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "60 days",
      notes:
        "Indian passport holders now get visa-free entry for up to 60 days (updated 2024). Previously required visa-on-arrival. Check latest updates before travel.",
      cost: "Free",
    },
    cities: [
      { name: "Bangkok", highlights: "TODO: Add highlights", daysSpent: 4 },
      {
        name: "Chiang Mai",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      { name: "Phuket", highlights: "TODO: Add highlights", daysSpent: 3 },
      {
        name: "Krabi/Phi Phi",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
    ],
    transport: {
      local:
        "Bangkok: BTS Skytrain, MRT subway, river boats, tuk-tuks, and Grab. Chiang Mai: Red songthaews and Grab.",
      intercity:
        "Domestic flights (AirAsia, Nok Air, Thai Lion Air) are cheap. Overnight trains to Chiang Mai. VIP buses on major routes.",
      fromAirport:
        "Suvarnabhumi (BKK): Airport Rail Link to BTS in 30 min (45 THB). Don Mueang (DMK): Bus A1 to BTS Mo Chit or Grab.",
      tips: "Never take a tuk-tuk that offers a 'special deal' or free ride - it is a scam leading to gem shops. Use BTS/MRT whenever possible in Bangkok.",
    },
    money: {
      currency: "Thai Baht (THB)",
      atmNotes:
        "ATMs are everywhere but charge 220 THB (~$6 USD) per withdrawal for foreign cards. Bangkok Bank and Kasikorn Bank ATMs are reliable.",
      cardAcceptance:
        "Accepted at malls, hotels, and larger restaurants. Street food and small shops are cash-only. PromptPay QR is growing.",
      budgetPerDay: "1,000-2,500 THB ($28-70 USD)",
      tips: "Withdraw larger amounts to minimize ATM fees. Exchange money at SuperRich (green or orange) for the best rates in Bangkok.",
    },
    sim: {
      provider: "AIS, DTAC, TrueMove H",
      cost: "200-600 THB ($6-17 USD) for tourist SIM",
      purchaseLocation:
        "Available at both Bangkok airports (Suvarnabhumi and Don Mueang), 7-Eleven stores, and official shops.",
      dataPlan: "15-100 GB for 8-30 days",
      tips: "AIS and TrueMove H have the best coverage. Tourist SIMs at airports are slightly pricier but convenient. 7-Eleven SIMs are cheaper.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Thailand travel guide for Indians - visa-free entry info, Bangkok BTS tips, island hopping, budget breakdown, street food guide, and essential travel advice.",
    bestTimeToVisit:
      "November to February for cool, dry weather. March to May is scorching hot. Avoid monsoon season (June-October) for islands.",
    language:
      "Thai is the official language. English is spoken in tourist areas, hotels, and Bangkok. Very limited English in rural areas. Learn basic Thai phrases - locals appreciate it.",
    safety:
      "Generally safe for Indian travelers. Watch for common tourist scams (tuk-tuk scams, jet ski damage scams, gem shop scams). Avoid isolated areas late at night. Thai people are very friendly and welcoming.",
  },
  {
    slug: "philippines",
    name: "Philippines",
    code: "PH",
    heroTagline: "Seven thousand islands of endless white sand and warm hearts",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "30 days",
      notes:
        "Indian passport holders get visa-free entry for up to 30 days. Must have a return/onward ticket. Can be extended for up to 36 months at immigration offices.",
      cost: "Free",
    },
    cities: [
      { name: "Manila", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Cebu", highlights: "TODO: Add highlights", daysSpent: 3 },
      {
        name: "El Nido/Palawan",
        highlights: "TODO: Add highlights",
        daysSpent: 4,
      },
      { name: "Boracay", highlights: "TODO: Add highlights", daysSpent: 3 },
    ],
    transport: {
      local:
        "Jeepneys (iconic and cheap), tricycles, and Grab in Manila and Cebu. LRT and MRT in Manila (limited coverage).",
      intercity:
        "Domestic flights (Cebu Pacific, Philippine Airlines, AirAsia) connect islands. Ferries between islands (2GO Travel). Long-distance buses on Luzon.",
      fromAirport:
        "NAIA Manila: Grab is the easiest option. Also yellow metered taxis and airport buses. Expect traffic congestion.",
      tips: "Domestic flights are the best way to island-hop. Book Cebu Pacific for budget flights. Manila traffic is legendary - plan extra time.",
    },
    money: {
      currency: "Philippine Peso (PHP)",
      atmNotes:
        "ATMs available in cities and tourist areas. BDO and BPI ATMs are common. Maximum withdrawal is usually 10,000-20,000 PHP per transaction.",
      cardAcceptance:
        "Accepted at hotels, malls, and larger restaurants. Cash is essential for most transactions, especially on islands and smaller towns.",
      budgetPerDay: "2,000-4,500 PHP ($36-81 USD)",
      tips: "Bring USD or EUR for better exchange rates at money changers. Island hopping tours are often cash-only.",
    },
    sim: {
      provider: "Globe, Smart (PLDT)",
      cost: "100-500 PHP ($2-9 USD) for tourist SIM",
      purchaseLocation:
        "Available at airports, malls, and convenience stores (7-Eleven, Ministop). Very easy to purchase.",
      dataPlan: "8-30 GB for 7-30 days",
      tips: "Globe has better coverage on popular tourist islands. Load up your SIM at any sari-sari store or convenience store.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Philippines travel guide for Indians - visa-free entry, island hopping tips, El Nido and Boracay guide, budget travel, and transport between islands.",
    bestTimeToVisit:
      "November to May (dry season). December to February is the coolest and most pleasant. Avoid typhoon season (June-October).",
    language:
      "Filipino (Tagalog) and English are both official languages. English is very widely spoken - one of the highest English proficiency rates in Asia.",
    safety:
      "Generally safe in tourist areas. Avoid Mindanao (southern region) due to security concerns. Watch for petty theft in Manila. Filipinos are among the friendliest people in Asia.",
  },
  {
    slug: "uae",
    name: "UAE",
    code: "AE",
    heroTagline: "Desert dreams built into a gleaming futuristic skyline",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-on-arrival",
      duration: "14 days (extendable to 30 days)",
      notes:
        "Indian passport holders can get a 14-day visa on arrival if holding a valid US visa, Green Card, UK or EU residence permit. Otherwise, a tourist visa must be applied for in advance through airlines or travel agents.",
      cost: "Free (visa on arrival) or 250-350 AED for tourist visa",
    },
    cities: [
      { name: "Dubai", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Abu Dhabi", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Sharjah", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Dubai: Metro (Red and Green lines), trams, buses, and taxis/Uber/Careem. Abu Dhabi: Buses and taxis/Careem.",
      intercity:
        "E100 and E101 buses between Dubai and Abu Dhabi (25 AED, 2 hours). Taxis are also an option.",
      fromAirport:
        "DXB: Dubai Metro Red Line connects Terminal 1 and 3 to the city. Abu Dhabi Airport: Taxis and A1 bus to city center.",
      tips: "Get a Nol card for Dubai Metro and buses. RTA app is useful for planning routes. Careem is the local alternative to Uber.",
    },
    money: {
      currency: "UAE Dirham (AED)",
      atmNotes:
        "ATMs are everywhere in malls, hotels, and streets. Emirates NBD, FAB, and ADCB are major banks. No withdrawal limits typically.",
      cardAcceptance:
        "Very widely accepted everywhere. Apple Pay and contactless payments are standard. Even small shops accept cards.",
      budgetPerDay: "250-500 AED ($68-136 USD)",
      tips: "UAE is expensive, especially Dubai. Budget by eating at Indian restaurants and food courts in malls. Friday brunch deals are a local tradition.",
    },
    sim: {
      provider: "Etisalat (e&), du",
      cost: "55-110 AED ($15-30 USD) for tourist SIM",
      purchaseLocation:
        "Available at the airport upon arrival and at official stores in malls. Passport required.",
      dataPlan: "2-10 GB for 7-30 days",
      tips: "Tourist SIMs are expensive compared to Asia. e& (Etisalat) has slightly better coverage. Free Wi-Fi is available in most malls and hotels.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "UAE travel guide for Indians - visa on arrival rules, Dubai and Abu Dhabi tips, metro guide, budget advice, and what to expect in the Emirates.",
    bestTimeToVisit:
      "November to March for pleasant weather (20-30°C). Avoid June to September when temperatures exceed 45°C. Ramadan period may affect dining options.",
    language:
      "Arabic is the official language. English is widely spoken and understood everywhere - it is the de facto language of business and tourism. Hindi and Urdu are also widely understood due to the large Indian expat community.",
    safety:
      "Extremely safe - one of the safest countries in the world. Very low crime rates. Large Indian community (over 3 million). Respect local customs and dress codes, especially in Abu Dhabi and during Ramadan.",
  },
  {
    slug: "cambodia",
    name: "Cambodia",
    code: "KH",
    heroTagline: "Ancient temples rising from the jungle, echoing a glorious past",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-on-arrival",
      duration: "30 days",
      notes:
        "Indian passport holders can get a visa on arrival at airports and land borders. An e-visa is also available online (evisa.gov.kh). Bring a passport photo for visa on arrival.",
      cost: "30 USD (visa on arrival or e-visa) + 6 USD service fee for e-visa",
    },
    cities: [
      {
        name: "Siem Reap",
        highlights: "TODO: Add highlights",
        daysSpent: 4,
      },
      {
        name: "Phnom Penh",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      {
        name: "Sihanoukville/Koh Rong",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
    ],
    transport: {
      local:
        "Tuk-tuks are the primary transport. Grab is available in Phnom Penh and Siem Reap. PassApp is the local ride-hailing alternative.",
      intercity:
        "Giant Ibis and Mekong Express buses connect major cities. Domestic flights between Phnom Penh and Siem Reap. Boats on Tonle Sap Lake.",
      fromAirport:
        "Siem Reap and Phnom Penh: Tuk-tuk, taxi, or Grab from the airport. Negotiate tuk-tuk fares before riding (~$7-10 to city).",
      tips: "Giant Ibis is the best bus company - comfortable and reliable. Tuk-tuk drivers often double as tour guides in Siem Reap.",
    },
    money: {
      currency: "Cambodian Riel (KHR) and US Dollar (USD)",
      atmNotes:
        "ATMs dispense USD. ABA Bank and ACLEDA Bank ATMs are widespread. Most charge $4-5 per withdrawal for foreign cards.",
      cardAcceptance:
        "Limited - mostly at hotels, upscale restaurants, and some shops. Cash (USD) is king for daily transactions.",
      budgetPerDay: "25-60 USD",
      tips: "USD is the primary currency used by tourists. Riel is used for small change (4,000 KHR = 1 USD). Bring crisp, undamaged USD bills.",
    },
    sim: {
      provider: "Smart, Cellcard, Metfone",
      cost: "1-5 USD for tourist SIM",
      purchaseLocation:
        "Available at both airports, phone shops, and convenience stores. Very easy to get.",
      dataPlan: "6-30 GB for 7-30 days",
      tips: "Smart has the best tourist plans and widest 4G coverage. Extremely cheap compared to most countries. Get a SIM at the airport.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Cambodia travel guide for Indians - visa on arrival info, Angkor Wat tips, Siem Reap and Phnom Penh guide, budget travel advice, and transport options.",
    bestTimeToVisit:
      "November to February for cool, dry weather. Best time for Angkor Wat. March to May is very hot. Avoid heavy rains of monsoon (June-October).",
    language:
      "Khmer is the official language. English is widely spoken in tourist areas, especially in Siem Reap. Younger generation speaks decent English.",
    safety:
      "Generally safe for tourists. Watch for bag snatching in Phnom Penh (from motorbikes). Avoid walking alone late at night. Be cautious with tuk-tuk drivers offering tours to remote areas. Land mines exist in remote rural areas - stick to marked paths.",
  },
  {
    slug: "laos",
    name: "Laos",
    code: "LA",
    heroTagline: "Southeast Asia's hidden gem where time flows like the Mekong",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-on-arrival",
      duration: "30 days",
      notes:
        "Indian passport holders can get a visa on arrival at international airports and some land border crossings. Bring a passport photo and USD cash.",
      cost: "30 USD",
    },
    cities: [
      {
        name: "Luang Prabang",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      { name: "Vientiane", highlights: "TODO: Add highlights", daysSpent: 2 },
      {
        name: "Vang Vieng",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
    ],
    transport: {
      local:
        "Tuk-tuks and songthaews are the main transport in cities. Limited public buses. Bicycle and motorbike rental popular in Luang Prabang and Vang Vieng.",
      intercity:
        "Laos-China Railway connects Vientiane to Luang Prabang in 2 hours (a game-changer). VIP sleeper buses on other routes. Slow boats on the Mekong.",
      fromAirport:
        "Vientiane and Luang Prabang: Taxi or tuk-tuk from airports. Negotiate fare before riding. About $5-7 to city center.",
      tips: "The Laos-China Railway is the best way to travel between Vientiane and Luang Prabang. Slow boat from Huay Xai to Luang Prabang is a memorable experience (2 days).",
    },
    money: {
      currency: "Lao Kip (LAK)",
      atmNotes:
        "ATMs available in Vientiane, Luang Prabang, and Vang Vieng. BCEL Bank ATMs are most reliable. Limited in rural areas.",
      cardAcceptance:
        "Very limited. Cash is essential almost everywhere. Some hotels and upscale restaurants accept cards.",
      budgetPerDay: "200,000-500,000 LAK ($10-25 USD)",
      tips: "One of the cheapest countries in Southeast Asia. Thai Baht and USD are also accepted in tourist areas. Bring cash - ATM fees are high ($2-3 per withdrawal).",
    },
    sim: {
      provider: "Unitel, Lao Telecom (LTC), ETL",
      cost: "10,000-50,000 LAK ($0.50-2.50 USD)",
      purchaseLocation:
        "Available at airports and phone shops in major towns. Bring your passport.",
      dataPlan: "3-15 GB for 7-30 days",
      tips: "Unitel has the best 4G coverage across the country. Very cheap data. Coverage can be patchy in mountainous areas.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Laos travel guide for Indians - visa on arrival details, Luang Prabang tips, Mekong River experiences, budget breakdown, and Southeast Asia's hidden gem.",
    bestTimeToVisit:
      "October to April for dry weather. November to February is coolest and most pleasant. Avoid monsoon heavy rains (May-September).",
    language:
      "Lao is the official language. English is limited but improving in tourist areas. French has some presence due to colonial history. Learn basic Lao phrases.",
    safety:
      "Very safe and peaceful country. Laotians are gentle and friendly. UXO (unexploded ordnance) risk exists in remote eastern areas - stick to cleared paths. Standard precautions for petty theft apply.",
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    code: "VN",
    heroTagline: "From misty mountains to emerald bays, a feast for every sense",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "e-visa",
      duration: "90 days (single or multiple entry)",
      notes:
        "Indian passport holders can apply for an e-visa online (evisa.xuatnhapcanh.gov.vn). Processing takes 3 working days. Multiple entry available since August 2023.",
      cost: "25 USD (e-visa)",
    },
    cities: [
      { name: "Hanoi", highlights: "TODO: Add highlights", daysSpent: 3 },
      {
        name: "Ho Chi Minh City",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      { name: "Da Nang/Hoi An", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Ha Long Bay", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Grab is the most convenient option. Motorbike taxis (Grab Bike) are the cheapest. Hanoi and HCMC have limited bus networks. Cyclos in Hanoi's Old Quarter.",
      intercity:
        "Reunification Express train runs Hanoi to HCMC (30+ hrs). Domestic flights are cheap (VietJet, Bamboo Airways). Sleeper buses are popular and affordable.",
      fromAirport:
        "Hanoi Noi Bai: Bus 86 to Old Quarter (45 min, 45,000 VND) or Grab. HCMC Tan Son Nhat: Bus 109 or Grab to city center.",
      tips: "Grab is essential in Vietnam - use it for everything. Crossing the street in HCMC is an adventure - walk slowly and steadily, traffic will flow around you.",
    },
    money: {
      currency: "Vietnamese Dong (VND)",
      atmNotes:
        "ATMs are widely available. Vietcombank and BIDV have lower fees. Most ATMs charge 20,000-50,000 VND per withdrawal.",
      cardAcceptance:
        "Improving in cities but still mostly cash-based. Hotels, malls, and upscale restaurants accept cards. Street food and markets are cash-only.",
      budgetPerDay: "500,000-1,200,000 VND ($20-48 USD)",
      tips: "Vietnam is very affordable. The currency has many zeros - 1 USD is roughly 25,000 VND. Double-check bills when paying - they look similar.",
    },
    sim: {
      provider: "Viettel, Mobifone, Vietnamobile",
      cost: "50,000-200,000 VND ($2-8 USD) for tourist SIM",
      purchaseLocation:
        "Available at airports (counters right after customs), phone shops, and convenience stores.",
      dataPlan: "10-60 GB for 15-30 days",
      tips: "Viettel has the best nationwide coverage. Mobifone is also excellent. Get a SIM at the airport - it is very cheap and saves time.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Vietnam travel guide for Indians - e-visa details, Hanoi and HCMC tips, Ha Long Bay advice, street food guide, budget breakdown, and transport options.",
    bestTimeToVisit:
      "Varies by region. North (Hanoi, Ha Long): October to April. Central (Da Nang, Hoi An): February to May. South (HCMC): December to April. Vietnam can be visited year-round.",
    language:
      "Vietnamese is the official language. English is improving in tourist areas, especially among younger Vietnamese. Very limited English in rural areas.",
    safety:
      "Generally safe for Indian travelers. Petty theft and bag snatching from motorbikes can occur in HCMC. Watch your belongings. Traffic is the biggest danger - be very cautious crossing roads.",
  },
  {
    slug: "hong-kong",
    name: "Hong Kong",
    code: "HK",
    heroTagline: "A neon-lit urban jungle where East and West collide spectacularly",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "14 days",
      notes:
        "Indian passport holders get visa-free entry for up to 14 days. Must have proof of onward travel and sufficient funds. Pre-arrival registration online is recommended.",
      cost: "Free",
    },
    cities: [
      {
        name: "Hong Kong Island",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      { name: "Kowloon", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Lantau", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "MTR (Mass Transit Railway) is world-class and covers the entire territory. Star Ferry between Hong Kong Island and Kowloon. Buses, trams, and minibuses.",
      intercity:
        "Not applicable for within Hong Kong. High-speed rail to Shenzhen/Guangzhou from West Kowloon Station. Ferries to Macau and mainland China.",
      fromAirport:
        "Airport Express to Central in 24 min (HKD 115). Also airport buses (A11, A21) and taxis.",
      tips: "Get an Octopus Card - it works on all public transport, 7-Eleven, and many shops. Airport Express is the fastest way to the city.",
    },
    money: {
      currency: "Hong Kong Dollar (HKD)",
      atmNotes:
        "ATMs are everywhere. HSBC, Hang Seng Bank, and Bank of China ATMs are common. Most do not charge withdrawal fees.",
      cardAcceptance:
        "Very widely accepted. Octopus Card acts as a contactless payment at convenience stores and restaurants too.",
      budgetPerDay: "400-800 HKD ($51-102 USD)",
      tips: "Hong Kong is expensive, especially accommodation. Eat at local cha chaan tengs (tea restaurants) and dai pai dongs for affordable meals.",
    },
    sim: {
      provider: "3 (Three), CSL, SmarTone, China Mobile HK",
      cost: "50-100 HKD ($6-13 USD) for tourist SIM",
      purchaseLocation:
        "Available at the airport arrivals, 7-Eleven, Circle K, and official telco shops.",
      dataPlan: "5-20 GB for 7-30 days",
      tips: "CSL or Three tourist SIMs work well. Free Wi-Fi is available at MTR stations, malls, and many public areas.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Hong Kong travel guide for Indians - visa-free entry info, MTR transport tips, dim sum and street food guide, Victoria Peak, and budget travel advice.",
    bestTimeToVisit:
      "October to December for cool, dry weather. Best time to visit. March to April is mild. Avoid hot and humid summers (June-September) and typhoon season.",
    language:
      "Cantonese and English are both official languages. English is widely spoken and all signs are bilingual. Mandarin is also increasingly common.",
    safety:
      "Extremely safe city with very low crime rates. One of the safest places in the world. Public transport is safe at all hours. Standard pickpocket precautions in crowded areas.",
  },
  {
    slug: "macau",
    name: "Macau",
    code: "MO",
    heroTagline: "Where Portuguese charm meets Chinese heritage and casino grandeur",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "30 days",
      notes:
        "Indian passport holders get visa-free entry to Macau for up to 30 days. Separate entry from Hong Kong and mainland China. Bring proof of accommodation and return ticket.",
      cost: "Free",
    },
    cities: [
      {
        name: "Macau Peninsula",
        highlights: "TODO: Add highlights",
        daysSpent: 2,
      },
      { name: "Cotai Strip", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Free casino shuttle buses are the most popular way to get around. Public buses (MOP 6 per ride). Taxis available but limited.",
      intercity:
        "Ferry to Hong Kong (TurboJET, 1 hour). Hong Kong-Zhuhai-Macau Bridge bus to Hong Kong. Ferry to Shenzhen.",
      fromAirport:
        "Macau International Airport: Public buses or taxis to city center. Casino shuttles from the ferry terminal if arriving by sea.",
      tips: "Use the free casino shuttle buses to get around - they connect the ferry terminal, airport, and major areas. No Grab/Uber in Macau.",
    },
    money: {
      currency: "Macanese Pataca (MOP)",
      atmNotes:
        "ATMs are plentiful, especially in casinos. Hong Kong Dollars are accepted everywhere at 1:1 rate.",
      cardAcceptance:
        "Widely accepted at casinos, hotels, and larger restaurants. Cash preferred at smaller local eateries and markets.",
      budgetPerDay: "300-700 MOP ($37-87 USD)",
      tips: "You can use Hong Kong Dollars (HKD) everywhere - no need to exchange to Patacas. But change from purchases will be in MOP.",
    },
    sim: {
      provider: "CTM (Macau Telecom), 3 (Three) Macau",
      cost: "50-100 MOP ($6-12 USD) for tourist SIM",
      purchaseLocation:
        "Available at the airport, ferry terminal, and convenience stores.",
      dataPlan: "3-10 GB for 7-15 days",
      tips: "If coming from Hong Kong, a HK SIM with roaming may be cheaper than buying a separate Macau SIM for a short visit.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Macau travel guide for Indians - visa-free entry, casino shuttle tips, Portuguese-Chinese heritage, food guide, and day trip planning from Hong Kong.",
    bestTimeToVisit:
      "October to December for pleasant cool weather. March to April is also nice. Avoid the hot, humid summer (June-September) and typhoon season.",
    language:
      "Cantonese and Portuguese are official languages. English is spoken in casinos, hotels, and tourist areas. Mandarin is widely understood.",
    safety:
      "Very safe city. Casino areas are heavily monitored. Petty theft is rare. Be mindful of gambling responsibly. Excellent for Indian travelers.",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    code: "ID",
    heroTagline: "An archipelago of volcanoes, temples, and tropical magic",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-on-arrival",
      duration: "30 days (extendable once for another 30 days)",
      notes:
        "Indian passport holders can get a visa on arrival at major airports and seaports. Extendable once at an immigration office. Passport must have at least 6 months validity.",
      cost: "500,000 IDR (~$32 USD)",
    },
    cities: [
      { name: "Bali", highlights: "TODO: Add highlights", daysSpent: 5 },
      { name: "Jakarta", highlights: "TODO: Add highlights", daysSpent: 2 },
      {
        name: "Yogyakarta",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
      {
        name: "Lombok/Gili Islands",
        highlights: "TODO: Add highlights",
        daysSpent: 3,
      },
    ],
    transport: {
      local:
        "Grab and Gojek (motorbike and car) are essential. Bali: rent a scooter. Jakarta: MRT, TransJakarta buses, and commuter trains.",
      intercity:
        "Domestic flights (Lion Air, Garuda, AirAsia) between islands. Ferries between Bali-Lombok and Gili Islands. Trains on Java.",
      fromAirport:
        "Bali Ngurah Rai: Grab, taxi, or pre-booked hotel transfer. Jakarta Soekarno-Hatta: Airport train to city center (70,000 IDR, 45 min).",
      tips: "Gojek and Grab are the lifelines in Indonesia. Rent a scooter in Bali only if you have riding experience. International driving permit technically required.",
    },
    money: {
      currency: "Indonesian Rupiah (IDR)",
      atmNotes:
        "ATMs are common in tourist areas and cities. BCA, Mandiri, and BNI ATMs are reliable. Watch out for card skimming at standalone ATMs.",
      cardAcceptance:
        "Accepted at hotels, malls, and larger restaurants. Cash is essential for small warungs, markets, and transport.",
      budgetPerDay: "300,000-800,000 IDR ($19-51 USD)",
      tips: "Indonesia is very affordable. 1 USD is roughly 15,700 IDR. Be careful with the many zeros on banknotes. Use ATMs inside banks to avoid skimming.",
    },
    sim: {
      provider: "Telkomsel, XL Axiata, Indosat (IM3)",
      cost: "25,000-100,000 IDR ($1.60-6.40 USD) for tourist SIM",
      purchaseLocation:
        "Available at the airport (Telkomsel counter) and phone shops. Registration with passport required.",
      dataPlan: "10-50 GB for 15-30 days",
      tips: "Telkomsel has the best nationwide coverage, including rural areas and islands. Buy at the airport to avoid registration hassles at local shops.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Indonesia travel guide for Indians - visa on arrival info, Bali travel tips, Yogyakarta temples, island hopping, budget advice, and transport guide.",
    bestTimeToVisit:
      "April to October (dry season). Best weather for Bali, Lombok, and most islands. Rainy season (November-March) brings heavy afternoon showers but is still travelable.",
    language:
      "Bahasa Indonesia is the official language. English is widely spoken in Bali and tourist areas. Limited English in rural Java and other islands.",
    safety:
      "Generally safe for Indian travelers. Watch for motorbike bag snatching in Bali. Be cautious with drink spiking in nightlife areas. Beware of strong ocean currents at beaches. Respect temple dress codes.",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka",
    code: "LK",
    heroTagline: "A teardrop island packed with tea hills, temples, and wild beauty",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "e-visa",
      duration: "30 days (extendable to 90 days)",
      notes:
        "Indian passport holders need an ETA (Electronic Travel Authorization) applied online at eta.gov.lk. Free for Indian nationals (fee waived periodically - check latest). Processing usually takes 24 hours.",
      cost: "Free or 20 USD (check current policy for Indian citizens)",
    },
    cities: [
      { name: "Colombo", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Kandy", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Ella", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Galle", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Tuk-tuks are the primary transport. PickMe (local Uber alternative) is available in Colombo and major cities. Local buses are extremely cheap.",
      intercity:
        "Sri Lanka Railways offers some of the most scenic train journeys in the world (Kandy to Ella). Intercity buses are frequent and affordable.",
      fromAirport:
        "Bandaranaike Airport (CMB): Airport Express bus to Colombo Fort (Rs 150). Taxis and PickMe also available (~Rs 3,000-4,000 to Colombo).",
      tips: "The Kandy-Ella train is a must-do - book in advance or arrive early for unreserved seats. Sit on the right side for the best views.",
    },
    money: {
      currency: "Sri Lankan Rupee (LKR)",
      atmNotes:
        "ATMs are available in cities and towns. Commercial Bank and HNB ATMs accept international cards. Limited ATMs in rural hill country.",
      cardAcceptance:
        "Accepted at hotels, larger restaurants, and supermarkets. Cash is essential for tuk-tuks, street food, and small shops.",
      budgetPerDay: "5,000-15,000 LKR ($15-46 USD)",
      tips: "Sri Lanka is very affordable for Indian travelers. Negotiate tuk-tuk fares before riding. The economy is recovering - USD and INR can be exchanged easily.",
    },
    sim: {
      provider: "Dialog, Mobitel, Airtel Sri Lanka",
      cost: "300-1,500 LKR ($1-5 USD) for tourist SIM",
      purchaseLocation:
        "Available at Bandaranaike Airport arrivals (Dialog and Mobitel counters) and phone shops in cities.",
      dataPlan: "10-40 GB for 30 days",
      tips: "Dialog has the best coverage across the island. Get a SIM at the airport - it is fast and hassle-free. Very cheap data.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Sri Lanka travel guide for Indians - ETA visa info, Kandy to Ella train, beach and temple guide, budget travel tips, and everything you need to know.",
    bestTimeToVisit:
      "West and south coast: December to March. East coast: April to September. Hill country: January to April. Sri Lanka is a year-round destination if you pick the right coast.",
    language:
      "Sinhala and Tamil are official languages. English is widely spoken in tourist areas, hotels, and by younger Sri Lankans. Tamil-speaking areas in the north and east.",
    safety:
      "Very safe for Indian travelers. Strong cultural and historical ties with India. People are extremely warm and welcoming. Standard precautions for petty theft in tourist areas.",
  },
  {
    slug: "japan",
    name: "Japan",
    code: "JP",
    heroTagline: "Where ancient tradition meets neon-lit future",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "sticker-visa",
      duration: "15-90 days (single or multiple entry)",
      notes:
        "Indian passport holders need a visa from the Japanese embassy. Requires detailed itinerary, hotel bookings, bank statements, and employer letter. Processing takes 5-7 working days. Multiple entry visas available for frequent travelers.",
      cost: "Free (Japan does not charge visa fees for most nationalities including India)",
    },
    cities: [
      { name: "Tokyo", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Kyoto", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Osaka", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Hiroshima", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Tokyo: JR lines, Metro (Tokyo Metro and Toei), buses. Kyoto: Buses and JR lines. Osaka: Metro and JR lines. IC Cards (Suica/Pasmo) work everywhere.",
      intercity:
        "Shinkansen (bullet trains) are incredible. JR Pass offers unlimited travel on JR trains including most Shinkansen. Domestic flights and highway buses for budget travel.",
      fromAirport:
        "Narita: Narita Express to Tokyo Station (60 min, 3,250 JPY) or Skyliner to Ueno (41 min, 2,520 JPY). Haneda: Monorail or Keikyu Line to central Tokyo.",
      tips: "Get a JR Pass if taking multiple Shinkansen trips - it pays for itself quickly. IC cards (Suica/Pasmo) are essential for daily travel. Google Maps works perfectly for Japan transit.",
    },
    money: {
      currency: "Japanese Yen (JPY)",
      atmNotes:
        "7-Eleven ATMs (7Bank) and Japan Post ATMs reliably accept international cards. Regular bank ATMs often do not accept foreign cards.",
      cardAcceptance:
        "Improving but Japan is still quite cash-heavy. Major chains and hotels accept cards. Many restaurants, small shops, and vending machines are cash-only. IC cards work at convenience stores.",
      budgetPerDay: "8,000-15,000 JPY ($53-100 USD)",
      tips: "Always carry cash in Japan. 7-Eleven ATMs are your best friend. Tax-free shopping available at many stores for purchases over 5,000 JPY (bring your passport).",
    },
    sim: {
      provider: "IIJmio, Sakura Mobile, Mobal",
      cost: "1,500-4,000 JPY ($10-27 USD) for tourist SIM/eSIM",
      purchaseLocation:
        "Available at Narita and Haneda airports, BIC Camera stores, and online. eSIM options available for newer phones.",
      dataPlan: "3-20 GB for 7-30 days",
      tips: "eSIM is the easiest option - order online before arriving. Physical SIMs at airports work well too. Free Wi-Fi is available at stations and convenience stores but can be unreliable.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Japan travel guide for Indians - visa application tips, JR Pass guide, Tokyo and Kyoto itinerary, budget breakdown, and navigating the Land of the Rising Sun.",
    bestTimeToVisit:
      "March to May (cherry blossom season) and October to November (autumn foliage). Both seasons offer mild weather and stunning scenery. Avoid Golden Week (late April-early May) and Obon (mid-August) due to crowds.",
    language:
      "Japanese is the official language. English is very limited outside major tourist areas and Tokyo. Google Translate is essential. Train announcements and signs are in English.",
    safety:
      "One of the safest countries in the world. Virtually zero violent crime against tourists. You can walk anywhere at any time. Lost items are routinely returned. Japan is incredibly welcoming though the culture can feel reserved at first.",
  },
  {
    slug: "taiwan",
    name: "Taiwan",
    code: "TW",
    heroTagline: "Night markets, misty mountains, and the warmest island welcome",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "visa-free",
      duration: "14 days",
      notes:
        "Indian passport holders with a valid visa or residence permit for USA, Canada, UK, Schengen, Japan, Australia, or New Zealand can enter Taiwan visa-free for 14 days. Otherwise, a regular visa from TECO (Taipei Economic and Cultural Office) is required.",
      cost: "Free (visa-free) or $66 USD (regular single-entry visa)",
    },
    cities: [
      { name: "Taipei", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Jiufen", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Kaohsiung", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Taichung", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Taipei has excellent MRT (metro). YouBike (public bikes) stations everywhere. Buses are frequent. Uber and Taiwan Taxi available.",
      intercity:
        "THSR (Taiwan High Speed Rail) connects Taipei to Kaohsiung in 1.5 hrs. TRA trains cover the whole island. Buses for mountain areas.",
      fromAirport:
        "Taoyuan Airport: Taoyuan Airport MRT to Taipei Main Station (35 min, 160 TWD). Also buses and taxis.",
      tips: "Get an EasyCard for MRT, buses, and YouBike. It also works at convenience stores. THSR tickets are cheaper if booked early online.",
    },
    money: {
      currency: "New Taiwan Dollar (TWD)",
      atmNotes:
        "ATMs are plentiful at convenience stores (7-Eleven, FamilyMart) and banks. Most accept international cards. Cathay United Bank and CTBC ATMs are reliable.",
      cardAcceptance:
        "Accepted at hotels, malls, and chain restaurants. Night markets and small eateries are mostly cash-only.",
      budgetPerDay: "1,500-3,500 TWD ($47-110 USD)",
      tips: "Night market food is incredibly cheap ($1-3 USD per dish). 7-Eleven and FamilyMart are everywhere and have everything you need including hot meals.",
    },
    sim: {
      provider: "Chunghwa Telecom, Taiwan Mobile, FarEasTone",
      cost: "300-500 TWD ($9-16 USD) for tourist SIM",
      purchaseLocation:
        "Available at Taoyuan Airport arrivals (dedicated counters for all three providers). Bring your passport.",
      dataPlan: "Unlimited data for 3-30 days",
      tips: "All three providers offer unlimited data tourist SIMs at the airport. Chunghwa has the best coverage. Get it right at the airport - it is fast.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "Taiwan travel guide for Indians - visa-free entry conditions, Taipei MRT tips, night market food guide, THSR travel, and budget advice for the beautiful island.",
    bestTimeToVisit:
      "October to December and March to May for pleasant weather. Cherry blossoms in February-March. Avoid typhoon season (July-September). Summers are hot and humid.",
    language:
      "Mandarin Chinese is the official language. English is limited but improving, especially in Taipei. MRT and train announcements are in English. Google Translate is helpful.",
    safety:
      "Extremely safe - one of the safest places in Asia. Very low crime rate. People are incredibly friendly and helpful to foreign travelers. Safe to walk around at any hour.",
  },
  {
    slug: "china",
    name: "China",
    code: "CN",
    heroTagline: "An ancient civilization reinventing itself at breathtaking speed",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "sticker-visa",
      duration: "30 days (single or double entry)",
      notes:
        "Indian passport holders need a visa from the Chinese embassy or visa center (CVASC). Requires detailed itinerary, hotel bookings, and invitation letter if visiting someone. Transit visa exemption (144 hours) available at major cities for eligible travelers.",
      cost: "3,250 INR (~$39 USD) for single entry",
    },
    cities: [
      { name: "Beijing", highlights: "TODO: Add highlights", daysSpent: 4 },
      { name: "Shanghai", highlights: "TODO: Add highlights", daysSpent: 3 },
      { name: "Xi'an", highlights: "TODO: Add highlights", daysSpent: 2 },
      { name: "Guilin", highlights: "TODO: Add highlights", daysSpent: 2 },
    ],
    transport: {
      local:
        "Beijing and Shanghai have extensive metro systems. DiDi (ride-hailing app, Chinese Uber). Buses and taxis available. Shared bikes (Hellobike, Meituan Bike).",
      intercity:
        "China's high-speed rail network is the world's largest. CRH/Fuxing trains connect all major cities. Domestic flights are also cheap and frequent.",
      fromAirport:
        "Beijing Daxing: Daxing Airport Express to city (19 min). Shanghai Pudong: Maglev to Longyang Road then Metro (8 min + transfer). DiDi from both airports.",
      tips: "Download apps before arrival: Alipay (payment), DiDi (transport), Baidu Maps (Google Maps does not work), 12306 (train tickets). VPN is essential for WhatsApp, Google, etc.",
    },
    money: {
      currency: "Chinese Yuan / Renminbi (CNY/RMB)",
      atmNotes:
        "ATMs available at Bank of China, ICBC, and China Construction Bank. International cards work at major bank ATMs. Withdrawal limits of 2,500-5,000 CNY.",
      cardAcceptance:
        "China is nearly cashless - but through Alipay and WeChat Pay (which foreigners can now link international cards to). Physical cards have limited acceptance. Cash is still accepted but less common.",
      budgetPerDay: "200-500 CNY ($28-70 USD)",
      tips: "Set up Alipay before arriving - it now supports international cards. Without mobile payment, China can be challenging. Carry some cash as backup.",
    },
    sim: {
      provider: "China Mobile, China Unicom, China Telecom",
      cost: "50-200 CNY ($7-28 USD) for tourist SIM",
      purchaseLocation:
        "Available at airports and official stores. China Unicom has the easiest process for foreigners. Passport required.",
      dataPlan: "5-20 GB for 7-30 days",
      tips: "China Unicom tourist SIM is the most foreigner-friendly. Internet is heavily censored - most SIMs do not include VPN. Buy an eSIM with VPN from providers like Airalo before arriving.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "China travel guide for Indians - visa and 144-hour transit tips, Great Wall itinerary, high-speed rail guide, Alipay setup, and navigating the Great Firewall.",
    bestTimeToVisit:
      "April to May and September to October (spring and autumn). Best weather and clear skies for the Great Wall and outdoor attractions. Avoid Chinese New Year (January/February) and National Day (October 1-7) due to massive domestic travel.",
    language:
      "Mandarin Chinese is the official language. English is very limited even in major cities. Google Translate (download offline pack) and Baidu Translate are essential. Learn basic Mandarin phrases.",
    safety:
      "Very safe country with low crime rates. The Great Firewall blocks WhatsApp, Google, Facebook, Instagram - use a VPN. Air quality can be poor in northern cities. Respect local customs and laws strictly.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    code: "NZ",
    heroTagline: "Middle-earth in real life, where nature puts on its greatest show",
    summary: "TODO: Add your personal experience",
    visitedDate: "TODO: Add date",
    tripDuration: "TODO: Add duration",
    visa: {
      type: "sticker-visa",
      duration: "Up to 9 months (visitor visa)",
      notes:
        "Indian passport holders need a visitor visa. Apply online at Immigration New Zealand. Requires bank statements, travel insurance, itinerary, and proof of funds. NZeTA (Electronic Travel Authority) is NOT available for Indian passport holders.",
      cost: "246 NZD (~$152 USD) online application",
    },
    cities: [
      { name: "Auckland", highlights: "TODO: Add highlights", daysSpent: 3 },
      {
        name: "Queenstown",
        highlights: "TODO: Add highlights",
        daysSpent: 4,
      },
      {
        name: "Rotorua",
        highlights: "TODO: Add highlights",
        daysSpent: 2,
      },
      {
        name: "Milford Sound",
        highlights: "TODO: Add highlights",
        daysSpent: 2,
      },
    ],
    transport: {
      local:
        "Auckland has buses and trains (AT HOP card). Other cities have limited public transport. Uber available in major cities.",
      intercity:
        "InterCity buses connect most towns. Domestic flights (Air New Zealand, Jetstar). Renting a car or campervan is the best way to explore - driving is on the left.",
      fromAirport:
        "Auckland Airport: SkyBus to city center (40-60 min, $18 NZD). Uber and taxis also available. Queenstown: Bus or taxi to town (15 min).",
      tips: "Renting a car is almost essential in New Zealand, especially for South Island. Book a campervan for the ultimate road trip experience. Drive carefully on winding mountain roads.",
    },
    money: {
      currency: "New Zealand Dollar (NZD)",
      atmNotes:
        "ATMs are available in all towns. ANZ, BNZ, ASB, and Westpac ATMs are common. Some may charge fees for international cards.",
      cardAcceptance:
        "Very widely accepted. Contactless (tap and go) payments are the norm even for small purchases. Many places are cashless.",
      budgetPerDay: "100-200 NZD ($62-124 USD)",
      tips: "New Zealand is expensive. Supermarkets (Countdown, New World, Pak'nSave) are cheaper than eating out. Freedom camping is possible in certified self-contained vehicles.",
    },
    sim: {
      provider: "Spark, Vodafone NZ, 2degrees",
      cost: "19-49 NZD ($12-30 USD) for tourist SIM",
      purchaseLocation:
        "Available at Auckland Airport arrivals, supermarkets, and official telco stores in cities.",
      dataPlan: "4-40 GB for 28-60 days",
      tips: "Spark has the best coverage nationwide, including remote areas. 2degrees is the cheapest option. Coverage can be patchy in remote South Island areas - download offline maps.",
    },
    food: "TODO: Add your personal experience",
    people: "TODO: Add your personal experience",
    culture: "TODO: Add your personal experience",
    vibe: "TODO: Add your personal experience",
    tips: "TODO: Add your personal experience",
    metaDescription:
      "New Zealand travel guide for Indians - visitor visa tips, road trip itinerary, Queenstown adventures, South Island guide, budget advice, and Hobbiton experience.",
    bestTimeToVisit:
      "December to February (New Zealand summer) for the best weather. March to May (autumn) for fewer crowds and stunning foliage. Ski season is June to October.",
    language:
      "English is the primary language. Te Reo Maori is the other official language. No language barrier for English-speaking Indian travelers.",
    safety:
      "Extremely safe country. Very welcoming to Indian travelers - significant Indian diaspora. Main risks are natural: respect mountain weather, ocean currents, and check road conditions. Sandflies on South Island are annoying but harmless.",
  },
];
