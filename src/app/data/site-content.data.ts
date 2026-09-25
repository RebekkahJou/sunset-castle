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
      'As the winter fades, crocuses peek forth, purple and white, across the garden. Days turn into weeks and then sweet hyacinths perfume the air; then tulips join the symphony. With the tulips come the golden forsythia, siberian squill, and vibrant sage, bursting into spring color. Luscious lavender and stunning baptisia follow, and with them the chive flowers as delicious as they are beautiful. Summer flowers like roses and liatris and lilies are not far behind, and then late summer begonias and zinnias and black-eyed susans take over, the garden season bright from start finish.',
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
    intro: `There's nothing as delicious as meals made with herbs and vegetables grown in the back garden: oregano and thyme and sage and fennel, sugar snap peas and cherry tomatoes, and whatever else the gardener decides to plant. Will 2027 bring the sweetest cherry tomatoes ever? Crunchy cucumbers and fiery habeneros? Easy herbs, and brilliant blooms of every color?`,
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
        fileName: 'garden-snap-peas.jpg',
        altText: 'Fresh snap peas held in a hand',
        caption: 'The sweetest snap peas grow at home',
        fallbackLabel: 'Sugar snap peas',
      },
      {
        fileName: 'lavender-bee.jpg',
        altText: 'Bee napping on lavender flower',
        caption: 'Friendly pollinators drawn by lavender yield a large tomato harvest',
        fallbackLabel: 'Bee napping on lavender flower',
      },
      {
        fileName: 'garden-cherry-tomatoes-bowl.jpg',
        altText: 'A bowl of freshly picked cherry tomatoes',
        caption: 'Fresh from the vine',
        fallbackLabel: 'Cherry tomato harvest',
        modalContent: {
          kind: 'recipe',
          recipe: {
            title: 'Garden Fresh Tomato Sauce',
            description: 'When fresh tomatoes and herbs are in season.',
            ingredients: [
              '1 large pot worth of fresh cherry, grape, or Roma tomatoes, or whatever you have',
              '1 small stem fresh rosemary, about ½ tsp chopped',
              '4-5 long stems fresh oregano, about 2 tsp leaves',
              '4-6 stems fresh thyme, about 1 tsp leaves',
              '4-5 short stems parsley, about ½ tsp leaves (more is better, but that’s all I can ever get); plus 1-4 stems parsley flower if it’s gone to flower',
              '2-4 stems fresh basil',
              '1 fresh or frozen habanero (optional)',
              '3 large cloves garlic',
              '¼ onion',
            ],
            instructions: [
              'Put all tomatoes in a large pot (for larger tomatoes, you can optionally skin them first, but the small ones never need it).',
              'Turn the heat to medium-low and cover with a lid. While the tomatoes heat they will release liquid, so you don’t need to add any to keep them from burning. While they start simmering, puree the onion and habanero; destem the thyme and oregano as best you can; and chop the parsley, rosemary, and (optionally) basil (or just wilt the basil in whole if you prefer).',
              'Once the herbs are ready, add them to the pot and let simmer uncovered for about 1 to 1.5 hours, stirring occasionally and popping and smushing any tomatoes that haven’t split open on their own, until it has reduced to a pasta-sauce consistency. Different tomatoes change how long that takes — up to 2-3 hours is common with larger tomatoes.',
              'Optional: if the sauce is very watery, scoop some off the top before stirring (the thicker sauce settles to the bottom naturally) and enjoy it as tomato soup separately — this quickens the sauce reduction and gets you tasty tomato soup on the side.',
            ],
          },
        },
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
        externalLink: 'https://branchbrookpark.org/index.html',
      },
      {
        fileName: 'branch-brook-weeping-cherry.jpg',
        altText: 'A centuries-old weeping cherry tree in full pale pink bloom at Branch Brook Park',
        caption: 'Romantic weeping cherry tree, Branch Brook Park',
        fallbackLabel: 'Weeping cherry tree, Branch Brook Park',
      },
      {
        fileName: 'branch-brook-cherry-blossoms-4.jpg',
        altText: 'Rows of pink and white cherry blossom trees along a path at Branch Brook Park',
        caption: 'Every shade of pink and white in the blossoms at Branch Brook Park',
        fallbackLabel: 'Branch Brook Park cherry blossoms',
      },
      {
        fileName: 'nichols-park-creek-cherry-blossoms.jpg',
        altText:
          "A stone-lined creek running through Nutley's Memorial Park under blooming cherry trees",
        caption: 'Memorial Park, Nutley',
        fallbackLabel: 'Memorial Park creek',
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
      `Every season brings its own reason to celebrate, right in the backyard and around the neighborhood. Picnics, sports, and spring holidays keep friendships warm while the temperatures slowly rise. Soon, as the long days lead to playful long afternoons, it is perfect weather for the stargazing, while magical fireflies light up the yard. Then when the grocery seasonal aisle starts to trade tiki torches and grills for backpack and shoe sales, the apple orchards grow lush with sweet fruit. With the reds and oranges migrating from branch to the ground, family and friends circle the table under the dining room chandelier and think of all there is to be grateful for. As snow begins to tumble, the family debates become on whether to go to Memorial Park by Vreeland to sled, or Third River Park behind the library. Outside stands a snowman happy snowman, hoping for a cup of that delicous hot cocoa.`,
    background: 'lavender',
    dotted: true,
    focalPhoto: {
      fileName: 'backyard-panorama-play-tent.jpg',
      altText: 'Wide view of the backyard with play tents and lawn space',
      caption: 'Room to relax and play',
      fallbackLabel: 'Backyard panorama',
    },
    photos: [
      {
        fileName: 'summer-fireworks.jpg',
        altText: 'Fireworks lighting up the summer night sky',
        caption: "Nutley's Fourth of July fireworks",
        fallbackLabel: 'Fourth of July fireworks',
      },
      {
        fileName: 'backyard-slide-camping-tent.jpg',
        altText: "A tent set up in the backyard next to a kids' slide",
        caption: 'Backyard camping under the stars',
        fallbackLabel: 'Backyard summer camping',
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
        modalContent: {
          kind: 'marquee',
          title: 'Pie Season',
          items: [
            {
              kind: 'photo',
              fileName: 'apple-pie-lattice-1.jpg',
              altText: 'A homemade apple pie with a lattice crust',
              caption: 'Lattice-top apple pie',
            },
            {
              kind: 'photo',
              fileName: 'apple-pie-lattice-2.jpg',
              altText: 'A homemade apple pie with a lattice crust, another angle',
              caption: 'Fresh out of the oven',
            },
            {
              kind: 'photo',
              fileName: 'apple-pie-lattice-3.jpg',
              altText: 'A homemade apple pie with a lattice crust, close up',
              caption: 'Golden and bubbling',
            },
            {
              kind: 'photo',
              fileName: 'apple-pie-leaf-crust.jpg',
              altText: 'A homemade pie with a decorative balloon-cutout crust',
              caption: 'Experimenting with decorative crusts',
            },
            {
              kind: 'recipe',
              recipe: {
                title: 'Peach Pie by Sunset',
                ingredients: [
                  '6-7 fresh peaches',
                  '¼ cup blueberries',
                  '3 tsp oolong tea leaves, in a bag or strainer',
                  '1 cup granulated sugar',
                  '¼ cup tapioca starch or flour, or 6 tbsp cornstarch',
                  '1 tbsp fresh lemon juice',
                  '2 tbsp unsalted butter',
                  'Egg wash',
                  'Frozen pie crusts (2)',
                ],
                instructions: [
                  'Prepare the peaches: lightly score them, then dip into boiling water for 10 seconds. Blanch in ice water and the peel should come off easily. Use a peach pit remover to remove the pits, then slice or dice as you prefer. Add to a large bowl with the blueberries, lemon juice, and sugar. Add the oolong tea in a plain, undyed tea bag (or a metal tea ball). Let sit for at least 1 hour (overnight is fine too).',
                  'Prepare the pie crust: follow the package directions to prepare a bottom crust.',
                  'Reduce and concentrate the flavor of the filling: pour the peach/blueberry juice into a small pot. Bring to a simmer and reduce to about half its volume. Remove the tea leaves (unless you don’t mind the texture). Add the tapioca starch/flour or cornstarch and stir until fully dissolved. Fold the remaining fruit into this mixture and pour into your prepared pie crust.',
                  'Add the top crust: place butter on top of the mixture. Cover and cut slits, or cut into strips for a lattice, or use a cookie cutter for fun decorative shapes — whatever makes you happy!',
                  'Bake: preheat the oven to 425°F. Place the pie on a foil-lined cookie sheet and cover the edges with aluminum foil. Once the oven is ready, bake at 425°F for 20 minutes, then reduce heat to 375°F for 35-45 minutes.',
                  'Enjoy!',
                ],
              },
            },
          ],
        },
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
        caption: 'Snow days at home, or sledding in the parks',
        fallbackLabel: 'Backyard snowman',
      },
      {
        fileName: 'hot-chocolate-snowman-mugs.jpg',
        altText: 'Mugs of hot chocolate decorated with snowmen',
        caption: 'Sunset Special Hot Chocolate',
        fallbackLabel: 'Hot chocolate',
        modalContent: {
          kind: 'recipe',
          recipe: {
            title: 'Sunset Special Hot Chocolate',
            ingredients: [
              '1 bag hot cocoa mix per mug',
              '1 square Hershey chocolate per mug (any leftover from summer s’mores?)',
              'A sprinkle of home-grown fennel seeds per mug',
              'Milk, about 6 oz per mug',
              'Almond extract, 1 capful per pot',
              'Vanilla extract, 1 capful per pot',
              'A dash of nutmeg',
            ],
            instructions: [
              'Pour 1 bag of hot cocoa mix into each mug.',
              'Add a square of Hershey chocolate to each mug.',
              'Add a sprinkle of home-grown fennel seeds to each mug.',
              'In a pot, add enough milk for 6 oz per mug. Add a capful each of almond extract and vanilla extract, and a dash of nutmeg.',
              'Warm the milk on medium heat, stirring constantly to prevent scorching, until warm enough to melt the chocolate.',
              'Pour the warm milk over the mix in each mug and stir until the chocolate has melted.',
            ],
          },
        },
      },
    ],
  },
  {
    id: 'parks',
    navLabel: 'Parks',
    heading: 'The Jewels of Nutley',
    intro: `With the warming of the weather comes children's laughter carrying over from the playgrounds and fields.  Couples stroll along the paved paths while others relax on benches. Friends gather at the basketball courts for afterwork games, and families sip their bubble tea, picked up from Ochado on Franklin Street, one of the many awesome places to snack in town.`,
    background: 'blush',
    photos: [
      {
        fileName: 'nichols-park-path.jpg',
        altText: 'A paved path winding through the shaded lawn of Nichols Park',
        caption: 'A quiet path through Nichols Park',
        fallbackLabel: 'Nichols Park path',
        externalLink: 'https://www.nutleynj.org/maps/layer/ParksandRecreationLocations',
      },
      {
        fileName: 'nichols-park-willow.jpg',
        altText: 'A weeping willow and pink blossoming trees at Nichols Park',
        caption: 'Nichols Park, swept with elegant willows and pretty blossoms',
        fallbackLabel: 'Nichols Park willow and blossoms',
      },
      {
        fileName: 'memorial-park-spring.jpg',
        altText: 'A stream lined with white-blossoming trees at Memorial Park',
        caption: 'Memorial Park in spring bloom',
        fallbackLabel: 'Memorial Park in spring',
      },
      {
        fileName: 'yanticaw-park-third-river.jpg',
        altText: 'The Third River winding through the green lawns of Yanticaw Park',
        caption: 'The Third River winds through Yanticaw Park',
        fallbackLabel: 'Yanticaw Park and the Third River',
      },
      {
        fileName: 'kingsland-park-manor.jpg',
        altText: 'The historic Kingsland Manor surrounded by trees in Kingsland Park',
        caption: 'Historic Kingsland Manor, Kingsland Park',
        fallbackLabel: 'Kingsland Manor, Kingsland Park',
      },
    ],
  },
  {
    id: 'food-and-local-spots',
    navLabel: 'Food & Spots',
    heading: 'Food & Local Spots',
    intro: `After play comes an Italian feast at Trattoria Via Veneto or Queen Regina Margherita, or perhaps the locally-famed pizza from Ralph's. Some ice cream from Rita's celebrates the days bringing more sunshine, and Bagel Boy has tomorrow's breakfast covered. Impress the guests next week with brunch at Sugar Tree Cafe or Chestnut Cafe. Mid-afternoon tea? Stop by the Tea Shop (and perhaps the Pie Shop) for something warm, or head to next-door Montclair to try one of the many trendy cafes on Watchung Avenue, a local haven for foodies.`,
    background: 'butter',
    photos: [
      {
        fileName: 'tea-shop-fireplace.jpg',
        altText: 'A cozy local tea shop interior with a fireplace',
        caption: 'Cozy afternoons at local tea shops, like The Tea Store',
        fallbackLabel: 'Local tea shop',
        externalLink: 'https://teastoremontclair.com/',
      },
      {
        fileName: 'ramen-kinya-bowl.jpg',
        altText: 'A bowl of ramen from Kinya',
        caption: 'Ramen at Kinya',
        fallbackLabel: 'Ramen at Kinya',
        externalLink: 'https://kinya.us/location/west-orange-2/',
      },
      {
        fileName: 'sushi-hand-rolls.jpg',
        altText: 'A plate of sushi hand rolls',
        caption: 'Sushi night at Nami Nori in Montclair',
        fallbackLabel: 'Sushi nearby',
        externalLink: 'https://www.naminori.us/montclair',
      },
      {
        fileName: 'ochado-bubble-tea-nutley.png',
        altText: 'Two Ochado bubble tea drinks topped with boba',
        caption: 'Bubble tea at Ochado',
        fallbackLabel: 'Ochado bubble tea',
        externalLink: 'https://ochadousa.com/',
      },
      {
        fileName: 'chestnut-cafe-exterior-nutley.jpg',
        altText: 'The exterior of Chestnut Cafe & Eatery, a converted house on a corner lot',
        caption: 'Brunch at Chestnut Cafe & Eatery',
        fallbackLabel: 'Chestnut Cafe & Eatery',
        externalLink: 'https://thechestnutcafe.com/',
      },
      {
        fileName: 'sugar-tree-cafe-interior-nutley.webp',
        altText: 'The Sugar Tree Cafe sign surrounded by hanging wisteria decor inside the cafe',
        caption: 'Coffee at Sugar Tree Cafe',
        fallbackLabel: 'Sugar Tree Cafe',
        externalLink: 'https://sugartreecafe.com/nutley/',
      },
      {
        fileName: 'trattoria-via-veneto-pasta.jpg',
        altText: 'A pan of pasta with tomato sauce and shaved cheese at Trattoria Via Veneto',
        caption: 'Italian night at Trattoria Via Veneto',
        fallbackLabel: 'Trattoria Via Veneto',
        externalLink: 'https://trattoriaviaveneto.com/',
      },
      {
        fileName: 'the-oakley-burger-nutley.jpg',
        altText: 'A burger stamped with "The Oakley" served with fries',
        caption: 'Burgers and cocktails at The Oakley',
        fallbackLabel: 'The Oakley',
        externalLink: 'https://theoakleykitchen.com/',
      },
    ],
  },
  {
    id: 'things-to-do',
    navLabel: 'Things To Do',
    heading: 'Things To Do',
    intro:
      "Adventure is calling! Nearby are plenty of options for fun, from the Metlife Stadium for concerts and sporting events to the American Dream Mall with escape rooms, indoor theme parks, and even indoor skiing. Drive out to Kip's Castle, South Mountain Reservation, or Garret Mountain Reservation for hiking. Stay a night at Legoland or venture to the Land of Make Believe or Six Flags for amusement park fun. Find the Fairy Trail in South Mountain, or wander through the lavender at Hidden Springs Lavender and Alpaca farm. From the zoo to the shore, there's always somewhere nearby to explore.",
    background: 'mint',
    photos: [
      {
        fileName: 'sesame-street-big-bird-meetgreet.jpg',
        altText: 'A family meet-and-greet with Big Bird',
        caption: 'A day at Sesame Place in the American Dream Mall',
        fallbackLabel: 'Sesame Place day trip',
        externalLink: 'https://www.americandream.com/',
      },
      {
        fileName: 'sea-life-aquarium-statue-of-liberty.jpg',
        altText: 'A Statue of Liberty display inside the SEA LIFE aquarium at American Dream',
        caption: 'SEA LIFE at American Dream',
        fallbackLabel: 'SEA LIFE at American Dream',
        externalLink: 'https://www.visitsealife.com/new-jersey/',
      },
      {
        fileName: 'zoo-cheetah.jpg',
        altText: 'A cheetah resting at Turtle Back Zoo',
        caption: 'Turtle Back Zoo',
        fallbackLabel: 'Turtle Back Zoo cheetah',
        externalLink: 'https://www.turtlebackzoo.com/',
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
        externalLink: 'https://lsc.org/',
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
        externalLink: 'https://www.legoland.com/new-york/',
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
        caption: 'Strawberry picking at Hillview Farms',
        fallbackLabel: 'Strawberry picking',
        externalLink: 'https://hillview-farms.com/',
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
      `Take the 192 Express into NYC for a day of delight: Rise to the top of Summit for stunning city views and otherworldly art, or browse the MoMA. See a musical on Broadway and visit Times Square. Cool off with the Museum of Ice Cream, dive into color at the Color Factory, or squish your way through the SlooMoo Institute (a museum of slime). Or just eat your way across city's amazing restaurants for the culinary adventure of a lifetime!`,
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
        externalLink: 'https://www.colorfactory.co/locations/new-york-city',
      },
      {
        fileName: 'sloomoo-institute-slime-cups.jpg',
        altText: 'Cups of colorful slime at the SlooMoo Institute',
        caption: 'Make your own fun at SlooMoo Institute: a museum of slime',
        fallbackLabel: 'SlooMoo Institute',
        externalLink: 'https://www.sloomoo.com/',
      },
      {
        fileName: 'museum-of-ice-cream-cup.jpg',
        altText: 'A cup of ice cream at the Museum of Ice Cream',
        caption: 'Enjoy endless ice cream and smorgasboard of photo ops at the Museum of Ice Cream',
        fallbackLabel: 'Museum of Ice Cream',
        externalLink: 'https://www.museumoficecream.com/',
      },
    ],
  },
  {
    id: 'easy-travel',
    navLabel: 'Easy Travel',
    heading: 'Go Anywhere and Everywhere',
    intro: 'Close to three major airports and a cruise port: the whole world is within reach! Domestic or international, to adventure or to relax, travel is as easy as a ticket and a taxi. Where will you go?',
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
