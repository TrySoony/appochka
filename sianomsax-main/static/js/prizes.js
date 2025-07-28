// prizes.js
const prizes = [
  { 
    name: "Nail Bracelet", 
    starPrice: 100000, 
    img: "/static/images/nail_bracelet.png", // Локальный путь
    rarity: "common",
    description: "A stylish bracelet for your wrist.",
    chance: 0.08
  },
  { 
    name: "Bonded Ring", 
    starPrice: 37500, 
    img: "/static/images/bonded_ring.png", // Локальный путь
    rarity: "common",
    description: "A ring that binds two hearts together.",
    chance: 0.09
  },
  { 
    name: "Neko Helmet", 
    starPrice: 14000, 
    img: "/static/images/neko_helmet.png", // Локальный путь
    rarity: "rare",
    description: "A helmet for the Neko, the cat-like creature.",
    chance: 0.03
  },
  { 
    name: "Diamond Ring", 
    starPrice: 6700, 
    img: "images/diamond_ring.png", // Для пустого приза картинка не нужна
    rarity: "epic",
    description: "A sparkling diamond ring.",
    chance: 0.015
  },
  { 
    name: "Love Potion", 
    starPrice: 4200, 
    img: "/static/images/love_potion.png", // Локальный путь
    rarity: "common",
    description: "A potion that brings love to your heart.",
    chance: 0.08
  },
  { 
    name: "Easter Egg", 
    starPrice: 1050, 
    img: "/static/images/easter_egg.png", // Локальный путь
    rarity: "common",
    description: "A colorful Easter egg.",
    chance: 0.09
  },
  { 
    name: "Light Sword", 
    starPrice: 1450, 
    img: "/static/images/light_sword.png", // Локальный путь
    rarity: "rare",
    description: "A light sword that shines in the dark.",
    chance: 0.03
  },
  { name: "Bow Tie", starPrice: 4000, img: "/static/images/bow_tie.png", rarity: "rare", description: "A stylish bow tie for special occasions.", chance: 0.04 },
  { name: "Heroic Helmet", starPrice: 100000, img: "/static/images/HeroicHelmet.png", rarity: "legendary", description: "A helmet for true heroes.", chance: 0.005 },
  { name: "Homemade Cake", starPrice: 2222, img: "/static/images/homemade_cake.png", rarity: "common", description: "A sweet homemade cake.", chance: 0.08 },
  { name: "Jack in the Box", starPrice: 915, img: "/static/images/jackinthebox.png", rarity: "common", description: "A classic surprise toy.", chance: 0.09 },
  { name: "Loot Bag", starPrice: 100000, img: "/static/images/loot_bag.png", rarity: "epic", description: "A mysterious bag full of loot.", chance: 0.01 },
  { name: "Pet Snake", starPrice: 1200, img: "/static/images/PetSnake.png", rarity: "rare", description: "A friendly pet snake.", chance: 0.03 },
  { name: "Plush Pepe", starPrice: 1840000, img: "/static/images/plush_pepe.png", rarity: "legendary", description: "The rarest meme plush in the universe!", chance: 0.001 },
  { name: "Restless Jar", starPrice: 1170, img: "/static/images/RestlessJar.png", rarity: "rare", description: "A jar that never rests.", chance: 0.03 },
  { name: "Scared Cat", starPrice: 100000, img: "/static/images/scared_cat.png", rarity: "epic", description: "A cat that's always on edge.", chance: 0.01 },
  { name: "Signet Ring", starPrice: 25000, img: "/static/images/signet_ring.png", rarity: "epic", description: "A ring with a mysterious signet.", chance: 0.02 },
  { name: "Swiss Watch", starPrice: 16888, img: "/static/images/swiss_watch.png", rarity: "epic", description: "A luxury Swiss watch for true connoisseurs.", chance: 0.015 },
];