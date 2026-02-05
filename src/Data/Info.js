// Info.js
const Info = {
  women: {
    title: "👩 Women Services",
    categories: [
      {
        name: "Hair Services",
        items: [
          { name: "Hair Cut", duration: "30 mins", price: 200 },
          { name: "Hair Colouring", duration: "40 mins", price: 250 },
          { name: "Hair Styles", duration: "45 mins", price: 300 },
          { name: "Hair Straightening", duration: "1 hr", price: 450 },
          { name: "Hair cut + Trimming & Shaping / Shaving", duration: "45 mins", price: 300 },
        ],
      },
      {
        name: "Women Hair Spa",
        items: [
          { name: "Loreal Hair Spa (Shoulder)", duration: "1 hr", price: 799 },
          { name: "Loreal Hair Spa (Medium)", duration: "1 hr", price: 999 },
          { name: "Loreal Hair Spa (Long)", duration: "1 hr", price: 1199 },
          { name: "Keratin Hair Spa (Shoulder)", duration: "1 hr", price: 999 },
          { name: "Keratin Hair Spa (Medium)", duration: "1 hr", price: 1199 },
          { name: "Keratin Hair Spa (Long)", duration: "1 hr", price: 1499 },
          { name: "Scalp Advance (Shoulder)", duration: "1 hr", price: 999 },
          { name: "Scalp Advance (Medium)", duration: "1 hr", price: 1199 },
          { name: "Scalp Advance (Long)", duration: "1 hr", price: 1499 },
        ],
      },
    ],
  },

  men: {
    title: "👨 Men Services",
    categories: [
      {
        name: "Men Hair & Beard",
        items: [
          { name: "Haircut", price: 199 },
          { name: "Kids Haircut", price: 199 },
          { name: "Shave", price: 99 },
          { name: "Beard Trim", price: 150 },
          { name: "Beard Design", price: 150 },
          { name: "Hair Wash", price: 50 },
          { name: "Hair Setting", price: 499 },
          { name: "Creative Cut + Beard Design", price: 400 },
        ],
      },
      {
        name: "Men Hair Colour",
        items: [
          { name: "Basic Hair Colour", price: 349 },
          { name: "Matrix", price: 449 },
          { name: "Loreal", price: 600 },
          { name: "Beard Colour", price: 149 },
          { name: "Mustache Colour", price: 79 },
        ],
      },
    ],
  },

  kids: {
    title: "🧒 Kids Services",
    categories: [
      {
        name: "Kids Haircut",
        items: [
          { name: "Kids Haircut", duration: "30 mins", price: 199 },
        ],
      },
    ],
  },
};

export default Info;
