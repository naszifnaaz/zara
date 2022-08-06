//Bags Data
const bagData = [
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6581/810/102/2/w/444/6581810102_15_1_1.jpg?ts=1634201998255",
        productName: "QUILTED MINI CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CROSSBODY BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6317/610/201/2/w/444/6317610201_6_5_1.jpg?ts=1631027149696",
        productName: "ANIMAL PRINT QUILTED CROSSBODY BAG ",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "PRINTED BAG",
        sale: "50%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6580/810/030/2/w/444/6580810030_15_1_1.jpg?ts=1634130634421",
        productName: "QUILTED MINI CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "QUILTED MINI BAG ",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6445/710/049/2/w/444/6445710049_15_1_1.jpg?ts=1625228282861",
        productName: "NYLON MINI TOTE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,190.00",
        itemGender: "Women",
        itemCategory: "NYLON MINI BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6592/810/050/2/w/444/6592810050_15_2_1.jpg?ts=1624984495781",
        productName: "TRANSPARENT MINI TOTE BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "TOTE BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6503/810/030/2/w/444/6503810030_15_1_1.jpg?ts=1630065416081",
        productName: "QUILTED CITY BAG WITH CHAIN STRAP",
        strikedPrice: "₹ 4,290.00",
        price: "₹ 2,790.00",
        itemGender: "Women",
        itemCategory: "CHAIN STRAP BAG",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6029/810/116/2/w/444/6029810116_15_1_1.jpg?ts=1630323732927",
        productName: "FAUX FUR SHOULDER BAG WITH CHAIN",
        strikedPrice: "₹ 3,590.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "SHOULDER BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6608/810/040/2/w/444/6608810040_15_1_1.jpg?ts=1630514948974",
        productName: "QUILTED FABRIC CROSSBODY BAG",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CROSSBODY BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6512/810/084/2/w/444/6512810084_6_1_1.jpg?ts=1630432194277",
        productName: "SHOULDER BAG WITH CHAIN",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "CHAIN BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6108/710/050/2/w/444/6108710050_15_1_1.jpg?ts=1631618498118",
        productName: " TOTE BAG WITH INTERWOVEN BASE",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "INTERWOVEN BASE BAG",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6893/710/111/2/w/444/6893710111_15_1_1.jpg?ts=1622806066556",
        productName: "PICNIC CASE",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 3,990.00",
        itemGender: "Women",
        itemCategory: "PICNIC CASE",
        sale: "20%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6121/710/100/2/w/444/6121710100_15_1_1.jpg?ts=1631546741904",
        productName: "NYLON TOTE BAG WITH HANDLES AT THE FRONT",
        strikedPrice: "₹ 2,990.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "NYLON TOTE BAG ",
        sale: "45%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6789/810/040/2/w/444/6789810040_6_2_1.jpg?ts=1634572283204",
        productName: "STUDDED MOBILE PHONE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "PHONE BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6600/810/081/2/w/444/6600810081_6_1_1.jpg?ts=1620914770944",
        productName: "BRAIDED SHOULDER BAG",
        strikedPrice: "₹ 2,490.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "BRAIDED BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6075/610/040/2/w/444/6075610040_15_1_1.jpg?ts=1641806427123",
        productName: "RIGID TRAVEL CASE",
        strikedPrice: "₹ 4,990.00",
        price: "₹ 3,990.00",
        itemGender: "Women",
        itemCategory: " TRAVEL CASE",
        sale: "20%",
    },

    {
        imageURL:
            "https://static.zara.net/photos///2021/V/1/1/p/6553/810/090/2/w/444/6553810090_15_1_1.jpg?ts=1621249588574",
        productName: "PURPLE® WRISTBAND",
        strikedPrice: "₹ 2,490.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "WRISTBAND",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6349/810/020/2/w/444/6349810020_15_1_1.jpg?ts=1633021361998",
        productName: "QUILTED BACKPACK",
        strikedPrice: "₹ 3,590.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "BACKPACK",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/V/1/1/p/6049/710/111/2/w/444/6049710111_15_1_1.jpg?ts=1617117401764",
        productName: "CROCHET MAXI BUCKET BAG",
        strikedPrice: "₹ 3,290.00",
        price: "₹ 2,290.00",
        itemGender: "Women",
        itemCategory: "MAXI BUCKET BAG",
        sale: "30%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6137/810/070/2/w/444/6137810070_15_1_1.jpg?ts=1626278058891",
        productName: "SATIN BUCKET BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "BUCKET BAG",
        sale: "35%",
    },
    {
        imageURL:
            "https://static.zara.net/photos///2021/I/1/1/p/6130/810/111/2/w/444/6130810111_15_1_1.jpg?ts=1622125323420",
        productName: "JUTE TOTE BAG",
        strikedPrice: "₹ 2,590.00",
        price: "₹ 1,590.00",
        itemGender: "Women",
        itemCategory: "JUTE TOTE BAG",
        sale: "35%",
    },
];

//Adding bags data to local storage
localStorage.setItem('bagData', JSON.stringify(bagData));