import { ContentSection, NavLink } from '../models/content-section.model';
import { ListingDetails } from '../models/listing-details.model';

export const heroImageFileName = 'house-front-tulips-spring.jpg';
export const heroImageAltText = 'Front of the house surrounded by purple and white tulips';

export const welcomeIntroText =
  "In the golden light of a setting sun sits a home we affectionately call our 'Sunset Castle.' On a hill in the quiet town of Nutley, with its jewel-like parks and great schools, it's a slice of happiness, a halcyon haven of cherry blossom springs, lavender-scented summers, red maple autumns, and hot chocolate winters.";

export const houseAddress = '16 Sunset Drive, Nutley, NJ';

export const welcomeIntroImageFileName = 'house-front-golden-hour.jpg';
export const welcomeIntroImageAltText = 'The house entrance lit by golden evening light';

export const listingDetails: ListingDetails = {
  listingUrl: 'https://listings.vbiphotography.com/16-Sunset-Dr-E-Nutley-NJ-07110-USA?lang=en',
  agentName: 'Roger Nubel',
  agentBrokerage: 'eXp Realty',
  agentPhone: '(201) 527-8997',
};

export const contentSections: readonly ContentSection[] = [
  {
    id: 'nj-flowers',
    navLabel: 'Flowers abound',
    heading: 'Flowers Abound',
    intro:
      'As the winter fades, crocuses peek forth, purple and white, across the garden. Days turn into weeks and then sweet hyacinths perfume the air; then tulips join the symphony. With the tulips come the golden forsythia, siberial quill, and vibrant sage, bursting into spring color. Luscious lavender and stunning baptisia follow, and with them the chive flowers as delicious as they are beautiful. Summer flowers like roses and liatris and lilies are not far behind, and then late summer begonias and zinnias and black-eyed susans take over, the garden season bright from start finish.',
    background: 'lavender',
    photos: [
      {
        fileName: 'crocuses-purple-white.jpg',
        altText: 'Purple and white crocuses and tulips in front of the house',
        caption: 'Crocuses at home',
        fallbackLabel: 'Crocuses by the house',
      },
      {
        fileName: 'liatris-blazing-star-field.jpg',
        altText: 'Tall purple liatris flowers blooming in front of the house',
        caption: 'Summer-blooming blazing star liatris in the front yard',
        fallbackLabel: 'Summer liatris blooms',
      },
      {
        fileName: 'garden-bearded-iris.jpg',
        altText: 'A bearded iris in bloom in the garden',
        caption: 'Iris in bloom',
        fallbackLabel: 'Bearded iris',
      },
      // {
      //   fileName: 'forsythia-yellow-flowers.jpg',
      //   altText: 'Bright yellow forsythia blooms',
      //   caption: 'Golden forsythia announces spring',
      //   fallbackLabel: 'Forsythia in bloom',
      // },
      {
        fileName: 'garden-purple-sage-flowers-1.jpg',
        altText: 'Bright purple sage flowers in the herb garden',
        caption: 'Sage flowers in the herb garden',
        fallbackLabel: 'Sage flowers in bloom',
      },
      {
        fileName: 'garden-squill-flowers-macro.jpg',
        altText: 'Blue violet Siberian squill',
        caption: 'Siberian squill in the front yard',
        fallbackLabel: 'Siberian squill in spring',
      },
      {
        fileName: 'garden-baptisia-blue-indigo.jpg',
        altText: 'Wild indigo flowers in bloom',
        caption: 'Wild indigo stuns with its vibrant colors',
        fallbackLabel: 'Wild indigo in May',
      },
      {
        fileName: 'garden-house-sunflowers.jpg',
        altText: 'Sunflowers blooming in the front of the house',
        caption: "Sunflowers both brighten the day and enrich the soil for next year's blooms",
        fallbackLabel: 'Sunflowers in the front garden',
      },
      {
        fileName: 'garden-flower-bouquet.jpg',
        altText: 'Vase with homegrown flowers',
        caption: 'Make your own garden bouquets',
        fallbackLabel: 'Pretty vase with flowers',
      },
    ],
  },
  {
    id: 'garden',
    navLabel: 'Garden',
    heading: 'The Garden',
    intro: `As the winter fades, crocuses peek forth, purple and white, across the garden. Days turn into weeks and then sweet hyacinths perfume the air; then tulips join the symphony. With the tulips come the cherry blossoms, and out comes the golden forsythia, accompanied by a serenade of pinks and whites making paradise of the towns and parks. \n \n There's no cooking like meals made with herbs and vegetables grown in the back garden--oregano and thyme and sage, sugar snap peas and cherry tomatoes, or whatever else the gardener decides to plant.`,
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
        fileName: 'lavender-bee.jpg',
        altText: 'Bee napping on lavender flower',
        caption: 'Friendly pollinators drawn by lavender yield a large tomato harvest',
        fallbackLabel: 'Bee napping on lavender flower',
      },
      {
        fileName: 'house-chive-blossoms.jpg',
        altText: 'Flowering chives in front of the house',
        caption: 'Herbs all growing season',
        fallbackLabel: 'Flowering chives',
      },
      {
        fileName: 'garden-snap-peas.jpg',
        altText: 'Fresh snap peas held in a hand',
        caption: 'The sweetest snap peas grow at home',
        fallbackLabel: 'Sugar snap peas',
      },
      {
        fileName: 'garden-cherry-tomatoes-bowl.jpg',
        altText: 'A bowl of freshly picked cherry tomatoes',
        caption: 'Fresh from the vine',
        fallbackLabel: 'Cherry tomato harvest',
      },
      {
        fileName: 'garden-spicy-peppers.jpg',
        altText: 'Spicy peppers picked in a bowl with green peppers in the background',
        caption: 'Harvest your own heat with homegrown spicy peppers',
        fallbackLabel: 'A bowl with freshy harvested spicy peppers in the garden',
      },
      {
        fileName: 'harvested-peppers.jpg',
        altText: 'Three freezer bags full of spicy peppers',
        caption: 'Grow and harvest in spring and summer, freeze to enjoy all year',
        fallbackLabel: 'Freeze herbs and vegetables to enjoy all year',
      },
    ],
  },
  {
    id: 'cherry-blossoms',
    navLabel: 'Cherry Blossoms',
    heading: 'The Cherry Blossoms of Essex County',
    intro:
      'In spring, a serenade of pinks and whites make paradise of the towns and parks of Essex county. When the first white and light pink petals start to accumulate in frothy drifts of flower, the weeping cherries of a deeper graceful pink begin to sway a romantic melody. As those notes fade, the bright bold Kwanzan cherries sing the finale of the month of blossom. And when they, too, let flutter down their petals, it is just time for lavender planting, for the cherry laurels to make honey-scented blooms, and for dogwood trees to make their showcase.',
    background: 'butter',
    focalPhoto: {
      fileName: 'cherry-blossoms-nichols.jpg',
      altText:
        'A Kwanzan cherry tree in deep pink bloom arching over the stone-lined creek in Nichols Park',
      caption: 'Cherry blossoms over the creek, Nichols Park',
      fallbackLabel: 'Cherry blossoms at Nichols Park',
    },
    photos: [
      {
        fileName: 'branch-brook-park-cherry-blossom-row.jpg',
        altText: 'Thousands of cherry blossom trees in bloom at Branch Brook Park',
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
        fileName: 'park-tea-tray.jpg',
        altText: 'A picnic set up under cherry blossom trees in the park',
        caption: 'A picnic under the blossoms',
        fallbackLabel: 'Picnic under the blossoms',
      },
      {
        fileName: 'park-picnic-castle-table-sunflower-game.jpg',
        altText: 'A board game set up in the park',
        caption: 'Board games and blossoms',
        fallbackLabel: 'Board games under cherry blossoms',
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
        fileName: 'backyard-panorama-play-tent.jpg',
        altText: 'Wide view of the backyard with play tents and lawn space',
        caption: 'Room to relax and play',
        fallbackLabel: 'Backyard panorama',
      },
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
        caption: 'Pumpkin carving on the patio',
        fallbackLabel: 'Pumpkin carving',
      },
      {
        fileName: 'halloween-minion-display-house-1.jpg',
        altText: 'A house decorated with a Halloween Minion display',
        caption: 'Town-wide Halloween party on Prospect Avenue',
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
    id: 'food-and-local-spots',
    navLabel: 'Food & Spots',
    heading: 'Food & Local Spots',
    intro:
      "With the warming of the weather comes children's laughter, friends gathering, " +
      'and families sipping tea and bubble tea from one of the many awesome spots in town.',
    background: 'butter',
    photos: [
      // {
      //   fileName: '',
      //   altText: '',
      //   caption: '',
      //   fallbackLabel: '',
      // },
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
        caption: 'Sushi night at Nami Nori in Monclair',
        fallbackLabel: 'Sushi nearby',
      },
    ],
  },
  {
    id: 'things-to-do',
    navLabel: 'Things To Do',
    heading: 'Things To Do',
    intro:
      "By midsummer the warm oranges and golds of sunflowers and black-eyed susans brighten the fields. Nearby are plenty of options for fun, from the Metlife Stadium for concerts and sporting events to the American Dream Mall with escape rooms, indoor theme parks, and even indoor skiing. An hour's drive brings the freshest apples and strawberries into the kitchen. Adventure is calling-—from the zoo to the shore, there's always somewhere nearby to explore.",
    background: 'mint',
    photos: [
      {
        fileName: 'sesame-street-big-bird-meetgreet.jpg',
        altText: 'A family meet-and-greet with Big Bird',
        caption: 'A day at Sesame Place in the American Dream Mall',
        fallbackLabel: 'Sesame Place day trip',
      },
      {
        fileName: 'sea-life-aquarium-statue-of-liberty.jpg',
        altText: 'A Statue of Liberty display inside the SEA LIFE aquarium at American Dream',
        caption: 'SEA LIFE at American Dream',
        fallbackLabel: 'SEA LIFE at American Dream',
      },
      {
        fileName: 'zoo-cheetah.jpg',
        altText: 'A cheetah resting at Turtle Back Zoo',
        caption: 'Turtle Back Zoo',
        fallbackLabel: 'Turtle Back Zoo cheetah',
      },
      {
        fileName: 'fairy-garden-tree-stump.jpg',
        altText: 'A fairy house at the Fairy Trail near South Mountain Reservation',
        caption: 'Hike along the Fairy Trail near South Mountain Reservation',
        fallbackLabel: 'A fairy house',
      },
      {
        fileName: 'liberty-science-center-trains.jpg',
        altText: 'A model train exhibit at Liberty Science Center',
        caption: 'Liberty Science Center trains exhibit',
        fallbackLabel: 'Liberty Science Center',
      },
      {
        fileName: 'kips-castle-facade.jpg',
        altText: "The stone facade of Kip's Castle",
        caption: "Kip's Castle, Montclair",
        fallbackLabel: "Kip's Castle",
      },
      {
        fileName: 'legoland-ny-statue-of-liberty.jpg',
        altText: 'A Statue of Liberty display at Legoland NY',
        caption: 'Legoland only an hour away',
        fallbackLabel: 'Statue of Liberty made of Legos',
      },
      {
        fileName: 'beach-sunrise-pier.jpg',
        altText: 'Sunrise over the ocean seen from a pier',
        caption: 'A short drive to the shore',
        fallbackLabel: 'Beach day trip',
      },
      {
        fileName: 'orchard-apple-on-tree-1.jpg',
        altText: 'Apples ripening on a tree at a local orchard',
        caption: 'Apple picking, an hour away at Maskers Orchard, Alstede Farm, and Ort Farm',
        fallbackLabel: 'Apple picking',
      },
      {
        fileName: 'strawberries.jpg',
        altText: 'Crates full of freshly picked strawberries',
        caption: 'Strawberry picking at Hillsview Farmstand',
        fallbackLabel: 'Strawberry picking',
      },
      {
        fileName: 'bronx-zoo.jpg',
        altText: 'A colorful hornbill perched on a branch in a lush aviary exhibit',
        caption: 'A day trip to the Bronx Zoo',
        fallbackLabel: 'Bronx Zoo',
      },
      {
        fileName: 'sunflower-field-wide-view.jpg',
        altText: 'A wide field of blooming sunflowers',
        caption: 'Instagram-worthy sunflower fields at Ort and Alstede Farms',
        fallbackLabel: 'Sunflower fields',
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
        fileName: 'summit-vanderbilt-mirror-room-1.jpg',
        altText: 'Mirror ball room at Summit One Vanderbuilt',
        caption:
          'Silver balloons make an otherworldly adventure with a skyline view at Summit One Vanderbilt',
        fallbackLabel: 'Mirror ball room at Summit One Vanderbilt',
      },
      {
        fileName: 'moma-dali-persistence-of-memory.jpg',
        altText: 'A surrealist painting on display at the MoMA',
        caption: 'Explore art at the MoMA',
        fallbackLabel: 'MoMA',
      },
      {
        fileName: 'color-factory-nyc-wall.jpg',
        altText: 'A brightly colored wall installation at the Color Factory',
        caption: 'Create brilliant photos and memories at the Color Factory',
        fallbackLabel: 'Color Factory',
      },
      {
        fileName: 'sloomoo-institute-slime-cups.jpg',
        altText: 'Cups of colorful slime at the SlooMoo Institute',
        caption: 'Make your own fun at SlooMoo Institute: a museum of slime',
        fallbackLabel: 'SlooMoo Institute',
      },
      {
        fileName: 'museum-of-ice-cream-cup.jpg',
        altText: 'A cup of ice cream at the Museum of Ice Cream',
        caption: 'Enjoy endless ice cream and smorgasboard of photo ops at the Museum of Ice Cream',
        fallbackLabel: 'Museum of Ice Cream',
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
        fileName: 'big-ben.jpg',
        altText: 'Big Ben and the Houses of Parliament in London',
        caption: 'London, England',
        fallbackLabel: 'Big Ben',
      },
      {
        fileName: 'monte-do-castro-vigo-spain.jpg',
        altText: 'A stone watchtower overlooking the bay from Monte do Castro',
        caption: 'Vigo, Spain',
        fallbackLabel: 'Monte do Castro, Vigo',
      },
      {
        fileName: 'disneyworld.jpg',
        altText: 'Fireworks over Cinderella Castle at Walt Disney World',
        caption: 'Walt Disney World, Florida',
        fallbackLabel: 'Disney World fireworks',
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
