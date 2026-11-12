/* =====================================================================
   script.js  -  everything the site does

   The TOP of this file (parts 1, 2 and 3) is the only part you need to edit:
     1. SETTINGS     your WhatsApp number, Instagram, YouTube, email
     2. PRODUCTS     your products (name, category, description, pictures)
     3. COLLECTIONS  optional hand-picked groups of products
   Everything below part 4 is the machinery. You can leave it alone.

   ---------------------------------------------------------------------
   HOW TO ADD A PRODUCT
   ---------------------------------------------------------------------
   1. Put the product pictures inside the "images" folder, next to
      index.html. Use simple names with no spaces, like  black-tote-1.jpg
      Tip: resize pictures to about 1000 pixels wide first, so the site
      stays fast.
   2. In PRODUCTS below, copy one whole block from { to }, paste it right
      after the last block, and change the words. Keep the comma after }.
   3. Upload the new pictures and this file to GitHub.

   Each product needs:
     name         the product name
     category     e.g. "Bags". Spell it the same way every time.
                  Category pages are made automatically.
     description  one or two lines
     images       list of picture files. The FIRST one is the cover.
   And these are optional:
     brand        shown under the name
     tags         words that help search, e.g. ["leather", "black"]
     featured     true = also shown in the Trending row on the home page

   New products go at the BOTTOM of the list. The site shows the last ones
   as "Fresh from the Studio".
   ===================================================================== */

/* =====================================================================
   1. SETTINGS
   ===================================================================== */

/* WhatsApp number: country code + number, digits only (no + or spaces).
   Example: +91 62971 81287  ->  "916297181287" */
const SELLER = {
  whatsapp: "919836616909",
};

/* Footer icons. ig = Instagram username without @ , yt = YouTube handle
   with @ (example: "@craftedbyakash"). Leave "" until you have them. */
const SOCIAL = {
  ig: "crafted_by_akash",
  yt: "@Myself_Akash_15",
};

/* Creator email appears in the footer; the admin email handles Contact page
   inquiries and messages. phones: leave "" to show an empty "add here" box. */
const CONTACT = {
  email: "craftedbyakash15@gmail.com",
  creatorEmail: "amitunofficial2006@gmail.com",
  phones: ["+91 90734 66949", "+91 98366 16909"],
};

/* =====================================================================
   2. PRODUCTS
   ===================================================================== */
const PRODUCTS = [
  {
    name: "Bow Clip",
    category: "Hair Accessories",
    description: "A sweet bow-shaped clip to add a charming finishing touch to your hairstyle.",
    images: ["images/Bow Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bow", "clip", "hair accessory"],
    featured: true,
  },
  {
    name: "Crochet Angry Clip",
    category: "Hair Accessories",
    description: "A playful crochet hair clip with an expressive angry face design.",
    images: ["images/Crochet Angry Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["clip", "crochet", "hair accessory", "fun"],
  },
  {
    name: "Crochet Claw Clips",
    category: "Hair Accessories",
    description: "Crochet-style claw clips that bring a soft, handmade finish to your hairstyle.",
    images: ["images/Crochet Claw Clips.jpeg"],
    brand: "CraftedByAkash",
    tags: ["claw clips", "crochet", "hair accessory"],
    featured: true,
  },
  {
    name: "Crochet Flower Crown",
    category: "Hair Accessories",
    description: "A flower crown decorated with crochet details for a playful, floral look.",
    images: ["images/Crochet Flower Crown.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crown", "crochet", "flowers", "hair accessory"],
    featured: true,
  },
  {
    name: "Crochet Hair Band",
    category: "Hair Accessories",
    description: "A crochet hair band that adds a soft handmade detail to your everyday style.",
    images: ["images/Crochet Hair Band.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hair band", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Hair Charm",
    category: "Hair Accessories",
    description: "A small crochet charm to add a handmade accent to your hair or accessories.",
    images: ["images/Crochet Hair Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["charm", "crochet", "hair accessory"],
    featured: true,
  },
  {
    name: "Floral Hair Clip",
    category: "Hair Accessories",
    description: "A floral hair clip that adds a bright, flower-inspired accent to your hairstyle.",
    images: ["images/Floral Hair Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["clip", "floral", "flowers", "hair accessory"],
  },
  {
    name: "Sunflower Bun",
    category: "Hair Accessories",
    description: "A sunflower-inspired bun accessory to bring a cheerful floral detail to your hairstyle.",
    images: ["images/Sunflower Bun.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bun accessory", "sunflower", "hair accessory"],
  },
  {
    name: "Sunflower Hair Charm",
    category: "Hair Accessories",
    description: "A sunflower-themed charm made to add a cheerful accent to your hair.",
    images: ["images/Sunflower Hair Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["charm", "sunflower", "hair accessory"],
  },
  {
    name: "Accessories Bouquet",
    category: "Bouquets",
    description: "A bouquet-style gift arranged with accessories for a memorable surprise.",
    images: ["images/Accessories Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "accessories", "gift"],
  },
  {
    name: "Chocolate Bouquet",
    category: "Bouquets",
    description: "A bouquet with a chocolate-inspired theme, made for a sweet and thoughtful gift.",
    images: ["images/Chocolate Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "chocolate", "gift", "sweet"],
    featured: true,
  },
  {
    name: "Heart Shaped Flower Bouquet",
    category: "Bouquets",
    description: "A heart-shaped flower bouquet for sharing a little love on a special occasion.",
    images: ["images/Heart Shaped Flower Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "flowers", "heart", "romantic gift"],
  },
  {
    name: "Memory Combo Pack",
    category: "Gift Sets",
    description: "A keepsake gift combo made for celebrating and remembering special moments.",
    images: ["images/Memory Combo Pack .jpeg"],
    brand: "CraftedByAkash",
    tags: ["gift set", "memories", "keepsake", "combo"],
  },
  {
    name: "Photo Bouquet",
    category: "Bouquets",
    description: "A photo-themed bouquet that brings favorite memories into a thoughtful gift.",
    images: ["images/Photo Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "photos", "memories", "personalized gift"],
  },
  {
    name: "Ribbon Red Rose Bouquet",
    category: "Bouquets",
    description: "A red rose bouquet with a ribbon-inspired look for a classic, thoughtful gift.",
    images: ["images/Ribbon Red Rose Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "red rose", "ribbon", "romantic gift"],
  },
  {
    name: "Sunshine Buddy Bouquet",
    category: "Bouquets",
    description: "A sunny bouquet made to brighten someone's day and make them smile.",
    images: ["images/Sunshine Buddy Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "sunshine", "cheerful", "gift"],
  },
  {
    name: "The G.O.A.T. Bouquet",
    category: "Bouquets",
    description: "A standout bouquet for celebrating someone who is truly the greatest.",
    images: ["images/The G.O.A.T. Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "gift", "celebration"],
  },
  {
    name: "The Everything Bouquet",
    category: "Bouquets",
    description: "A statement bouquet made to bring a little bit of everything to a special gift.",
    images: ["images/The Everything Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "flowers", "gift", "celebration"],
  },
  {
    name: "Tulip Bouquet",
    category: "Bouquets",
    description: "A tulip-inspired bouquet for birthdays, celebrations, or a thoughtful surprise.",
    images: ["images/Tulip Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "tulip", "flowers", "gift"],
  },
  {
    name: "Sunflower Bouquet",
    category: "Bouquets",
    description: "A bright sunflower bouquet to bring a warm, cheerful touch to someone's day.",
    images: ["images/Sunflower Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "sunflower", "flowers", "gift"],
    featured: true,
  },
  {
    name: "Sunshine Memories Bouquet",
    category: "Bouquets",
    description: "A sunflower-inspired bouquet for celebrating sunny days and favorite memories.",
    images: ["images/Sunshine Memories Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bouquet", "sunflower", "memories", "gift"],
  },
  {
    name: "Blushy Rose Hair Charm",
    category: "Hair Accessories",
    description: "A rose-inspired hair charm in a soft blush style, made to add a delicate floral accent.",
    images: ["images/Blushy Rose Hair Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hair charm", "rose", "blush", "floral"],
  },
  {
    name: "Crochet Bandana",
    category: "Hair Accessories",
    description: "A crochet bandana that adds a cozy, handmade touch to your everyday look.",
    images: ["images/Crochet Bandana .jpeg"],
    brand: "CraftedByAkash",
    tags: ["bandana", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Bun Sticks",
    category: "Hair Accessories",
    description: "Decorative crochet bun sticks for adding a playful handmade detail to an updo.",
    images: ["images/Crochet Bun Sticks.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bun sticks", "crochet", "hair accessory", "updo"],
  },
  {
    name: "Crochet Butterfly Claw Clip",
    category: "Hair Accessories",
    description: "A crochet butterfly detail paired with a claw clip for a whimsical hairstyle accent.",
    images: ["images/Crochet Butterfly Claw Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["butterfly", "claw clip", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Claw Clutchers",
    category: "Hair Accessories",
    description: "Crochet-covered claw clutchers for a distinctive handmade hair accessory.",
    images: ["images/Crochet Claw Clutchers.jpeg"],
    brand: "CraftedByAkash",
    tags: ["claw clutchers", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Clips",
    category: "Hair Accessories",
    description: "A crochet clip with a handmade look for adding a little character to your hair.",
    images: ["images/Crochet Clips.jpeg"],
    brand: "CraftedByAkash",
    tags: ["clips", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Floral Claw Clip",
    category: "Hair Accessories",
    description: "A floral crochet detail on a claw clip for a sweet, flower-inspired hairstyle.",
    images: ["images/Crochet Floral Claw Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["floral", "claw clip", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Floral Hair Bun Stick",
    category: "Hair Accessories",
    description: "A floral crochet bun stick for adding a decorative handmade touch to an updo.",
    images: ["images/Crochet Floral Hair Bun Stick .jpeg"],
    brand: "CraftedByAkash",
    tags: ["bun stick", "floral", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Flower Bun Stick",
    category: "Hair Accessories",
    description: "A flower-themed crochet bun stick to brighten up a bun or other updo.",
    images: ["images/Crochet Flower Bun Stick.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bun stick", "flower", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Gajra",
    category: "Hair Accessories",
    description: "A crochet gajra with a floral-inspired look for styling your hair on special occasions.",
    images: ["images/Crochet Gajra .jpeg"],
    brand: "CraftedByAkash",
    tags: ["gajra", "crochet", "floral", "hair accessory"],
  },
  {
    name: "Crochet Puff Clip",
    category: "Hair Accessories",
    description: "A soft-looking crochet puff clip for a cute, playful hairstyle accent.",
    images: ["images/Crochet Puff Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["puff clip", "crochet", "hair accessory"],
  },
  {
    name: "Crochet Rose Crown",
    category: "Hair Accessories",
    description: "A rose-inspired crochet crown for a charming floral touch to your look.",
    images: ["images/Crochet Flower Crown.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose crown", "crochet", "flowers", "hair accessory"],
  },
  {
    name: "Crochet Tiptop Clip",
    category: "Hair Accessories",
    description: "A crochet tiptop clip with a handmade finish for a cheerful everyday style.",
    images: ["images/Crochet Tiptop Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["tiptop clip", "crochet", "hair accessory"],
  },
  {
    name: "Evil Eye Clip",
    category: "Hair Accessories",
    description: "An evil-eye themed clip that adds a distinctive detail to your hairstyle.",
    images: ["images/Evil Eye Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["evil eye", "clip", "hair accessory"],
  },
  {
    name: "Floral Claw Clip",
    category: "Hair Accessories",
    description: "A claw clip with a floral look for a bright, flower-inspired hairstyle accent.",
    images: ["images/Floral Claw Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["floral", "claw clip", "hair accessory"],
  },
  {
    name: "Lotus Bun Sticks",
    category: "Hair Accessories",
    description: "Lotus-inspired bun sticks for adding an elegant floral detail to an updo.",
    images: ["images/Lotus Bun Sticks.jpeg"],
    brand: "CraftedByAkash",
    tags: ["lotus", "bun sticks", "hair accessory", "floral"],
  },
  {
    name: "Meow Clip",
    category: "Hair Accessories",
    description: "A playful cat-inspired clip for adding a cute detail to your hairstyle.",
    images: ["images/Meow Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["cat", "meow", "clip", "hair accessory"],
  },
  {
    name: "Pink And White Blossom Hair Clip",
    category: "Hair Accessories",
    description: "A pink and white blossom-inspired clip for a soft floral touch in your hair.",
    images: ["images/Pink And White Blossom Hair Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hair clip", "pink", "white", "blossom", "floral"],
  },
  {
    name: "Rose Fairy Hair Charm",
    category: "Hair Accessories",
    description: "A rose-themed fairy charm to bring a whimsical floral detail to your hair.",
    images: ["images/Rose Fairy Hair Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "fairy", "hair charm", "floral"],
  },
  {
    name: "Rose Hair Charm",
    category: "Hair Accessories",
    description: "A rose-inspired hair charm for a delicate floral accent.",
    images: ["images/Rose Hair Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "hair charm", "floral"],
  },
  {
    name: "Rose Long Hair Charm",
    category: "Hair Accessories",
    description: "A long rose-themed charm made to add a graceful floral detail to your hair.",
    images: ["images/Rose Long Hair Charm .jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "long hair charm", "floral", "hair accessory"],
  },
  {
    name: "Rosy Bloom Hair Clip",
    category: "Hair Accessories",
    description: "A rosy bloom-inspired clip for a cheerful floral accent in your hairstyle.",
    images: ["images/Rosy Bloom Hair Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hair clip", "rose", "bloom", "floral"],
  },
  {
    name: "Rose Bag Charm",
    category: "Accessories",
    description: "A rose-themed bag charm to add a delicate floral touch to your favorite bag.",
    images: ["images/Rose Bag Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "bag charm", "accessory", "floral"],
  },
  {
    name: "Sunflower Claw Clip",
    category: "Hair Accessories",
    description: "A sunflower-themed claw clip for a bright, cheerful hairstyle accent.",
    images: ["images/Sunflower Claw Clip.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "claw clip", "hair accessory", "floral"],
  },
  {
    name: "Sunflower Headband",
    category: "Hair Accessories",
    description: "A sunflower-inspired headband that brings a sunny floral touch to your style.",
    images: ["images/Sunflower Headband.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "headband", "hair accessory", "floral"],
  },
  {
    name: "Crochet Roses",
    category: "Bouquets",
    description: "Crochet roses that make a lasting, flower-inspired gift for someone special.",
    images: ["images/Crochet Roses.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crochet roses", "flowers", "bouquet", "gift"],
  },
  {
    name: "Crochet Sunflower And Lavender Duo",
    category: "Bouquets",
    description: "A sunflower and lavender duo with a colorful handmade floral look.",
    images: ["images/Crochet Sunflower And Lavender Duo.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "lavender", "crochet", "flowers", "gift"],
  },
  {
    name: "Floral Bouquet",
    category: "Bouquets",
    description: "A floral bouquet for sharing a bright, thoughtful gift on a special day.",
    images: ["images/Floral Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["floral", "bouquet", "flowers", "gift"],
  },
  {
    name: "Blush And Bloom Birthday Hamper",
    category: "Gift Sets",
    description: "A blush-toned birthday hamper with a floral feel, ready for a thoughtful celebration.",
    images: ["images/Blush And Bloom Birthday Hamper.jpeg"],
    brand: "CraftedByAkash",
    tags: ["birthday", "hamper", "blush", "floral", "gift"],
  },
  {
    name: "Dreamy Gift Box",
    category: "Gift Sets",
    description: "A dreamy gift box for making a special occasion feel extra thoughtful.",
    images: ["images/Dreamy Gift Box.jpeg"],
    brand: "CraftedByAkash",
    tags: ["gift box", "surprise", "celebration"],
  },
  {
    name: "Everlasting Blooms Couple's Set",
    category: "Gift Sets",
    description: "A couple's gift set with an everlasting blooms theme for celebrating together.",
    images: ["images/Everlasting Blooms Couple's Set.jpeg"],
    brand: "CraftedByAkash",
    tags: ["couple", "gift set", "blooms", "romantic gift"],
  },
  {
    name: "Everlasting Sunshine Couple's Set",
    category: "Gift Sets",
    description: "A sunshine-inspired couple's set for sharing a cheerful gift with someone special.",
    images: ["images/Everlasting Sunshine Couple's Set.jpeg"],
    brand: "CraftedByAkash",
    tags: ["couple", "gift set", "sunshine", "celebration"],
  },
  {
    name: "Hot Wheels Surprise Box",
    category: "Gift Sets",
    description: "A Hot Wheels themed surprise box for a fun and memorable gift.",
    images: ["images/Hot Wheels Surprise Box.jpeg"],
    brand: "CraftedByAkash",
    tags: ["Hot Wheels", "surprise box", "gift", "cars"],
  },
  {
    name: "Little Box Of Love",
    category: "Gift Sets",
    description: "A little box of love for sharing a thoughtful surprise with someone special.",
    images: ["images/Little Box Of Love.jpeg"],
    brand: "CraftedByAkash",
    tags: ["gift box", "love", "romantic gift", "surprise"],
  },
  {
    name: "Mini Gift Hamper",
    category: "Gift Sets",
    description: "A mini gift hamper for a sweet, thoughtful surprise or small celebration.",
    images: ["images/Mini Gift Hamper.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini hamper", "gift", "surprise", "celebration"],
  },
  {
    name: "Mini Gift Hampers",
    category: "Gift Sets",
    description: "Mini gift hampers for sharing thoughtful little surprises on special occasions.",
    images: ["images/Mini Gift Hampers.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini hampers", "gift", "surprise", "celebration"],
  },
  {
    name: "Pretty in Purple Gift Hamper",
    category: "Gift Sets",
    description: "A purple-themed gift hamper for a colorful and thoughtful celebration.",
    images: ["images/Pretty in Purple Gift Hamper.jpeg"],
    brand: "CraftedByAkash",
    tags: ["purple", "gift hamper", "birthday", "celebration"],
  },
  {
    name: "The Everything",
    category: "Gift Sets",
    description: "A special all-in-one gift selection for making a celebration memorable.",
    images: ["images/The Everything.jpeg"],
    brand: "CraftedByAkash",
    tags: ["gift set", "surprise", "celebration"],
  },
  {
    name: "The G.O.A.T. Hamper",
    category: "Gift Sets",
    description: "A standout hamper for celebrating someone who is truly the greatest.",
    images: ["images/The G.O.A.T. Hamper.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hamper", "gift", "celebration", "G.O.A.T."],
  },
  {
    name: "The Gentleman's Essentials Box",
    category: "Gift Sets",
    description: "A gentleman's gift box curated for a thoughtful and memorable occasion.",
    images: ["images/The Gentleman's Essentials Box.jpeg"],
    brand: "CraftedByAkash",
    tags: ["gentleman", "gift box", "essentials", "gift"],
  },
  {
    name: "The Mini Hair And Jewelry Box",
    category: "Gift Sets",
    description: "A mini gift box featuring a hair and jewelry theme for a special surprise.",
    images: ["images/The Mini Hair And Jewelry Box.jpeg"],
    brand: "CraftedByAkash",
    tags: ["hair", "jewelry", "gift box", "mini"],
  },
  {
    name: "The Ultimate Surprise Box",
    category: "Gift Sets",
    description: "An ultimate surprise box for turning a special occasion into a memorable gift.",
    images: ["images/The Ultimate Surprise Box.jpeg"],
    brand: "CraftedByAkash",
    tags: ["surprise box", "gift", "celebration"],
  },
  {
    name: "Couple Octopus 2.0",
    category: "Keychains",
    description: "A matching octopus-themed crochet keepsake for couples.",
    images: ["images/Couple Octopus 2.0.jpeg"],
    brand: "CraftedByAkash",
    tags: ["octopus", "couple", "crochet", "keychain"],
  },
  {
    name: "Couple Octopus Keychain",
    category: "Keychains",
    description: "A pair of octopus-themed crochet keychains made for couples.",
    images: ["images/Couple Octopus Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["octopus", "couple", "crochet", "keychain"],
  },
  {
    name: "Crochet Bow Keychain",
    category: "Keychains",
    description: "A crochet bow keychain for adding a handmade touch to your keys or bag.",
    images: ["images/Crochet Bow Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bow", "crochet", "keychain"],
  },
  {
    name: "Crochet Bumblebee Keychain",
    category: "Keychains",
    description: "A cheerful crochet bumblebee keychain for your keys or bag.",
    images: ["images/Crochet Bumblebee Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bumblebee", "crochet", "keychain"],
  },
  {
    name: "Crochet Bunny Keychains",
    category: "Keychains",
    description: "Cute crochet bunny keychains made for gifting or everyday use.",
    images: ["images/Crochet Bunny Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["bunny", "crochet", "keychain"],
  },
  {
    name: "Crochet Camera Bag Charm",
    category: "Accessories",
    description: "A camera-inspired crochet charm to decorate a bag or keys.",
    images: ["images/Crochet Camera Bag Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["camera", "crochet", "bag charm", "keychain"],
  },
  {
    name: "Crochet Cream Roll",
    category: "Keychains",
    description: "A colorful cream-roll-shaped crochet keychain for a playful handmade accent.",
    images: ["images/Crochet Cream Roll.jpeg"],
    brand: "CraftedByAkash",
    tags: ["cream roll", "crochet", "keychain", "dessert", "food", "gift"],
  },
  {
    name: "Crochet Evil Eye Keychain",
    category: "Keychains",
    description: "A crochet evil eye keychain for your keys or bag.",
    images: ["images/Crochet Evil Eye Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["evil eye", "crochet", "keychain"],
  },
  {
    name: "Crochet Flower Keychains",
    category: "Keychains",
    description: "Flower-shaped crochet keychains with a handmade finish.",
    images: ["images/Crochet Flower Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["flower", "crochet", "keychain"],
  },
  {
    name: "Crochet Gift Box Keychain",
    category: "Keychains",
    description: "A tiny crochet gift-box keychain for a sweet handmade accent.",
    images: ["images/Crochet Gift Box keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["gift box", "crochet", "keychain"],
  },
  {
    name: "Crochet Heart Keychain",
    category: "Keychains",
    description: "A heart-shaped crochet keychain made for gifting or everyday use.",
    images: ["images/Crochet Heart Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["heart", "crochet", "keychain"],
  },
  {
    name: "Crochet Keychain Collection",
    category: "Keychains",
    description: "A collection of crochet keychain designs to choose from.",
    images: ["images/Crochet Keychain Collection.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crochet", "keychain", "collection"],
  },
  {
    name: "Crochet Keychains",
    category: "Keychains",
    description: "Handmade crochet keychains for keys, bags, or thoughtful little gifts.",
    images: ["images/Crochet Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crochet", "keychain", "gift"],
  },
  {
    name: "Crochet Letter Keychain",
    category: "Keychains",
    description: "A crochet letter keychain for a personal touch on your keys or bag.",
    images: ["images/Crochet letter Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["letter", "personalized", "crochet", "keychain"],
  },
  {
    name: "Crochet Mini Keychains",
    category: "Keychains",
    description: "Small crochet keychains made for keys, bags, or little gifts.",
    images: ["images/Crochet Mini Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini", "crochet", "keychain"],
  },
  {
    name: "Crochet Mini Purse Keychain",
    category: "Keychains",
    description: "A miniature crochet purse charm for keys or bags.",
    images: ["images/Crochet Mini Purse Keyachain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini purse", "crochet", "bag charm", "keychain"],
  },
  {
    name: "Crochet Red Rose And Daisy Flower Bouquet",
    category: "Bouquets",
    description: "A handmade crochet bouquet featuring red roses and daisies.",
    images: ["images/Crochet Red Rose And Daisy Flower Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crochet", "red rose", "daisy", "bouquet", "flowers"],
  },
  {
    name: "Crochet Strawberry Keychain",
    category: "Keychains",
    description: "A strawberry-shaped crochet keychain for a playful handmade accent.",
    images: ["images/Crochet Strawberry Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["strawberry", "crochet", "keychain"],
  },
  {
    name: "Crochet Sunflower Keychain",
    category: "Keychains",
    description: "A sunflower-inspired crochet keychain for your keys or bag.",
    images: ["images/Crochet Sunflower Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "crochet", "keychain"],
  },
  {
    name: "Crochet Sunflower Nupur",
    category: "Accessories",
    description: "A crochet sunflower nupur anklet decorated with small floral details.",
    images: ["images/Crochet Sunflower Nupur.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "crochet", "nupur", "anklet", "foot accessory"],
  },
  {
    name: "Crochet Sunflower Mini Bouquet Keychain",
    category: "Keychains",
    description: "A tiny crochet sunflower bouquet made into a keychain charm.",
    images: ["images/Crochet Sunfower Mini Bouquet Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "mini bouquet", "crochet", "keychain"],
  },
  {
    name: "Crochet Turtle Keychain",
    category: "Keychains",
    description: "A little crochet turtle keychain for your keys or bag.",
    images: ["images/Crochet Turtle Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["turtle", "crochet", "keychain"],
  },
  {
    name: "Crochet Turtle",
    category: "Crochet Gifts",
    description: "A cute handmade crochet turtle keepsake.",
    images: ["images/Crochet Turtle.jpeg"],
    brand: "CraftedByAkash",
    tags: ["turtle", "crochet", "gift"],
  },
  {
    name: "Evil Eye Charm",
    category: "Car Accessories",
    description: "A handmade evil eye hanging to decorate a car.",
    images: ["images/Evil Eye Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["evil eye", "car hanging", "car decor", "charm", "accessory"],
  },
  {
    name: "Jagannath Bag Charm",
    category: "Accessories",
    description: "A Jagannath-themed charm to decorate a bag or accessory.",
    images: ["images/Jagannath Bag Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["Jagannath", "bag charm", "accessory", "religious gift"],
  },
  {
    name: "Mini Duck Keychain",
    category: "Keychains",
    description: "A tiny duck keychain for a cheerful touch on your keys or bag.",
    images: ["images/Mini Duck Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["duck", "mini", "keychain"],
  },
  {
    name: "Mini Flower Bouquet Keychains",
    category: "Keychains",
    description: "Mini bouquet-inspired keychains with a floral look.",
    images: ["images/Mini Flower Bouquet Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini bouquet", "flowers", "keychain"],
  },
  {
    name: "Multicolour Daisy Keychain",
    category: "Keychains",
    description: "A multicoloured daisy keychain for your keys or bag.",
    images: ["images/Multicolour Daisy Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["daisy", "multicolour", "keychain"],
  },
  {
    name: "Multiple Crochet Keychain",
    category: "Keychains",
    description: "A selection of crochet keychain designs shown together.",
    images: ["images/Multiple Crochet Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["crochet", "keychain", "collection"],
  },
  {
    name: "Personalise Name Keychain",
    category: "Keychains",
    description: "A personalized name keychain for a thoughtful, individual gift.",
    images: ["images/Personalise Name Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["personalized", "name", "keychain", "gift"],
  },
  {
    name: "Pink Daisy Keychain",
    category: "Keychains",
    description: "A pink daisy keychain for a floral touch on your keys or bag.",
    images: ["images/Pink Daisy Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["pink", "daisy", "keychain"],
  },
  {
    name: "Rose Bouquet Keychain",
    category: "Keychains",
    description: "A rose bouquet-inspired keychain to carry a little floral charm.",
    images: ["images/Rose Bouquet Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "bouquet", "keychain"],
  },
  {
    name: "Rose Smell Bouquet Keychain",
    category: "Keychains",
    description: "A rose bouquet-inspired keychain with a sweet floral theme.",
    images: ["images/Rose Smell Bouquet Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["rose", "bouquet", "keychain"],
  },
  {
    name: "Spider-Man Couple Bag Charm",
    category: "Accessories",
    description: "A matching pair of Spider-Man-themed charms for bags or accessories.",
    images: ["images/Spider-Man Couple Bag Charm.jpeg"],
    brand: "CraftedByAkash",
    tags: ["Spider-Man", "couple", "bag charm", "accessory", "set"],
  },
  {
    name: "Strawberry Combo Keychain",
    category: "Keychains",
    description: "A strawberry-themed keychain combo for a playful accessory.",
    images: ["images/Strawberry Combo Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["strawberry", "combo", "keychain"],
  },
  {
    name: "Sunflower And Daisy Keychains",
    category: "Keychains",
    description: "Sunflower- and daisy-themed keychains with a bright floral look.",
    images: ["images/Sunflower And Daisy Keychains.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "daisy", "flowers", "keychain"],
  },
  {
    name: "Sunflower Bouquet Keychain",
    category: "Keychains",
    description: "A sunflower bouquet-inspired keychain for your keys or bag.",
    images: ["images/Sunflower Bouquet Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "bouquet", "keychain"],
  },
  {
    name: "Water Lily Keychain",
    category: "Keychains",
    description: "A water-lily-inspired keychain with a floral design.",
    images: ["images/Water lily Keychain.jpeg"],
    brand: "CraftedByAkash",
    tags: ["water lily", "flower", "keychain"],
  },
  {
    name: "Daisy Pot",
    category: "Crochet Gifts",
    description: "A handmade crochet daisy displayed in a cute little pot.",
    images: ["images/Daisy Pot.jpeg"],
    brand: "CraftedByAkash",
    tags: ["daisy", "crochet", "flower pot", "home decor", "gift"],
  },
  {
    name: "Kuchupuchu Bouquet",
    category: "Gift Sets",
    description: "A personalized surprise gift box decorated with a cheerful crochet flower.",
    images: ["images/Kuchupuchu Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["personalized", "gift box", "bouquet", "birthday", "gift"],
  },
  {
    name: "White Ribbon Rose Bouquet",
    category: "Bouquets",
    description: "A bouquet of white roses wrapped with an elegant golden-edged ribbon.",
    images: ["images/White Ribbon Rose Bouquet.jpeg"],
    brand: "CraftedByAkash",
    tags: ["white roses", "ribbon", "bouquet", "flowers", "gift"],
  },
  {
    name: "Sunflower Pot",
    category: "Crochet Gifts",
    description: "A cheerful handmade crochet sunflower arranged in a small pot.",
    images: ["images/Sunflower Pot.jpeg"],
    brand: "CraftedByAkash",
    tags: ["sunflower", "crochet", "flower pot", "home decor", "gift"],
  },
  {
    name: "Mini Birthday Gift Hamper",
    category: "Gift Sets",
    description: "A mini birthday gift hamper with a selection of thoughtful little gifts.",
    images: ["images/Mini Birthday Gift Hamper.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini hamper", "birthday", "gift set", "celebration"],
  },
  {
    name: "Mini Photo Frame",
    category: "Accessories",
    description: "A small photo frame for displaying a cherished memory.",
    images: ["images/Mini Photo Frame.jpeg"],
    brand: "CraftedByAkash",
    tags: ["mini", "photo frame", "accessory", "gift"],
  },
   {
      name: "Multicoloured Ribbon Rose Bouquet",
      category: "Bouquets",
      description: "A bouquet of white roses and pink roses wrapped with an elegant golden-edged ribbon.",
      images: ["images/Multicoloured Ribbon Rose Bouquet.jpeg"],
      brand: "CraftedByAkash",
      tags: ["white roses", "pink roses", "ribbon", "bouquet", "flowers", "gift"],
   }
];

/* =====================================================================
   3. COLLECTIONS (optional)
   A collection is a hand-picked group. In "products" write the product
   names exactly as they are in PRODUCTS. Delete the example if you don't
   want any collections.
   ===================================================================== */
const COLLECTIONS = [
  {
    name: "Starter Picks",
    description: "A few favourites to begin with.",
    products: ["Sunflower And Daisy Keychains","Tulip Bouquet","Sunflower Claw Clip"],
  },
];

/* =====================================================================
   4. THE CODE (you do not need to change anything below)
   ===================================================================== */

/* ---------- small helpers ---------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const slug = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/* ---------- turn the PRODUCTS list into the site's product objects ---------- */
const P = [];
const productTags = (product) => {
  const nameTags = String(product.name)
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((tag) => tag.length > 2 && !["the", "and", "for", "with"].includes(tag));
  return [
    ...new Set(
      [...(product.tags || []), ...nameTags, product.category]
        .map((tag) => String(tag).toLowerCase().trim())
        .filter(Boolean),
    ),
  ];
};
PRODUCTS.forEach((x, i) => {
  if (!x.name || !x.category || !x.images || !x.images.length) {
    console.warn("Product skipped. It needs name, category and images:", x);
    return;
  }
  let id = slug(x.name) || "p" + i;
  while (P.some((p) => p.id === id)) id += "-" + i;
  P.push({
    id,
    name: String(x.name).trim(),
    category: String(x.category).trim(),
    desc: x.description || "",
    images: x.images,
    brand: x.brand || "",
    tags: productTags(x),
    featured: !!x.featured,
    order: i,
  });
});
const byId = Object.fromEntries(P.map((p) => [p.id, p]));
const prods = (ids) => ids.map((i) => byId[i]).filter(Boolean);
const CK = [...new Set(P.map((p) => p.category))]; /* category names */
const img = (p, k = 0) => p.images[k] || p.images[0];

/* ---------- collections made by you (part 3) ---------- */
const CURATED = COLLECTIONS.map((c, i) => ({
  id: slug(c.name) || "c" + i,
  name: c.name,
  desc: c.description || "",
  items: (c.products || [])
    .map((n) => {
      const p = P.find(
        (p) => p.name.toLowerCase() === String(n).trim().toLowerCase(),
      );
      if (!p) console.warn("Collection", c.name, "has no product named:", n);
      return p;
    })
    .filter(Boolean),
})).filter((c) => c.items.length);

/* ---------- STORE: remembers likes, saves, collections, history ----------
   Everything is kept in the visitor's own browser (localStorage). */
const ST = (() => {
  const KEY = "craftedbyakash";
  let s = {};
  try {
    s = JSON.parse(localStorage.getItem(KEY) || "{}");
  } catch (e) {}

  const ensureArray = (value, fallback = []) =>
    Array.isArray(value) ? value : fallback;

  const syncSavedCollection = () => {
    const saved = s.cols.find((c) => c.id === "saved");
    if (!saved) {
      s.cols.unshift({ id: "saved", name: "Saved", items: [] });
      return;
    }
    const allSaved = [
      ...new Set(s.cols.flatMap((c) => ensureArray(c.items, []))),
    ];
    saved.items = allSaved;
  };

  s = Object.assign(
    {
      likes: [],
      cols: [{ id: "saved", name: "Saved", items: [] }],
      recent: [],
      searches: [],
    },
    s,
  );
  s.likes = ensureArray(s.likes, []);
  s.recent = ensureArray(s.recent, []);
  s.searches = ensureArray(s.searches, []);
  s.cols = ensureArray(s.cols, [{ id: "saved", name: "Saved", items: [] }]).map(
    (c) => ({
      id: c && c.id ? c.id : "u" + Date.now().toString(36),
      name: c && c.name ? c.name : "Untitled",
      items: ensureArray(c && c.items, []),
    }),
  );
  if (!s.cols.some((c) => c.id === "saved")) {
    s.cols.unshift({ id: "saved", name: "Saved", items: [] });
  }
  syncSavedCollection();

  const w = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
    } catch (e) {}
  };
  return {
    s,
    w,
    liked: (id) => s.likes.includes(id),
    saved: (id) => s.cols.some((c) => c.items.includes(id)),
    like(id) {
      const i = s.likes.indexOf(id);
      i < 0 ? s.likes.push(id) : s.likes.splice(i, 1);
      w();
      return i < 0;
    },
    /* put a product in a collection, or take it out */
    tc(colId, id) {
      const c = s.cols.find((c) => c.id === colId) || s.cols[0];
      const i = c.items.indexOf(id);
      if (i < 0) c.items.push(id);
      else c.items.splice(i, 1);
      syncSavedCollection();
      w();
      return [i < 0, c];
    },
    add(name, items = []) {
      const c = { id: "u" + Date.now().toString(36), name, items: [...new Set(items)] };
      s.cols.push(c);
      syncSavedCollection();
      w();
      return c;
    },
    view(id) {
      s.recent = [id, ...s.recent.filter((x) => x !== id)].slice(0, 24);
      w();
    },
    find: (id) => s.cols.find((c) => c.id === id) || (id === "saved" ? { id: "saved", name: "Saved", items: [] } : undefined),
  };
})();

/* Product ratings are private to this browser and keyed by product ID. */
const RATINGS = (() => {
  const KEY = "craftedbyakash_product_ratings";
  const defaultFor = (id) => {
    let hash = 2166136261;
    for (const char of id) {
      hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
    }
    hash >>>= 0;
    return {
      average: 4 + (hash % 7) / 10,
      count: 25 + ((hash >>> 8) % 6),
    };
  };
  const ratings = {};

  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || "{}");
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
      Object.entries(stored).forEach(([id, rating]) => {
        if (byId[id] && Number.isInteger(rating) && rating >= 1 && rating <= 5) {
          ratings[id] = rating;
        }
      });
    }
  } catch (error) {
    console.error("Could not load saved product ratings.", error);
  }

  return {
    get(id) {
      const userRating = ratings[id] || 0;
      const defaults = defaultFor(id);
      const count = defaults.count + (userRating ? 1 : 0);
      const average = userRating
        ? Number(
            (
              (defaults.average * defaults.count + userRating) /
              count
            ).toFixed(1),
          )
        : defaults.average;
      return {
        average,
        count,
        userRating,
      };
    },
    set(id, rating) {
      if (!byId[id] || !Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new RangeError("A product rating must be an integer from 1 to 5.");
      }

      const previous = ratings[id];
      ratings[id] = rating;
      try {
        localStorage.setItem(KEY, JSON.stringify(ratings));
      } catch (error) {
        if (previous === undefined) delete ratings[id];
        else ratings[id] = previous;
        console.error("Could not save product rating.", error);
        return false;
      }
      return true;
    },
  };
})();

/* ---------- SEARCH ---------- */
const norm = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => (w.length > 3 ? w.replace(/s$/, "") : w));
const hay = (p) =>
  p._h ||
  (p._h = norm([p.name, p.brand, p.category, p.desc, ...p.tags].join(" ")));
const SEARCH = {
  text(q) {
    const words = norm(q);
    if (!words.length) return [...P];
    return P.map((p) => {
      const h = hay(p);
      let score = 0;
      for (const w of words) {
        const m = h.includes(w)
          ? 2
          : h.some((x) => x.startsWith(w) || (x.length > 4 && w.startsWith(x)))
            ? 1
            : 0;
        if (!m) return null; /* every word must match */
        score += m;
      }
      return [p, score + (p.featured ? 0.5 : 0)];
    })
      .filter(Boolean)
      .sort((a, b) => b[1] - a[1])
      .map((x) => x[0]);
  },
};

/* ---------- RECOMMENDATIONS ---------- */
/* products similar to p: same category, shared tags, same brand */
const sim = (p, n, skip = []) =>
  P.filter((q) => q.id !== p.id && !skip.includes(q.id))
    .map((q) => [
      q,
      (q.category === p.category) * 3 +
        q.tags.filter((t) => p.tags.includes(t)).length * 1.2 +
        (p.brand && q.brand === p.brand) +
        Math.random() * 0.8,
    ])
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map((x) => x[0]);

/* "Picked for you": based on what this visitor liked, saved and viewed */
function forYou(n) {
  const ids = [
    ...ST.s.likes,
    ...ST.s.cols.flatMap((c) => c.items),
    ...ST.s.recent,
  ];
  const weight = {};
  ids.forEach((i) => {
    const p = byId[i];
    if (!p) return;
    weight[p.category] = (weight[p.category] || 0) + 2;
    p.tags.forEach((t) => (weight[t] = (weight[t] || 0) + 1));
  });
  if (!prods(ids).length) return null;
  const top = byId[ST.s.likes[0]];
  return {
    label: top
      ? `Because you liked ${top.category.toLowerCase()}`
      : "Picked for you",
    list: P.filter((p) => !ids.includes(p.id))
      .map((p) => [
        p,
        (weight[p.category] || 0) +
          p.tags.reduce((a, t) => a + (weight[t] || 0), 0) +
          Math.random() * 2,
      ])
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map((x) => x[0]),
  };
}

/* ---------- lists used on the home page ---------- */
const hash = (s) => {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) | 0;
  return h;
};
/* a different mix of products each day */
const day = () => {
  const d = new Date().getDate();
  return [...P].sort((a, b) => hash(a.id + d) - hash(b.id + d));
};
/* Trending = products marked featured. If none are, the newest ones. */
const trendingList = (n = 40) => {
  const f = P.filter((p) => p.featured);
  return (f.length ? f : [...P].reverse()).slice(0, n);
};
/* Fresh = the last products in your list */
const freshList = (n) => [...P].reverse().slice(0, n);

/* ---------- UI pieces: icons, buttons, product card ---------- */
const ICONS = {
  heart:
    '<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11z"/>',
  save: '<path d="M6 3h12v18l-6-4-6 4z"/>',
};
const ic = (n) =>
  `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

/* Like and Save buttons. full = bigger version with words (product page) */
const btns = (p, full) =>
  `<button class="ab" data-act="like" data-id="${p.id}" aria-pressed="${ST.liked(p.id)}" aria-label="Like ${esc(p.name)}">${ic("heart")}${full ? "<span>Like</span>" : ""}</button>` +
  `<button class="ab" data-act="save" data-id="${p.id}" aria-pressed="${ST.saved(p.id)}" aria-label="Save ${esc(p.name)}">${ic("save")}${full ? "<span>Save</span>" : ""}</button>`;

const ratingSummary = (p) => {
  const { average, count } = RATINGS.get(p.id);
  const stars = "★".repeat(Math.round(average)) + "☆".repeat(5 - Math.round(average));
  return `<div class="rating-summary" data-rating-summary="${p.id}" aria-label="${count ? `${average} out of 5 stars, ${count} ${count === 1 ? "rating" : "ratings"}` : "No ratings yet"}"><span class="rating-stars" aria-hidden="true">${stars}</span><small>${count ? `${average.toFixed(1)} (${count})` : "No ratings yet"}</small></div>`;
};

const ratingWidget = (p) => {
  const { average, count, userRating } = RATINGS.get(p.id);
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return `<button type="button" class="rating-choice${value <= userRating ? " selected" : ""}" data-act="rate" data-id="${p.id}" data-rating="${value}" aria-label="Rate ${esc(p.name)} ${value} out of 5 stars" aria-pressed="${value === userRating}">${value <= userRating ? "★" : "☆"}</button>`;
  }).join("");
  const status = userRating
    ? `Your rating: ${userRating}/5 · select a star to edit`
    : "Choose a star to rate this product";
  return `<section class="rating-widget" data-rating-widget="${p.id}" aria-label="Product rating"><h2>Customer rating</h2><div class="rating-summary"><span class="rating-stars" aria-hidden="true">${"★".repeat(Math.round(average))}${"☆".repeat(5 - Math.round(average))}</span><span>${count ? `${average.toFixed(1)} out of 5 · ${count} ${count === 1 ? "rating" : "ratings"}` : "No ratings yet"}</span></div><div class="rating-choices" role="group" aria-label="Rate ${esc(p.name)}">${stars}</div><small class="rating-hint">${status}</small></section>`;
};

const alt = (p) => `${p.name} (${p.category})`;

/* A picture. When it loads, its box takes the picture's real shape.
   If the file name is wrong, a pink box tells you which file is missing. */
const imgTag = (p, k = 0) =>
  `<img src="${esc(img(p, k))}" loading="lazy" decoding="async" alt="${esc(alt(p))}"
    onload="this.classList.add('ld');this.parentNode.style.aspectRatio=this.naturalWidth+'/'+this.naturalHeight;this.parentNode.classList.add('done')"
    onerror="this.parentNode.classList.add('bad');this.parentNode.setAttribute('data-miss',this.getAttribute('src'))">`;

const card = (p) =>
  `<article class="card">
    <a class="im" href="#/p/${p.id}" aria-label="${esc(p.name)}">${imgTag(p)}</a>
    <div class="cb">
      <b>${esc(p.name)}</b>
      <small>${esc(p.category)}${p.brand ? " by " + esc(p.brand) : ""}</small>
      ${ratingSummary(p)}
      <div class="acts">${btns(p)}</div>
    </div>
  </article>`;

const empty = (title, text, link) =>
  `<div class="empty"><h3>${title}</h3><p>${text}</p>${link ? `<a class="pri" style="display:inline-block;margin-top:14px" href="${link[0]}">${link[1]}</a>` : ""}</div>`;

/* a side-swiping row of cards */
const row = (list) => `<div class="row">${list.map(card).join("")}</div>`;

/* a section with a heading */
const sec = (title, sub, link, body) =>
  `<section class="wrap"><div class="sh"><div><h2>${title}</h2>${sub ? `<p class="sub">${sub}</p>` : ""}</div>${link ? `<a href="${link[0]}">${link[1]}</a>` : ""}</div>${body}</section>`;

/* a grid of cards that keeps loading more as you scroll */
const GRIDS = {};
let gridCount = 0;
const grid = (list) => {
  if (!list.length)
    return empty(
      "Nothing matched your search.",
      "Try a different style, category or keyword.",
    );
  const id = "g" + gridCount++;
  GRIDS[id] = list;
  return `<div class="m" data-g="${id}"></div><div data-s="${id}" style="height:1px"></div>`;
};
let observer;
function hydrate() {
  observer && observer.disconnect();
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) fill(e.target.dataset.s);
      }),
    { rootMargin: "900px" },
  );
  $$("[data-g]:empty").forEach((g) => {
    fill(g.dataset.g);
    observer.observe($(`[data-s="${g.dataset.g}"]`));
  });
}
function fill(id) {
  const g = $(`[data-g="${id}"]`);
  const list = GRIDS[id];
  if (!g || g.children.length >= list.length) return;
  const n = g.children.length;
  g.insertAdjacentHTML(
    "beforeend",
    list
      .slice(n, n + 20)
      .map(card)
      .join(""),
  );
}

/* covers for collections and categories */
const cover = (list) =>
  `<div class="cv">${list
    .slice(0, 3)
    .map((p) => `<img src="${esc(img(p))}" alt="" loading="lazy">`)
    .join("")}</div>`;
const colCard = (c) => {
  const items = c.items.map((i) => byId[i] || i).filter((x) => x && x.images);
  return `<a class="cvl" href="#/col/${c.id}">${cover(items)}<div class="cvt"><h3>${esc(c.name)}</h3><p>${esc(c.desc || "")}${c.desc ? " " : ""}${items.length} products</p></div></a>`;
};
const catCard = (c) => {
  const list = P.filter((p) => p.category === c);
  return `<a class="cc" href="#/c/${encodeURIComponent(c)}"><img src="${esc(img(list[0]))}" alt="" loading="lazy"><span><b>${esc(c)}</b><small>${list.length} products</small></span></a>`;
};

/* ---------- a page with filters and sorting ---------- */
const LS = {};
const SORT = {
  new: (a, b) => b.order - a.order,
  az: (a, b) => a.name.localeCompare(b.name),
};
function listing(base, title, sub, hideCategory) {
  const id = "l" + gridCount++;
  const unique = (k) =>
    [...new Set(base.map((p) => p[k]).filter(Boolean))].sort();
  const select = (key, label, values) =>
    values.length < 1
      ? ""
      : `<select data-f="${key}" aria-label="${label}"><option value="">${label}</option>${values.map((x) => `<option>${esc(x)}</option>`).join("")}</select>`;
  LS[id] = { base, f: {} };
  return `<div class="wrap" data-l="${id}">
    <div class="ph"><h1>${title}</h1><p class="sub"><span class="cnt">${base.length}</span> products${sub ? ". " + sub : ""}</p></div>
    <div class="tb">
      <button class="chip fb" data-act="fil">Filters and sort</button>
      <div class="fs">
        ${hideCategory ? "" : select("category", "Category", unique("category"))}
        ${select("brand", "Brand", unique("brand"))}
        <select data-f="sort" aria-label="Sort"><option value="">Recommended</option><option value="new">Newest</option><option value="az">A to Z</option></select>
        <button class="pri fb" data-act="fil">Show results</button>
      </div>
    </div>
    <div class="res">${grid(base)}</div>
  </div>`;
}

/* ---------- visitor name (no login) ---------- */
const ME = {
  name() {
    try {
      return localStorage.getItem("craftedbyakash_name") || "";
    } catch (e) {
      return "";
    }
  },
  set(n) {
    try {
      localStorage.setItem("craftedbyakash_name", n);
    } catch (e) {}
  },
  initial() {
    return this.name() ? this.name()[0].toUpperCase() : "G";
  },
};

/* ---------- WhatsApp button pieces ---------- */
/* the message that appears in WhatsApp when someone taps the number */
const wa = (p) =>
  `https://wa.me/${SELLER.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi! I am interested in this product:\n\n*" +
      p.name +
      "*\n" +
      p.category +
      (p.brand ? " by " + p.brand : "") +
      "\n" +
      p.desc +
      "\n\n" +
      location.href.split("#")[0] +
      "#/p/" +
      p.id +
      "\n\nI am sending a screenshot of it now.",
  )}`;
/* the number shown on the page, e.g. +91 62971 81287 */
const waNum = () => {
  const d = SELLER.whatsapp.replace(/\D/g, "");
  if (!d) return "Number coming soon";
  if (d.length <= 10) return "+" + d;
  return (
    "+" + d.slice(0, d.length - 10) + " " + d.slice(-10, -5) + " " + d.slice(-5)
  );
};
const waIcon =
  '<svg class="wi" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#25d366"/><path fill="#fff" d="M16 6.5a9.5 9.5 0 0 0-8.1 14.4L6.6 25.4l4.6-1.2A9.5 9.5 0 1 0 16 6.5z"/><path fill="#25d366" d="M12.4 11.2c.3 2.9 3.6 6.4 6.6 6.8.7.1 1.6-.5 1.7-1.3l-1.7-1-1 .8c-1.1-.5-2.2-1.6-2.7-2.7l.8-1-1-1.7c-.8.1-1.4.9-1.3 1.6z"/></svg>';

/* ---------- footer ---------- */
const socials = () => {
  const links = [];
  const ig = String(SOCIAL.ig || "").trim().replace(/^@+/, "");
  const yt = String(SOCIAL.yt || "").trim();
  if (ig) {
    links.push(
      `<a href="https://www.instagram.com/${ig}" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg class="i" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg></a>`,
    );
  }
  if (yt) {
    const ytHandle = yt.replace(/^@+/, "");
    const ytUrl = ytHandle.includes("/")
      ? `https://www.youtube.com/${ytHandle}`
      : `https://www.youtube.com/@${ytHandle}`;
    links.push(
      `<a href="${ytUrl}" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg class="i" viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/></svg></a>`,
    );
  }
  return links.length ? `<div class="soc">${links.join("")}</div>` : "";
};
const foot = () =>
  `<footer class="wrap">
    <a href="#/" class="logo brand-logo footer-logo" aria-label="CraftedByAkash home"><img src="images/crafted-by-akash-logo.png" alt=""><span>CraftedByAkash</span></a>
    ${socials()}
    <p>Discover. Save. Revisit.</p>
    <nav aria-label="Footer"><a href="#/explore">Explore</a><a href="#/categories">Categories</a><a href="#/collections">Collections</a><a href="#/about">About</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/contact">Contact</a></nav>
    <p class="mw">Made with ❤️ by Amit</p>
    <p><a class="br" href="mailto:${CONTACT.creatorEmail}">${CONTACT.creatorEmail}</a></p>
  </footer>`;

/* ---------- PAGES ----------
   Each page is a small function that returns its HTML. */
const chips = (list) =>
  `<div class="chips">${list.map((c) => `<a class="chip" href="#/search/${encodeURIComponent(c)}">${esc(c)}</a>`).join("")}</div>`;
const doc = (title, body) =>
  `<div class="wrap doc"><div class="ph"><h1>${title}</h1></div>${body}</div>` +
  foot();

const PAGES = {
  /* HOME */
  "": () => {
    if (!P.length)
      return (
        `<div class="wrap">${empty("Products are coming soon.", "Check back in a little while.")}</div>` +
        foot()
      );
    const fy = forYou(12);
    return (
      `<section class="home-hero" aria-label="Handmade gifts">
        <span class="hero-flower hero-flower-one" aria-hidden="true">🌸</span>
        <span class="hero-flower hero-flower-two" aria-hidden="true">🌼</span>
        <span class="hero-flower hero-flower-three" aria-hidden="true">🌷</span>
        <p class="hero-kicker">Handmade with heart</p>
        <h1>Little gifts. Big smiles.</h1>
        <p class="hero-copy">Thoughtful bouquets and cheerful accessories, made to make someone's day.</p>
        <a class="pri hero-link" href="#/explore">Explore the collection</a>
      </section>` +
      `<section class="wrap" style="padding-top:18px"><div class="sh" style="margin-top:20px"><div><h2>Trending now</h2><p class="sub">Little loves everyone is looking at.</p></div><a href="#/trending">See all</a></div><div class="row auto" data-auto>${trendingList(12).map(card).join("")}</div></section>` +
      sec(
        "Fresh from the Studio",
        "Just added, still warm.",
        ["#/explore", "See all"],
        row(freshList(12)),
      ) +
      sec(
        "Discover",
        "Find something unexpected.",
        ["#/explore", "See all"],
        grid(day().slice(0, 40)),
      ) +
      (CURATED.length
        ? `<section class="wrap" style="margin-top:60px">${colCard(CURATED[0])}</section>`
        : "") +
      sec(
        "Explore categories",
        "",
        ["#/categories", "All"],
        `<div class="cg">${CK.slice(0, 6).map(catCard).join("")}</div>`,
      ) +
      (fy ? sec(fy.label, "", "", grid(fy.list)) : "") +
      foot()
    );
  },

  /* EXPLORE */
  explore: () =>
    listing(day(), "Explore", "Find something unexpected.") + foot(),

  /* ALL CATEGORIES */
  categories: () =>
    `<div class="wrap"><div class="ph"><h1>Categories</h1><p class="sub">Browse by what you are looking for.</p></div>` +
    (CK.length
      ? `<div class="cg">${CK.map(catCard).join("")}</div>`
      : empty("No categories yet.", "Products are coming soon.")) +
    `</div>` +
    foot(),

  /* ONE CATEGORY */
  c: (name) => {
    if (!CK.includes(name)) return PAGES[""]();
    return (
      listing(
        P.filter((p) => p.category === name),
        esc(name),
        "",
        true,
      ) + foot()
    );
  },

  /* TRENDING */
  trending: () =>
    `<div class="wrap"><div class="ph"><h1>Trending now</h1><p class="sub">Little loves everyone is looking at.</p></div></div>` +
    `<section class="wrap">${grid(trendingList(60))}</section>` +
    sec("Fresh from the Studio", "", "", row(freshList(12))) +
    foot(),

  /* ALL COLLECTIONS */
  collections: () =>
    `<div class="wrap"><div class="ph"><h1>Collections</h1><p class="sub">Hand-picked sets.</p></div>` +
    (CURATED.length
      ? `<div class="cols">${CURATED.map(colCard).join("")}</div>`
      : empty(
          "Collections are coming soon.",
          "Check back in a little while.",
        )) +
    `</div>` +
    (ST.s.cols.length > 1
      ? sec(
          "Your collections",
          "",
          "",
          `<div class="cols">${ST.s.cols
            .filter((c) => c.id !== "saved")
            .map(colCard)
            .join("")}</div>`,
        )
      : "") +
    foot(),

  /* ONE COLLECTION (yours or the visitor's own) */
  col: (id) => {
    const isCurated = CURATED.some((x) => x.id === id);
    const c = CURATED.find((x) => x.id === id) || ST.find(id);
    if (!c) return PAGES.collections();
    const list = isCurated ? c.items : prods(c.items);
    return (
      `<div class="wrap"><div class="ph"><a class="cvl" style="cursor:default;margin-bottom:24px">${cover(list)}<div class="cvt"><h3>${esc(c.name)}</h3><p>${esc(c.desc || "A personal collection.")}</p></div></a><p class="sub">${list.length} products, created by ${isCurated ? "CraftedByAkash" : "you"}</p>${isCurated ? `<div class="bt"><button class="ab" data-act="fc" data-id="${c.id}">Save collection</button></div>` : ""}</div>${list.length ? grid(list) : empty("Your collections are empty.", "Tap the save button on any product to add it here.", ["#/explore", "Start exploring"])}</div>` +
      foot()
    );
  },

  /* ONE PRODUCT */
  p: (id) => {
    const p = byId[id];
    if (!p) return PAGES[""]();
    ST.view(id);
    const similar = sim(p, 8);
    const moreLikeThis = sim(
      p,
      40,
      similar.map((x) => x.id),
    );
    const thumbs =
      p.images.length > 1
        ? `<div class="th">${p.images.map((_, k) => `<button data-act="thumb" data-k="${k}" data-id="${id}" aria-label="Picture ${k + 1}" ${k ? "" : 'aria-current="true"'}><img src="${esc(img(p, k))}" alt=""></button>`).join("")}</div>`
        : "";
    return (
      `<div class="wrap"><div class="pd">
        <div>
          <button class="gm" data-act="open" data-id="${id}" aria-label="Open the picture full screen"><img id="mi" src="${esc(img(p))}" alt="${esc(alt(p))}"></button>
          ${thumbs}
        </div>
        <div class="inf">
          ${p.brand ? `<a class="br" href="#/search/${encodeURIComponent(p.brand)}">${esc(p.brand)}</a>` : ""}
          <h1>${esc(p.name)}</h1>
          <a class="sub" href="#/c/${encodeURIComponent(p.category)}">${esc(p.category)}</a>
          <p>${esc(p.desc)}</p>
          ${ratingWidget(p)}
          <div class="bt">${btns(p, 1)}</div>
          ${p.tags.length ? `<div class="chips" style="justify-content:flex-start">${p.tags.map((t) => `<a class="chip" href="#/search/${encodeURIComponent(t)}">${esc(t)}</a>`).join("")}</div>` : ""}
          <div class="note">
            <div class="order-heading">
              <span class="order-sparkle" aria-hidden="true">✦</span>
              <div><small>HANDMADE WITH LOVE</small><h2>Ready to order?</h2></div>
            </div>
            <p>Message us on WhatsApp to ask about this piece. We’ll include its name and product link for you.</p>
            <a class="wa-order" href="${wa(p)}" target="_blank" rel="noopener noreferrer" aria-label="Ask about ${esc(p.name)} on WhatsApp">
              ${waIcon}
              <span><strong>Order on WhatsApp</strong><small>${waNum()} · Product details included</small></span>
              <span class="wa-arrow" aria-hidden="true">→</span>
            </a>
            <small class="order-hint">Have a question or ready to order? We’d love to hear from you.</small>
          </div>
        </div>
      </div></div>` +
      (similar.length ? sec("You might also like", "", "", row(similar)) : "") +
      (moreLikeThis.length
        ? sec(
        "More like this",
        "Keep going.",
        "",
        grid(moreLikeThis),
      )
        : "") +
      foot()
    );
  },

  /* SEARCH RESULTS */
  search: (q) => {
    q = q || "";
    if (q) {
      ST.s.searches = [q, ...ST.s.searches.filter((x) => x !== q)].slice(0, 10);
      ST.w();
    }
    return (
      listing(SEARCH.text(q), q ? `Results for “${esc(q)}”` : "Search") + foot()
    );
  },

  /* PROFILE (saved, liked, collections, history) */
  me: (tab = "profile") => {
    const S = ST.s;
    const tabs = [
      ["saved", "Saved"],
      ["liked", "Liked"],
      ["collections", "Collections"],
      ["recent", "Recently viewed"],
      ["searches", "Recently searched"],
    ];
    let body = "";
    if (tab === "saved" || tab === "profile") {
      const list = prods(ST.find("saved").items);
      body = list.length
        ? grid(list)
        : empty(
            "Nothing saved yet.",
            "Start exploring and build your personal collection.",
            ["#/explore", "Explore"],
          );
    }
    if (tab === "liked") {
      const list = prods(S.likes);
      body = list.length
        ? grid(list)
        : empty("No likes yet.", "Heart anything that catches your eye.", [
            "#/explore",
            "Explore",
          ]);
    }
    if (tab === "collections") {
      const own = S.cols.filter((c) => c.id !== "saved");
      body =
        `<div class="bt"><button class="pri" data-act="nc">New collection</button></div>` +
        (own.length
          ? `<div class="cols">${own.map((c) => `<div>${colCard(c)}<div class="bt"><button class="ab" data-act="rn" data-id="${c.id}">Rename</button><button class="ab" data-act="dc" data-id="${c.id}">Delete</button></div></div>`).join("")}</div>`
          : empty(
              "Your collections are empty.",
              "Create your first collection.",
            ));
    }
    if (tab === "recent") {
      const list = prods(S.recent);
      body = list.length
        ? `<div class="bt"><button class="ab" data-act="clr">Clear history</button></div>` +
          grid(list)
        : empty(
            "Nothing viewed yet.",
            "Products you open will wait for you here.",
            ["#/explore", "Explore"],
          );
    }
    if (tab === "searches") {
      body = S.searches.length
        ? `<div class="bt"><button class="ab" data-act="clrs">Clear searches</button></div>${chips(S.searches)}`
        : empty("No searches yet.", "Search for a product by its name.");
    }
    const active = tab === "profile" ? "saved" : tab;
    return (
      `<div class="wrap"><div class="me"><div class="av" aria-hidden="true">${esc(ME.initial())}</div><div><h1 style="font-size:34px;margin:0">${ME.name() ? "Hi, " + esc(ME.name()) : "Guest"}</h1><p class="sub"><b>${prods(ST.find("saved").items).length}</b>saved <b>${prods(S.likes).length}</b>liked <b>${S.cols.length - 1}</b>collections</p></div></div>` +
      `<div class="chips" style="justify-content:flex-start;margin-bottom:28px" role="tablist">${tabs.map(([k, n]) => `<a class="chip ${k === active ? "on" : ""}" href="#/me/${k}">${n}</a>`).join("")}</div>${body}</div>` +
      foot()
    );
  },

  /* ABOUT, PRIVACY, TERMS, CONTACT */
  about: () =>
    doc(
      "About",
      `<p>CraftedByAkash is a visual library of things worth discovering. Browse by picture, like what you love, save it into your own collections and come back to it whenever you want.</p><p>There is no checkout here. Everything is about finding things you will want to keep.</p><h2>Who made it</h2><p>Made with ❤️ by Amit. Say hello at <a class="br" href="mailto:${CONTACT.email}">${CONTACT.email}</a>.</p>`,
    ),
  privacy: () =>
    doc(
      "Privacy",
      `<p>Short and plain: this site only remembers what makes it nicer for you.</p><h2>What we keep</h2><p>The name you type when you arrive, and your likes, saves, collections, recently viewed products and searches.</p><h2>Where it lives</h2><p>Only in your own browser on this device. We do not ask for your phone number or email, we do not sell anything, and there are no ads.</p><h2>Your control</h2><p>Clear your history any time from your profile, or clear your browser data to remove everything.</p><h2>Questions</h2><p>Write to <a class="br" href="mailto:${CONTACT.email}">${CONTACT.email}</a>.</p>`,
    ),
  terms: () =>
    doc(
      "Terms",
      `<p>By using CraftedByAkash you agree to these simple terms.</p><h2>Using the site</h2><p>This site is a preview gallery. You can browse, like and save products for personal use. Please do not misuse it.</p><h2>Buying</h2><p>You cannot buy here. To get a product, take a screenshot of it and send it to the seller.</p><h2>Products</h2><p>Pictures and details are for preview and may change or sell out.</p><h2>Changes</h2><p>We may update the site and these terms from time to time. Last updated October 2026.</p>`,
    ),
  contact: () =>
    doc(
      "Contact",
      `<p>We would love to hear from you.</p><h2>Email</h2><p><a class="br" href="mailto:${CONTACT.email}">${CONTACT.email}</a></p><h2>Phone</h2>${CONTACT.phones.map((n, i) => (n ? `<p><a class="br" href="tel:${n.replace(/\s/g, "")}">${esc(n)}</a></p>` : `<div class="slot">${i ? "Another number" : "Phone number"}: add here</div>`)).join("")}<h2>Send a message</h2><form data-contact class="slotf"><input name="n" placeholder="Your name" required aria-label="Your name"><textarea name="m" rows="4" placeholder="Your message" required aria-label="Message"></textarea><button class="pri">Send by email</button></form>`,
    ),
};

/* ---------- top-right button: menu / profile circle ---------- */
function navUser() {
  $("#mb").innerHTML = ME.name()
    ? `<span class="av" style="width:36px;height:36px;font-size:17px;background:var(--ac);color:#fff;border:0">${esc(ME.initial())}</span>`
    : '<svg class="i" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
}
function menuDlg() {
  const links = [
    ["", "Home"],
    ["me/saved", "Saved"],
    ["me/liked", "Liked"],
    ["me/collections", "Your collections"],
    ["me/recent", "Recently viewed"],
    ["me/searches", "Search history"],
    ["explore", "Explore"],
    ["categories", "Categories"],
    ["collections", "Collections"],
    ["trending", "Trending"],
  ];
  openDlg(
    `<button class="sheet-close" type="button" data-act="x" aria-label="Close menu"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>` +
      `<h3>${ME.name() ? "Hi, " + esc(ME.name()) + " ♡" : "Welcome ♡"}</h3>` +
      links
        .map(([h, n]) => `<a class="lr" href="#/${h}"><span>${n}</span></a>`)
        .join("") +
      `<div class="bt"><button class="ab" data-act="nn">Change name</button></div>`,
  );
}

/* ---------- Trending row swipes by itself ---------- */
let autoTimer;
function auto() {
  clearInterval(autoTimer);
  const r = $("[data-auto]");
  if (!r || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  let hold = false; /* pause while someone touches it */
  ["pointerenter", "touchstart", "focusin"].forEach((e) =>
    r.addEventListener(e, () => (hold = true), { passive: true }),
  );
  ["pointerleave", "touchend", "focusout"].forEach((e) =>
    r.addEventListener(e, () => (hold = false)),
  );
  autoTimer = setInterval(() => {
    if (hold || document.hidden || !r.firstElementChild) return;
    const step = r.firstElementChild.offsetWidth + 12;
    const maxScroll = r.scrollWidth - r.clientWidth;
    if (r.scrollLeft >= maxScroll - 2)
      r.scrollTo({ left: 0, behavior: "smooth" });
    else r.scrollBy({ left: step, behavior: "smooth" });
  }, 3200);
}

/* ---------- ROUTER: shows the right page for the address ---------- */
function route() {
  const [h, ...rest] = location.hash.slice(2).split("/");
  const page = PAGES[h] || PAGES[""];
  $("#app").innerHTML = page(...rest.map(decodeURIComponent));
  hydrate();
  scrollTo(0, 0);
  $$(".links a").forEach((x) => x.classList.toggle("on", x.hash === "#/" + h));
  $$(".bn [data-r]").forEach((x) =>
    x.classList.toggle(
      "on",
      x.dataset.r === h ||
        (x.dataset.r === "meP" && h === "me" && rest[0] === undefined),
    ),
  );
  closeSo();
  auto();
  navUser();
  document.title =
    h === "p" && byId[rest[0]]
      ? byId[rest[0]].name + " | CraftedByAkash"
      : "CraftedByAkash: Discover. Save. Revisit.";
}

/* ---------- POP-UPS: messages, dialogs, search ---------- */
function toast(message) {
  const t = document.createElement("div");
  t.className = "t";
  t.textContent = message;
  $("#ts").append(t);
  setTimeout(() => t.remove(), 2200);
}
const openDlg = (html) => {
  $("#dlg").innerHTML =
    `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
  $("#dlg").hidden = false;
  const i = $("#dlg input");
  i && i.focus();
};
const closeDlg = () => {
  $("#dlg").hidden = true;
};
const closeSo = () => {
  $("#so").hidden = true;
};

/* a small question box with one text field */
function ask(title, value, okText, done) {
  openDlg(
    `<form><h3>${title}</h3>${value === null ? "" : `<input name="v" value="${esc(value)}" maxlength="40" required aria-label="Name">`}<div class="bt"><button type="button" class="ab" data-act="x">Cancel</button><button class="pri">${okText}</button></div></form>`,
  );
  $("#dlg form").onsubmit = (e) => {
    e.preventDefault();
    done(value === null ? "" : e.target.v.value.trim());
    closeDlg();
  };
}

/* the "Save to..." box */
function saveDlg(id) {
  const p = byId[id];
  openDlg(
    `<h3>Save ${esc(p.name)}</h3>` +
      ST.s.cols
        .map(
          (c) =>
            `<button class="lr" data-act="tc" data-c="${c.id}" data-id="${id}" aria-pressed="${c.items.includes(id)}"><span>${esc(c.name)}</span><span>${c.items.includes(id) ? "Saved" : c.items.length}</span></button>`,
        )
        .join("") +
      `<form style="margin-top:16px"><input name="n" placeholder="New collection name" maxlength="40" aria-label="New collection name"><div class="bt"><button type="button" class="ab" data-act="x">Done</button><button class="pri">Create</button></div></form>`,
  );
  $("#dlg form").onsubmit = (e) => {
    e.preventDefault();
    const name = e.target.n.value.trim();
    if (name) {
      ST.add(name, [id]);
      toast("Collection created");
      sync();
      saveDlg(id);
    }
  };
}

/* the full-screen search */
function openSo() {
  const o = $("#so");
  o.hidden = false;
  o.innerHTML = `<div class="in"><form class="sbar" style="margin-top:0;max-width:none" role="search" data-search><input name="q" placeholder="Search products by name..." aria-label="Search" autocomplete="off"><button type="button" class="ib" data-act="cs" aria-label="Close search"><svg class="i" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button></form><div id="sg" class="sg"></div></div>`;
  const input = $("#so input");
  input.focus();
  input.oninput = () => sugg(input.value);
  sugg("");
}
/* suggestions under the search box */
function sugg(q) {
  const t = q.trim().toLowerCase();
  const recent = ST.s.searches;
  const popular = [...new Set(P.flatMap((p) => p.tags))].slice(0, 8);
  const chipRow = (list) =>
    `<div class="chips" style="justify-content:flex-start">${list.map((c) => `<a class="chip" href="#/search/${encodeURIComponent(c)}">${esc(c)}</a>`).join("")}</div>`;
  const cats = CK.filter((c) => c.toLowerCase().includes(t));
  if (t) {
    const found = SEARCH.text(t)
      .slice(0, 6)
      .map(
        (p) =>
          `<a class="sr" href="#/p/${p.id}"><img src="${esc(img(p))}" alt=""><span>${esc(p.name)}<br><small class="sub">${esc(p.category)}${p.brand ? ", " + esc(p.brand) : ""}</small></span></a>`,
      )
      .join("");
    $("#sg").innerHTML =
      (cats.length ? `<h4>Categories</h4>${chipRow(cats)}` : "") +
      `<h4>Products</h4>${found || '<p class="sub">Nothing matched your search. Try a different name or category.</p>'}` +
      `<h4><a href="#/search/${encodeURIComponent(t)}" class="br">See all results for “${esc(t)}”</a></h4>`;
  } else {
    $("#sg").innerHTML =
      (recent.length
        ? `<h4>Recent searches <button class="br" data-act="clrs2">Clear</button></h4>${chipRow(recent)}`
        : "") +
      (popular.length ? `<h4>Popular searches</h4>${chipRow(popular)}` : "") +
      (CK.length ? `<h4>Categories</h4>${chipRow(CK)}` : "");
  }
}

/* ---------- FULL-SCREEN PICTURE VIEWER ---------- */
let viewerProduct;
let viewerIndex = 0;
function viewer(id, k) {
  viewerProduct = byId[id];
  const n = viewerProduct.images.length;
  viewerIndex = ((k % n) + n) % n;
  const v = $("#vw");
  v.hidden = false;
  v.innerHTML =
    `<img src="${esc(img(viewerProduct, viewerIndex))}" alt="${esc(alt(viewerProduct))}" data-act="zoom">` +
    `<button class="ib" style="top:16px;right:16px" data-act="vc" aria-label="Close"><svg class="i" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg></button>` +
    (n > 1
      ? `<button class="ib" style="left:12px" data-act="vp" aria-label="Previous picture"><svg class="i" viewBox="0 0 24 24"><path d="m15 5-7 7 7 7"/></svg></button><button class="ib" style="right:12px" data-act="vn" aria-label="Next picture"><svg class="i" viewBox="0 0 24 24"><path d="m9 5 7 7-7 7"/></svg></button>`
      : "") +
    `<a class="vcap" href="${wa(viewerProduct)}" target="_blank" rel="noopener noreferrer">Take a screenshot, then tap here to WhatsApp the seller</a>`;
  $("#vw .ib").focus();
}
/* swipe left / right on a phone */
let touchStartX = 0;
$("#vw").addEventListener(
  "touchstart",
  (e) => (touchStartX = e.touches[0].clientX),
  {
    passive: true,
  },
);
$("#vw").addEventListener("touchend", (e) => {
  const d = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(d) > 50 && viewerProduct)
    viewer(viewerProduct.id, viewerIndex + (d < 0 ? 1 : -1));
});

/* ---------- BUTTONS: what happens when something is tapped ---------- */
/* keep every heart and bookmark in sync */
function sync() {
  $$("[data-act=like]").forEach((b) =>
    b.setAttribute("aria-pressed", ST.liked(b.dataset.id)),
  );
  $$("[data-act=save]").forEach((b) =>
    b.setAttribute("aria-pressed", ST.saved(b.dataset.id)),
  );
}

function refreshRatingUI(product) {
  $$("[data-rating-summary]")
    .filter((element) => element.dataset.ratingSummary === product.id)
    .forEach((element) => {
      element.outerHTML = ratingSummary(product);
    });
  $$("[data-rating-widget]")
    .filter((element) => element.dataset.ratingWidget === product.id)
    .forEach((element) => {
      element.outerHTML = ratingWidget(product);
    });
}

document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  e.preventDefault();
  const a = b.dataset.act;
  const id = b.dataset.id;
  const p = byId[id];

  if (a === "rate") {
    const rating = Number(b.dataset.rating);
    const previous = RATINGS.get(id).userRating;
    if (previous === rating) {
      toast("You already gave this product " + rating + " stars.");
    } else if (RATINGS.set(id, rating)) {
      refreshRatingUI(p);
      toast(previous ? "Your rating was updated." : "Thanks for rating this product!");
    } else {
      toast("Your rating could not be saved. Check your browser storage settings.");
    }
  } else if (a === "like") {
    const on = ST.like(id);
    b.classList.add("pop");
    setTimeout(() => b.classList.remove("pop"), 400);
    sync();
    toast(on ? "Added to Liked" : "Removed from Liked");
  } else if (a === "save") saveDlg(id);
  else if (a === "tc") {
    const [on, c] = ST.tc(b.dataset.c, id);
    const where = c.id === "saved" ? "Saved" : c.name;
    toast(on ? "Added to " + where : "Removed from " + where);
    sync();
    saveDlg(id);
  } else if (a === "fc") {
    /* "Save collection" on one of your collections */
    const c = CURATED.find((c) => c.id === id);
    ST.add(
      c.name,
      c.items.map((p) => p.id),
    );
    toast("Collection created");
  } else if (a === "x") closeDlg();
  else if (a === "so") openSo();
  else if (a === "cs") closeSo();
  else if (a === "fil") $(".fs").classList.toggle("open");
  else if (a === "thumb") {
    $("#mi").src = img(p, +b.dataset.k);
    $$(".th button").forEach((x) => x.setAttribute("aria-current", x === b));
  } else if (a === "open") {
    const current = $(".th [aria-current=true]");
    viewer(id, current ? +current.dataset.k : 0);
  } else if (a === "vc") $("#vw").hidden = true;
  else if (a === "vp") viewer(viewerProduct.id, viewerIndex - 1);
  else if (a === "vn") viewer(viewerProduct.id, viewerIndex + 1);
  else if (a === "zoom") b.classList.toggle("z");
  else if (a === "nc")
    ask("New collection", "", "Create", (n) => {
      ST.add(n);
      toast("Collection created");
      route();
    });
  else if (a === "rn") {
    const c = ST.find(id);
    ask("Rename collection", c.name, "Rename", (n) => {
      c.name = n;
      ST.w();
      route();
    });
  } else if (a === "dc") {
    const c = ST.find(id);
    ask("Delete “" + esc(c.name) + "”?", null, "Delete", () => {
      ST.s.cols = ST.s.cols.filter((x) => x !== c);
      ST.w();
      toast("Collection deleted");
      route();
    });
  } else if (a === "clr") {
    ST.s.recent = [];
    ST.w();
    route();
  } else if (a === "clrs") {
    ST.s.searches = [];
    ST.w();
    route();
  } else if (a === "clrs2") {
    ST.s.searches = [];
    ST.w();
    sugg("");
  } else if (a === "mn") menuDlg();
  else if (a === "nn")
    ask("Change your name", ME.name(), "Save", (n) => {
      ME.set(n);
      toast("Name updated");
      navUser();
      route();
    });
});

/* filters and sorting on listing pages */
document.addEventListener("change", (e) => {
  const sel = e.target.closest("[data-f]");
  if (!sel) return;
  const wrap = sel.closest("[data-l]");
  const L = LS[wrap.dataset.l];
  L.f[sel.dataset.f] = sel.value;
  let list = L.base.filter((p) =>
    ["category", "brand"].every((k) => !L.f[k] || p[k] === L.f[k]),
  );
  if (L.f.sort) list = [...list].sort(SORT[L.f.sort]);
  $(".cnt", wrap).textContent = list.length;
  $(".res", wrap).innerHTML = grid(list);
  hydrate();
});

/* search box and contact form */
document.addEventListener("submit", (e) => {
  if (e.target.matches("[data-contact]")) {
    e.preventDefault();
    const f = e.target;
    location.href =
      "mailto:" +
      CONTACT.email +
      "?subject=" +
      encodeURIComponent("Message from " + f.n.value) +
      "&body=" +
      encodeURIComponent(f.m.value);
    return;
  }
  if (e.target.matches("[data-search]")) {
    e.preventDefault();
    const q = e.target.q.value.trim();
    if (q) location.hash = "#/search/" + encodeURIComponent(q);
    else toast("Type something to search");
  }
});

/* keyboard: Esc closes things, arrows move in the viewer, / opens search */
document.addEventListener("keydown", (e) => {
  if (!$("#vw").hidden) {
    if (e.key === "Escape") $("#vw").hidden = true;
    if (e.key === "ArrowRight") viewer(viewerProduct.id, viewerIndex + 1);
    if (e.key === "ArrowLeft") viewer(viewerProduct.id, viewerIndex - 1);
    return;
  }
  if (e.key === "Escape") {
    closeDlg();
    closeSo();
  }
  if (e.key === "/" && !e.target.matches("input,select,textarea")) {
    e.preventDefault();
    openSo();
  }
});
/* tapping outside a pop-up, or a link inside it, closes it */
document.addEventListener("click", (e) => {
  if (e.target.id === "dlg" || e.target.closest("#dlg a")) closeDlg();
});
/* top bar gets more solid when you scroll */
addEventListener(
  "scroll",
  () => $("#nav").classList.toggle("sc", scrollY > 20),
  { passive: true },
);
addEventListener("hashchange", route);

/* ---------- START: draw the page, then the flower and name screen ---------- */
route();
(function () {
  const loader = $("#ld");
  const finish = () => {
    loader.classList.add("out");
    setTimeout(() => loader.remove(), 600);
  };
  setTimeout(
    () => {
      /* returning visitor: just the flower, then straight in */
      if (ME.name()) return finish();
      /* new visitor: flower fades away, then the name page */
      $(".fl", loader).classList.add("gone");
      setTimeout(() => {
        loader.innerHTML =
          '<form class="wc"><h1>Welcome</h1><p class="sub">What should we call you?</p><input name="n" maxlength="30" required placeholder="Your name" aria-label="Your name" autocomplete="given-name"><button class="pri">Continue</button></form>';
        const f = $("form", loader);
        f.n.focus();
        f.onsubmit = (e) => {
          e.preventDefault();
          ME.set(f.n.value.trim());
          navUser();
          route();
          finish();
          toast("Hi, " + ME.name() + " ♡");
        };
      }, 550);
    },
    ME.name() ? 1300 : 2000,
  );
})();
