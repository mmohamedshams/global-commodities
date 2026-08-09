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

  category: {
    en: string;
    ar: string;
  };

  image: string;

  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "potato-seeds",

    name: {
      en: "Potato Seeds",
      ar: "تقاوي البطاطس",
    },

    shortDescription: {
      en: "Premium certified potato seeds.",
      ar: "تقاوي بطاطس معتمدة عالية الجودة.",
    },

    description: {
      en: "High-quality certified potato seeds suitable for commercial farming and international markets.",
      ar: "نوفر تقاوي بطاطس معتمدة وعالية الجودة مناسبة للزراعة التجارية والأسواق العالمية.",
    },

    origin: {
    en: "Scotland • Germany • New Zealand",
    ar: "اسكتلندا • ألمانيا • نيوزيلندا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Seeds",
      ar: "تقاوي",
    },

    image: "/images/products/potato/cover.jpg",

    gallery: [
      "/images/products/potato/1.jpg",
      "/images/products/potato/2.jpg",
      "/images/products/potato/3.jpg",
    ],
  },

  {
    id: 2,
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
      en: "Premium sesame seeds suitable for food manufacturing and export.",
      ar: "سمسم عالي الجودة مناسب للصناعات الغذائية والتصدير.",
    },

 origin: {
  en: "Argentina • Brazil • Paraguay",
  ar: "الأرجنتين • البرازيل • باراجواي",
},

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
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
    id: 3,
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
      en: "Selected popcorn kernels with excellent popping rate.",
      ar: "حبوب فشار مختارة بمعدل فرقعة ممتاز.",
    },

    origin: {
      en: "Brazil • Argentina",
      ar: "البرازيل • الأرجنتين",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Grains",
      ar: "حبوب",
    },

    image: "/images/products/popcorn/cover.jpg",

    gallery: [
      "/images/products/popcorn/1.jpg",
      "/images/products/popcorn/2.jpg",
      "/images/products/popcorn/3.jpg",
    ],
  },
    {
    id: 4,
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
      en: "Premium cowpeas selected for export markets.",
      ar: "لوبيا مختارة بعناية للتصدير للأسواق العالمية.",
    },

     origin: {
      en: "Brazil • Argentina",
      ar: "البرازيل • الأرجنتين",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Beans",
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
    id: 5,
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
      en: "Imported Canadian beans suitable for food industries.",
      ar: "فول كندي مستورد مناسب للصناعات الغذائية.",
    },

    origin: {
      en: "Canada",
      ar: "كندا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Beans",
      ar: "بقوليات",
    },

    image: "/images/products/canadian-beans/cover.jpg",

    gallery: [
      "/images/products/canadian-beans/1.jpg",
      "/images/products/canadian-beans/2.jpg",
      "/images/products/canadian-beans/3.jpg",
    ],
  },

  {
    id: 6,
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
      en: "Carefully selected Lithuanian beans for export markets.",
      ar: "فول ليتواني مختار بعناية للتصدير.",
    },

    origin: {
      en: "Lithuania",
      ar: "ليتوانيا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Beans",
      ar: "بقوليات",
    },

    image: "/images/products/lithuanian-beans/cover.jpg",

    gallery: [
      "/images/products/lithuanian-beans/1.jpg",
      "/images/products/lithuanian-beans/2.jpg",
      "/images/products/lithuanian-beans/3.jpg",
    ],
  },

  {
    id: 7,
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
      en: "High-quality Australian beans for international markets.",
      ar: "فول أسترالي عالي الجودة للأسواق العالمية.",
    },

    origin: {
      en: "Australia",
      ar: "أستراليا",
    },

    packaging: {
      en: "25 KG Bags",
      ar: "أجولة 25 كجم",
    },

    category: {
      en: "Beans",
      ar: "بقوليات",
    },

    image: "/images/products/australian-beans/cover.jpg",

    gallery: [
      "/images/products/australian-beans/1.jpg",
      "/images/products/australian-beans/2.jpg",
      "/images/products/australian-beans/3.jpg",
    ],
  },
    {
  id: 8,
  slug: "chickpeas",

  name: {
    en: "Chickpeas",
    ar: "الحمص",
  },

  shortDescription: {
    en: "Premium quality chickpeas for global markets.",
    ar: "حمص عالي الجودة للأسواق العالمية.",
  },

  description: {
    en: "We supply premium quality chickpeas suitable for food processing, wholesale distribution, and international trade.",
    ar: "نوفر حمصًا عالي الجودة مناسبًا للصناعات الغذائية والتوزيع بالجملة والتصدير للأسواق العالمية.",
  },

  origin: {
    en: "Canada • Australia • Turkey",
    ar: "كندا • أستراليا • تركيا",
  },

  packaging: {
    en: "25 KG Bags",
    ar: "أجولة 25 كجم",
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
  id: 9,
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
  id: 10,
  slug: "yellow-corn",

  name: {
    en: "Yellow Corn",
    ar: "الذرة الصفراء",
  },

  shortDescription: {
    en: "High-quality yellow corn for feed and food industries.",
    ar: "ذرة صفراء عالية الجودة للصناعات الغذائية والأعلاف.",
  },

  description: {
    en: "Premium yellow corn suitable for food production, animal feed, and international trade.",
    ar: "نوفر ذرة صفراء عالية الجودة مناسبة للصناعات الغذائية والأعلاف والتصدير.",
  },

  origin: {
    en: "Brazil • Argentina • Ukraine",
    ar: "البرازيل • الأرجنتين • أوكرانيا",
  },

  packaging: {
    en: "50 KG Bags",
    ar: "أجولة 50 كجم",
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
  id: 11,
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
    en: "We supply premium milling wheat suitable for flour production and international markets.",
    ar: "نوفر قمحًا عالي الجودة مناسبًا لإنتاج الدقيق والتصدير للأسواق العالمية.",
  },

  origin: {
    en: "Russia • Canada • Australia",
    ar: "روسيا • كندا • أستراليا",
  },

  packaging: {
    en: "50 KG Bags",
    ar: "أجولة 50 كجم",
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
  id: 12,
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
    ar: "نوفر بذور عباد الشمس عالية الجودة المناسبة للصناعات الغذائية واستخلاص الزيوت.",
  },

  origin: {
    en: "Ukraine • Bulgaria • Romania",
    ar: "أوكرانيا • بلغاريا • رومانيا",
  },

  packaging: {
    en: "25 KG Bags",
    ar: "أجولة 25 كجم",
  },

  category: {
    en: "Seeds",
    ar: "بذور",
  },

  image: "/images/products/sunflower-seeds/cover.jpg",

  gallery: [
    "/images/products/sunflower-seeds/1.jpg",
    "/images/products/sunflower-seeds/2.jpg",
    "/images/products/sunflower-seeds/3.jpg",
  ],
},
{
  id: 13,
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
    en: "We supply premium soybeans suitable for food processing, oil extraction, and animal feed.",
    ar: "نوفر فول صويا عالي الجودة مناسبًا للصناعات الغذائية واستخلاص الزيوت والأعلاف.",
  },

  origin: {
    en: "Brazil • Argentina • United States",
    ar: "البرازيل • الأرجنتين • الولايات المتحدة",
  },

  packaging: {
    en: "50 KG Bags",
    ar: "أجولة 50 كجم",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/soybeans/cover.jpg",

  gallery: [
    "/images/products/soybeans/1.jpg",
    "/images/products/soybeans/2.jpg",
    "/images/products/soybeans/3.jpg",
  ],
},

{
  id: 14,
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
    ar: "نوفر فاصوليا بيضاء عالية الجودة من أفضل المزارع ومناسبة للتصدير.",
  },

  origin: {
    en: "Canada • Argentina • Egypt",
    ar: "كندا • الأرجنتين • مصر",
  },

  packaging: {
    en: "25 KG Bags",
    ar: "أجولة 25 كجم",
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
  id: 15,
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
    ar: "نوفر فاصوليا حمراء عالية الجودة مناسبة للبيع بالجملة والتصدير.",
  },

  origin: {
    en: "Argentina • China • Canada",
    ar: "الأرجنتين • الصين • كندا",
  },

  packaging: {
    en: "25 KG Bags",
    ar: "أجولة 25 كجم",
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
  id: 16,
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
    en: "We supply premium peanuts suitable for roasting, food production, and export markets.",
    ar: "نوفر فولًا سودانيًا عالي الجودة مناسبًا للتحميص والصناعات الغذائية والتصدير.",
  },

  origin: {
    en: "Egypt • India • Argentina",
    ar: "مصر • الهند • الأرجنتين",
  },

  packaging: {
    en: "25 KG Bags",
    ar: "أجولة 25 كجم",
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
  id: 17,
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
    ar: "نوفر شعيرًا عالي الجودة مناسبًا للصناعات الغذائية والأعلاف.",
  },

  origin: {
    en: "Australia • Russia • France",
    ar: "أستراليا • روسيا • فرنسا",
  },

  packaging: {
    en: "50 KG Bags",
    ar: "أجولة 50 كجم",
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
];