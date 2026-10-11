export interface Room {
  id: string;
  name: { it: string; en: string };
  tagline: { it: string; en: string };
  description: { it: string; en: string };
  image: string;
  features: { it: string[]; en: string[] };
  capacity: { it: string; en: string };
  bed: { it: string; en: string };
}

export interface Amenity {
  id: string;
  title: { it: string; en: string };
  description: { it: string; en: string };
  iconName: string;
  category: 'core' | 'outdoor' | 'comfort';
}

export interface GuestReview {
  id: string;
  author: string;
  source: 'Google' | 'TripAdvisor';
  rating: number;
  date: string;
  highlight: { it: string; en: string };
  text: { it: string; en: string };
}

export interface TerritorySpot {
  id: string;
  name: { it: string; en: string };
  distance: { it: string; en: string };
  description: { it: string; en: string };
  image?: string;
}

export const PROPERTY_INFO = {
  name: 'La Tenuta del Passero',
  tagline: {
    it: 'Un po’ più di tempo per rallentare.',
    en: 'A little more time to slow down.',
  },
  addressVariants: {
    google: 'Via Corsira, 2, 04011 Latina LT, Italia',
    listing: 'Via Cossira 2, 04011 Le Ferriere / Aprilia, Italia',
    note: {
      it: 'Nota: l’indirizzo è registrato come Via Corsira 2 / Via Cossira 2 nell’agro tra Latina e Aprilia. Consigliamo di contattarci per coordinate esatte prima dell’arrivo.',
      en: 'Note: the street appears as Via Corsira 2 / Via Cossira 2 between Latina and Aprilia. We recommend contacting us for exact directions before arrival.',
    },
  },
  phone: '+39 347 577 8698',
  phoneClean: '+393475778698',
  whatsappUrl: 'https://wa.me/393475778698',
  ratings: {
    google: { score: '4.6', count: 109, platform: 'Google Reviews' },
    tripadvisor: { score: '4.4', count: 20, platform: 'TripAdvisor' },
  },
};

export const ROOMS: Room[] = [
  {
    id: 'matrimoniale-comfort',
    name: {
      it: 'Camera Matrimoniale Comfort',
      en: 'Comfort Double Room',
    },
    tagline: {
      it: 'Spazio quieto affacciato sulla quiete della campagna.',
      en: 'A peaceful space overlooking the serene countryside.',
    },
    description: {
      it: 'Arredata con toni naturali e finiture essenziali. Dotata di climatizzazione autonoma, TV a schermo piatto, zanzariere per notti serene con finestre aperte, e bagno privato con doccia e set di cortesia.',
      en: 'Decorated in natural tones and understated furnishings. Features independent air conditioning, flat-screen TV, window mosquito nets for peaceful open-air nights, and private en-suite bathroom with shower and complimentary toiletries.',
    },
    image: '/images/la-tenuta-del-passero/room-kitchenette-suite.jpg',
    features: {
      it: ['Aria condizionata autonoma', 'Zanzariere alle finestre', 'TV a schermo piatto', 'Bagno privato con doccia', 'Wi-Fi gratuito ad alta velocità', 'Vista giardino'],
      en: ['Independent air conditioning', 'Window mosquito screens', 'Flat-screen television', 'Private bathroom with shower', 'High-speed free Wi-Fi', 'Garden view'],
    },
    capacity: { it: '2 Ospiti', en: '2 Guests' },
    bed: { it: '1 Letto Matrimoniale', en: '1 Queen Bed' },
  },
  {
    id: 'camera-familiare',
    name: {
      it: 'Camera Familiare & Spaziosa',
      en: 'Spacious Family Room',
    },
    tagline: {
      it: 'Spazio generoso per famiglie con bambini o soggiorni prolungati.',
      en: 'Generous space for families with children or extended stays.',
    },
    description: {
      it: 'Pensata per accogliere famiglie in totale comodità. Ampio ambiente luminoso con accesso diretto verso gli spazi esterni e il giardino verdeggiante, aria condizionata, armadio spazioso e bagno privato.',
      en: 'Designed to welcome families in complete comfort. A bright, spacious setting with direct visual connection to the green grounds, climate control, generous wardrobe, and private bathroom.',
    },
    image: '/images/la-tenuta-del-passero/property-grounds-4.jpg',
    features: {
      it: ['Spazio familiare versatile', 'Aria condizionata autonoma', 'Zanzariere protettive', 'TV a schermo piatto', 'Bagno privato finestrato', 'Parcheggio vicino'],
      en: ['Versatile family layout', 'Independent air conditioning', 'Mosquito screens', 'Flat-screen television', 'En-suite bathroom with window', 'Adjacent parking'],
    },
    capacity: { it: '3 - 4 Ospiti', en: '3 - 4 Guests' },
    bed: { it: '1 Matrimoniale + Letti singoli', en: '1 Queen + Single beds' },
  },
  {
    id: 'matrimoniale-giardino',
    name: {
      it: 'Camera con Vista Giardino',
      en: 'Garden View Room',
    },
    tagline: {
      it: 'Il contatto immediato con il verde e la piscina.',
      en: 'Immediate contact with the greenery and the pool grounds.',
    },
    description: {
      it: 'Una stanza intima e riposante che gode del profumo del giardino al mattino. Include aria condizionata, zanzariere, scrivania comoda, bagno riservato e tutta la serenità della tenuta.',
      en: 'An intimate, restful room greeting the fresh morning scents of the garden. Equipped with air conditioning, mosquito nets, work surface, private bath, and the tranquil pace of the estate.',
    },
    image: '/images/la-tenuta-del-passero/garden-lawn-grounds.jpg',
    features: {
      it: ['Affaccio sul verde', 'Aria condizionata', 'Zanzariere', 'Wi-Fi gratuito', 'Bagno privato', 'Frigobar / kit cortesia'],
      en: ['Overlooks garden grounds', 'Air conditioning', 'Mosquito nets', 'Free Wi-Fi', 'Private bathroom', 'Mini-fridge & amenities'],
    },
    capacity: { it: '2 Ospiti', en: '2 Guests' },
    bed: { it: '1 Letto Matrimoniale', en: '1 Queen Bed' },
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: 'wifi',
    title: { it: 'Wi-Fi Gratuito', en: 'Free Wi-Fi' },
    description: {
      it: 'Connessione wireless gratuita disponibile nelle camere e negli spazi comuni.',
      en: 'Complimentary wireless internet available in rooms and shared areas.',
    },
    iconName: 'Wifi',
    category: 'core',
  },
  {
    id: 'breakfast',
    title: { it: 'Colazione Inclusa', en: 'Free Breakfast' },
    description: {
      it: 'Una colazione accogliente ogni mattina, con caffè italiano e proposte dolci e fresche.',
      en: 'A welcoming morning breakfast with classic Italian espresso, fresh pastries, and light refreshments.',
    },
    iconName: 'Coffee',
    category: 'core',
  },
  {
    id: 'pool',
    title: { it: 'Piscina all’Aperto', en: 'Swimming Pool' },
    description: {
      it: 'Ampia piscina immersa nel verde con solarium e lettini per il relax pomeridiano.',
      en: 'Generous outdoor pool surrounded by garden greenery, complete with sun deck and loungers.',
    },
    iconName: 'Waves',
    category: 'outdoor',
  },
  {
    id: 'parking',
    title: { it: 'Parcheggio Gratuito', en: 'Free On-Site Parking' },
    description: {
      it: 'Comodo parcheggio privato all’interno della proprietà, gratuito per tutti gli ospiti.',
      en: 'Convenient and secure complimentary private parking directly on the property premises.',
    },
    iconName: 'Car',
    category: 'core',
  },
  {
    id: 'ac',
    title: { it: 'Aria Condizionata', en: 'Air Conditioning' },
    description: {
      it: 'Climatizzazione regolabile autonomamente in ogni stanza per un comfort ideale.',
      en: 'Individually regulated climate control in all guest rooms for year-round ease.',
    },
    iconName: 'Wind',
    category: 'comfort',
  },
  {
    id: 'family',
    title: { it: 'Family-Friendly', en: 'Family-Friendly' },
    description: {
      it: 'Ambiente accogliente con ampi spazi aperti, piscina sicura e atmosfera informale per bambini.',
      en: 'Warm hospitality with wide lawns, secure pool grounds, and a relaxed setting suited for children.',
    },
    iconName: 'Users',
    category: 'comfort',
  },
  {
    id: 'garden',
    title: { it: 'Giardino & Terrazza Solarium', en: 'Garden & Sun Terrace' },
    description: {
      it: 'Spazio all’aperto curato con piante mediterranee, zone d’ombra e tavoli all’aperto.',
      en: 'Manicured outdoor grounds featuring Mediterranean greenery, shaded pergolas, and terrace seating.',
    },
    iconName: 'Trees',
    category: 'outdoor',
  },
  {
    id: 'bar',
    title: { it: 'Servizio Bar & Ristoro', en: 'Bar & Refreshments' },
    description: {
      it: 'Bevande fresche, caffè e aperitivi a disposizione per le vostre ore di riposo.',
      en: 'Chilled drinks, espresso, and aperitivi available for your afternoons by the garden.',
    },
    iconName: 'Wine',
    category: 'comfort',
  },
];

export const REVIEWS: GuestReview[] = [
  {
    id: 'rev-1',
    author: 'Ospite Verificato',
    source: 'Google',
    rating: 5,
    date: 'Stagione Estiva',
    highlight: {
      it: 'Proprietari squisiti e una pace indescrivibile a bordo piscina.',
      en: 'Exquisite owners and an indescribable calm beside the pool.',
    },
    text: {
      it: 'Siamo stati accolti con grande gentilezza e disponibilità dai titolari. Il luogo è immerso nella tranquillità, perfetto per riposarsi. La piscina è curata e pulita, immersa nel verde.',
      en: 'We were received with genuine kindness and helpfulness by the owners. The property is wrapped in peace, ideal for resting. The pool is pristine and surrounded by greenery.',
    },
  },
  {
    id: 'rev-2',
    author: 'Famiglia in Viaggio',
    source: 'Google',
    rating: 5,
    date: 'Recensione Recente',
    highlight: {
      it: 'Ottima accoglienza, camere pulite e climatizzate con zanzariere.',
      en: 'Great reception, clean air-conditioned rooms with mosquito screens.',
    },
    text: {
      it: 'La tenuta offre la libertà di sentirsi a casa. Camere dotate di tutto il necessario per trascorrere notti tranquille. La colazione al mattino dà la giusta carica per iniziare la giornata.',
      en: 'The estate allows you to feel completely at home. Rooms equipped with all essentials for sound restful nights. Morning breakfast provides the pleasant start you need.',
    },
  },
  {
    id: 'rev-3',
    author: 'Viaggiatore Weekend',
    source: 'TripAdvisor',
    rating: 4,
    date: 'Verificato',
    highlight: {
      it: 'Un’oasi di relax a breve distanza dalla città e dalla costa.',
      en: 'An oasis of relaxation within easy reach of the city and coast.',
    },
    text: {
      it: 'Posizione strategica per chi cerca un rifugio silenzioso lontano dal traffico. Grande disponibilità e cortesia. Parcheggio comodo e piscina molto gradevole.',
      en: 'Strategic position for anyone seeking a quiet retreat away from traffic. Exceptional courtesy from the hosts. Ample parking and a very pleasant pool.',
    },
  },
];

export const TERRITORY_SPOTS: TerritorySpot[] = [
  {
    id: 'ninfa',
    name: {
      it: 'Giardino di Ninfa',
      en: 'Gardens of Ninfa',
    },
    distance: {
      it: 'Circa 25 km',
      en: 'Approx. 25 km',
    },
    description: {
      it: 'Considerato uno dei giardini più romantici al mondo, sorto tra i ruderi della città medievale.',
      en: 'Renowned as one of the world’s most romantic botanical gardens, set amidst medieval ruins.',
    },
  },
  {
    id: 'sabaudia',
    name: {
      it: 'Dune di Sabaudia & Circeo',
      en: 'Sabaudia Dunes & Circeo Coast',
    },
    distance: {
      it: 'Circa 35 km',
      en: 'Approx. 35 km',
    },
    description: {
      it: 'Spiagge dorate incontaminate, mare limpido e il profilo leggendario del promontorio del Circeo.',
      en: 'Pristine golden dunes, clear waters, and the legendary promontory of Mount Circeo.',
    },
  },
  {
    id: 'castelli',
    name: {
      it: 'Castelli Romani & Laghi',
      en: 'Castelli Romani Hills & Lakes',
    },
    distance: {
      it: 'Circa 30 km',
      en: 'Approx. 30 km',
    },
    description: {
      it: 'Colline verdeggianti, borghi storici, il lago di Nemi e Castel Gandolfo con tradizioni enogastronomiche.',
      en: 'Verdant volcanic hills, historic hamlets, Lake Nemi and Castel Gandolfo with historic culinary traditions.',
    },
  },
];
