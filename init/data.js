const sampleListings = [
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657002865844-c4127d542c41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1718644342133-0dbb056cb7fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://plus.unsplash.com/premium_photo-1678402545080-2353b489c0c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {

  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
  //   {
  //     title: 'Cozy Beachfront Cottage',
  //     description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
  //     image: 'https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 1500,
  //     location: 'Malibu',
  //     country: 'United States',
  //   },
    {
      title: "Sunset Over the Mountains",
      description: "Beautiful view of the sun setting behind mountain peaks.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1500,
      location: "Rio de Janeiro",
      country: "Brazil",
    },
    {
      title: "Forest Trail Adventure",
      description: "A serene pathway through dense green forests.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 900,
      location: "Bavaria",
      country: "Germany",
    },
    {
      title: "City Lights at Night",
      description:
        "The vibrant skyline of a bustling city illuminated by night.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 2000,
      location: "New York",
      country: "USA",
    },
    {
      title: "Desert Dunes",
      description: "Vast sand dunes stretching across the horizon.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1100,
      location: "Sahara",
      country: "Morocco",
    },
    {
      title: "Ocean Breeze",
      description: "Crystal clear waters and gentle waves hitting the shore.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1400,
      location: "Malibu",
      country: "USA",
    },
    {
      title: "Snow-Capped Peaks",
      description: "Majestic mountains covered in fresh snow.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1750,
      location: "Aspen",
      country: "USA",
    },
    {
      title: "Countryside Bliss",
      description: "Rolling hills and peaceful farmlands under a clear sky.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 800,
      location: "Provence",
      country: "France",
    },
    {
      title: "Lush Greenery",
      description: "A calm scene of nature with rich greenery all around.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 950,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Riverside Calm",
      description: "A quiet river running through an idyllic landscape.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1200,
      location: "Zurich",
      country: "Switzerland",
    },
    {
      title: "Urban Jungle",
      description: "The blend of nature and architecture in a modern city.",
      image: {
        url: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        filename: "Listing_Images",
      },
      price: 1700,
      location: "Singapore",
      country: "Singapore",
    },
];

module.exports = { data: sampleListings };
