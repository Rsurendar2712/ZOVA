// Info.js
const Info = {

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
  women: {
    title: "👩 Women Services",
    categories: [
      {
        name: "Hair Services",
        items: [
          { name: "Hair Cut M", duration: "30 mins", price: 200 },
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
        { name: "Shave", price: 99 },
        { name: "Beard Design", price: 149 },
        { name: "Haircut (Hair Wash & Conditioning)", price: 199 },
        { name: "Hair Wash", price: 199 },
        { name: "Creative Cut (Hair Wash & Conditioning)", price: 399 },
        { name: "Hair Setting (Wash, Wax & Spray)", price: 499 }
      ]
    },
    {
      name: "Hair Colour",
      items: [
        { name: "Hair Global Colour (Black)", price: 349 },
        { name: "Matrix Hair Colour", price: 449 },
        { name: "Loreal Hair Colour", price: 599 },
        { name: "Beard Hair Colour", price: 149 },
        { name: "Mustache Hair Colour", price: 79 }
      ]
    },
    {
      name: "Fashion Colour",
      items: [
        { name: "Medium Length", price: 1199 },
        { name: "Long Length", price: 1499 },
        { name: "Per Streak", price: 199 }
      ]
    },
    {
      name: "Clean Up",
      items: [
        { name: "Basic Clean Up", price: 799 },
        { name: "Aroma Clean Up", price: 999 },
        { name: "Whitening Clean Up", price: 1199 }
      ]
    },
    {
      name: "Facial",
      items: [
        { name: "Express Facial (30 Mins)", price: 499 },
        { name: "Tan Away Facial", price: 799 },
        { name: "Fruit Facial", price: 999 },
        { name: "Gold Facial", price: 1499 },
        { name: "Diamond Facial", price: 1799 },
        { name: "Pearl Facial", price: 1799 },
        { name: "Wine Facial", price: 1999 }
      ]
    },
    {
      name: "Whitening Facial",
      items: [
        { name: "Skin Whitening", price: 1999 },
        { name: "Instant Glow", price: 1999 },
        { name: "Vitamin C", price: 2499 },
        { name: "O3 Whitening", price: 2499 }
      ]
    },
    {
      name: "Brightening Facial",
      items: [
        { name: "Advance Brightening", price: 2999 },
        { name: "Advance Tan Removal", price: 3499 },
        { name: "Radiance", price: 3499 }
      ]
    },
    {
      name: "Advance Facial",
      items: [
        { name: "Whitening Facial", price: 3499 },
        { name: "Brightening Facial", price: 3499 },
        { name: "Acne Control Facial", price: 3999 },
        { name: "Bridal Facial", price: 4499 },
        { name: "O3 Advance Bridal Facial", price: 4999 },
        { name: "Hydra Facial", price: 2999 }
      ]
    },
    {
      name: "Therapy",
      items: [
        { name: "Head Massage (20 mins - Olive Oil)", price: 299 },
        { name: "Head Massage (30 mins - Almond Oil)", price: 399 },
        { name: "Mixed Oil Massage (30 mins)", price: 499 }
      ]
    },
    {
      name: "Hair Spa",
      items: [
        { name: "Loreal Hair Spa", price: "999 / 1499" },
        { name: "Keratin Hair Spa", price: "999 / 1499" },
        { name: "Scalp Advance Treatment (Loreal)", price: "999 / 1499" }
      ]
    },
    {
      name: "Pedicure",
      items: [
        { name: "Basic Pedicure", price: 499 },
        { name: "Deluxe Pedicure", price: 799 },
        { name: "Luxury Pedicure", price: 1199 },
        { name: "Spa Keratin Pedicure", price: 1499 }
      ]
    },
    {
      name: "Manicure",
      items: [
        { name: "Basic Manicure", price: 349 },
        { name: "Deluxe Manicure", price: 599 },
        { name: "Luxury Manicure", price: 999 },
        { name: "Spa Keratin Manicure", price: 1499 }
      ]
    },
    {
      name: "Smoothening",
      items: [
        { name: "Short", price: 1499 },
        { name: "Medium", price: 1999 },
        { name: "Long", price: 2499 },
        { name: "Very Long", price: 2999 }
      ]
    },
    {
      name: "Keratin",
      items: [
        { name: "Short", price: 1999 },
        { name: "Medium", price: 2499 },
        { name: "Long", price: 2999 },
        { name: "Very Long", price: 3499 }
      ]
    },
    {
      name: "Detan / Bleach",
      items: [
        { name: "Face & Neck", price: 299 },
        { name: "Back Neck", price: 149 },
        { name: "Half Hand", price: 499 },
        { name: "Full Hand", price: 999 },
        { name: "Half Leg", price: 699 },
        { name: "Full Leg", price: 1299 },
        { name: "Feet", price: 649 },
        { name: "Back Body", price: 699 },
        { name: "Underarms", price: 199 },
        { name: "Full Body", price: 3999 }
      ]
    },
    {
      name: "Bridal Groom Packages",
      items: [
        { name: "Trial Makeup", price: 1499 },
        { name: "Basic Package", price: 7999 },
        { name: "Advance Package", price: 9999 }
      ]
    }
  ]
},

 
};

export default Info;
