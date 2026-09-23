import { ContentSection, NavLink } from '../models/content-section.model';
import { ListingDetails } from '../models/listing-details.model';

export const heroImageFileName = 'house-front-tulips-spring.jpg';
export const heroImageAltText = 'Front of the house surrounded by purple and white tulips';

export const welcomeIntroText =
  `In the golden light of a setting sun sits a home we affectionately call our ` +
  `"Sunset Castle." On a hill in the quiet town of Nutley, with its jewel-like ` +
  `parks and great schools, it's a slice of happiness-—a halcyon haven of cherry ` +
  `blossom springs, lavender-scented summers, red maple autumns, and hot chocolate winters.`;

export const houseAddress = '16 Sunset Drive, Nutley, NJ';

export const welcomeIntroImageFileName = 'house-front-golden-hour.jpg';
export const welcomeIntroImageAltText = 'The house entrance lit by golden evening light';

export const listingDetails: ListingDetails = {
  price: 'TBD',
  bedroomCount: 'TBD',
  bathroomCount: 'TBD',
  squareFootage: 'TBD',
  listingUrl: '#',
};

export const contentSections: readonly ContentSection[] = [
  {
    id: 'relaxing-at-home',
    navLabel: 'At Home',
    heading: 'Relaxing at Home',
    intro:
      'Afternoons change to sipping cool lavender tea on the patio and watching the butterflies ' +
      'dance across the yard.',
    background: 'blush',
    dotted: true,
    photos: [
      {
        fileName: 'backyard-panorama-play-tent.jpg',
        altText: 'Wide view of the backyard with play tents and lawn space',
        caption: 'Room to relax and play',
        fallbackLabel: 'Backyard panorama',
      },
      {
        fileName: 'basement-finished-room.jpg',
        altText: 'Finished basement room with wood-look flooring, ready for furnishing',
        caption: 'A finished basement, ready for your vision',
        fallbackLabel: 'Finished basement / bonus room',
      },
    ],
  },
  {
    id: 'garden',
    navLabel: 'Garden',
    heading: 'The Garden',
    intro:
      "There's no cooking like meals made with herbs and vegetables grown in the back garden — " +
      'oregano and thyme and sage, sugar snap peas and cherry tomatoes, or whatever else the ' +
      'gardener decides to plant.',
    background: 'mint',
    photos: [
      {
        fileName: 'backyard-garden-arbor-lavender.jpg',
        altText: 'Backyard garden with a black metal arbor, lavender, and a garden shed',
        caption: 'The garden arbor',
        fallbackLabel: 'Garden arbor',
      },
      {
        fileName: 'garden-sunflowers-lavender-pots.jpg',
        altText: 'Sunflowers and potted lavender lining the garden',
        caption: 'Sunflowers and lavender',
        fallbackLabel: 'Sunflowers and lavender',
      },
      {
        fileName: 'house-chive-blossoms.jpg',
        altText: 'Flowering chives in front of the house',
        caption: 'Herbs all growing season',
        fallbackLabel: 'Flowering chives',
      },
      {
        fileName: 'garden-cherry-tomatoes-bowl.jpg',
        altText: 'A bowl of freshly picked cherry tomatoes',
        caption: 'Fresh from the vine',
        fallbackLabel: 'Cherry tomato harvest',
      },
      {
        fileName: 'garden-bearded-iris.jpg',
        altText: 'A bearded iris in bloom in the garden',
        caption: 'Iris in bloom',
        fallbackLabel: 'Bearded iris',
      },
    ],
  },
  {
    id: 'seasons-and-events',
    navLabel: 'Seasons',
    heading: 'Seasons & Local Events',
    intro:
      'Every season brings its own reason to celebrate, right in the backyard and around the neighborhood.',
    background: 'lavender',
    dotted: true,
    photos: [
      {
        fileName: 'backyard-slide-camping-tent.jpg',
        altText: "A tent set up in the backyard next to a kids' slide",
        caption: 'Backyard camping under the stars',
        fallbackLabel: 'Backyard summer camping',
      },
      {
        fileName: 'summer-fireworks.jpg',
        altText: 'Fireworks lighting up the summer night sky',
        caption: "Nutley's Fourth of July fireworks",
        fallbackLabel: 'Fourth of July fireworks',
      },
      {
        fileName: 'orchard-hillside-view.jpg',
        altText: 'A hillside apple orchard in autumn',
        caption: "An hour's drive to pick-your-own apples",
        fallbackLabel: 'Apple orchard',
      },
      {
        fileName: 'apple-pie-lattice-1.jpg',
        altText: 'A homemade apple pie with a lattice crust',
        caption: 'Pie-making practice in the kitchen',
        fallbackLabel: 'Homemade apple pie',
      },
      {
        fileName: 'pumpkin-carving-jack-o-lantern.jpg',
        altText: "A carved jack-o'-lantern",
        caption: 'Pumpkin carving on Prospect Avenue',
        fallbackLabel: 'Pumpkin carving',
      },
      {
        fileName: 'halloween-minion-display-house-1.jpg',
        altText: 'A house decorated with a Halloween Minion display',
        caption: 'Halloween down the block',
        fallbackLabel: 'Halloween decorations',
      },
      {
        fileName: 'backyard-snowman-shed.jpg',
        altText: 'A snowman built in the backyard near the garden shed',
        caption: 'Snow days at home',
        fallbackLabel: 'Backyard snowman',
      },
      {
        fileName: 'hot-chocolate-snowman-mugs.jpg',
        altText: 'Mugs of hot chocolate decorated with snowmen',
        caption: 'Sunset Special Hot Chocolate',
        fallbackLabel: 'Hot chocolate',
      },
    ],
  },
  {
    id: 'parks-and-nature',
    navLabel: 'Parks & Nature',
    heading: 'Parks & Nature',
    intro:
      'As the winter fades, crocuses peek forth, purple and white, across the garden. ' +
      'Days turn into weeks and the tulips join the symphony, with cherry blossoms close behind.',
    background: 'blush',
    dotted: true,
    photos: [
      {
        fileName: 'branch-brook-park-cherry-blossom-row.jpg',
        altText: 'Rows of cherry blossom trees in bloom at Branch Brook Park',
        caption: 'Branch Brook Park, Newark',
        fallbackLabel: 'Branch Brook Park cherry blossoms',
      },
      {
        fileName: 'nichols-park-creek-cherry-blossoms.jpg',
        altText: 'A stone-lined creek running through Nichols Park under blooming cherry trees',
        caption: 'Nichols Park, spring',
        fallbackLabel: 'Nichols Park creek',
      },
      {
        fileName: 'cherry-blossoms-closeup-1.jpg',
        altText: 'Close-up of pale pink cherry blossoms',
        caption: 'Blossoms up close',
        fallbackLabel: 'Cherry blossom close-up',
      },
      {
        fileName: 'playground-sunset-cherry-blossoms.jpg',
        altText: 'Playground lit by sunset, framed by cherry blossoms',
        caption: 'Eleanor Guarino Playground, Belleville',
        fallbackLabel: 'Eleanor Guarino Playground',
      },
      {
        fileName: 'house-front-crocuses-tulips.jpg',
        altText: 'Purple and white crocuses and tulips in front of the house',
        caption: 'Crocuses at home',
        fallbackLabel: 'Crocuses by the house',
      },
      {
        fileName: 'house-front-liatris-blooms.jpg',
        altText: 'Tall purple liatris flowers blooming in front of the house',
        caption: 'Summer-blooming blazing star liatris',
        fallbackLabel: 'Summer liatris blooms',
      },
      {
        fileName: 'forsythia-yellow-flowers.jpg',
        altText: 'Bright yellow forsythia blooms',
        caption: 'Golden forsythia announces spring',
        fallbackLabel: 'Forsythia in bloom',
      },
      {
        fileName: 'park-picnic-cherry-blossom-castle-table.jpg',
        altText: 'A picnic set up under cherry blossom trees in the park',
        caption: 'A picnic under the blossoms',
        fallbackLabel: 'Picnic under the blossoms',
      },
    ],
  },
  {
    id: 'food-and-local-spots',
    navLabel: 'Food & Spots',
    heading: 'Food & Local Spots',
    intro:
      "With the warming of the weather comes children's laughter, friends gathering, " +
      'and families sipping tea and bubble tea from one of the many awesome spots in town.',
    background: 'butter',
    photos: [
      {
        fileName: 'park-tea-tray.jpg',
        altText: 'Tea cups and a thermos on a wooden tray in the park, cherry blossoms behind',
        caption: 'Tea shops nearby in Montclair',
        fallbackLabel: 'Tea in the park',
      },
      {
        fileName: 'tea-shop-fireplace.jpg',
        altText: 'A cozy local tea shop interior with a fireplace',
        caption: 'Cozy afternoons at the local tea shop',
        fallbackLabel: 'Local tea shop',
      },
      {
        fileName: 'ramen-kinya-bowl.jpg',
        altText: 'A bowl of ramen from Kinya',
        caption: 'Ramen at Kinya',
        fallbackLabel: 'Ramen at Kinya',
      },
      {
        fileName: 'sushi-hand-rolls.jpg',
        altText: 'A plate of sushi hand rolls',
        caption: 'Sushi night, close to home',
        fallbackLabel: 'Sushi nearby',
      },
    ],
  },
  {
    id: 'things-to-do',
    navLabel: 'Things To Do',
    heading: 'Things To Do',
    intro:
      "Adventure is calling-—from the zoo to the shore, there's always somewhere nearby to explore.",
    background: 'mint',
    photos: [
      {
        fileName: 'zoo-cheetah.jpg',
        altText: 'A cheetah resting at Turtle Back Zoo',
        caption: 'Turtle Back Zoo',
        fallbackLabel: 'Turtle Back Zoo cheetah',
      },
      {
        fileName: 'zoo-lion-1.jpg',
        altText: 'A lion walking at Turtle Back Zoo',
        caption: 'South Mountain Recreation Complex',
        fallbackLabel: 'Turtle Back Zoo lion',
      },
      {
        fileName: 'butterfly-house-exhibit.jpg',
        altText: 'Butterflies inside a butterfly house exhibit',
        caption: 'The butterfly house',
        fallbackLabel: 'Butterfly house',
      },
      {
        fileName: 'kips-castle-facade.jpg',
        altText: "The stone facade of Kip's Castle",
        caption: "Kip's Castle, Montclair",
        fallbackLabel: "Kip's Castle",
      },
      {
        fileName: 'beach-sunrise-pier.jpg',
        altText: 'Sunrise over the ocean seen from a pier',
        caption: 'A short drive to the shore',
        fallbackLabel: 'Beach day trip',
      },
    ],
  },
  {
    id: 'day-trips',
    navLabel: 'Day Trips',
    heading: 'Day Trips',
    intro:
      'By midsummer the warm oranges and golds of sunflowers and black-eyed susans brighten ' +
      "the fields. An hour's drive finds perfect pie-fruit and brings the freshest apples into the kitchen.",
    background: 'lavender',
    dotted: true,
    photos: [
      {
        fileName: 'orchard-apple-on-tree-1.jpg',
        altText: 'Apples ripening on a tree at a local orchard',
        caption: 'Apple picking, an hour away',
        fallbackLabel: 'Apple picking',
      },
      {
        fileName: 'sunflower-field-wide-view.jpg',
        altText: 'A wide field of blooming sunflowers',
        caption: 'Sunflower fields in full bloom',
        fallbackLabel: 'Sunflower fields',
      },
      {
        fileName: 'sunflower-field-girl.jpg',
        altText: 'A child posing in a sunflower field',
        caption: 'Instagram-worthy sunflower fields',
        fallbackLabel: 'Sunflower field visit',
      },
      {
        fileName: 'park-picnic-castle-table-sunflower-game.jpg',
        altText: 'A picnic with a board game set up in the park',
        caption: 'A picnic day out',
        fallbackLabel: 'Picnic day out',
      },
      {
        fileName: 'sesame-street-big-bird-meetgreet.jpg',
        altText: 'A family meet-and-greet with Big Bird',
        caption: 'A day at Sesame Place',
        fallbackLabel: 'Sesame Place day trip',
      },
    ],
  },
  {
    id: 'close-to-nyc',
    navLabel: 'Close to NYC',
    heading: 'Close to NYC',
    intro:
      'Take the express bus into the city for a day of delight: rise above the skyline, browse ' +
      'world-class art, or dive into color, slime, and ice cream for the culinary and creative ' +
      'adventure of a lifetime.',
    background: 'cream',
    photos: [
      {
        fileName: 'statue-of-liberty-nyc.jpg',
        altText: 'The Statue of Liberty',
        caption: 'The Statue of Liberty',
        fallbackLabel: 'Statue of Liberty',
      },
      {
        fileName: 'nyc-skyline-empire-state-1.jpg',
        altText: 'The New York City skyline including the Empire State Building',
        caption: 'Skyline views from Summit One Vanderbilt',
        fallbackLabel: 'NYC skyline',
      },
      {
        fileName: 'moma-dali-persistence-of-memory.jpg',
        altText: 'A surrealist painting on display at the MoMA',
        caption: 'Otherworldly art at the MoMA',
        fallbackLabel: 'MoMA',
      },
      {
        fileName: 'color-factory-nyc-wall.jpg',
        altText: 'A brightly colored wall installation at the Color Factory',
        caption: 'The Color Factory',
        fallbackLabel: 'Color Factory',
      },
      {
        fileName: 'sloomoo-institute-slime-cups.jpg',
        altText: 'Cups of colorful slime at the SlooMoo Institute',
        caption: 'SlooMoo Institute',
        fallbackLabel: 'SlooMoo Institute',
      },
      {
        fileName: 'museum-of-ice-cream-cup.jpg',
        altText: 'A cup of ice cream at the Museum of Ice Cream',
        caption: 'Museum of Ice Cream',
        fallbackLabel: 'Museum of Ice Cream',
      },
      {
        fileName: 'sea-life-aquarium-statue-of-liberty.jpg',
        altText: 'A Statue of Liberty display inside the SEA LIFE aquarium at American Dream',
        caption: 'SEA LIFE at American Dream',
        fallbackLabel: 'SEA LIFE at American Dream',
      },
      {
        fileName: 'liberty-science-center-trains.jpg',
        altText: 'A model train exhibit at Liberty Science Center',
        caption: 'Liberty Science Center',
        fallbackLabel: 'Liberty Science Center',
      },
    ],
  },
  {
    id: 'easy-travel',
    navLabel: 'Easy Travel',
    heading: 'Close to three major airports and a cruise port: the world is at your fingertips',
    background: 'blush',
    dotted: true,
    photos: [
      {
        fileName: 'golden-gate-bridge.jpg',
        altText: 'The Golden Gate Bridge in San Francisco',
        caption: 'San Francisco, USA',
        fallbackLabel: 'San Francisco',
      },
      {
        fileName: 'taipei-101-dusk.jpg',
        altText: 'Taipei 101 tower at dusk',
        caption: 'Taipei, Taiwan',
        fallbackLabel: 'Taipei',
      },
      {
        fileName: 'ravello-italy-coastal-view.jpg',
        altText: 'A coastal view of Ravello, Italy',
        caption: 'Ravello, Italy',
        fallbackLabel: 'Ravello, Italy',
      },
      {
        fileName: 'vancouver-skyline-seawall.jpg',
        altText: 'The Vancouver skyline seen from the seawall',
        caption: 'Vancouver, Canada',
        fallbackLabel: 'Vancouver',
      },
      {
        fileName: 'byodo-in-temple-japan.jpg',
        altText: 'Byodo-in Temple in Japan',
        caption: 'Byodo-in Temple, Japan',
        fallbackLabel: 'Byodo-in Temple',
      },
      {
        fileName: 'chureito-pagoda-japan-1.jpg',
        altText: 'Chureito Pagoda in Japan',
        caption: 'Chureito Pagoda, Japan',
        fallbackLabel: 'Chureito Pagoda',
      },
      {
        fileName: 'cruise-ship-odyssey-of-the-seas.jpg',
        altText: 'A cruise ship docked at port',
        caption: 'Cruises from Port Bayonne',
        fallbackLabel: 'Cruise ship',
      },
      {
        fileName: 'cruise-balcony-sunset-tablet.jpg',
        altText: 'A sunset view from a cruise ship balcony',
        caption: 'Sail away',
        fallbackLabel: 'Cruise balcony sunset',
      },
    ],
  },
];

export const navLinks: readonly NavLink[] = [
  { id: 'welcome', label: 'Welcome' },
  ...contentSections.map((section) => ({ id: section.id, label: section.navLabel })),
  { id: 'inquire', label: 'Inquire' },
];
