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
  slug: "yellow-corn",

  name: {
    en: "Yellow Corn",
    ar: "الذرة الصفراء",
  },

  shortDescription: {
    en: "High-quality yellow corn for feed and food processing.",
    ar: "ذرة صفراء عالية الجودة للأعلاف والصناعات الغذائية.",
  },

  description: {
    en: "High-quality yellow corn suitable for animal feed, food processing, starch production, and international markets.",
    ar: "ذرة صفراء عالية الجودة مناسبة للأعلاف الحيوانية والصناعات الغذائية وإنتاج النشا والأسواق العالمية.",
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

  image: "/images/products/Agricultural Commodities/yellow-corn/cover.jpg",

  gallery: [
    "/images/products/yellow-corn/1.jpg",
    "/images/products/yellow-corn/2.jpg",
    "/images/products/yellow-corn/3.jpg",
  ],
},

{
  id: 2,
  slug: "barley",

  name: {
    en: "Barley",
    ar: "الشعير",
  },

  shortDescription: {
    en: "Premium barley for feed, food, and industrial applications.",
    ar: "شعير عالي الجودة للأعلاف والغذاء والاستخدامات الصناعية.",
  },

  description: {
    en: "Premium quality barley suitable for animal feed, food processing, malting, and international agricultural markets.",
    ar: "شعير عالي الجودة مناسب للأعلاف الحيوانية والصناعات الغذائية وإنتاج المالت والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Russia • Ukraine • Australia",
    ar: "روسيا • أوكرانيا • أستراليا",
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

  image: "/images/products/Agricultural Commodities/barley/cover.jpg",

  gallery: [
    "/images/products/barley/1.jpg",
    "/images/products/barley/2.jpg",
    "/images/products/barley/3.jpg",
  ],
},

{
  id: 3,
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

  image: "/images/products/Agricultural Commodities/wheat/cover.jpg",

  gallery: [
    "/images/products/wheat/1.jpg",
    "/images/products/wheat/2.jpg",
    "/images/products/wheat/3.jpg",
  ],
},

{
  id: 4,
  slug: "popcorn",

  name: {
    en: "Popcorn",
    ar: "ذرة الفشار",
  },

  shortDescription: {
    en: "Premium quality popcorn kernels.",
    ar: "حبوب فشار عالية الجودة.",
  },

  description: {
    en: "Premium popcorn kernels selected for excellent popping performance, suitable for food processing and retail markets.",
    ar: "حبوب فشار عالية الجودة مختارة للحصول على أفضل نتائج عند التحضير، ومناسبة للصناعات الغذائية وأسواق التجزئة.",
  },

  origin: {
    en: "Argentina • Brazil • USA",
    ar: "الأرجنتين • البرازيل • الولايات المتحدة",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural Commodities/popcorn/cover.jpg",

  gallery: [
    "/images/products/popcorn/1.jpg",
    "/images/products/popcorn/2.jpg",
    "/images/products/popcorn/3.jpg",
  ],
},

{
  id: 5,
  slug: "soybeans",

  name: {
    en: "Soybeans",
    ar: "فول الصويا",
  },

  shortDescription: {
    en: "High-quality soybeans for feed and food processing.",
    ar: "فول صويا عالي الجودة للأعلاف والصناعات الغذائية.",
  },

  description: {
    en: "High-quality soybeans suitable for animal feed, soybean meal production, oil extraction, and food processing.",
    ar: "فول صويا عالي الجودة مناسب للأعلاف الحيوانية وإنتاج كسب الصويا واستخلاص الزيوت والصناعات الغذائية.",
  },

  origin: {
    en: "Brazil • Argentina • USA",
    ar: "البرازيل • الأرجنتين • الولايات المتحدة",
  },

  packaging: {
    en: "Bulk / 50 KG Bags",
    ar: "سائب / أجولة 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural Commodities/soybeans/cover.jpg",

  gallery: [
    "/images/products/soybeans/1.jpg",
    "/images/products/soybeans/2.jpg",
    "/images/products/soybeans/3.jpg",
  ],
},

{
  id: 6,
  slug: "hamburg-lupins",

  name: {
    en: "Hamburg Lupins",
    ar: "ترمس ",
  },

  shortDescription: {
    en: "Premium Hamburg lupins for food and feed applications.",
    ar: "ترمس  عالي الجودة للاستخدامات الغذائية والأعلاف.",
  },

  description: {
    en: "Premium Hamburg lupins carefully selected for food processing, animal feed, and international agricultural markets.",
    ar: "ترمس  عالي الجودة يتم اختياره بعناية للاستخدام في الصناعات الغذائية والأعلاف والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Australia • Germany • Poland",
    ar: "أستراليا • ألمانيا • بولندا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/hamburg-lupins/cover.jpg",

  gallery: [
    "/images/products/hamburg-lupins/1.jpg",
    "/images/products/hamburg-lupins/2.jpg",
    "/images/products/hamburg-lupins/3.jpg",
  ],
},

{
  id: 7,
  slug: "red-whole-lentils",

  name: {
    en: "Red Whole Lentils",
    ar: "العدس الأحمر ",
  },

  shortDescription: {
    en: "Premium whole red lentils for food processing.",
    ar: "عدس أحمر  عالي الجودة للصناعات الغذائية.",
  },

  description: {
    en: "Premium whole red lentils suitable for food processing, retail markets, and international trade.",
    ar: "عدس أحمر  عالي الجودة مناسب للصناعات الغذائية وأسواق التجزئة والتجارة الدولية.",
  },

  origin: {
    en: "Canada • Australia • Turkey",
    ar: "كندا • أستراليا • تركيا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/red-whole-lentils/cover.jpg",

  gallery: [
    "/images/products/red-whole-lentils/1.jpg",
    "/images/products/red-whole-lentils/2.jpg",
    "/images/products/red-whole-lentils/3.jpg",
  ],
},

{
  id: 8,
  slug: "green-whole-lentils",

  name: {
    en: "Green Whole Lentils",
    ar: "العدس الأخضر ",
  },

  shortDescription: {
    en: "Premium green whole lentils for food markets.",
    ar: "عدس أخضر  عالي الجودة للأسواق الغذائية.",
  },

  description: {
    en: "High-quality green whole lentils suitable for food processing, retail packaging, and international markets.",
    ar: "عدس أخضر  عالي الجودة مناسب للصناعات الغذائية والتعبئة وأسواق التصدير العالمية.",
  },

  origin: {
    en: "Canada • Australia • Turkey",
    ar: "كندا • أستراليا • تركيا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/green-whole-lentils/cover.jpg",

  gallery: [
    "/images/products/green-whole-lentils/1.jpg",
    "/images/products/green-whole-lentils/2.jpg",
    "/images/products/green-whole-lentils/3.jpg",
  ],
},

{
  id: 9,
  slug: "faba-beans",

  name: {
    en: "Faba Beans",
    ar: "الفول البلدي",
  },

  shortDescription: {
    en: "Premium faba beans for food processing and trade.",
    ar: "فول عالي الجودة للصناعات الغذائية والتجارة الدولية.",
  },

  description: {
    en: "Premium quality faba beans suitable for human consumption, food processing, and international agricultural markets.",
    ar: "فول عالي الجودة مناسب للاستهلاك الآدمي والصناعات الغذائية والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Australia • Egypt • UK",
    ar: "أستراليا • مصر • المملكة المتحدة",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/faba-beans/cover.jpg",

  gallery: [
    "/images/products/faba-beans/1.jpg",
    "/images/products/faba-beans/2.jpg",
    "/images/products/faba-beans/3.jpg",
  ],
},

{
  id: 10,
  slug: "broad-beans",

  name: {
    en: "Broad Beans",
    ar: "الفول العريض",
  },

  shortDescription: {
    en: "High-quality broad beans for food and feed applications.",
    ar: "فول عريض عالي الجودة للاستخدامات الغذائية والأعلاف.",
  },

  description: {
    en: "High-quality broad beans suitable for human consumption, animal feed, food processing, and international markets.",
    ar: "فول عريض عالي الجودة مناسب للاستهلاك الآدمي والأعلاف الحيوانية والصناعات الغذائية والأسواق العالمية.",
  },

  origin: {
    en: "Australia • UK • France",
    ar: "أستراليا • المملكة المتحدة • فرنسا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/broad-beans/cover.jpg",

  gallery: [
    "/images/products/broad-beans/1.jpg",
    "/images/products/broad-beans/2.jpg",
    "/images/products/broad-beans/3.jpg",
  ],
},

{
  id: 11,
  slug: "black-eye-beans",

  name: {
    en: "Black Eye Beans",
    ar: "الفاصوليا ذات العين السوداء",
  },

  shortDescription: {
    en: "Premium black eye beans for food markets.",
    ar: "فاصوليا ذات عين سوداء عالية الجودة للأسواق الغذائية.",
  },

  description: {
    en: "Premium black eye beans suitable for human consumption, food processing, retail packaging, and international trade.",
    ar: "فاصوليا ذات عين سوداء عالية الجودة مناسبة للاستهلاك الآدمي والصناعات الغذائية والتعبئة والتجارة الدولية.",
  },

  origin: {
    en: "USA • Brazil • Argentina",
    ar: "الولايات المتحدة • البرازيل • الأرجنتين",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/black-eye-beans/cover.jpg",

  gallery: [
    "/images/products/black-eye-beans/1.jpg",
    "/images/products/black-eye-beans/2.jpg",
    "/images/products/black-eye-beans/3.jpg",
  ],
},

{
  id: 12,
  slug: "kabuli-white-chick-peas",

  name: {
    en: "Kabuli White Chick Peas",
    ar: "الحمص الأبيض كابولي",
  },

  shortDescription: {
    en: "Premium Kabuli chick peas with excellent quality and size.",
    ar: "حمص كابولي أبيض عالي الجودة وبأحجام ممتازة.",
  },

  description: {
    en: "Premium Kabuli white chick peas selected for excellent size, appearance, taste, and suitability for food processing and retail markets.",
    ar: "حمص كابولي أبيض عالي الجودة يتميز بالحجم والمظهر والطعم الممتاز، ومناسب للصناعات الغذائية وأسواق التجزئة.",
  },

  origin: {
    en: "Canada • Argentina • Mexico",
    ar: "كندا • الأرجنتين • المكسيك",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/kabuli-white-chick-peas/cover.jpg",

  gallery: [
    "/images/products/kabuli-white-chick-peas/1.jpg",
    "/images/products/kabuli-white-chick-peas/2.jpg",
    "/images/products/kabuli-white-chick-peas/3.jpg",
  ],
},

{
  id: 13,
  slug: "green-blue-peas",

  name: {
    en: "Green Blue Peas",
    ar: "البازلاء الخضراء ",
  },

  shortDescription: {
    en: "High-quality green and blue peas for food applications.",
    ar: "بازلاء خضراء وزرقاء عالية الجودة للاستخدامات الغذائية.",
  },

  description: {
    en: "High-quality green and blue peas suitable for food processing, retail packaging, and international agricultural markets.",
    ar: "بازلاء خضراء وزرقاء عالية الجودة مناسبة للصناعات الغذائية والتعبئة وأسواق التصدير العالمية.",
  },

  origin: {
    en: "Canada • USA • Australia",
    ar: "كندا • الولايات المتحدة • أستراليا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/green-blue-peas/cover.jpg",

  gallery: [
    "/images/products/green-blue-peas/1.jpg",
    "/images/products/green-blue-peas/2.jpg",
    "/images/products/green-blue-peas/3.jpg",
  ],
},

{
  id: 14,
  slug: "white-sorghum",

  name: {
    en: "White Sorghum",
    ar: "الذرة الرفيعة البيضاء",
  },

  shortDescription: {
    en: "Premium white sorghum for food and feed applications.",
    ar: "ذرة رفيعة بيضاء عالية الجودة للاستخدامات الغذائية والأعلاف.",
  },

  description: {
    en: "Premium white sorghum suitable for animal feed, food processing, flour production, and international agricultural markets.",
    ar: "ذرة رفيعة بيضاء عالية الجودة مناسبة للأعلاف الحيوانية والصناعات الغذائية وإنتاج الدقيق والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Australia • Argentina • USA",
    ar: "أستراليا • الأرجنتين • الولايات المتحدة",
  },

  packaging: {
    en: "50 KG Bags / Bulk",
    ar: "أجولة 50 كجم / سائب",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural Commodities/white-sorghum/cover.jpg",

  gallery: [
    "/images/products/white-sorghum/1.jpg",
    "/images/products/white-sorghum/2.jpg",
    "/images/products/white-sorghum/3.jpg",
  ],
},
{
  id: 15,
  slug: "linseeds",

  name: {
    en: "Linseeds",
    ar: "بذور الكتان",
  },

  shortDescription: {
    en: "Premium linseeds for food, feed, and oil production.",
    ar: "بذور كتان عالية الجودة للاستخدامات الغذائية والأعلاف وإنتاج الزيوت.",
  },

  description: {
    en: "Premium quality linseeds suitable for oil extraction, food processing, animal feed, and international agricultural markets.",
    ar: "بذور كتان عالية الجودة مناسبة لاستخلاص الزيوت والصناعات الغذائية والأعلاف الحيوانية والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Canada • Kazakhstan • Russia",
    ar: "كندا • كازاخستان • روسيا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural Commodities/linseeds/cover.jpg",

  gallery: [
    "/images/products/linseeds/1.jpg",
    "/images/products/linseeds/2.jpg",
    "/images/products/linseeds/3.jpg",
  ],
},

{
  id: 16,
  slug: "lucerne-seeds",

  name: {
    en: "Lucerne Seeds",
    ar: "بذور  الحجازي",
  },

  shortDescription: {
    en: "Premium lucerne seeds for high-quality forage production.",
    ar: "بذور  حجازي عالية الجودة لإنتاج أعلاف ممتازة.",
  },

  description: {
    en: "High-quality lucerne seeds selected for excellent germination and forage production, suitable for livestock farming and agricultural markets.",
    ar: "بذور برسيم حجازي عالية الجودة مختارة لتحقيق إنبات ممتاز وإنتاج أعلاف غنية، ومناسبة لتربية الماشية والأسواق الزراعية.",
  },

  origin: {
    en: "Australia • USA • Italy",
    ar: "أستراليا • الولايات المتحدة • إيطاليا",
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

  image: "/images/products/Agricultural Commodities/lucerne-seeds/cover.jpg",

  gallery: [
    "/images/products/lucerne-seeds/1.jpg",
    "/images/products/lucerne-seeds/2.jpg",
    "/images/products/lucerne-seeds/3.jpg",
  ],
},
{
  id: 17,
  slug: "red-split-lentils",

  name: {
    en: "Red Split Lentils",
    ar: "العدس الأحمر المجروش",
  },

  shortDescription: {
    en: "Premium red split lentils for food processing.",
    ar: "عدس أحمر مجروش عالي الجودة للصناعات الغذائية.",
  },

  description: {
    en: "Premium red split lentils, carefully processed and suitable for food production, retail markets, and international trade.",
    ar: "عدس أحمر مجروش عالي الجودة، معالج بعناية ومناسب لإنتاج الأغذية وأسواق التجزئة والتجارة الدولية.",
  },

  origin: {
    en: "Canada • Australia • Turkey",
    ar: "كندا • أستراليا • تركيا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/red-split-lentils/cover.jpg",

  gallery: [
    "/images/products/red-split-lentils/1.jpg",
    "/images/products/red-split-lentils/2.jpg",
    "/images/products/red-split-lentils/3.jpg",
  ],
},

{
  id: 18,
  slug: "red-football-lentils",

  name: {
    en: "Red Football Lentils",
    ar: "العدس الأحمر ",
  },

  shortDescription: {
    en: "Premium red football lentils for food markets.",
    ar: "عدس أحمر  عالي الجودة للأسواق الغذائية.",
  },

  description: {
    en: "High-quality red football lentils with excellent color and size, suitable for food processing, retail packaging, and international markets.",
    ar: "عدس أحمر كروي عالي الجودة يتميز باللون والحجم الممتاز، ومناسب للصناعات الغذائية والتعبئة وأسواق التصدير العالمية.",
  },

  origin: {
    en: "Canada • Australia • Turkey",
    ar: "كندا • أستراليا • تركيا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/red-football-lentils/cover.jpg",

  gallery: [
    "/images/products/red-football-lentils/1.jpg",
    "/images/products/red-football-lentils/2.jpg",
    "/images/products/red-football-lentils/3.jpg",
  ],
},
{
  id: 19,
  slug: "split-faba-beans",

  name: {
    en: "Split Faba Beans",
    ar: "الفول المجروش",
  },

  shortDescription: {
    en: "Premium split faba beans for food and feed applications.",
    ar: "فول مجروش عالي الجودة للاستخدامات الغذائية والأعلاف.",
  },

  description: {
    en: "High-quality split faba beans carefully processed for food production, animal feed, and international agricultural markets.",
    ar: "فول مجروش عالي الجودة تتم معالجته بعناية لإنتاج الأغذية والأعلاف الحيوانية والأسواق الزراعية العالمية.",
  },

  origin: {
    en: "Australia • Egypt • UK",
    ar: "أستراليا • مصر • المملكة المتحدة",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/split-faba-beans/cover.jpg",

  gallery: [
    "/images/products/split-faba-beans/1.jpg",
    "/images/products/split-faba-beans/2.jpg",
    "/images/products/split-faba-beans/3.jpg",
  ],
},

{
  id: 20,
  slug: "processed-split-pulses",

  name: {
    en: "Processed & Split Pulses",
    ar: "البقوليات المعالجة والمجروشة",
  },

  shortDescription: {
    en: "Processed and split pulses prepared for food and industrial applications.",
    ar: "بقوليات معالجة ومجروشة مجهزة للاستخدامات الغذائية والصناعية.",
  },

  description: {
    en: "A range of carefully processed and split pulses suitable for food manufacturing, retail packaging, animal feed, and international markets.",
    ar: "مجموعة من البقوليات التي تتم معالجتها وتجهيزها بعناية، ومناسبة للصناعات الغذائية والتعبئة والأعلاف الحيوانية والأسواق العالمية.",
  },

  origin: {
    en: "Canada • Australia • Egypt",
    ar: "كندا • أستراليا • مصر",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Processed Pulses",
    ar: "بقوليات معالجة",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural Commodities/processed-split-pulses/cover.jpg",

  gallery: [
    "/images/products/processed-split-pulses/1.jpg",
    "/images/products/processed-split-pulses/2.jpg",
    "/images/products/processed-split-pulses/3.jpg",
  ],
},
{
  id: 21,
  slug: "sesame",

  name: {
    en: "Sesame",
    ar: "السمسم",
  },

  shortDescription: {
    en: "Premium sesame seeds for food and oil production.",
    ar: "بذور سمسم عالية الجودة للاستخدامات الغذائية وإنتاج الزيوت.",
  },

  description: {
    en: "Premium quality sesame seeds carefully selected for food processing, tahini production, sesame oil extraction, and international markets.",
    ar: "بذور سمسم عالية الجودة يتم اختيارها بعناية للصناعات الغذائية وإنتاج الطحينة واستخلاص زيت السمسم والأسواق العالمية.",
  },

  origin: {
    en: "Sudan • India • Nigeria",
    ar: "السودان • الهند • نيجيريا",
  },

  packaging: {
    en: "25 KG / 50 KG Bags",
    ar: "أجولة 25 / 50 كجم",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural Commodities/sesame/cover.jpg",

  gallery: [
    "/images/products/sesame/1.jpg",
    "/images/products/sesame/2.jpg",
    "/images/products/sesame/3.jpg",
  ],
},
  // =========================================================
  // 🥬 VEGETABLES
  // =========================================================

  
  

  // =========================================================
  // 🍎 FRUITS
  // =========================================================

  {
    id: 22,
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
    id: 23,
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

    image: "/images/products/fruits/mandarins/cover.png",

    gallery: [
      "/images/products/fruits/mandarins/1.jpg",
      "/images/products/fruits/mandarins/2.jpg",
      "/images/products/fruits/mandarins/3.jpg",
    ],
  },

  {
    id: 24,
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
    id: 25,
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

    image: "/images/products/fruits/grapes/cover.png",

    gallery: [
      "/images/products/fruits/grapes/1.jpg",
      "/images/products/fruits/grapes/2.jpg",
      "/images/products/fruits/grapes/3.jpg",
    ],
  },

  {
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
  id: 32,
  slug: "peaches",

  name: {
    en: "Peaches",
    ar: "الخوخ",
  },

  shortDescription: {
    en: "Fresh premium peaches.",
    ar: "خوخ طازج عالي الجودة.",
  },

  description: {
    en: "Fresh premium peaches selected for fresh fruit markets, retail distribution, food processing, and international export.",
    ar: "خوخ طازج عالي الجودة مختار للأسواق الطازجة والتوزيع والتصنيع الغذائي والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Spain • Italy",
    ar: "مصر • إسبانيا • إيطاليا",
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
    en: "Stone Fruits",
    ar: "فواكه حجرية",
  },

  image: "/images/products/fruits/peaches/cover.jpg",

  gallery: [
    "/images/products/fruits/peaches/1.jpg",
    "/images/products/fruits/peaches/2.jpg",
    "/images/products/fruits/peaches/3.jpg",
  ],
},

{
  id: 33,
  slug: "sweet-potatoes",

  name: {
    en: "Sweet Potatoes",
    ar: "البطاطا الحلوة",
  },

  shortDescription: {
    en: "Fresh premium sweet potatoes.",
    ar: "بطاطا حلوة طازجة عالية الجودة.",
  },

  description: {
    en: "Premium sweet potatoes selected for fresh markets, food processing, retail distribution, and international export.",
    ar: "بطاطا حلوة عالية الجودة مختارة للأسواق الطازجة والتصنيع الغذائي والتوزيع والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Spain • USA",
    ar: "مصر • إسبانيا • الولايات المتحدة",
  },

  packaging: {
    en: "6 KG • 10 KG Cartons",
    ar: "كرتونة 6 • 10 كجم",
  },

  productType: {
    en: "Fruits",
    ar: "فواكه",
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

{
  id: 34,
  slug: "potatoes",

  name: {
    en: "Potatoes",
    ar: "البطاطس",
  },

  shortDescription: {
    en: "Premium fresh potatoes for international markets.",
    ar: "بطاطس طازجة عالية الجودة للأسواق العالمية.",
  },

  description: {
    en: "Premium fresh potatoes carefully selected for retail markets, food processing, food service, and international export.",
    ar: "بطاطس طازجة عالية الجودة يتم اختيارها بعناية لأسواق التجزئة والتصنيع الغذائي وخدمات الأغذية والتصدير الدولي.",
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
    en: "Fruits",
    ar: "فواكه",
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
  id: 35,
  slug: "colored-peppers",

  name: {
    en: "Colored Peppers",
    ar: "الفلفل الألوان",
  },

  shortDescription: {
    en: "Fresh premium colored bell peppers.",
    ar: "فلفل ألوان طازج عالي الجودة.",
  },

  description: {
    en: "Premium fresh colored bell peppers selected for food service, retail markets, processing, and international export.",
    ar: "فلفل ألوان طازج عالي الجودة مختار لخدمات الأغذية والأسواق والتصنيع والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Spain • Morocco",
    ar: "مصر • إسبانيا • المغرب",
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
    en: "Fresh Vegetables",
    ar: "خضروات طازجة",
  },

  image: "/images/products/vegetables/colored-peppers/cover.jpg",

  gallery: [
    "/images/products/vegetables/colored-peppers/1.jpg",
    "/images/products/vegetables/colored-peppers/2.jpg",
    "/images/products/vegetables/colored-peppers/3.jpg",
  ],
},

{
  id: 36,
  slug: "onions",

  name: {
    en: "Onions",
    ar: "البصل",
  },

  shortDescription: {
    en: "Premium fresh onions for food and export markets.",
    ar: "بصل طازج عالي الجودة للأسواق الغذائية والتصدير.",
  },

  description: {
    en: "Premium fresh onions selected for retail markets, food processing, food service, and international export.",
    ar: "بصل طازج عالي الجودة مختار لأسواق التجزئة والتصنيع الغذائي وخدمات الأغذية والتصدير الدولي.",
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
    en: "Fruits",
    ar: "فواكه",
  },

  category: {
    en: "Bulb Vegetables",
    ar: "خضروات بصيلية",
  },

  image: "/images/products/vegetables/onions/cover.png",

  gallery: [
    "/images/products/vegetables/onions/1.jpg",
    "/images/products/vegetables/onions/2.jpg",
    "/images/products/vegetables/onions/3.jpg",
  ],
},

{
  id: 37,
  slug: "cappucci",

  name: {
    en: "Cappucci",
    ar: "كابوتشي",
  },

  shortDescription: {
    en: "Fresh premium Cappucci vegetables.",
    ar: "كابوتشي طازج عالي الجودة.",
  },

  description: {
    en: "Fresh premium Cappucci selected for retail markets, food service, processing, and international export.",
    ar: "كابوتشي طازج عالي الجودة مختار للأسواق وخدمات الأغذية والتصنيع والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Italy • Spain",
    ar: "مصر • إيطاليا • إسبانيا",
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
    en: "Fresh Vegetables",
    ar: "خضروات طازجة",
  },

  image: "/images/products/vegetables/cappucci/cover.jpg",

  gallery: [
    "/images/products/vegetables/cappucci/1.jpg",
    "/images/products/vegetables/cappucci/2.jpg",
    "/images/products/vegetables/cappucci/3.jpg",
  ],
},

{
  id: 38,
  slug: "spring-onions",

  name: {
    en: "Spring Onions",
    ar: "البصل الأخضر",
  },

  shortDescription: {
    en: "Fresh premium spring onions.",
    ar: "بصل أخضر طازج عالي الجودة.",
  },

  description: {
    en: "Fresh spring onions carefully selected for retail markets, food service, fresh consumption, and export.",
    ar: "بصل أخضر طازج يتم اختياره بعناية لأسواق التجزئة وخدمات الأغذية والاستهلاك الطازج والتصدير.",
  },

  origin: {
    en: "Egypt • Spain • Netherlands",
    ar: "مصر • إسبانيا • هولندا",
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
    en: "Leafy Vegetables",
    ar: "خضروات ورقية",
  },

  image: "/images/products/vegetables/spring-onions/cover.jpg",

  gallery: [
    "/images/products/vegetables/spring-onions/1.jpg",
    "/images/products/vegetables/spring-onions/2.jpg",
    "/images/products/vegetables/spring-onions/3.jpg",
  ],
},

{
  id: 39,
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
    en: "Fresh premium cucumbers selected for retail markets, food service, processing, and international export.",
    ar: "خيار طازج عالي الجودة مختار للأسواق وخدمات الأغذية والتصنيع والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Spain • Turkey",
    ar: "مصر • إسبانيا • تركيا",
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
    en: "Fresh Vegetables",
    ar: "خضروات طازجة",
  },

  image: "/images/products/vegetables/cucumbers/cover.png",

  gallery: [
    "/images/products/vegetables/cucumbers/1.jpg",
    "/images/products/vegetables/cucumbers/2.jpg",
    "/images/products/vegetables/cucumbers/3.jpg",
  ],
},

{
  id: 40,
  slug: "broccoli",

  name: {
    en: "Broccoli",
    ar: "البروكلي",
  },

  shortDescription: {
    en: "Fresh premium broccoli.",
    ar: "بروكلي طازج عالي الجودة.",
  },

  description: {
    en: "Premium fresh broccoli selected for retail markets, food service, processing, freezing, and international export.",
    ar: "بروكلي طازج عالي الجودة مختار لأسواق التجزئة وخدمات الأغذية والتصنيع والتجميد والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • Spain • Italy",
    ar: "مصر • إسبانيا • إيطاليا",
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
    en: "Cruciferous Vegetables",
    ar: "خضروات صليبية",
  },

  image: "/images/products/vegetables/broccoli/cover.jpg",

  gallery: [
    "/images/products/vegetables/broccoli/1.jpg",
    "/images/products/vegetables/broccoli/2.jpg",
    "/images/products/vegetables/broccoli/3.jpg",
  ],
},

{
  id: 41,
  slug: "garlic",

  name: {
    en: "Garlic",
    ar: "الثوم",
  },

  shortDescription: {
    en: "Premium fresh garlic for food and export markets.",
    ar: "ثوم طازج عالي الجودة للأسواق الغذائية والتصدير.",
  },

  description: {
    en: "Premium fresh garlic carefully selected for food processing, retail markets, food service, and international export.",
    ar: "ثوم طازج عالي الجودة يتم اختياره بعناية للتصنيع الغذائي وأسواق التجزئة وخدمات الأغذية والتصدير الدولي.",
  },

  origin: {
    en: "Egypt • China • Spain",
    ar: "مصر • الصين • إسبانيا",
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
    en: "Bulb Vegetables",
    ar: "خضروات بصيلية",
  },

  image: "/images/products/vegetables/garlic/cover.png",

  gallery: [
    "/images/products/vegetables/garlic/1.jpg",
    "/images/products/vegetables/garlic/2.jpg",
    "/images/products/vegetables/garlic/3.jpg",
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
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
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
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
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
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
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
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
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
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
    },

    image: "/images/products/seeds/Diamant/cover.jpg",

    gallery: [
      "/images/products/seeds/pepper/1.jpg",
      "/images/products/seeds/pepper/2.jpg",
      "/images/products/seeds/pepper/3.jpg",
    ],
  }

];