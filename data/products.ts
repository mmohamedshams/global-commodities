export interface Product {
  id: number;
  slug: string;

  name: {
    en: string;
    ar: string;
  };

  shortDescription: {
    en: string;
    ar: string;
  };

  description: {
    en: string;
    ar: string;
  };

  origin: {
    en: string;
    ar: string;
  };

  packaging: {
    en: string;
    ar: string;
  };

  productType: {
    en: string;
    ar: string;
  };

  category: {
    en: string;
    ar: string;
  };

  image: string;

  gallery: string[];
}

export const products: Product[] = [
  // =========================================================
  // 🌾 AGRICULTURAL COMMODITIES
  // =========================================================

  {
    id: 1,
    slug: "sesame-seeds",

    name: {
      en: "Sesame Seeds",
      ar: "السمسم",
    },

    shortDescription: {
      en: "Premium natural sesame seeds.",
      ar: "سمسم طبيعي عالي الجودة.",
    },

    description: {
      en: "Premium sesame seeds suitable for food manufacturing, oil extraction, wholesale distribution, and international export markets.",
      ar: "سمسم عالي الجودة مناسب للصناعات الغذائية واستخلاص الزيوت والتوزيع بالجملة والتصدير للأسواق العالمية.",
    },

    origin: {
      en: "Argentina • Brazil • Paraguay",
      ar: "الأرجنتين • البرازيل • باراجواي",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Seeds",
      ar: "بذور",
    },

    image: "/images/products/sesame/cover.jpg",

    gallery: [
      "/images/products/sesame/1.jpg",
      "/images/products/sesame/2.jpg",
      "/images/products/sesame/3.jpg",
    ],
  },

  {
    id: 2,
    slug: "popcorn",

    name: {
      en: "Popcorn",
      ar: "الفشار",
    },

    shortDescription: {
      en: "Premium popcorn kernels.",
      ar: "حبوب فشار عالية الجودة.",
    },

    description: {
      en: "Selected popcorn kernels with excellent popping rate, suitable for food processing and international markets.",
      ar: "حبوب فشار مختارة بمعدل فرقعة ممتاز ومناسبة للصناعات الغذائية والأسواق العالمية.",
    },

    origin: {
      en: "Brazil • Argentina",
      ar: "البرازيل • الأرجنتين",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Grains",
      ar: "حبوب",
    },

    image: "/images/products/popcorn/1.jpg",

    gallery: [
      "/images/products/popcorn/1.jpg",
      "/images/products/popcorn/2.jpg",
      "/images/products/popcorn/3.jpg",
    ],
  },

  {
    id: 3,
    slug: "cowpeas",

    name: {
      en: "Cowpeas",
      ar: "اللوبيا",
    },

    shortDescription: {
      en: "Premium quality cowpeas.",
      ar: "لوبيا عالية الجودة.",
    },

    description: {
      en: "Premium cowpeas carefully selected for food industries, wholesale distribution, and export markets.",
      ar: "لوبيا عالية الجودة مختارة بعناية للصناعات الغذائية والتوزيع بالجملة والأسواق العالمية.",
    },

    origin: {
      en: "Brazil • Argentina",
      ar: "البرازيل • الأرجنتين",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/cowpeas/cover.jpg",

    gallery: [
      "/images/products/cowpeas/1.jpg",
      "/images/products/cowpeas/2.jpg",
      "/images/products/cowpeas/3.jpg",
    ],
  },

  {
    id: 4,
    slug: "canadian-beans",

    name: {
      en: "Canadian Beans",
      ar: "الفول الكندي",
    },

    shortDescription: {
      en: "Premium Canadian beans.",
      ar: "فول كندي عالي الجودة.",
    },

    description: {
      en: "Imported Canadian beans suitable for food industries, wholesale distribution, and international markets.",
      ar: "فول كندي مستورد مناسب للصناعات الغذائية والتوزيع بالجملة والأسواق العالمية.",
    },

    origin: {
      en: "Canada",
      ar: "كندا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/canadian-beans/cover.png",

    gallery: [
      "/images/products/canadian-beans/1.jpg",
      "/images/products/canadian-beans/2.jpg",
      "/images/products/canadian-beans/3.jpg",
    ],
  },

  {
    id: 5,
    slug: "lithuanian-beans",

    name: {
      en: "Lithuanian Beans",
      ar: "الفول الليتواني",
    },

    shortDescription: {
      en: "Premium Lithuanian beans.",
      ar: "فول ليتواني عالي الجودة.",
    },

    description: {
      en: "Carefully selected Lithuanian beans suitable for wholesale distribution and international export markets.",
      ar: "فول ليتواني مختار بعناية ومناسب للتوزيع بالجملة والتصدير للأسواق العالمية.",
    },

    origin: {
      en: "Lithuania",
      ar: "ليتوانيا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/lithuanian-beans/cover.png",

    gallery: [
      "/images/products/lithuanian-beans/1.jpg",
      "/images/products/lithuanian-beans/2.jpg",
      "/images/products/lithuanian-beans/3.jpg",
    ],
  },

  {
    id: 6,
    slug: "australian-beans",

    name: {
      en: "Australian Beans",
      ar: "الفول الأسترالي",
    },

    shortDescription: {
      en: "Premium Australian beans.",
      ar: "فول أسترالي عالي الجودة.",
    },

    description: {
      en: "High-quality Australian beans suitable for food processing and international markets.",
      ar: "فول أسترالي عالي الجودة مناسب للصناعات الغذائية والأسواق العالمية.",
    },

    origin: {
      en: "Australia",
      ar: "أستراليا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/australian-beans/cover2.jpg",

    gallery: [
      "/images/products/australian-beans/1.jpg",
      "/images/products/australian-beans/2.jpg",
      "/images/products/australian-beans/3.jpg",
    ],
  },

  {
    id: 7,
    slug: "chickpeas",

    name: {
      en: "Chickpeas",
      ar: "الحمص",
    },

    shortDescription: {
      en: "Premium quality chickpeas.",
      ar: "حمص عالي الجودة.",
    },

    description: {
      en: "Premium chickpeas suitable for food processing, wholesale distribution, and international trade.",
      ar: "حمص عالي الجودة مناسب للصناعات الغذائية والتوزيع بالجملة والتجارة الدولية.",
    },

    origin: {
      en: "Canada • Australia • Turkey",
      ar: "كندا • أستراليا • تركيا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/chickpeas/cover.jpg",

    gallery: [
      "/images/products/chickpeas/1.jpg",
      "/images/products/chickpeas/2.jpg",
      "/images/products/chickpeas/3.jpg",
    ],
  },

  {
    id: 8,
    slug: "red-lentils",

    name: {
      en: "Red Lentils",
      ar: "العدس الأحمر",
    },

    shortDescription: {
      en: "Premium red lentils for export.",
      ar: "عدس أحمر فاخر للتصدير.",
    },

    description: {
      en: "High-quality red lentils sourced from trusted suppliers and suitable for international markets.",
      ar: "عدس أحمر عالي الجودة من موردين موثوقين ومناسب للأسواق العالمية.",
    },

    origin: {
      en: "Canada • Turkey • Kazakhstan",
      ar: "كندا • تركيا • كازاخستان",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/red-lentils/cover.jpg",

    gallery: [
      "/images/products/red-lentils/1.jpg",
      "/images/products/red-lentils/2.jpg",
      "/images/products/red-lentils/3.jpg",
    ],
  },

  {
    id: 9,
    slug: "yellow-corn",

    name: {
      en: "Yellow Corn",
      ar: "الذرة الصفراء",
    },

    shortDescription: {
      en: "High-quality yellow corn for food and feed industries.",
      ar: "ذرة صفراء عالية الجودة للصناعات الغذائية والأعلاف.",
    },

    description: {
      en: "Premium yellow corn suitable for food production, animal feed, and international trade.",
      ar: "ذرة صفراء عالية الجودة مناسبة للصناعات الغذائية والأعلاف والتصدير.",
    },

    origin: {
      en: "Brazil • Argentina • Ukraine",
      ar: "البرازيل • الأرجنتين • أوكرانيا",
    },

    packaging: {
      en: "50 KG Bags",
      ar: "أجولة 50 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Grains",
      ar: "حبوب",
    },

    image: "/images/products/yellow-corn/cover.jpg",

    gallery: [
      "/images/products/yellow-corn/1.jpg",
      "/images/products/yellow-corn/2.jpg",
      "/images/products/yellow-corn/3.jpg",
    ],
  },

  {
    id: 10,
    slug: "wheat",

    name: {
      en: "Wheat",
      ar: "القمح",
    },

    shortDescription: {
      en: "Premium milling wheat.",
      ar: "قمح عالي الجودة للطحن.",
    },

    description: {
      en: "Premium milling wheat suitable for flour production, food processing, and international markets.",
      ar: "قمح عالي الجودة مناسب لإنتاج الدقيق والصناعات الغذائية والأسواق العالمية.",
    },

    origin: {
      en: "Russia • Canada • Australia",
      ar: "روسيا • كندا • أستراليا",
    },

    packaging: {
      en: "50 KG Bags",
      ar: "أجولة 50 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Grains",
      ar: "حبوب",
    },

    image: "/images/products/wheat/cover.jpg",

    gallery: [
      "/images/products/wheat/1.jpg",
      "/images/products/wheat/2.jpg",
      "/images/products/wheat/3.jpg",
    ],
  },

  {
    id: 11,
    slug: "sunflower-seeds",

    name: {
      en: "Sunflower Seeds",
      ar: "بذور عباد الشمس",
    },

    shortDescription: {
      en: "Premium sunflower seeds for food and oil production.",
      ar: "بذور عباد الشمس عالية الجودة للأغذية وإنتاج الزيوت.",
    },

    description: {
      en: "High-quality sunflower seeds suitable for food processing and oil extraction.",
      ar: "بذور عباد الشمس عالية الجودة المناسبة للصناعات الغذائية واستخلاص الزيوت.",
    },

    origin: {
      en: "Ukraine • Bulgaria • Romania",
      ar: "أوكرانيا • بلغاريا • رومانيا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Oilseeds",
      ar: "بذور زيتية",
    },

    image: "/images/products/sunflower-seeds/cover.jpg",

    gallery: [
      "/images/products/sunflower-seeds/1.jpg",
      "/images/products/sunflower-seeds/2.jpg",
      "/images/products/sunflower-seeds/3.jpg",
    ],
  },

  {
    id: 12,
    slug: "soybeans",

    name: {
      en: "Soybeans",
      ar: "فول الصويا",
    },

    shortDescription: {
      en: "Premium soybeans for food and feed industries.",
      ar: "فول صويا عالي الجودة للصناعات الغذائية والأعلاف.",
    },

    description: {
      en: "Premium soybeans suitable for food processing, oil extraction, and animal feed.",
      ar: "فول صويا عالي الجودة مناسب للصناعات الغذائية واستخلاص الزيوت والأعلاف.",
    },

    origin: {
      en: "Brazil • Argentina • United States",
      ar: "البرازيل • الأرجنتين • الولايات المتحدة",
    },

    packaging: {
      en: "50 KG Bags",
      ar: "أجولة 50 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Oilseeds",
      ar: "بذور زيتية",
    },

    image: "/images/products/soybeans/cover.jpg",

    gallery: [
      "/images/products/soybeans/1.jpg",
      "/images/products/soybeans/2.jpg",
      "/images/products/soybeans/3.jpg",
    ],
  },

  {
    id: 13,
    slug: "white-beans",

    name: {
      en: "White Beans",
      ar: "الفاصوليا البيضاء",
    },

    shortDescription: {
      en: "Premium white beans for export.",
      ar: "فاصوليا بيضاء عالية الجودة للتصدير.",
    },

    description: {
      en: "High-quality white beans sourced from trusted farms and suitable for international markets.",
      ar: "فاصوليا بيضاء عالية الجودة من أفضل المزارع ومناسبة للتصدير.",
    },

    origin: {
      en: "Canada • Argentina • Egypt",
      ar: "كندا • الأرجنتين • مصر",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/white-beans/cover.jpg",

    gallery: [
      "/images/products/white-beans/1.jpg",
      "/images/products/white-beans/2.jpg",
      "/images/products/white-beans/3.jpg",
    ],
  },

  {
    id: 14,
    slug: "kidney-beans",

    name: {
      en: "Red Kidney Beans",
      ar: "الفاصوليا الحمراء",
    },

    shortDescription: {
      en: "Premium red kidney beans.",
      ar: "فاصوليا حمراء عالية الجودة.",
    },

    description: {
      en: "Premium red kidney beans suitable for wholesale distribution and global export.",
      ar: "فاصوليا حمراء عالية الجودة مناسبة للبيع بالجملة والتصدير.",
    },

    origin: {
      en: "Argentina • China • Canada",
      ar: "الأرجنتين • الصين • كندا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Pulses",
      ar: "بقوليات",
    },

    image: "/images/products/kidney-beans/cover.jpg",

    gallery: [
      "/images/products/kidney-beans/1.jpg",
      "/images/products/kidney-beans/2.jpg",
      "/images/products/kidney-beans/3.jpg",
    ],
  },

  {
    id: 15,
    slug: "peanuts",

    name: {
      en: "Peanuts",
      ar: "الفول السوداني",
    },

    shortDescription: {
      en: "Premium peanuts for food industries.",
      ar: "فول سوداني عالي الجودة للصناعات الغذائية.",
    },

    description: {
      en: "Premium peanuts suitable for roasting, food production, wholesale distribution, and export markets.",
      ar: "فول سوداني عالي الجودة مناسب للتحميص والصناعات الغذائية والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Egypt • India • Argentina",
      ar: "مصر • الهند • الأرجنتين",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Nuts",
      ar: "مكسرات",
    },

    image: "/images/products/peanuts/cover.jpg",

    gallery: [
      "/images/products/peanuts/1.jpg",
      "/images/products/peanuts/2.jpg",
      "/images/products/peanuts/3.jpg",
    ],
  },

  {
    id: 16,
    slug: "barley",

    name: {
      en: "Barley",
      ar: "الشعير",
    },

    shortDescription: {
      en: "Premium barley for food and feed.",
      ar: "شعير عالي الجودة للأغذية والأعلاف.",
    },

    description: {
      en: "High-quality barley suitable for food processing, brewing, and animal feed.",
      ar: "شعير عالي الجودة مناسب للصناعات الغذائية والأعلاف.",
    },

    origin: {
      en: "Australia • Russia • France",
      ar: "أستراليا • روسيا • فرنسا",
    },

    packaging: {
      en: "50 KG Bags",
      ar: "أجولة 50 كجم",
    },

    productType: {
      en: "Agricultural Commodities",
      ar: "حاصلات زراعية",
    },

    category: {
      en: "Grains",
      ar: "حبوب",
    },

    image: "/images/products/barley/cover.jpg",

    gallery: [
      "/images/products/barley/1.jpg",
      "/images/products/barley/2.jpg",
      "/images/products/barley/3.jpg",
    ],
  },


  // =========================================================
  // 🥬 VEGETABLES
  // =========================================================

  {
    id: 20,
    slug: "potatoes",

    name: {
      en: "Potatoes",
      ar: "البطاطس",
    },

    shortDescription: {
      en: "Fresh premium potatoes.",
      ar: "بطاطس طازجة عالية الجودة.",
    },

    description: {
      en: "Fresh premium potatoes suitable for fresh markets, food processing, wholesale distribution, and export.",
      ar: "بطاطس طازجة عالية الجودة مناسبة للأسواق الطازجة والتصنيع الغذائي والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Egypt • Netherlands • France",
      ar: "مصر • هولندا • فرنسا",
    },

    packaging: {
      en: "10 KG • 25 KG Bags",
      ar: "أجولة 10 • 25 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Root Vegetables",
      ar: "خضروات جذرية",
    },

    image: "/images/products/vegetables/potatoes/cover.jpg",

    gallery: [
      "/images/products/vegetables/potatoes/1.jpg",
      "/images/products/vegetables/potatoes/2.jpg",
      "/images/products/vegetables/potatoes/3.jpg",
    ],
  },

  {
    id: 21,
    slug: "onions",

    name: {
      en: "Onions",
      ar: "البصل",
    },

    shortDescription: {
      en: "Fresh high-quality onions.",
      ar: "بصل طازج عالي الجودة.",
    },

    description: {
      en: "Fresh onions carefully selected for retail, food processing, wholesale distribution, and export.",
      ar: "بصل طازج مختار بعناية للبيع والتصنيع الغذائي والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Egypt • Netherlands • India",
      ar: "مصر • هولندا • الهند",
    },

    packaging: {
      en: "10 KG • 25 KG Bags",
      ar: "أجولة 10 • 25 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Bulb Vegetables",
      ar: "خضروات بصلية",
    },

    image: "/images/products/vegetables/onions/cover.jpg",

    gallery: [
      "/images/products/vegetables/onions/1.jpg",
      "/images/products/vegetables/onions/2.jpg",
      "/images/products/vegetables/onions/3.jpg",
    ],
  },

  {
    id: 22,
    slug: "garlic",

    name: {
      en: "Garlic",
      ar: "الثوم",
    },

    shortDescription: {
      en: "Premium fresh garlic.",
      ar: "ثوم طازج عالي الجودة.",
    },

    description: {
      en: "Premium fresh garlic suitable for food processing, retail distribution, and international export.",
      ar: "ثوم طازج عالي الجودة مناسب للصناعات الغذائية والتوزيع والتصدير.",
    },

    origin: {
      en: "Egypt • China • Spain",
      ar: "مصر • الصين • إسبانيا",
    },

    packaging: {
      en: "5 KG • 10 KG Bags",
      ar: "أجولة 5 • 10 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Bulb Vegetables",
      ar: "خضروات بصلية",
    },

    image: "/images/products/vegetables/garlic/cover.jpg",

    gallery: [
      "/images/products/vegetables/garlic/1.jpg",
      "/images/products/vegetables/garlic/2.jpg",
      "/images/products/vegetables/garlic/3.jpg",
    ],
  },

  {
    id: 23,
    slug: "tomatoes",

    name: {
      en: "Tomatoes",
      ar: "الطماطم",
    },

    shortDescription: {
      en: "Fresh premium tomatoes.",
      ar: "طماطم طازجة عالية الجودة.",
    },

    description: {
      en: "Fresh tomatoes selected for supermarkets, food processing, wholesale distribution, and export markets.",
      ar: "طماطم طازجة مختارة بعناية للسوبر ماركت والتصنيع الغذائي والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Egypt • Turkey • Morocco",
      ar: "مصر • تركيا • المغرب",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Fresh Vegetables",
      ar: "خضروات طازجة",
    },

    image: "/images/products/vegetables/tomatoes/cover.jpg",

    gallery: [
      "/images/products/vegetables/tomatoes/1.jpg",
      "/images/products/vegetables/tomatoes/2.jpg",
      "/images/products/vegetables/tomatoes/3.jpg",
    ],
  },

  {
    id: 24,
    slug: "carrots",

    name: {
      en: "Carrots",
      ar: "الجزر",
    },

    shortDescription: {
      en: "Fresh premium carrots.",
      ar: "جزر طازج عالي الجودة.",
    },

    description: {
      en: "Fresh carrots carefully selected for fresh markets, food processing, and export.",
      ar: "جزر طازج مختار بعناية للأسواق الطازجة والتصنيع الغذائي والتصدير.",
    },

    origin: {
      en: "Egypt • Netherlands",
      ar: "مصر • هولندا",
    },

    packaging: {
      en: "10 KG Bags",
      ar: "أجولة 10 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Root Vegetables",
      ar: "خضروات جذرية",
    },

    image: "/images/products/vegetables/carrots/cover.jpg",

    gallery: [
      "/images/products/vegetables/carrots/1.jpg",
      "/images/products/vegetables/carrots/2.jpg",
      "/images/products/vegetables/carrots/3.jpg",
    ],
  },

  {
    id: 25,
    slug: "cucumbers",

    name: {
      en: "Cucumbers",
      ar: "الخيار",
    },

    shortDescription: {
      en: "Fresh premium cucumbers.",
      ar: "خيار طازج عالي الجودة.",
    },

    description: {
      en: "Fresh cucumbers suitable for retail markets, food service, wholesale distribution, and export.",
      ar: "خيار طازج مناسب للأسواق والتوزيع بالجملة وخدمات الأغذية والتصدير.",
    },

    origin: {
      en: "Egypt • Turkey • Spain",
      ar: "مصر • تركيا • إسبانيا",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Fresh Vegetables",
      ar: "خضروات طازجة",
    },

    image: "/images/products/vegetables/cucumbers/cover.jpg",

    gallery: [
      "/images/products/vegetables/cucumbers/1.jpg",
      "/images/products/vegetables/cucumbers/2.jpg",
      "/images/products/vegetables/cucumbers/3.jpg",
    ],
  },

  {
    id: 26,
    slug: "bell-peppers",

    name: {
      en: "Bell Peppers",
      ar: "الفلفل الحلو",
    },

    shortDescription: {
      en: "Fresh colorful bell peppers.",
      ar: "فلفل حلو طازج بألوان متنوعة.",
    },

    description: {
      en: "Fresh premium bell peppers suitable for supermarkets, food service, processing, and export.",
      ar: "فلفل حلو طازج عالي الجودة مناسب للسوبر ماركت وخدمات الأغذية والتصنيع والتصدير.",
    },

    origin: {
      en: "Egypt • Spain • Turkey",
      ar: "مصر • إسبانيا • تركيا",
    },

    packaging: {
      en: "5 KG Cartons",
      ar: "كرتونة 5 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Fresh Vegetables",
      ar: "خضروات طازجة",
    },

    image: "/images/products/vegetables/bell-peppers/cover.jpg",

    gallery: [
      "/images/products/vegetables/bell-peppers/1.jpg",
      "/images/products/vegetables/bell-peppers/2.jpg",
      "/images/products/vegetables/bell-peppers/3.jpg",
    ],
  },

  {
    id: 27,
    slug: "eggplant",

    name: {
      en: "Eggplant",
      ar: "الباذنجان",
    },

    shortDescription: {
      en: "Fresh premium eggplant.",
      ar: "باذنجان طازج عالي الجودة.",
    },

    description: {
      en: "Fresh eggplant suitable for fresh markets, food service, processing, and international export.",
      ar: "باذنجان طازج مناسب للأسواق وخدمات الأغذية والتصنيع والتصدير.",
    },

    origin: {
      en: "Egypt • Turkey • Spain",
      ar: "مصر • تركيا • إسبانيا",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Fresh Vegetables",
      ar: "خضروات طازجة",
    },

    image: "/images/products/vegetables/eggplant/cover.jpg",

    gallery: [
      "/images/products/vegetables/eggplant/1.jpg",
      "/images/products/vegetables/eggplant/2.jpg",
      "/images/products/vegetables/eggplant/3.jpg",
    ],
  },

  {
    id: 28,
    slug: "green-beans",

    name: {
      en: "Green Beans",
      ar: "الفاصوليا الخضراء",
    },

    shortDescription: {
      en: "Fresh premium green beans.",
      ar: "فاصوليا خضراء طازجة عالية الجودة.",
    },

    description: {
      en: "Fresh green beans carefully selected for fresh markets, food service, processing, and export.",
      ar: "فاصوليا خضراء طازجة مختارة بعناية للأسواق وخدمات الأغذية والتصنيع والتصدير.",
    },

    origin: {
      en: "Egypt • Morocco • Kenya",
      ar: "مصر • المغرب • كينيا",
    },

    packaging: {
      en: "5 KG Cartons",
      ar: "كرتونة 5 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Fresh Vegetables",
      ar: "خضروات طازجة",
    },

    image: "/images/products/vegetables/green-beans/cover.jpg",

    gallery: [
      "/images/products/vegetables/green-beans/1.jpg",
      "/images/products/vegetables/green-beans/2.jpg",
      "/images/products/vegetables/green-beans/3.jpg",
    ],
  },

  {
    id: 29,
    slug: "sweet-potatoes",

    name: {
      en: "Sweet Potatoes",
      ar: "البطاطا الحلوة",
    },

    shortDescription: {
      en: "Premium fresh sweet potatoes.",
      ar: "بطاطا حلوة طازجة عالية الجودة.",
    },

    description: {
      en: "Premium sweet potatoes suitable for fresh markets, food processing, wholesale distribution, and export.",
      ar: "بطاطا حلوة عالية الجودة مناسبة للأسواق الطازجة والتصنيع الغذائي والتوزيع والتصدير.",
    },

    origin: {
      en: "Egypt • United States",
      ar: "مصر • الولايات المتحدة",
    },

    packaging: {
      en: "10 KG • 20 KG Bags",
      ar: "أجولة 10 • 20 كجم",
    },

    productType: {
      en: "Vegetables",
      ar: "خضروات",
    },

    category: {
      en: "Root Vegetables",
      ar: "خضروات جذرية",
    },

    image: "/images/products/vegetables/sweet-potatoes/cover.jpg",

    gallery: [
      "/images/products/vegetables/sweet-potatoes/1.jpg",
      "/images/products/vegetables/sweet-potatoes/2.jpg",
      "/images/products/vegetables/sweet-potatoes/3.jpg",
    ],
  },

  // =========================================================
  // 🍎 FRUITS
  // =========================================================

  {
    id: 30,
    slug: "oranges",

    name: {
      en: "Oranges",
      ar: "البرتقال",
    },

    shortDescription: {
      en: "Fresh premium oranges.",
      ar: "برتقال طازج عالي الجودة.",
    },

    description: {
      en: "Premium fresh oranges selected for international fresh fruit markets, juice production, and export.",
      ar: "برتقال طازج عالي الجودة مختار للأسواق العالمية وإنتاج العصائر والتصدير.",
    },

    origin: {
      en: "Egypt • Spain • South Africa",
      ar: "مصر • إسبانيا • جنوب أفريقيا",
    },

    packaging: {
      en: "10 KG • 15 KG Cartons",
      ar: "كرتونة 10 • 15 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Citrus Fruits",
      ar: "حمضيات",
    },

    image: "/images/products/fruits/oranges/cover.jpg",

    gallery: [
      "/images/products/fruits/oranges/1.jpg",
      "/images/products/fruits/oranges/2.jpg",
      "/images/products/fruits/oranges/3.jpg",
    ],
  },

  {
    id: 31,
    slug: "mandarins",

    name: {
      en: "Mandarins",
      ar: "اليوسفي",
    },

    shortDescription: {
      en: "Fresh premium mandarins.",
      ar: "يوسفي طازج عالي الجودة.",
    },

    description: {
      en: "Fresh premium mandarins selected for retail markets and international export.",
      ar: "يوسفي طازج عالي الجودة مختار للأسواق والتصدير الدولي.",
    },

    origin: {
      en: "Egypt • Spain • Morocco",
      ar: "مصر • إسبانيا • المغرب",
    },

    packaging: {
      en: "10 KG Cartons",
      ar: "كرتونة 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Citrus Fruits",
      ar: "حمضيات",
    },

    image: "/images/products/fruits/mandarins/cover.jpg",

    gallery: [
      "/images/products/fruits/mandarins/1.jpg",
      "/images/products/fruits/mandarins/2.jpg",
      "/images/products/fruits/mandarins/3.jpg",
    ],
  },

  {
    id: 32,
    slug: "lemons",

    name: {
      en: "Lemons",
      ar: "الليمون",
    },

    shortDescription: {
      en: "Fresh premium lemons.",
      ar: "ليمون طازج عالي الجودة.",
    },

    description: {
      en: "Fresh lemons selected for food service, processing, retail markets, and export.",
      ar: "ليمون طازج مختار لخدمات الأغذية والتصنيع والأسواق والتصدير.",
    },

    origin: {
      en: "Egypt • Spain • Argentina",
      ar: "مصر • إسبانيا • الأرجنتين",
    },

    packaging: {
      en: "10 KG Cartons",
      ar: "كرتونة 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Citrus Fruits",
      ar: "حمضيات",
    },

    image: "/images/products/fruits/lemons/cover.jpg",

    gallery: [
      "/images/products/fruits/lemons/1.jpg",
      "/images/products/fruits/lemons/2.jpg",
      "/images/products/fruits/lemons/3.jpg",
    ],
  },

  {
    id: 33,
    slug: "grapes",

    name: {
      en: "Grapes",
      ar: "العنب",
    },

    shortDescription: {
      en: "Premium fresh table grapes.",
      ar: "عنب مائدة طازج عالي الجودة.",
    },

    description: {
      en: "Premium table grapes selected for fresh markets, retail distribution, and international export.",
      ar: "عنب مائدة عالي الجودة مختار للأسواق الطازجة والتوزيع والتصدير.",
    },

    origin: {
      en: "Egypt • South Africa • Chile",
      ar: "مصر • جنوب أفريقيا • تشيلي",
    },

    packaging: {
      en: "4.5 KG • 9 KG Cartons",
      ar: "كرتونة 4.5 • 9 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Table Fruits",
      ar: "فواكه مائدة",
    },

    image: "/images/products/fruits/grapes/cover.jpg",

    gallery: [
      "/images/products/fruits/grapes/1.jpg",
      "/images/products/fruits/grapes/2.jpg",
      "/images/products/fruits/grapes/3.jpg",
    ],
  },

  {
    id: 34,
    slug: "strawberries",

    name: {
      en: "Strawberries",
      ar: "الفراولة",
    },

    shortDescription: {
      en: "Premium fresh strawberries.",
      ar: "فراولة طازجة عالية الجودة.",
    },

    description: {
      en: "Premium strawberries suitable for fresh markets, food processing, freezing, and export.",
      ar: "فراولة عالية الجودة مناسبة للأسواق الطازجة والتصنيع والتجميد والتصدير.",
    },

    origin: {
      en: "Egypt • Spain • Morocco",
      ar: "مصر • إسبانيا • المغرب",
    },

    packaging: {
      en: "250g • 500g • 1 KG",
      ar: "250 جم • 500 جم • 1 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Berries",
      ar: "توتيات",
    },

    image: "/images/products/fruits/strawberries/cover.jpg",

    gallery: [
      "/images/products/fruits/strawberries/1.jpg",
      "/images/products/fruits/strawberries/2.jpg",
      "/images/products/fruits/strawberries/3.jpg",
    ],
  },

  {
    id: 35,
    slug: "mangoes",

    name: {
      en: "Mangoes",
      ar: "المانجو",
    },

    shortDescription: {
      en: "Fresh premium mangoes.",
      ar: "مانجو طازجة عالية الجودة.",
    },

    description: {
      en: "Premium mangoes selected for fresh markets, juice production, food processing, and export.",
      ar: "مانجو عالية الجودة مختارة للأسواق الطازجة وإنتاج العصائر والتصنيع والتصدير.",
    },

    origin: {
      en: "Egypt • India • Peru",
      ar: "مصر • الهند • بيرو",
    },

    packaging: {
      en: "4 KG • 6 KG Cartons",
      ar: "كرتونة 4 • 6 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Tropical Fruits",
      ar: "فواكه استوائية",
    },

    image: "/images/products/fruits/mangoes/cover.jpg",

    gallery: [
      "/images/products/fruits/mangoes/1.jpg",
      "/images/products/fruits/mangoes/2.jpg",
      "/images/products/fruits/mangoes/3.jpg",
    ],
  },

  {
    id: 36,
    slug: "pomegranates",

    name: {
      en: "Pomegranates",
      ar: "الرمان",
    },

    shortDescription: {
      en: "Fresh premium pomegranates.",
      ar: "رمان طازج عالي الجودة.",
    },

    description: {
      en: "Premium pomegranates selected for fresh fruit markets, juice production, and export.",
      ar: "رمان عالي الجودة مختار للأسواق الطازجة وإنتاج العصائر والتصدير.",
    },

    origin: {
      en: "Egypt • Turkey • Spain",
      ar: "مصر • تركيا • إسبانيا",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Fresh Fruits",
      ar: "فواكه طازجة",
    },

    image: "/images/products/fruits/pomegranates/cover.jpg",

    gallery: [
      "/images/products/fruits/pomegranates/1.jpg",
      "/images/products/fruits/pomegranates/2.jpg",
      "/images/products/fruits/pomegranates/3.jpg",
    ],
  },

  {
    id: 37,
    slug: "apples",

    name: {
      en: "Apples",
      ar: "التفاح",
    },

    shortDescription: {
      en: "Premium fresh apples.",
      ar: "تفاح طازج عالي الجودة.",
    },

    description: {
      en: "Fresh premium apples suitable for retail markets, wholesale distribution, and international trade.",
      ar: "تفاح طازج عالي الجودة مناسب للأسواق والتوزيع بالجملة والتجارة الدولية.",
    },

    origin: {
      en: "Italy • Poland • South Africa",
      ar: "إيطاليا • بولندا • جنوب أفريقيا",
    },

    packaging: {
      en: "10 KG • 18 KG Cartons",
      ar: "كرتونة 10 • 18 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Pome Fruits",
      ar: "فواكه بذرية",
    },

    image: "/images/products/fruits/apples/cover.jpg",

    gallery: [
      "/images/products/fruits/apples/1.jpg",
      "/images/products/fruits/apples/2.jpg",
      "/images/products/fruits/apples/3.jpg",
    ],
  },

  {
    id: 38,
    slug: "pears",

    name: {
      en: "Pears",
      ar: "الكمثرى",
    },

    shortDescription: {
      en: "Fresh premium pears.",
      ar: "كمثرى طازجة عالية الجودة.",
    },

    description: {
      en: "Premium fresh pears suitable for retail markets, wholesale distribution, and export.",
      ar: "كمثرى طازجة عالية الجودة مناسبة للأسواق والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Italy • Argentina • South Africa",
      ar: "إيطاليا • الأرجنتين • جنوب أفريقيا",
    },

    packaging: {
      en: "10 KG Cartons",
      ar: "كرتونة 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Pome Fruits",
      ar: "فواكه بذرية",
    },

    image: "/images/products/fruits/pears/cover.jpg",

    gallery: [
      "/images/products/fruits/pears/1.jpg",
      "/images/products/fruits/pears/2.jpg",
      "/images/products/fruits/pears/3.jpg",
    ],
  },

  {
    id: 39,
    slug: "watermelon",

    name: {
      en: "Watermelon",
      ar: "البطيخ",
    },

    shortDescription: {
      en: "Fresh premium watermelon.",
      ar: "بطيخ طازج عالي الجودة.",
    },

    description: {
      en: "Fresh premium watermelon suitable for fresh markets, retail distribution, and export.",
      ar: "بطيخ طازج عالي الجودة مناسب للأسواق والتوزيع والتصدير.",
    },

    origin: {
      en: "Egypt • Morocco • Spain",
      ar: "مصر • المغرب • إسبانيا",
    },

    packaging: {
      en: "Bulk • Cartons",
      ar: "سائب • كراتين",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Melons",
      ar: "فواكه صيفية",
    },

    image: "/images/products/fruits/watermelon/cover.jpg",

    gallery: [
      "/images/products/fruits/watermelon/1.jpg",
      "/images/products/fruits/watermelon/2.jpg",
      "/images/products/fruits/watermelon/3.jpg",
    ],
  },

  {
    id: 40,
    slug: "dates",

    name: {
      en: "Dates",
      ar: "التمور",
    },

    shortDescription: {
      en: "Premium quality dates.",
      ar: "تمور عالية الجودة.",
    },

    description: {
      en: "Premium dates suitable for retail markets, food processing, wholesale distribution, and international export.",
      ar: "تمور عالية الجودة مناسبة للأسواق والتصنيع الغذائي والتوزيع بالجملة والتصدير.",
    },

    origin: {
      en: "Egypt • Saudi Arabia • Tunisia",
      ar: "مصر • السعودية • تونس",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Dried & Fresh Fruits",
      ar: "فواكه طازجة ومجففة",
    },

    image: "/images/products/fruits/dates/cover.jpg",

    gallery: [
      "/images/products/fruits/dates/1.jpg",
      "/images/products/fruits/dates/2.jpg",
      "/images/products/fruits/dates/3.jpg",
    ],
  },

  {
    id: 41,
    slug: "guava",

    name: {
      en: "Guava",
      ar: "الجوافة",
    },

    shortDescription: {
      en: "Fresh premium guava.",
      ar: "جوافة طازجة عالية الجودة.",
    },

    description: {
      en: "Fresh guava suitable for fresh markets, juice production, food processing, and export.",
      ar: "جوافة طازجة مناسبة للأسواق وإنتاج العصائر والتصنيع والتصدير.",
    },

    origin: {
      en: "Egypt • India • Brazil",
      ar: "مصر • الهند • البرازيل",
    },

    packaging: {
      en: "5 KG • 10 KG Cartons",
      ar: "كرتونة 5 • 10 كجم",
    },

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Tropical Fruits",
      ar: "فواكه استوائية",
    },

    image: "/images/products/fruits/guava/cover.jpg",

    gallery: [
      "/images/products/fruits/guava/1.jpg",
      "/images/products/fruits/guava/2.jpg",
      "/images/products/fruits/guava/3.jpg",
    ],
  },

  // =========================================================
  // 🌱 SEEDS & SEEDLINGS
  // =========================================================

  {
    id: 42,
    slug: "potato-seeds",

    name: {
      en: "Spunta",
      ar: " سبونتا",
    },

    shortDescription: {
      en: "Very well-known medium early ware variety. Good heat and drought resistance. High to very yields in different climate zones.",
      ar: "صنف معروف جداً من الأصناف متوسطة النضج. يتميز بمقاومة جيدة للحرارة والجفاف. غلة عالية إلى عالية جداً في مختلف المناطق المناخية.",
    },

    description: {
      en: "High-quality certified potato seeds suitable for commercial farming and international agricultural markets.",
      ar: "تقاوي بطاطس معتمدة وعالية الجودة مناسبة للزراعة التجارية والأسواق الزراعية العالمية.",
    },

    origin: {
      en: "Scotland • Germany • New Zealand",
      ar: "اسكتلندا • ألمانيا • نيوزيلندا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Potato Seeds",
      ar: "تقاوي البطاطس",
    },

    image: "/images/products/seeds/Spunta/cover.png",

    gallery: [
      "/images/products/potato/1.jpg",
      "/images/products/potato/2.jpg",
      "/images/products/potato/3.jpg",
    ],
  },

  {
    id: 43,
    slug: "potato-seeds",

    name: {
      en: "Hermes",
      ar: "هيرميس",
    },

    shortDescription: {
      en: "also available as organic seeds Medium early crisping variety with high dry matter and very good processing quality. Suitable for cultivation in many climate zones and for long-term storage.",
      ar: "متوفر أيضاً كبذور عضوية.صنف متوسط ​​النضج، غني بالمواد الجافة، وذو جودة معالجة ممتازة. مناسب للزراعة في مناطق مناخية متعددة وللتخزين طويل الأمد."},

    description: {
      en: "Selected tomato seeds suitable for commercial farming and professional agricultural production.",
      ar: "تقاوي طماطم مختارة بعناية ومناسبة للزراعة التجارية والإنتاج الزراعي الاحترافي.",
    },

    origin: {
      en: "Netherlands • Italy • France",
      ar: "هولندا • إيطاليا • فرنسا",
    },

    packaging: {
      en: "Professional Seed Packs",
      ar: "عبوات تقاوي احترافية",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Vegetable Seeds",
      ar: "تقاوي خضروات",
    },

    image: "/images/products/seeds/Hermes/cover.jpg",

    gallery: [
      "/images/products/seeds/tomato/1.jpg",
      "/images/products/seeds/tomato/2.jpg",
      "/images/products/seeds/tomato/3.jpg",
    ],
  },

  {
    id: 44,
    slug: "potato-seeds",

    name: {
      en: "Lady Rosetta",
      ar: "ليدي روزيتا",
    },

    shortDescription: {
      en: "Wide spread medium earl crisping variety for different climate zones with high dry matter and excellent processing quality. Can be processed immediately after harvest or after short-term storage",
      ar: "مجموعة متنوعة من رقائق الإيرل المتوسطة واسعة الانتشار للمناطق المناخية المختلفة مع مادة جافة عالية وجودة معالجة ممتازة. يمكن معالجتها مباشرة بعد الحصاد أو بعد التخزين على المدى القصير",
    },

    description: {
      en: "Premium cucumber seeds selected for high-yield commercial farming.",
      ar: "تقاوي خيار عالية الجودة مختارة للزراعة التجارية والإنتاجية العالية.",
    },

    origin: {
      en: "Netherlands • Italy",
      ar: "هولندا • إيطاليا",
    },

    packaging: {
      en: "Professional Seed Packs",
      ar: "عبوات تقاوي احترافية",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Vegetable Seeds",
      ar: "تقاوي خضروات",
    },

    image: "/images/products/seeds/LadyRosetta/cover.jpg",

    gallery: [
      "/images/products/seeds/cucumber/1.jpg",
      "/images/products/seeds/cucumber/2.jpg",
      "/images/products/seeds/cucumber/3.jpg",
    ],
  },

  {
    id: 45,
    slug: "potato-seeds",

    name: {
      en: "Cara",
      ar: "كارا",
    },

    shortDescription: {
      en: "Robust, medium early ware variety with very good disease resistance. High yielding and very uniform",
      ar: "تنوع قوي ومتوسط ​​في وقت مبكر مع مقاومة جيدة جدًا للأمراض. عالية الغلة وموحدة للغاية ",
    },

    description: {
      en: "High-quality pepper seeds suitable for commercial farms and greenhouse production.",
      ar: "تقاوي فلفل عالية الجودة مناسبة للزراعة التجارية والزراعة داخل الصوب.",
    },

    origin: {
      en: "Netherlands • Spain • Italy",
      ar: "هولندا • إسبانيا • إيطاليا",
    },

    packaging: {
      en: "Professional Seed Packs",
      ar: "عبوات تقاوي احترافية",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Vegetable Seeds",
      ar: "تقاوي خضروات",
    },

    image: "/images/products/seeds/Cara/cover.jpg",

    gallery: [
      "/images/products/seeds/pepper/1.jpg",
      "/images/products/seeds/pepper/2.jpg",
      "/images/products/seeds/pepper/3.jpg",
    ],
  },


  {
    id: 46,
    slug: "potato-seeds",

    name: {
      en: "Agria",
      ar: "أجريا",
    },

    shortDescription: {
      en: "also available as organic seeds High yielding maincrop variety, yellow skin and yellow flesh, big oval to longoval tubers. Suitable for a range of uses including crisping, french fries, processing (starch/flake), as well as table use",
      ar: "متوفر أيضًا كبذور عضويةمجموعة متنوعة من المحاصيل الرئيسية عالية الإنتاجية، القشرة الصفراء واللحم الأصفر، والدرنات البيضاوية الكبيرة إلى الطويلة البيضاوية. مناسبة لمجموعة من الاستخدامات بما في ذلك المقرمشة والبطاطس المقلية والمعالجة (النشا/الرقائق)، بالإضافة إلى استخدام الطاولة",
    },

    description: {
      en: "High-quality pepper seeds suitable for commercial farms and greenhouse production.",
      ar: "تقاوي فلفل عالية الجودة مناسبة للزراعة التجارية والزراعة داخل الصوب.",
    },

    origin: {
      en: "Netherlands • Spain • Italy",
      ar: "هولندا • إسبانيا • إيطاليا",
    },

    packaging: {
      en: "Professional Seed Packs",
      ar: "عبوات تقاوي احترافية",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Vegetable Seeds",
      ar: "تقاوي خضروات",
    },

    image: "/images/products/seeds/Agria/cover.jpg",

    gallery: [
      "/images/products/seeds/pepper/1.jpg",
      "/images/products/seeds/pepper/2.jpg",
      "/images/products/seeds/pepper/3.jpg",
    ],
  },

   {
    id: 47,
    slug: "potato-seeds",

    name: {
      en: "Diamant",
      ar: "الألماس",
    },

    shortDescription: {
      en: "Cooking type B ware potato variety with suitability for the production of French Fries. Medium early to late maturity, light yellow flesh colour, oval tubershape with shallow eyes, good yielder.",
      ar: "صنف بطاطس الطبخ من النوع B ومناسب لإنتاج البطاطس المقلية. متوسط ​​النضج المبكر إلى المتأخر، لون اللحم أصفر فاتح، شكل الدرنة بيضاوية مع عيون ضحلة، إنتاجية جيدة.",
    },

    description: {
      en: "High-quality pepper seeds suitable for commercial farms and greenhouse production.",
      ar: "تقاوي فلفل عالية الجودة مناسبة للزراعة التجارية والزراعة داخل الصوب.",
    },

    origin: {
      en: "Netherlands • Spain • Italy",
      ar: "هولندا • إسبانيا • إيطاليا",
    },

    packaging: {
      en: "Professional Seed Packs",
      ar: "عبوات تقاوي احترافية",
    },

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "Vegetable Seeds",
      ar: "تقاوي خضروات",
    },

    image: "/images/products/seeds/Diamant/cover.jpg",

    gallery: [
      "/images/products/seeds/pepper/1.jpg",
      "/images/products/seeds/pepper/2.jpg",
      "/images/products/seeds/pepper/3.jpg",
    ],
  }

];