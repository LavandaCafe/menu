const menuItems = [
    {
        "id": "fries",
        "category": "salad",
        "name": "فرنچ فرایز ساده",
        "description": "سیب خلالی ساده",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 250
            }
        ]
    },
    {
        "id": "dip-fries",
        "category": "salad",
        "name": "دیپ فرایز",
        "description": "سیب خلالی، سس دیپ",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 390
            }
        ]
    },
    {
        "id": "alfredo-fries",
        "category": "salad",
        "name": "آلفردو فرایز",
        "description": "سیب خلالی، سس قارچ",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 410
            }
        ]
    },
    {
        "id": "tanoori",
        "category": "salad",
        "name": "سیب تنوری",
        "description": "سیب 8 پر",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 260
            }
        ]
    },
    {
        "id": "alfredo-tanoori",
        "category": "salad",
        "name": "سیب تنوری آلفردو",
        "description": "سیب 8 پر، سس قارچ",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 440
            }
        ]
    },
    {
        "id": "garlic-bread",
        "category": "salad",
        "name": "نان سیر",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 465
            }
        ]
    },
    {
        "id": "cesar",
        "category": "salad",
        "name": "سالاد سزار گریل",
        "description": "مرغ گریل، کاهو پیچ، سس سزار، کاپاریس، بروکلی،گوجه گیلاسی، زیتون، نان تست",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 500
            }
        ]
    },
    {
        "id": "diet-salad",
        "category": "salad",
        "name": "سالاد رژیمی",
        "description": "مرغ گریل، قارچ تنوری، سیب تنوری، نان تست، زیتون، کاهوپیچ",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 400
            }
        ]
    },
    {
        "id": "chicken-alfredo-penini",
        "category": "penini",
        "name": "پنینی چیکن آلفردو",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 560
            }
        ]
    },
    {
        "id": "hot-bacon-penini",
        "category": "penini",
        "name": "پنینی هات بیکن",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 600
            }
        ]
    },
    {
        "id": "turkey-pesto-penini",
        "category": "penini",
        "name": "پنینی بوقلمون پستو",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 680
            }
        ]
    },
    {
        "id": "pulled-beef-penini",
        "category": "penini",
        "name": "پنینی پولد بیف",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 810
            }
        ]
    },
    {
        "id": "chicken-alfredo-pasta",
        "category": "pasta",
        "name": "چیکن آلفردو",
        "description": "پنه - فتوچینی",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 510
            }
        ]
    },
    {
        "id": "chicken-pesto-pasta",
        "category": "pasta",
        "name": "چیکن پستو",
        "description": "پنه - فتوچینی",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 610
            }
        ]
    },
    {
        "id": "pepe-pasta",
        "category": "pasta",
        "name": "پپه پاستا",
        "description": "پپرونی، سس پپه، پنه",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 590
            }
        ]
    },
    {
        "id": "classic-burger",
        "category": "burger",
        "name": "برگر کلاسیک",
        "description": "150 گرم گوشت گوساله، کاهو، گوجه، سس مخصوص",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 520
            }
        ]
    },
    {
        "id": "cheese-burger",
        "category": "burger",
        "name": "چیز برگر",
        "description": "150 گرم گوشت گوساله، کاهو، گوجه، سس مخصوص، پنیر ورقه ای",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 550
            }
        ]
    },
    {
        "id": "mushroom-burger",
        "category": "burger",
        "name": "ماشروم برگر",
        "description": "150 گرم گوشت گوساله، سس قارچ، کاهو، گوجه",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 580
            }
        ]
    },
    {
        "id": "roast-burger",
        "category": "burger",
        "name": "رست برگر",
        "description": "150 گرم گوشت گوساله، سس قارچ، رست بیف، کاهو، گوجه، سس مخصوص",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 620
            }
        ]
    },
    {
        "id": "roast-chicken",
        "category": "burger",
        "name": "رست چیکن",
        "description": "150 گرم شنیسل مرغ، سس قارچ، رست بیف، کاهو، گوجه، سس مخصوص",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 580
            }
        ]
    },
    {
        "id": "peperoni",
        "category": "pizzaIT",
        "name": "پپرونی",
        "description": "پپرونی، سس مخصوص، میکس پنیر پیتزا، هالوپینو",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "33cm",
                "price": 780
            }
        ]
    },
    {
        "id": "chicken-pesto-pizza",
        "category": "pizzaIT",
        "name": "چیکن پستو",
        "description": "سس پستو، میکس پنیر پیتزا، شنیسل مرغ",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "33cm",
                "price": 820
            }
        ]
    },
    {
        "id": "turkey-pesto-pizza",
        "category": "pizzaIT",
        "name": "بوقلمون پستو",
        "description": "سس پستو،میکس پنیر پیتزا، شنیسل مرغ، بیکن بوقلمون",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "33cm",
                "price": 890
            }
        ]
    },
    {
        "id": "garlic-steak-pizza",
        "category": "pizzaIT",
        "name": "سیرو استیک",
        "description": "سس سیر، میکس پنیر پیتزا، اسلایس استیک",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "33cm",
                "price": 900
            }
        ]
    },
    {
        "id": "pulled-beef-pizza",
        "category": "pizzaUS",
        "name": "پولد بیف",
        "description": "گوشت گوساله پولد شده، قارچ، پنیر پیتزا",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "35cm",
                "price": 920
            },
            {
                "label": "25cm",
                "price": 680
            }
        ]
    },
    {
        "id": "mushroom-beef-pizza",
        "category": "pizzaUS",
        "name": "قارچ و گوشت",
        "description": "گوشت چرخ شده، قارچ، پنیر پیتزا",
        "prices": [
            {
                "label": "35cm",
                "price": 920
            },
            {
                "label": "25cm",
                "price": 680
            }
        ],
        "image": "",
        "available": true
    },
    {
        "id": "dallas",
        "category": "pizzaUS",
        "name": "دالاس",
        "description": "پولد بیف، سس چدار، قارچ، سس مخصوص، بیکن، میکس پنیر پیتزا",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "35cm",
                "price": 1050
            },
            {
                "label": "25cm",
                "price": 700
            }
        ]
    },
    {
        "id": "chicago",
        "category": "pizzaUS",
        "name": "شیکاگو",
        "description": "گوشت چرخ شده، قارچ، پنیر پیتزا، بیکن، سس مخصوص",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "35cm",
                "price": 1050
            },
            {
                "label": "25cm",
                "price": 700
            }
        ]
    },
    {
        "id": "chicken-alfredo-pizza-us",
        "category": "pizzaUS",
        "name": "چیکن آلفردو",
        "description": "شنیسل مرغ، قارچ، سس آلفردو، میکس پنیر پیتزا",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "35cm",
                "price": 900
            },
            {
                "label": "25cm",
                "price": 600
            }
        ]
    },
    {
        "id": "espresso-robusta",
        "category": "espresso",
        "name": "اسپرسو",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 140
            }
        ]
    },
    {
        "id": "arabica",
        "category": "espresso",
        "name": "عربیکا",
        "description": "",
        "image": "./assets/images/arabica.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 170
            }
        ]
    },
    {
        "id": "americano",
        "category": "espresso",
        "name": "آمریکانو",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 140
            }
        ]
    },
    {
        "id": "cappuchino",
        "category": "espresso",
        "name": "کاپوچینو کلاسیک",
        "description": "",
        "image": "./assets/images/cappuchino.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 170
            }
        ]
    },
    {
        "id": "latte",
        "category": "espresso",
        "name": "لته",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 195
            }
        ]
    },
    {
        "id": "caramel-mackiyato",
        "category": "espresso",
        "name": "کارامل ماکیاتو",
        "description": "",
        "image": "./assets/images/caramelMackiyato.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 220
            }
        ]
    },
    {
        "id": "mocha",
        "category": "espresso",
        "name": "موکا",
        "description": "",
        "image": "./assets/images/mocha.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 225
            }
        ]
    },
    {
        "id": "turkish",
        "category": "espresso",
        "name": "قهوه ترک",
        "description": "",
        "image": "./assets/images/turkish.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 130
            }
        ]
    },
    {
        "id": "hot-chocolate",
        "category": "hotdr",
        "name": "هات چاکلت",
        "description": "",
        "image": "./assets/images/hotChoco.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 185
            }
        ]
    },
    {
        "id": "white-chocolate",
        "category": "hotdr",
        "name": "وایت چاکلت",
        "description": "",
        "image": "./assets/images/whiteChoco.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 185
            }
        ]
    },
    {
        "id": "masala",
        "category": "hotdr",
        "name": "ماسالا",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 175
            }
        ]
    },
    {
        "id": "hot-lotus",
        "category": "hotdr",
        "name": "هات لوتوس",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 250
            }
        ]
    },
    {
        "id": "hot-peanut",
        "category": "hotdr",
        "name": "هات پینات",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 250
            }
        ]
    },
    {
        "id": "black-tea",
        "category": "tea",
        "name": "چای سیاه",
        "description": "",
        "image": "./assets/images/tea.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 60
            }
        ]
    },
    {
        "id": "peace",
        "category": "tea",
        "name": "آرامش",
        "description": "به لیمو، گل گاو زبان، پنیرک، گل محمدی، اسطوخودس",
        "image": "./assets/images/aramesh.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 130
            }
        ]
    },
    {
        "id": "spring",
        "category": "tea",
        "name": "بهاری",
        "description": "به لیمو، بهار نارنج، دارچین، گل محمدی، زعفران",
        "image": "./assets/images/bahari.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 160
            }
        ]
    },
    {
        "id": "red",
        "category": "tea",
        "name": "دمنوش سرخ",
        "description": "به لیمو، بابونه، چای ترش، گل محمدی",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 125
            }
        ]
    },
    {
        "id": "ice-americano",
        "category": "coldCoffee",
        "name": "آیس امریکانو",
        "description": "",
        "image": "./assets/images/iceAmericano.png",
        "available": true, 
        "prices": [
            {
                "label": "",
                "price": 140
            }
        ]
    },
    {
        "id": "ice-latte",
        "category": "coldCoffee",
        "name": "آیس لته",
        "description": "کارامل، فندق، وانیل، دارچین، نارگیل و ...",
        "image": "./assets/images/iceLatte.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 215
            }
        ]
    },
    {
        "id": "ice-mocha",
        "category": "coldCoffee",
        "name": "آیس موکا",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 225
            }
        ]
    },
    {
        "id": "classic-afogato",
        "category": "coldCoffee",
        "name": "آفوگاتو کلاسیک",
        "description": "",
        "image": "./assets/images/afogato.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 230
            }
        ]
    },
    {
        "id": "afogato",
        "category": "coldCoffee",
        "name": "آفوگاتو",
        "description": "لوتوس / پسته",
        "image": "./assets/images/pistachioAfogato.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 280
            }
        ]
    },
    {
        "id": "lemonade",
        "category": "colddr",
        "name": "لیموناد",
        "description": "",
        "image": "./assets/images/lemonade.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 180
            }
        ]
    },
    {
        "id": "mojito",
        "category": "colddr",
        "name": "موهیتو",
        "description": "",
        "image": "./assets/images/mojito.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 190
            }
        ]
    },
    {
        "id": "red-mojito",
        "category": "colddr",
        "name": "رد موهیتو",
        "description": "",
        "image": "./assets/images/redMojito.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 215
            }
        ]
    },
    {
        "id": "mangrape",
        "category": "colddr",
        "name": "مانگریپ",
        "description": "انبه، پرتقال تو سرخ، پیناکولادا",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 210
            }
        ]
    },
    {
        "id": "vision",
        "category": "colddr",
        "name": "لاواندا ویژن",
        "description": "بلو کاراسائو، آب سودا، آب پرتقال، اسطوخودس",
        "image": "./assets/images/vision.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 245
            }
        ]
    },
    {
        "id": "vanilla-shake",
        "category": "shake",
        "name": "شیک وانیل",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 210
            }
        ]
    },
    {
        "id": "chocolate-shake",
        "category": "shake",
        "name": "شیک شکلات",
        "description": "",
        "image": "./assets/images/chocoShake.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 230
            }
        ]
    },
    {
        "id": "lotus-shake",
        "category": "shake",
        "name": "شیک لوتوس",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 330
            }
        ]
    },
    {
        "id": "peanut-shake",
        "category": "shake",
        "name": "شیک پینات",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 290
            }
        ]
    },
    {
        "id": "nutella-shake",
        "category": "shake",
        "name": "شیک نوتلا",
        "description": "",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 380
            }
        ]
    },
    {
        "id": "coffee-shake",
        "category": "shake",
        "name": "شیک نسکافه",
        "description": "",
        "image": "./assets/images/coffeeShake.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 290
            }
        ]
    },
    {
        "id": "day-cake",
        "category": "cake",
        "name": "کیک روز",
        "description": "شکلاتی / تیرامیسو",
        "image": "./assets/images/chocoCake.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 230
            }
        ]
    },
    {
        "id": "day-cheese-cake",
        "category": "cake",
        "name": "چیزکیک روز",
        "description": "سن سباستین",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 250
            }
        ]
    },
    {
        "id": "chocolate-waffle",
        "category": "cake",
        "name": "وافل شکلات",
        "description": "",
        "image": "./assets/images/chocoWaffle.png",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 355
            }
        ]
    },
    {
        "id": "waffle",
        "category": "cake",
        "name": "وافل",
        "description": "نوتلا / لوتوس / کره بادام زمینی / پسته",
        "image": "",
        "available": true,
        "prices": [
            {
                "label": "",
                "price": 390
            }
        ]
    }
];
