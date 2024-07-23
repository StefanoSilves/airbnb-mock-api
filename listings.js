const listings = [
  {
    id: '1',
    title: 'Mountain Cabin',
    description:
      'A cozy cabin nestled in the heart of the mountains. Perfect for nature lovers, this cabin offers stunning views, peaceful surroundings, and a rustic charm that will make you feel right at home. Enjoy the nearby hiking trails, relax by the fireplace, or simply take in the beauty of the landscape.',
    price: {
      basic: 150,
      cleaningFee: 30,
    },
    location: 'Mountain',
    city: 'Aspen',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/151',
      'https://via.placeholder.com/251',
    ],
    rating: 4.7,
    hostId: 1,
    features: [
      'Fireplace',
      'Hiking Trails',
      'Mountain View',
      'BBQ Grill',
      'Deck',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    cancellationDays: 7, // Free cancellation up to 7 days before check-in
    shared: false,
    checkInTime: '15:00 - 22:00', // Check-in time range
    checkOutTime: '10:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-15',
        comment:
          'Breathtaking views and a serene environment. Perfect for a weekend getaway.',
        hostId: 3,
        value: 5,
      },
      {
        publishedDate: '2024-07-12',
        comment:
          'The cabin was very comfortable and had all the amenities we needed. Highly recommended!',
        hostId: 5,
        value: 4,
      },
      {
        publishedDate: '2024-07-10',
        comment:
          'We enjoyed the hiking trails nearby and the fireplace in the evening was just what we needed.',
        hostId: 7,
        value: 5,
      },
      {
        publishedDate: '2024-07-08',
        comment:
          'A bit far from the nearest town, but if you’re looking for peace and quiet, this is the place.',
        hostId: 2,
        value: 4,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'Loved the rustic decor and the cozy atmosphere. We will definitely be back!',
        hostId: 10,
        value: 5,
      },
    ],
  },
  {
    id: '2',
    title: 'City Apartment',
    description:
      "A modern apartment located in the bustling city center. This apartment is ideal for travelers who want to be in the heart of the action. With easy access to public transportation, restaurants, and attractions, you'll never be far from the excitement. The apartment itself is sleek and stylish, offering all the comforts of home.",
    price: {
      basic: 300,
      cleaningFee: 50,
    },
    location: 'City',
    city: 'New York',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/152',
      'https://via.placeholder.com/252',
    ],
    rating: 4.5,
    hostId: 2,
    features: [
      'Central Location',
      'Modern Decor',
      'City View',
      'Gym Access',
      'WiFi',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 3, // Free cancellation up to 3 days before check-in
    shared: true,
    checkInTime: '14:00 - 20:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-14',
        comment:
          'Conveniently located with easy access to public transportation and attractions.',
        hostId: 5,
        value: 4,
      },
      {
        publishedDate: '2024-07-11',
        comment:
          'The view from the apartment was stunning, especially at night.',
        hostId: 1,
        value: 5,
      },
      {
        publishedDate: '2024-07-09',
        comment:
          'The apartment was clean and well-maintained. Perfect for our short stay in the city.',
        hostId: 6,
        value: 4,
      },
      {
        publishedDate: '2024-07-07',
        comment:
          'A bit noisy due to the central location, but that’s to be expected. Overall, a great place!',
        hostId: 4,
        value: 4,
      },
      {
        publishedDate: '2024-07-04',
        comment:
          'Loved the modern decor and the comfortable bed. Would definitely stay here again.',
        hostId: 3,
        value: 5,
      },
    ],
  },
  {
    id: '3',
    title: 'Beach House',
    description:
      'A luxurious beach house with direct access to the golden sands and sparkling waters. This spacious retreat is perfect for families or groups looking to unwind and enjoy the sun, sea, and surf.',
    price: {
      basic: 400,
      cleaningFee: 80,
    },
    location: 'Beach',
    city: 'Malibu',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/153',
      'https://via.placeholder.com/253',
    ],
    rating: 4.9,
    hostId: 3,
    features: [
      'Oceanfront',
      'Private Beach Access',
      'Pool',
      'Outdoor Dining',
      'Sun Deck',
    ],
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    cancellationDays: 14, // Free cancellation up to 14 days before check-in
    shared: false,
    checkInTime: '16:00 - 23:00', // Check-in time range
    checkOutTime: '12:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-13',
        comment:
          'Absolutely stunning location and property. Perfect for a beach vacation!',
        hostId: 7,
        value: 5,
      },
      {
        publishedDate: '2024-07-09',
        comment:
          'The beach house exceeded our expectations. It was clean, spacious, and had amazing views.',
        hostId: 1,
        value: 5,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'We loved the private beach access and the pool. It was like paradise!',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-07-02',
        comment:
          'The location was perfect for our family vacation. Highly recommend!',
        hostId: 6,
        value: 5,
      },
      {
        publishedDate: '2024-06-28',
        comment:
          'Spacious bedrooms, clean bathrooms, and a beautiful sun deck. What more could you ask for?',
        hostId: 4,
        value: 5,
      },
    ],
  },
  {
    id: '4',
    title: 'Lakeside Retreat',
    description:
      'A charming lakeside retreat surrounded by serene nature. Perfect for those seeking peace and quiet, this cozy cabin offers beautiful views of the lake and nearby forests. Enjoy fishing, hiking, or simply relaxing on the deck with a good book.',
    price: {
      basic: 120,
      cleaningFee: 25,
    },
    location: 'Lake',
    city: 'Lake Tahoe',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/154',
      'https://via.placeholder.com/254',
    ],
    rating: 4.6,
    hostId: 4,
    features: ['Lakefront', 'Deck', 'Fishing', 'Hiking Trails', 'Pet Friendly'],
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 5, // Free cancellation up to 5 days before check-in
    shared: false,
    checkInTime: '14:00 - 21:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-11',
        comment:
          'The lakeside retreat was exactly what we needed for a relaxing getaway.',
        hostId: 2,
        value: 4,
      },
      {
        publishedDate: '2024-07-09',
        comment:
          'The cabin was clean and cozy, and the lake views were breathtaking.',
        hostId: 5,
        value: 5,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'We enjoyed fishing off the deck and hiking in the nearby trails. It was a memorable trip.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-07-03',
        comment:
          'The location was perfect and the cabin had everything we needed for a comfortable stay.',
        hostId: 3,
        value: 4,
      },
      {
        publishedDate: '2024-06-30',
        comment: 'Cozy and quiet. Perfect for a weekend away from the city.',
        hostId: 7,
        value: 4,
      },
    ],
  },
  {
    id: '5',
    title: 'Villa with Panoramic Views',
    description:
      'A luxurious villa perched on a hilltop, offering panoramic views of the countryside. This spacious retreat is perfect for families or groups looking to relax and unwind in style. Enjoy the private pool, landscaped gardens, and stunning sunsets from the terrace.',
    price: {
      basic: 500,
      cleaningFee: 100,
    },
    location: 'Countryside',
    city: 'Tuscany',
    country: 'Italy',
    photos: [
      'https://via.placeholder.com/155',
      'https://via.placeholder.com/255',
    ],
    rating: 4.8,
    hostId: 5,
    features: [
      'Panoramic Views',
      'Private Pool',
      'Terrace',
      'Gardens',
      'Outdoor Dining',
    ],
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bathrooms: 3,
    cancellationDays: 10, // Free cancellation up to 10 days before check-in
    shared: false,
    checkInTime: '15:00 - 22:00', // Check-in time range
    checkOutTime: '12:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-12',
        comment:
          'The villa exceeded our expectations. The views were breathtaking and the amenities were top-notch.',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-07-08',
        comment:
          'We loved spending time by the pool and enjoying meals on the terrace. It was truly a luxurious experience.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-07-04',
        comment:
          'The villa was spacious and well-maintained. The countryside views were unforgettable.',
        hostId: 6,
        value: 5,
      },
      {
        publishedDate: '2024-06-29',
        comment:
          'Perfect for a family vacation. The kids loved exploring the gardens and swimming in the pool.',
        hostId: 3,
        value: 5,
      },
      {
        publishedDate: '2024-06-25',
        comment:
          'The villa was elegant and comfortable. We enjoyed every moment of our stay.',
        hostId: 8,
        value: 5,
      },
    ],
  },
  {
    id: '6',
    title: 'Seaside Cottage',
    description:
      'A charming seaside cottage just steps away from the beach. This cozy retreat is perfect for couples or small families looking to relax and enjoy the ocean breeze. Spend your days sunbathing on the sand, exploring tide pools, or watching the sunset from the deck.',
    price: {
      basic: 180,
      cleaningFee: 35,
    },
    location: 'Seaside',
    city: 'Cornwall',
    country: 'UK',
    photos: [
      'https://via.placeholder.com/156',
      'https://via.placeholder.com/256',
    ],
    rating: 4.4,
    hostId: 6,
    features: [
      'Beachfront',
      'Deck',
      'Ocean Views',
      'Sunset Views',
      'Cozy Interior',
    ],
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 5, // Free cancellation up to 5 days before check-in
    shared: false,
    checkInTime: '16:00 - 21:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-10',
        comment:
          'The seaside cottage was charming and cozy. Perfect for a romantic getaway.',
        hostId: 7,
        value: 4,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'We loved being so close to the beach. The sunsets were spectacular.',
        hostId: 4,
        value: 5,
      },
      {
        publishedDate: '2024-07-03',
        comment:
          'The cottage was clean and well-equipped. It had everything we needed for a comfortable stay.',
        hostId: 2,
        value: 4,
      },
      {
        publishedDate: '2024-06-29',
        comment:
          'A peaceful retreat by the sea. We enjoyed every moment of our vacation.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-06-25',
        comment:
          'The location was perfect and the cottage was charming. Would love to come back!',
        hostId: 5,
        value: 5,
      },
    ],
  },
  {
    id: '7',
    title: 'Urban Loft',
    description:
      'A stylish loft apartment in the heart of the city. This modern space offers sleek design, high ceilings, and plenty of natural light. Perfect for urban explorers looking to immerse themselves in the vibrant culture and nightlife of the city.',
    price: {
      basic: 250,
      cleaningFee: 40,
    },
    location: 'City',
    city: 'Paris',
    country: 'France',
    photos: [
      'https://via.placeholder.com/157',
      'https://via.placeholder.com/257',
    ],
    rating: 4.6,
    hostId: 7,
    features: [
      'City View',
      'Modern Design',
      'High Ceilings',
      'Central Location',
      'WiFi',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 3, // Free cancellation up to 3 days before check-in
    shared: false,
    checkInTime: '15:00 - 20:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-14',
        comment:
          'The urban loft was exactly what we were looking for. Stylish and centrally located.',
        hostId: 1,
        value: 5,
      },
      {
        publishedDate: '2024-07-10',
        comment:
          'The views of the city from the loft were breathtaking. It was a memorable stay.',
        hostId: 5,
        value: 5,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'The loft was clean, comfortable, and had all the amenities we needed. Highly recommend!',
        hostId: 3,
        value: 5,
      },
      {
        publishedDate: '2024-07-02',
        comment:
          "Perfect for exploring Paris. The location couldn't have been better.",
        hostId: 9,
        value: 4,
      },
      {
        publishedDate: '2024-06-28',
        comment:
          'Stylish decor and great views. We loved our stay in the urban loft.',
        hostId: 6,
        value: 5,
      },
    ],
  },
  {
    id: '8',
    title: 'Rustic Farmhouse',
    description:
      'A charming farmhouse surrounded by rolling hills and picturesque countryside. This rustic retreat offers peace and tranquility, perfect for those looking to escape the hustle and bustle of everyday life. Enjoy farm-to-table meals, explore nearby hiking trails, or simply relax in the garden.',
    price: {
      basic: 180,
      cleaningFee: 30,
    },
    location: 'Countryside',
    city: 'Provence',
    country: 'France',
    photos: [
      'https://via.placeholder.com/158',
      'https://via.placeholder.com/258',
    ],
    rating: 4.5,
    hostId: 8,
    features: [
      'Rustic Charm',
      'Garden',
      'Hiking Trails',
      'Farm-to-Table Dining',
      'Peaceful Surroundings',
    ],
    guests: 5,
    bedrooms: 2,
    beds: 4,
    bathrooms: 1,
    cancellationDays: 7, // Free cancellation up to 7 days before check-in
    shared: false,
    checkInTime: '16:00 - 21:00', // Check-in time range
    checkOutTime: '10:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-13',
        comment:
          'The farmhouse was charming and cozy. We loved the peaceful surroundings.',
        hostId: 2,
        value: 4,
      },
      {
        publishedDate: '2024-07-09',
        comment:
          'The farmhouse exceeded our expectations. It was clean, comfortable, and had beautiful views.',
        hostId: 7,
        value: 5,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'Perfect for a family vacation. The kids enjoyed exploring the garden and nearby trails.',
        hostId: 4,
        value: 5,
      },
      {
        publishedDate: '2024-07-01',
        comment:
          'The farmhouse was exactly what we needed for a relaxing getaway. Highly recommend!',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-06-27',
        comment:
          'Charming decor, comfortable beds, and a lovely garden. We will definitely be back!',
        hostId: 6,
        value: 5,
      },
    ],
  },
  {
    id: '9',
    title: 'Historic Townhouse',
    description:
      'A historic townhouse located in the heart of a charming old town. This beautifully restored home combines period charm with modern amenities. Perfect for history enthusiasts looking to immerse themselves in the rich cultural heritage of the region.',
    price: {
      basic: 200,
      cleaningFee: 35,
    },
    location: 'Old Town',
    city: 'Dubrovnik',
    country: 'Croatia',
    photos: [
      'https://via.placeholder.com/159',
      'https://via.placeholder.com/259',
    ],
    rating: 4.7,
    hostId: 9,
    features: [
      'Historic Charm',
      'Modern Amenities',
      'Central Location',
      'Courtyard',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    cancellationDays: 5, // Free cancellation up to 5 days before check-in
    shared: false,
    checkInTime: '15:00 - 22:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-12',
        comment:
          'Staying in the historic townhouse was like stepping back in time. It was a memorable experience.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-07-08',
        comment:
          'The townhouse was beautifully restored and had all the comforts of home. Highly recommend!',
        hostId: 4,
        value: 5,
      },
      {
        publishedDate: '2024-07-04',
        comment:
          'Perfect location for exploring Dubrovnik. The courtyard was a lovely place to relax in the evenings.',
        hostId: 3,
        value: 5,
      },
      {
        publishedDate: '2024-06-30',
        comment:
          'We loved the historic charm of the townhouse. It was a unique and memorable stay.',
        hostId: 1,
        value: 5,
      },
      {
        publishedDate: '2024-06-26',
        comment:
          'The townhouse exceeded our expectations. It was clean, comfortable, and centrally located.',
        hostId: 7,
        value: 5,
      },
    ],
  },
  {
    id: '10',
    title: 'Cottage with Garden',
    description:
      'A charming cottage with a beautiful garden, perfect for a peaceful retreat. This cozy getaway offers comfort and tranquility, with the added bonus of a private garden where you can relax and enjoy the natural surroundings.',
    price: {
      basic: 140,
      cleaningFee: 25,
    },
    location: 'Countryside',
    city: 'Cotswolds',
    country: 'UK',
    photos: [
      'https://via.placeholder.com/160',
      'https://via.placeholder.com/260',
    ],
    rating: 4.4,
    hostId: 10,
    features: [
      'Garden',
      'Peaceful Location',
      'Cozy Interior',
      'Pet Friendly',
      'Outdoor Dining',
    ],
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 7, // Free cancellation up to 7 days before check-in
    shared: false,
    checkInTime: '15:00 - 21:00', // Check-in time range
    checkOutTime: '10:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-11',
        comment:
          'The cottage was charming and had a lovely garden. It was perfect for a relaxing weekend.',
        hostId: 6,
        value: 4,
      },
      {
        publishedDate: '2024-07-07',
        comment:
          'We enjoyed spending time in the garden and exploring the Cotswolds. It was a delightful stay.',
        hostId: 2,
        value: 5,
      },
      {
        publishedDate: '2024-07-03',
        comment:
          'The cottage was cozy and well-equipped. We loved every moment of our stay.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-06-29',
        comment:
          'Perfect for a romantic getaway. The cottage exceeded our expectations.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-06-25',
        comment:
          'Charming decor, comfortable bed, and a beautiful garden. We will definitely be back!',
        hostId: 1,
        value: 5,
      },
    ],
  },
  {
    id: '11',
    title: 'Luxury Penthouse',
    description:
      'A luxurious penthouse apartment with breathtaking views of the city skyline. This modern retreat offers spacious living areas, a private terrace, and access to exclusive amenities such as a rooftop pool and fitness center.',
    price: {
      basic: 600,
      cleaningFee: 80,
    },
    location: 'City',
    city: 'Sydney',
    country: 'Australia',
    photos: [
      'https://via.placeholder.com/161',
      'https://via.placeholder.com/261',
    ],
    rating: 4.9,
    hostId: 11,
    features: [
      'City View',
      'Modern Design',
      'Private Terrace',
      'Rooftop Pool',
      'Fitness Center',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    cancellationDays: 14, // Free cancellation up to 14 days before check-in
    shared: false,
    checkInTime: '16:00 - 22:00', // Check-in time range
    checkOutTime: '12:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-10',
        comment:
          'The penthouse exceeded our expectations. The views were incredible and the amenities were top-notch.',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'We loved spending time on the private terrace and enjoying the city skyline views.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-07-02',
        comment:
          'The penthouse was spacious, clean, and had everything we needed for a luxurious stay.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-06-28',
        comment:
          'Perfect location and stunning views. It was a memorable experience staying in the penthouse.',
        hostId: 7,
        value: 5,
      },
      {
        publishedDate: '2024-06-24',
        comment: 'The penthouse was elegant and comfortable. Highly recommend!',
        hostId: 6,
        value: 5,
      },
    ],
  },
  {
    id: '12',
    title: 'Ski Chalet',
    description:
      'A cozy ski chalet nestled in the mountains, just steps away from the slopes. This charming retreat offers ski-in/ski-out access, breathtaking mountain views, and a warm fireplace to cozy up to after a day on the slopes.',
    price: {
      basic: 250,
      cleaningFee: 50,
    },
    location: 'Mountain',
    city: 'Verbier',
    country: 'Switzerland',
    photos: [
      'https://via.placeholder.com/162',
      'https://via.placeholder.com/262',
    ],
    rating: 4.6,
    hostId: 12,
    features: [
      'Ski-in/Ski-out',
      'Mountain View',
      'Fireplace',
      'Cozy Interior',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    cancellationDays: 7, // Free cancellation up to 7 days before check-in
    shared: false,
    checkInTime: '15:00 - 22:00', // Check-in time range
    checkOutTime: '10:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-09',
        comment:
          'The ski chalet was perfect for our winter getaway. It was cozy and had everything we needed.',
        hostId: 11,
        value: 5,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'We loved the ski-in/ski-out access and the stunning mountain views from the chalet.',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-07-01',
        comment:
          'The chalet was clean, comfortable, and had a rustic charm that added to the ski vacation experience.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-06-27',
        comment:
          'Perfect location for skiing. The chalet exceeded our expectations.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-06-23',
        comment:
          'The fireplace was a nice touch after a day on the slopes. Would definitely stay here again.',
        hostId: 7,
        value: 5,
      },
    ],
  },
  {
    id: '13',
    title: 'Bohemian Studio',
    description:
      'A bohemian-inspired studio apartment in a vibrant neighborhood. This cozy retreat offers eclectic decor, artistic charm, and a relaxing atmosphere. Perfect for creative souls looking to explore the local arts scene and soak in the unique culture of the area.',
    price: {
      basic: 120,
      cleaningFee: 20,
    },
    location: 'City',
    city: 'Berlin',
    country: 'Germany',
    photos: [
      'https://via.placeholder.com/163',
      'https://via.placeholder.com/263',
    ],
    rating: 4.3,
    hostId: 13,
    features: [
      'Eclectic Decor',
      'Artistic Charm',
      'Vibrant Neighborhood',
      'Cozy Interior',
      'WiFi',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 3, // Free cancellation up to 3 days before check-in
    shared: false,
    checkInTime: '14:00 - 20:00', // Check-in time range
    checkOutTime: '12:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-08',
        comment:
          "The bohemian studio was charming and had a creative vibe. Perfect for exploring Berlin's arts scene.",
        hostId: 12,
        value: 4,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'We loved the eclectic decor and vibrant neighborhood. It was an inspiring place to stay.',
        hostId: 11,
        value: 5,
      },
      {
        publishedDate: '2024-07-01',
        comment:
          'The studio was cozy and had everything we needed for a comfortable stay in Berlin.',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-06-27',
        comment:
          'Perfect location and artistic decor. We had a wonderful time exploring Berlin from the studio.',
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-06-24',
        comment:
          'The bohemian studio exceeded our expectations. Highly recommend!',
        hostId: 8,
        value: 5,
      },
    ],
  },
  {
    id: '14',
    title: 'Mountain Lodge',
    description:
      'A cozy mountain lodge nestled in the heart of the wilderness. This rustic retreat offers stunning mountain views, hiking trails, and a tranquil atmosphere. Perfect for outdoor enthusiasts looking to explore nature and unwind in a serene setting.',
    price: {
      basic: 200,
      cleaningFee: 40,
    },
    location: 'Mountain',
    city: 'Rocky Mountain',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/164',
      'https://via.placeholder.com/264',
    ],
    rating: 4.7,
    hostId: 14,
    features: [
      'Mountain View',
      'Hiking Trails',
      'Rustic Charm',
      'Tranquil Atmosphere',
      'WiFi',
    ],
    guests: 6,
    bedrooms: 3,
    beds: 5,
    bathrooms: 2,
    cancellationDays: 10, // Free cancellation up to 10 days before check-in
    shared: false,
    checkInTime: '16:00 - 22:00', // Check-in time range
    checkOutTime: '11:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-12',
        comment:
          'The mountain lodge was charming and had breathtaking views. Perfect for a nature getaway.',
        hostId: 13,
        value: 5,
      },
      {
        publishedDate: '2024-07-08',
        comment:
          'We loved hiking the nearby trails and relaxing by the fireplace in the evenings. It was a memorable stay.',
        hostId: 12,
        value: 5,
      },
      {
        publishedDate: '2024-07-04',
        comment:
          'The lodge was cozy and had everything we needed for a comfortable stay. Highly recommend!',
        hostId: 11,
        value: 5,
      },
      {
        publishedDate: '2024-06-30',
        comment:
          'Perfect location for exploring the Rocky Mountains. The lodge exceeded our expectations.',
        hostId: 10,
        value: 5,
      },
      {
        publishedDate: '2024-06-26',
        comment:
          'The rustic charm of the lodge and stunning mountain views made for a wonderful vacation.',
        hostId: 9,
        value: 5,
      },
    ],
  },
  {
    id: '15',
    title: 'Coastal Villa',
    description:
      'A luxurious coastal villa with stunning views of the sea. This elegant retreat offers a private pool, landscaped gardens, and direct access to the beach. Perfect for families or groups looking to relax and enjoy the sun, sand, and surf.',
    price: {
      basic: 600,
      cleaningFee: 100,
    },
    location: 'Seaside',
    city: 'Amalfi Coast',
    country: 'Italy',
    photos: [
      'https://via.placeholder.com/165',
      'https://via.placeholder.com/265',
    ],
    rating: 4.9,
    hostId: 15,
    features: [
      'Sea View',
      'Private Pool',
      'Beach Access',
      'Gardens',
      'Terrace',
    ],
    guests: 10,
    bedrooms: 5,
    beds: 8,
    bathrooms: 4,
    cancellationDays: 14, // Free cancellation up to 14 days before check-in
    shared: false,
    checkInTime: '15:00 - 21:00', // Check-in time range
    checkOutTime: '10:00', // Check-out time
    reviews: [
      {
        publishedDate: '2024-07-10',
        comment:
          'The coastal villa was spectacular. The views of the sea were breathtaking.',
        hostId: 14,
        value: 5,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'We loved spending time by the pool and exploring the gardens. It was a luxurious experience.',
        hostId: 13,
        value: 5,
      },
      {
        publishedDate: '2024-07-02',
        comment:
          'The villa was elegant and had all the amenities we needed for a perfect vacation.',
        hostId: 12,
        value: 5,
      },
      {
        publishedDate: '2024-06-28',
        comment:
          'Perfect location and stunning views. The coastal villa exceeded our expectations.',
        hostId: 11,
        value: 5,
      },
      {
        publishedDate: '2024-06-24',
        comment:
          'The villa was spacious and beautifully decorated. Highly recommend!',
        hostId: 10,
        value: 5,
      },
    ],
  },
  {
    id: '16',
    title: 'Secluded Beach House',
    description:
      'Escape to this secluded beach house surrounded by pristine nature. Perfect for a peaceful getaway with direct beach access and stunning ocean views.',
    price: {
      basic: 250,
      cleaningFee: 40,
    },
    location: 'Beachfront',
    city: 'Maui',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/166',
      'https://via.placeholder.com/266',
    ],
    rating: 4.8,
    hostId: 16,
    features: ['Beachfront', 'Secluded Location', 'Ocean Views', 'WiFi'],
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    cancellationDays: 7,
    shared: false,
    checkInTime: '16:00 - 22:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-07-12',
        comment:
          'The secluded beach house was exactly what we needed for a relaxing vacation. Highly recommend!',
        hostId: 15,
        value: 5,
      },
      {
        publishedDate: '2024-07-08',
        comment:
          'The beach house had breathtaking views and direct access to the beach. We loved every moment of our stay.',
        hostId: 14,
        value: 5,
      },
    ],
  },
  {
    id: '17',
    title: 'Rural Farmhouse Retreat',
    description:
      "Experience country living in this charming rural farmhouse. Surrounded by rolling hills and peaceful countryside, it's an ideal retreat for nature lovers.",
    price: {
      basic: 180,
      cleaningFee: 30,
    },
    location: 'Countryside',
    city: 'Tuscany',
    country: 'Italy',
    photos: [
      'https://via.placeholder.com/167',
      'https://via.placeholder.com/267',
    ],
    rating: 4.5,
    hostId: 17,
    features: [
      'Rural Setting',
      'Farmhouse Charm',
      'Peaceful Atmosphere',
      'Garden',
      'Fireplace',
    ],
    guests: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    cancellationDays: 5,
    shared: false,
    checkInTime: '15:00 - 20:00',
    checkOutTime: '10:00',
    reviews: [
      {
        publishedDate: '2024-07-10',
        comment:
          'The farmhouse retreat was a delightful escape into the Tuscan countryside. We enjoyed the tranquility and rustic charm.',
        hostId: 16,
        value: 5,
      },
      {
        publishedDate: '2024-07-06',
        comment:
          'We loved exploring the nearby vineyards and relaxing in the garden of the farmhouse. It was a wonderful stay.',
        hostId: 15,
        value: 4,
      },
    ],
  },
  {
    id: '18',
    title: 'Urban Loft with City Views',
    description:
      'Stay in this stylish urban loft with stunning views of the city skyline. Located in the heart of a vibrant city, it offers modern amenities and easy access to cultural attractions.',
    price: {
      basic: 300,
      cleaningFee: 50,
    },
    location: 'City Center',
    city: 'New York',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/168',
      'https://via.placeholder.com/268',
    ],
    rating: 4.9,
    hostId: 18,
    features: [
      'City View',
      'Urban Style',
      'Modern Amenities',
      'Central Location',
      'WiFi',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 3,
    shared: false,
    checkInTime: '14:00 - 22:00',
    checkOutTime: '12:00',
    reviews: [
      {
        publishedDate: '2024-07-09',
        comment:
          'The urban loft was stunning with amazing city views. It was centrally located and perfect for exploring New York City.',
        hostId: 17,
        value: 5,
      },
      {
        publishedDate: '2024-07-05',
        comment:
          'We enjoyed the modern amenities and stylish decor of the loft. The location was ideal for our city exploration.',
        hostId: 16,
        value: 5,
      },
    ],
  },
  {
    id: '19',
    title: 'Traditional Japanese Ryokan',
    description:
      'Immerse yourself in Japanese culture with a stay at this traditional ryokan. Experience tatami rooms, futon beds, and a serene atmosphere in a historic setting.',
    price: {
      basic: 180,
      cleaningFee: 30,
    },
    location: 'City',
    city: 'Kyoto',
    country: 'Japan',
    photos: [
      'https://via.placeholder.com/169',
      'https://via.placeholder.com/269',
    ],
    rating: 4.7,
    hostId: 19,
    features: [
      'Traditional Ryokan',
      'Tatami Rooms',
      'Futon Beds',
      'Serene Atmosphere',
      'Japanese Breakfast',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 7,
    shared: false,
    checkInTime: '15:00 - 20:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-07-08',
        comment:
          "Staying at the ryokan was a cultural experience we'll never forget. The traditional tatami rooms and futon beds were comfortable and authentic.",
        hostId: 18,
        value: 5,
      },
      {
        publishedDate: '2024-07-04',
        comment:
          'The ryokan offered a serene atmosphere and delicious Japanese breakfast. It was the perfect base for exploring Kyoto.',
        hostId: 17,
        value: 5,
      },
    ],
  },
  {
    id: '20',
    title: 'Modern Apartment with River Views',
    description:
      'Enjoy river views from this modern apartment located along the banks of a scenic river. Perfect for urban explorers looking for a peaceful retreat with easy access to city attractions.',
    price: {
      basic: 200,
      cleaningFee: 40,
    },
    location: 'Riverfront',
    city: 'Paris',
    country: 'France',
    photos: [
      'https://via.placeholder.com/170',
      'https://via.placeholder.com/270',
    ],
    rating: 4.6,
    hostId: 20,
    features: [
      'River View',
      'Modern Design',
      'Scenic Location',
      'Central Access',
      'WiFi',
    ],
    guests: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 5,
    shared: false,
    checkInTime: '16:00 - 21:00',
    checkOutTime: '10:00',
    reviews: [
      {
        publishedDate: '2024-07-07',
        comment:
          'The modern apartment had stunning river views and was well-equipped for a comfortable stay in Paris.',
        hostId: 19,
        value: 5,
      },
      {
        publishedDate: '2024-07-03',
        comment:
          'We loved the scenic location along the riverfront. It was a relaxing retreat with easy access to city attractions.',
        hostId: 18,
        value: 4,
      },
    ],
  },
  {
    id: '21',
    title: 'Scenic Mountain Retreat',
    description:
      'Escape to this scenic mountain retreat nestled in the heart of the Alps. Enjoy breathtaking views, hiking trails, and a cozy atmosphere perfect for relaxation.',
    price: {
      basic: 220,
      cleaningFee: 35,
    },
    location: 'Mountain',
    city: 'Innsbruck',
    country: 'Austria',
    photos: [
      'https://via.placeholder.com/171',
      'https://via.placeholder.com/271',
    ],
    rating: 4.8,
    hostId: 1,
    features: [
      'Mountain View',
      'Hiking Trails',
      'Cozy Atmosphere',
      'Fireplace',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    cancellationDays: 7,
    shared: false,
    checkInTime: '15:00 - 22:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-07-06',
        comment:
          'The mountain retreat was stunning with breathtaking views of the Alps. It was the perfect getaway for relaxation and hiking.',
        hostId: 20,
        value: 5,
      },
      {
        publishedDate: '2024-07-02',
        comment:
          'We enjoyed the cozy atmosphere and fireplace in the evenings. It was a memorable stay in Innsbruck.',
        hostId: 2,
        value: 5,
      },
    ],
  },
  {
    id: '22',
    title: 'Historic Villa with Garden',
    description:
      'Step back in time at this historic villa surrounded by lush gardens and historic charm. Ideal for history enthusiasts and those seeking a peaceful retreat.',
    price: {
      basic: 300,
      cleaningFee: 50,
    },
    location: 'Suburbs',
    city: 'Rome',
    country: 'Italy',
    photos: [
      'https://via.placeholder.com/172',
      'https://via.placeholder.com/272',
    ],
    rating: 4.7,
    hostId: 2,
    features: [
      'Historic Villa',
      'Garden',
      'Peaceful Atmosphere',
      'Classic Architecture',
      'WiFi',
    ],
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bathrooms: 3,
    cancellationDays: 14,
    shared: false,
    checkInTime: '14:00 - 20:00',
    checkOutTime: '12:00',
    reviews: [
      {
        publishedDate: '2024-07-05',
        comment:
          'The historic villa was a gem with its lush gardens and classic architecture. It provided a peaceful retreat in Rome.',
        hostId: 1,
        value: 5,
      },
      {
        publishedDate: '2024-07-01',
        comment:
          'We loved exploring the historic villa and its gardens. It was like stepping back in time.',
        hostId: 20,
        value: 5,
      },
    ],
  },
  {
    id: '23',
    title: 'Luxury Penthouse with Rooftop Terrace',
    description:
      'Indulge in luxury at this penthouse with a private rooftop terrace offering panoramic city views. Perfect for a sophisticated stay in the heart of a bustling city.',
    price: {
      basic: 500,
      cleaningFee: 80,
    },
    location: 'City Center',
    city: 'Tokyo',
    country: 'Japan',
    photos: [
      'https://via.placeholder.com/173',
      'https://via.placeholder.com/273',
    ],
    rating: 4.9,
    hostId: 3,
    features: [
      'Rooftop Terrace',
      'Panoramic Views',
      'Luxury Decor',
      'Central Location',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    cancellationDays: 3,
    shared: false,
    checkInTime: '16:00 - 22:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-07-04',
        comment:
          'The luxury penthouse exceeded our expectations with its stunning rooftop terrace and panoramic city views.',
        hostId: 2,
        value: 5,
      },
      {
        publishedDate: '2024-07-01',
        comment:
          'We enjoyed the luxurious decor and central location of the penthouse. It was the highlight of our trip to Tokyo.',
        hostId: 1,
        value: 5,
      },
    ],
  },
  {
    id: '24',
    title: 'Sunny Beachfront Condo',
    description:
      'Relax in this sunny beachfront condo with direct access to the beach. Enjoy ocean views, sandy shores, and seaside activities just steps away from your accommodation.',
    price: {
      basic: 180,
      cleaningFee: 30,
    },
    location: 'Beachfront',
    city: 'Miami',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/174',
      'https://via.placeholder.com/274',
    ],
    rating: 4.6,
    hostId: 4,
    features: [
      'Beachfront',
      'Ocean Views',
      'Sunny Terrace',
      'Seaside Activities',
      'WiFi',
    ],
    guests: 3,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 5,
    shared: false,
    checkInTime: '15:00 - 21:00',
    checkOutTime: '10:00',
    reviews: [
      {
        publishedDate: '2024-06-30',
        comment:
          'The beachfront condo was perfect for a sunny getaway. We loved the ocean views and easy beach access.',
        hostId: 3,
        value: 5,
      },
      {
        publishedDate: '2024-06-26',
        comment:
          'Staying at the condo was relaxing with its sunny terrace and proximity to the beach. Highly recommend!',
        hostId: 2,
        value: 5,
      },
    ],
  },
  {
    id: '25',
    title: 'Elegant Countryside Manor',
    description:
      'Experience elegance at this countryside manor surrounded by rolling hills and picturesque landscapes. Ideal for a luxurious retreat with historic charm.',
    price: {
      basic: 400,
      cleaningFee: 60,
    },
    location: 'Countryside',
    city: 'Cotswolds',
    country: 'UK',
    photos: [
      'https://via.placeholder.com/175',
      'https://via.placeholder.com/275',
    ],
    rating: 4.9,
    hostId: 5,
    features: [
      'Countryside Manor',
      'Historic Charm',
      'Luxurious Decor',
      'Gardens',
      'WiFi',
    ],
    guests: 8,
    bedrooms: 4,
    beds: 6,
    bathrooms: 4,
    cancellationDays: 14,
    shared: false,
    checkInTime: '14:00 - 20:00',
    checkOutTime: '12:00',
    reviews: [
      {
        publishedDate: '2024-06-25',
        comment:
          'The countryside manor was elegant with its historic charm and luxurious decor. We had a wonderful stay in the Cotswolds.',
        hostId: 4,
        value: 5,
      },
      {
        publishedDate: '2024-06-22',
        comment:
          'Staying at the manor was like stepping into a fairytale. The gardens and picturesque landscapes made our stay memorable.',
        hostId: 3,
        value: 5,
      },
    ],
  },
  {
    id: '26',
    title: 'Cozy Cabin in the Woods',
    description:
      'Escape to this cozy cabin nestled in the tranquil woods. Perfect for nature lovers seeking a peaceful retreat with hiking trails and wildlife sightings.',
    price: {
      basic: 150,
      cleaningFee: 25,
    },
    location: 'Woods',
    city: 'Aspen',
    country: 'USA',
    photos: [
      'https://via.placeholder.com/176',
      'https://via.placeholder.com/276',
    ],
    rating: 4.7,
    hostId: 6,
    features: [
      'Cabin',
      'Tranquil Setting',
      'Hiking Trails',
      'Wildlife',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    cancellationDays: 7,
    shared: false,
    checkInTime: '16:00 - 22:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-06-20',
        comment:
          'The cozy cabin was a perfect retreat in the woods. We enjoyed hiking trails and peaceful surroundings.',
        hostId: 5,
        value: 5,
      },
      {
        publishedDate: '2024-06-17',
        comment:
          'Staying at the cabin was relaxing with its tranquil setting and wildlife sightings. Highly recommend for nature enthusiasts.',
        hostId: 4,
        value: 5,
      },
    ],
  },
  {
    id: '27',
    title: 'Charming Townhouse in Historic District',
    description:
      'Stay in this charming townhouse located in a historic district. Enjoy cobblestone streets, local cafes, and easy access to cultural landmarks.',
    price: {
      basic: 220,
      cleaningFee: 35,
    },
    location: 'Historic District',
    city: 'Dublin',
    country: 'Ireland',
    photos: [
      'https://via.placeholder.com/177',
      'https://via.placeholder.com/277',
    ],
    rating: 4.6,
    hostId: 7,
    features: [
      'Townhouse',
      'Historic Charm',
      'Central Location',
      'Local Cafes',
      'WiFi',
    ],
    guests: 3,
    bedrooms: 2,
    beds: 2,
    bathrooms: 1,
    cancellationDays: 5,
    shared: false,
    checkInTime: '15:00 - 21:00',
    checkOutTime: '10:00',
    reviews: [
      {
        publishedDate: '2024-06-15',
        comment:
          'The charming townhouse was perfect with its historic charm and central location in Dublin. We enjoyed exploring the local cafes and landmarks.',
        hostId: 6,
        value: 5,
      },
      {
        publishedDate: '2024-06-12',
        comment:
          'Staying in the historic district was a delightful experience. The townhouse was cozy and had everything we needed for a comfortable stay.',
        hostId: 5,
        value: 4,
      },
    ],
  },
  {
    id: '28',
    title: 'Serenity Beachfront Villa',
    description:
      'Relax at this serene beachfront villa with panoramic views of the ocean. Enjoy private beach access, luxurious amenities, and a tranquil atmosphere.',
    price: {
      basic: 600,
      cleaningFee: 100,
    },
    location: 'Beachfront',
    city: 'Bali',
    country: 'Indonesia',
    photos: [
      'https://via.placeholder.com/178',
      'https://via.placeholder.com/278',
    ],
    rating: 4.9,
    hostId: 8,
    features: [
      'Beachfront Villa',
      'Private Beach Access',
      'Luxury Amenities',
      'Tranquil Atmosphere',
      'WiFi',
    ],
    guests: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 3,
    cancellationDays: 7,
    shared: false,
    checkInTime: '16:00 - 22:00',
    checkOutTime: '11:00',
    reviews: [
      {
        publishedDate: '2024-06-10',
        comment:
          'The beachfront villa exceeded our expectations with its luxurious amenities and private beach access. It was the perfect getaway in Bali.',
        hostId: 7,
        value: 5,
      },
      {
        publishedDate: '2024-06-06',
        comment:
          'Staying at the villa was a serene experience with stunning ocean views and a tranquil atmosphere. Highly recommend!',
        hostId: 6,
        value: 5,
      },
    ],
  },
  {
    id: '29',
    title: 'Mountain View Chalet',
    description:
      'Experience breathtaking mountain views from this cozy chalet. Perfect for ski enthusiasts and nature lovers seeking a retreat in the Alps.',
    price: {
      basic: 280,
      cleaningFee: 45,
    },
    location: 'Mountain',
    city: 'Chamonix',
    country: 'France',
    photos: [
      'https://via.placeholder.com/179',
      'https://via.placeholder.com/279',
    ],
    rating: 4.8,
    hostId: 9,
    features: [
      'Mountain Views',
      'Ski Access',
      'Cozy Chalet',
      'Nature Retreat',
      'WiFi',
    ],
    guests: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    cancellationDays: 5,
    shared: false,
    checkInTime: '15:00 - 21:00',
    checkOutTime: '10:00',
    reviews: [
      {
        publishedDate: '2024-06-05',
        comment:
          'The mountain view chalet was perfect with its cozy atmosphere and stunning views of the Alps. Ideal for a ski retreat.',
        hostId: 8,
        value: 5,
      },
      {
        publishedDate: '2024-06-02',
        comment:
          'We enjoyed the ski access and peaceful surroundings of the chalet. It was a memorable stay in Chamonix.',
        hostId: 7,
        value: 5,
      },
    ],
  },
  {
    id: '30',
    title: 'Modern City Loft',
    description:
      'Stay in this modern city loft located in the heart of downtown. Enjoy urban convenience, stylish decor, and easy access to city nightlife and attractions.',
    price: {
      basic: 200,
      cleaningFee: 35,
    },
    location: 'City Center',
    city: 'Sydney',
    country: 'Australia',
    photos: [
      'https://via.placeholder.com/180',
      'https://via.placeholder.com/280',
    ],
    rating: 4.7,
    hostId: 10,
    features: [
      'City Loft',
      'Modern Decor',
      'Central Location',
      'Nightlife',
      'WiFi',
    ],
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    cancellationDays: 3,
    shared: false,
    checkInTime: '14:00 - 20:00',
    checkOutTime: '12:00',
    reviews: [
      {
        publishedDate: '2024-06-01',
        comment:
          "The modern city loft was stylish with a central location in Sydney. It was perfect for exploring the city's nightlife and attractions.",
        hostId: 9,
        value: 5,
      },
      {
        publishedDate: '2024-05-28',
        comment:
          'Staying at the loft was convenient and comfortable. We loved the modern decor and easy access to downtown Sydney.',
        hostId: 8,
        value: 4,
      },
    ],
  },
];

module.exports = listings;
