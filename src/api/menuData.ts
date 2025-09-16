// menuData.ts

// تایپ کلی
export interface SubMenuCategory {
  title: string;
  items: string[];
}

export interface SubMenuData {
  image: string;
  categories: SubMenuCategory[];
}

// دیتای منوها
export const womenSubMenu: SubMenuData = {
  image: "/images/woman.png",
  categories: [
    {
      title: "لباس ورزشی زنانه",
      items: ["ست لباس ورزشی", "تیشرت ,بلوز و استرچ ورزشی", "نیم تنه ورزشی", "تاب ورزشی", "کیت ورزشی", "سویشرت", "هودی", "مایو"],
    },
    {
      title: "شلوار ورزشی زنانه",
      items: ["شلوار ورزشی", "شلوارک ورزشی", "لگ و نیم لگ", "جاگر"],
    },
    {
      title: "کفش ورزشی",
      items: ["کتونی رانینگ", "کتونی پیاده‌روی", "کفش اسکیت","کفش کوهنوردی","کفش بسکتبال","کفش کشتی","استوک","دمبایی"],
    },
    {
      title: "برند پیشنهادی",
      items: ["nike", "the north face", "under armour", "adidas", "fila"],
    },
    {
      title: "اکسسوری",
      items: ["جوراب ورزشی", "کلاه ورزشی", "دستبند ورزشی", "هدبند"],
    },
    {
      title: "جوراب ورزشی",
      items: ["جوراب ورزشی",],
    },
  ],
};