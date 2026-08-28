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

  productType: {
    en: string;
    ar: string;
  };

  category: {
    en: string;
    ar: string;
  };

  image: string;

 
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



  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural-Commodities/yellow-corn/cover.jpg",

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



  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural-Commodities/barley/cover.jpg",

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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural-Commodities/wheat/cover.jpg",


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

 

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural-Commodities/popcorn/cover.jpg",
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

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural-Commodities/soybeans/cover.jpg",

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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/hamburg-lupins/cover.jpg",
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

 

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/red-whole-lentils/cover.jpg",
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



  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/green-whole-lentils/cover.jpg",

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



  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/faba-beans/cover.jpg",


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

  


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/broad-beans/cover.jpg",


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

 
  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/black-eye-beans/cover.jpg",

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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/kabuli-white-chick-peas/cover.jpg",


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



  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/green-blue-peas/cover.jpg",

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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Grains",
    ar: "حبوب",
  },

  image: "/images/products/Agricultural-Commodities/white-sorghum/cover.jpg",


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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural-Commodities/linseeds/cover.jpg",


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

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Seeds",
    ar: "بذور",
  },

  image: "/images/products/Agricultural-Commodities/lucerne-seeds/cover.jpg",

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

 

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/red-split-lentils/cover.jpg",

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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/red-football-lentils/cover.jpg",


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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/split-faba-beans/cover.jpg",

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


  productType: {
    en: "Processed Pulses",
    ar: "بقوليات معالجة",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/processed-split-pulses/cover.jpg",


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


  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Oilseeds",
    ar: "محاصيل زيتية",
  },

  image: "/images/products/Agricultural-Commodities/sesame/cover.jpg",

},
  {
  id: 22,
   slug: "white-kidney-bean",

  name: {
    en: "White Kidney Bean",
    ar: "الفاصوليا البيضاء",
  },


  shortDescription: {
    en: "Premium quality white kidney beans.",
    ar: "فاصوليا بيضاء عالية الجودة.",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

   category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/white-kidney-bean/cover.jpg",

},
{
  id: 23,

  slug: "raisins",

  name: {
    en: "Raisins",
    ar: "الزبيب",
  },

  shortDescription: {
    en: "Premium quality raisins.",
    ar: "زبيب عالي الجودة.",
  },

  productType: {
    en: "Agricultural Commodities",
    ar: "حاصلات زراعية",
  },

  category: {
    en: "Pulses",
    ar: "بقوليات",
  },

  image: "/images/products/Agricultural-Commodities/Raisins/cover.jpg",
},

  // =========================================================
  // 🍎 FRUITS
  // =========================================================

  {
    id: 24,
    slug: "oranges",

    name: {
      en: "Oranges",
      ar: "البرتقال",
    },

    shortDescription: {
      en: "Fresh premium oranges.",
      ar: "برتقال طازج عالي الجودة.",
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

  },

  {
    id: 25,
    slug: "mandarins",

    name: {
      en: "Mandarins",
      ar: "اليوسفي",
    },

    shortDescription: {
      en: "Fresh premium mandarins.",
      ar: "يوسفي طازج عالي الجودة.",
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
  },

  {
    id: 26,
    slug: "lemons",

    name: {
      en: "Lemons",
      ar: "الليمون",
    },

    shortDescription: {
      en: "Fresh premium lemons.",
      ar: "ليمون طازج عالي الجودة.",
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

 
  },

  {
    id: 27,
    slug: "grapes",

    name: {
      en: "Grapes",
      ar: "العنب",
    },

    shortDescription: {
      en: "Premium fresh table grapes.",
      ar: "عنب مائدة طازج عالي الجودة.",
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


  },

  {
    id: 28,
    slug: "strawberries",

    name: {
      en: "Strawberries",
      ar: "الفراولة",
    },

    shortDescription: {
      en: "Premium fresh strawberries.",
      ar: "فراولة طازجة عالية الجودة.",
    },


    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Berries",
      ar: "توتيات",
    },

    image: "/images/products/fruits/strawberries/cover.png",

  },

  {
    id: 29,
    slug: "mangoes",

    name: {
      en: "Mangoes",
      ar: "المانجو",
    },

    shortDescription: {
      en: "Fresh premium mangoes.",
      ar: "مانجو طازجة عالية الجودة.",
    },

   

    productType: {
      en: "Fruits",
      ar: "فواكه",
    },

    category: {
      en: "Tropical Fruits",
      ar: "فواكه استوائية",
    },

    image: "/images/products/fruits/mangoes/cover.png",
  },

  {
    id: 30,
    slug: "pomegranates",

    name: {
      en: "Pomegranates",
      ar: "الرمان",
    },

    shortDescription: {
      en: "Fresh premium pomegranates.",
      ar: "رمان طازج عالي الجودة.",
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

  },

  
  {
    id: 31,
    slug: "pears",

    name: {
      en: "Pears",
      ar: "الكمثرى",
    },

    shortDescription: {
      en: "Fresh premium pears.",
      ar: "كمثرى طازجة عالية الجودة.",
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

  },

  {
    id: 32,
    slug: "watermelon",

    name: {
      en: "Watermelon",
      ar: "البطيخ",
    },

    shortDescription: {
      en: "Fresh premium watermelon.",
      ar: "بطيخ طازج عالي الجودة.",
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

  },

  {
    id: 33,
    slug: "dates",

    name: {
      en: "Dates",
      ar: "التمور",
    },

    shortDescription: {
      en: "Premium quality dates.",
      ar: "تمور عالية الجودة.",
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
  },

  {
  id: 34,
  slug: "peaches",

  name: {
    en: "Peaches",
    ar: "الخوخ",
  },

  shortDescription: {
    en: "Fresh premium peaches.",
    ar: "خوخ طازج عالي الجودة.",
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

},

{
  id: 35,
  slug: "sweet-potatoes",

  name: {
    en: "Sweet Potatoes",
    ar: "البطاطا الحلوة",
  },

  shortDescription: {
    en: "Fresh premium sweet potatoes.",
    ar: "بطاطا حلوة طازجة عالية الجودة.",
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
},

{
  id: 36,
  slug: "potatoes",

  name: {
    en: "Potatoes",
    ar: "البطاطس",
  },

  shortDescription: {
    en: "Premium fresh potatoes for international markets.",
    ar: "بطاطس طازجة عالية الجودة للأسواق العالمية.",
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
},

{
  id: 37,
  slug: "colored-peppers",

  name: {
    en: "Colored Peppers",
    ar: "الفلفل الألوان",
  },

  shortDescription: {
    en: "Fresh premium colored bell peppers.",
    ar: "فلفل ألوان طازج عالي الجودة.",
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
},

{
  id: 38,
  slug: "onions",

  name: {
    en: "Onions",
    ar: "البصل",
  },

  shortDescription: {
    en: "Premium fresh onions for food and export markets.",
    ar: "بصل طازج عالي الجودة للأسواق الغذائية والتصدير.",
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
},

{
  id: 39,
  slug: "cappucci",

  name: {
    en: "Cappucci",
    ar: "كابوتشي",
  },

  shortDescription: {
    en: "Fresh premium Cappucci vegetables.",
    ar: "كابوتشي طازج عالي الجودة.",
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
},

{
  id: 40,
  slug: "spring-onions",

  name: {
    en: "Spring Onions",
    ar: "البصل الأخضر",
  },

  shortDescription: {
    en: "Fresh premium spring onions.",
    ar: "بصل أخضر طازج عالي الجودة.",
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
},

{
  id: 41,
  slug: "cucumbers",

  name: {
    en: "Cucumbers",
    ar: "الخيار",
  },

  shortDescription: {
    en: "Fresh premium cucumbers.",
    ar: "خيار طازج عالي الجودة.",
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
},
{
  id: 42,
  slug: "broccoli",

  name: {
    en: "Broccoli",
    ar: "البروكلي",
  },

  shortDescription: {
    en: "Fresh premium broccoli.",
    ar: "بروكلي طازج عالي الجودة.",
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
},

{
  id: 43,
  slug: "garlic",

  name: {
    en: "Garlic",
    ar: "الثوم",
  },

  shortDescription: {
    en: "Premium fresh garlic for food and export markets.",
    ar: "ثوم طازج عالي الجودة للأسواق الغذائية والتصدير.",
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
},

  // =========================================================
  // 🌱 SEEDS & SEEDLINGS
  // =========================================================

  {
    id: 44,
    slug: "potato-seeds",

    name: {
      en: "Spunta",
      ar: " سبونتا",
    },

    shortDescription: {
      en: "Very well-known medium early ware variety. Good heat and drought resistance. High to very yields in different climate zones.",
      ar: "صنف معروف جداً من الأصناف متوسطة النضج. يتميز بمقاومة جيدة للحرارة والجفاف. غلة عالية إلى عالية جداً في مختلف المناطق المناخية.",
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

  },

  {
    id: 45,
    slug: "potato-seeds",

    name: {
      en: "Hermes",
      ar: "هيرميس",
    },

    shortDescription: {
      en: "also available as organic seeds Medium early crisping variety with high dry matter and very good processing quality. Suitable for cultivation in many climate zones and for long-term storage.",
      ar: "متوفر أيضاً كبذور عضوية.صنف متوسط ​​النضج، غني بالمواد الجافة، وذو جودة معالجة ممتازة. مناسب للزراعة في مناطق مناخية متعددة وللتخزين طويل الأمد."},

    productType: {
      en: "Seeds",
      ar: "تقاوي وبذور",
    },

    category: {
      en: "potato-seeds",
      ar: "تقاوي البطاطس",
    },

    image: "/images/products/seeds/Hermes/cover.jpg",

  },

  {
    id: 46,
    slug: "potato-seeds",

    name: {
      en: "Lady Rosetta",
      ar: "ليدي روزيتا",
    },

    shortDescription: {
      en: "Wide spread medium earl crisping variety for different climate zones with high dry matter and excellent processing quality. Can be processed immediately after harvest or after short-term storage",
      ar: "مجموعة متنوعة من رقائق الإيرل المتوسطة واسعة الانتشار للمناطق المناخية المختلفة مع مادة جافة عالية وجودة معالجة ممتازة. يمكن معالجتها مباشرة بعد الحصاد أو بعد التخزين على المدى القصير",
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

  },

  {
    id: 47,
    slug: "potato-seeds",

    name: {
      en: "Cara",
      ar: "كارا",
    },

    shortDescription: {
      en: "Robust, medium early ware variety with very good disease resistance. High yielding and very uniform",
      ar: "تنوع قوي ومتوسط ​​في وقت مبكر مع مقاومة جيدة جدًا للأمراض. عالية الغلة وموحدة للغاية ",
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
  },
  {
    id: 48,
    slug: "potato-seeds",

    name: {
      en: "Agria",
      ar: "أجريا",
    },

    shortDescription: {
      en: "also available as organic seeds High yielding maincrop variety, yellow skin and yellow flesh, big oval to longoval tubers. Suitable for a range of uses including crisping, french fries, processing (starch/flake), as well as table use",
      ar: "متوفر أيضًا كبذور عضويةمجموعة متنوعة من المحاصيل الرئيسية عالية الإنتاجية، القشرة الصفراء واللحم الأصفر، والدرنات البيضاوية الكبيرة إلى الطويلة البيضاوية. مناسبة لمجموعة من الاستخدامات بما في ذلك المقرمشة والبطاطس المقلية والمعالجة (النشا/الرقائق)، بالإضافة إلى استخدام الطاولة",
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

  },

   {
    id: 49,
    slug: "potato-seeds",

    name: {
      en: "Diamant",
      ar: "الألماس",
    },

    shortDescription: {
      en: "Cooking type B ware potato variety with suitability for the production of French Fries. Medium early to late maturity, light yellow flesh colour, oval tubershape with shallow eyes, good yielder.",
      ar: "صنف بطاطس الطبخ من النوع B ومناسب لإنتاج البطاطس المقلية. متوسط ​​النضج المبكر إلى المتأخر، لون اللحم أصفر فاتح، شكل الدرنة بيضاوية مع عيون ضحلة، إنتاجية جيدة.",
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

  },

  // =========================================================
  // 🌱 Feed & By-Products
  // =========================================================

  {
  id: 50,
  slug: "sugar-beet-pulp",

  name: {
    en: "Sugar Beet Pulp",
    ar: "لب بنجر السكر",
  },

  shortDescription: {
    en: "High-quality sugar beet pulp for animal feed.",
    ar: "لب بنجر السكر عالي الجودة للاستخدام في الأعلاف الحيوانية.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Feed By-Products",
    ar: "منتجات ثانوية للأعلاف",
  },

  image: "/images/products/feed-by-products/sugar-beet-pulp/cover.jpg",
},

{
  id: 51,
  slug: "sunflower-meal",

  name: {
    en: "Sunflower Meal",
    ar: "كسب عباد الشمس",
  },

  shortDescription: {
    en: "Protein-rich sunflower meal for animal feed.",
    ar: "كسب عباد الشمس الغني بالبروتين للأعلاف الحيوانية.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Oilseed Meals",
    ar: "أكساب البذور الزيتية",
  },

  image: "/images/products/feed-by-products/sunflower-meal/cover.jpg",
},

{
  id: 52,
  slug: "soybean-meal",

  name: {
    en: "Soybean Meal",
    ar: "كسب فول الصويا",
  },

  shortDescription: {
    en: "High-protein soybean meal for animal and poultry feed.",
    ar: "كسب فول الصويا عالي البروتين للأعلاف الحيوانية والدواجن.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Oilseed Meals",
    ar: "أكساب البذور الزيتية",
  },

  image: "/images/products/feed-by-products/soybean-meal/cover.jpg",
},

{
  id: 53,
  slug: "corn-gluten-meal",

  name: {
    en: "Corn Gluten Meal",
    ar: "جلوتين الذرة",
  },

  shortDescription: {
    en: "Premium corn gluten meal with high protein content.",
    ar: "جلوتين ذرة عالي الجودة بمحتوى بروتين مرتفع.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Corn By-Products",
    ar: "منتجات الذرة الثانوية",
  },

  image: "/images/products/feed-by-products/corn-gluten-meal/cover.jpg",
},

{
  id: 54,
  slug: "gluten-feed",

  name: {
    en: "Gluten Feed",
    ar: "علف الجلوتين",
  },

  shortDescription: {
    en: "Nutritious corn gluten feed for livestock.",
    ar: "علف جلوتين مغذي عالي الجودة للماشية.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Corn By-Products",
    ar: "منتجات الذرة الثانوية",
  },

  image: "/images/products/feed-by-products/gluten-feed/cover.jpg",
},

{
  id: 55,
  slug: "ddgs",

  name: {
    en: "DDGS",
    ar: "دي دي جي إس",
  },

  shortDescription: {
    en: "High-quality DDGS for livestock and poultry feed.",
    ar: "DDGS عالي الجودة لأعلاف الماشية والدواجن.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Feed By-Products",
    ar: "منتجات ثانوية للأعلاف",
  },

  image: "/images/products/feed-by-products/ddgs/cover.jpg",
},

{
  id: 56,
  slug: "high-fat-soy-pro",

  name: {
    en: "High Fat Soy Pro",
    ar: "هاي فات صويا برو",
  },

  shortDescription: {
    en: "High-energy and high-protein soybean feed ingredient.",
    ar: "مكون علفي من فول الصويا غني بالطاقة والبروتين.",
  },


  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Soy Products",
    ar: "منتجات الصويا",
  },

  image: "/images/products/feed-by-products/high-fat-soy-pro/cover.jpg",
},

{
  id: 57,
  slug: "full-fat-soy",

  name: {
    en: "Full Fat Soy",
    ar: "فول الصويا كامل الدهن",
  },

  shortDescription: {
    en: "Full fat soybean product rich in protein and energy.",
    ar: "منتج فول صويا كامل الدهن غني بالبروتين والطاقة.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Soy Products",
    ar: "منتجات الصويا",
  },

  image: "/images/products/feed-by-products/full-fat-soy/cover.jpg",
},

{
  id: 58,
  slug: "soybean-oil",

  name: {
    en: "Soybean Oil",
    ar: "زيت فول الصويا",
  },

  shortDescription: {
    en: "Premium soybean oil for food and feed applications.",
    ar: "زيت فول صويا عالي الجودة للاستخدامات الغذائية والأعلاف.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Vegetable Oils",
    ar: "زيوت نباتية",
  },

  image: "/images/products/feed-by-products/soybean-oil/cover.jpg",
},

{
  id: 59,
  slug: "cottonseed-meal",

  name: {
    en: "Cottonseed Meal",
    ar: "كسب بذور القطن",
  },

  shortDescription: {
    en: "Protein-rich cottonseed meal for animal feed.",
    ar: "كسب بذور القطن الغني بالبروتين للأعلاف الحيوانية.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Oilseed Meals",
    ar: "أكساب البذور الزيتية",
  },

  image: "/images/products/feed-by-products/cottonseed-meal/cover.jpg",
},

{
  id: 60,
  slug: "cottonseed-oil",

  name: {
    en: "Cottonseed Oil",
    ar: "زيت بذور القطن",
  },

  shortDescription: {
    en: "Premium cottonseed oil for food and industrial applications.",
    ar: "زيت بذور القطن عالي الجودة للاستخدامات الغذائية والصناعية.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Vegetable Oils",
    ar: "زيوت نباتية",
  },

  image: "/images/products/feed-by-products/cottonseed-oil/cover.jpg",
},

{
  id: 61,
  slug: "wheat-bran",

  name: {
    en: "Wheat Bran",
    ar: "ردة القمح",
  },

  shortDescription: {
    en: "Premium wheat bran for livestock and animal feed.",
    ar: "ردة قمح عالية الجودة لأعلاف الماشية والحيوانات.",
  },

  productType: {
    en: "Feed & By-Products",
    ar: "الأعلاف والمنتجات الثانوية",
  },

  category: {
    en: "Grain By-Products",
    ar: "منتجات الحبوب الثانوية",
  },

  image: "/images/products/feed-by-products/wheat-bran/cover.jpg",
},

];