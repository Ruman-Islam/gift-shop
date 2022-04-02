let products = [
    {
        id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        name: "Cooper's Blueberry Deluxe",
        price: 1900,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1624794560-PandanCake350gm1612240981bhMFS.jpg",
        deliveryCharge: 30,
        quantity: 0
    },
    {
        id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        name: "LIGE New Fashion Mens Watch",
        price: 2600,
        ratings: 5,
        img: "https://stygen.gift/assets/uploads/product/1647519192-S3a0ff173f4eb49ca8e175a9460f53e6bi.jpg",
        deliveryCharge: 14,
        quantity: 0
    },
    {
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        name: "Full Body Pillow Cute Cartoon",
        price: 2599,
        ratings: 5,
        img: "https://stygen.gift/assets/uploads/product/1631792060-ST-53%20Lion%20(1).jpg",
        deliveryCharge: 32,
        quantity: 0
    },
    {
        id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        name: "Gorgeous Flower Bouquet",
        price: 1200,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1631098926-2001.webp",
        deliveryCharge: 25,
        quantity: 0
    },
    {
        id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        name: "Children Islamic Stories",
        price: 1000,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1631526351-241831983_236354538426833_6226859501993789688_n.jpg",
        deliveryCharge: 49,
        quantity: 0
    },
    {
        id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        name: "Elit Gourmet Collection Truffle",
        price: 1150,
        ratings: 3,
        img: "https://stygen.gift/assets/uploads/product/1645099662-Elit%20Gourmet%20Collection%20Truffle%20-%20225%20gm.jpg",
        deliveryCharge: 19,
        quantity: 0
    },
    {
        id: "9c0c13c2-54e4-4001-809b-afbd9d84037d",
        name: "Valentine Day Chocolate",
        price: 1050,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1641714802-18%20(1).jpg",
        deliveryCharge: 15,
        quantity: 0
    },
    {
        id: "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
        name: "OLEVS Blue Chronograph",
        price: 2200,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1647086649-247254075_284235376890947_631062230390048596_n.jpg",
        deliveryCharge: 50,
        quantity: 0
    },
    {
        id: "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
        name: "Metallic Quran Rack",
        price: 1500,
        ratings: 5,
        img: "https://stygen.gift/assets/uploads/product/1646295759-275013975_145022351321041_292955334916189335_n.jpg",
        deliveryCharge: 46,
        quantity: 0
    },
    {
        id: "ac44095f-230e-4502-8816-dea3eaae8320",
        name: "Miriam Marvels CHARM MIST EDP",
        price: 2500,
        ratings: 4,
        img: "https://stygen.gift/assets/uploads/product/1645005311-Miriam%20Marvels%20CHARM%20MIST%20%20EDP%20For%20Women.jpg",
        deliveryCharge: 36,
        quantity: 0
    },
    {
        id: "d0803f97-966f-4296-ad31-a7f70fc86fab",
        name: "Ismen Sultan Jaynamaz With Tasbih",
        price: 2490,
        ratings: 5,
        img: "https://stygen.gift/assets/uploads/product/1647496513-Ismen%20Sultan%20Jaynamaz%20With%20Free%20Tasbih%20-%20Marron%20Color-Any%20Design.jpg",
        deliveryCharge: 29,
        quantity: 0
    },
    {
        id: "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
        name: "Leather Wallet - Black",
        price: 791,
        ratings: 5,
        img: "https://stygen.gift/assets/uploads/product/1635333817-wallet-mat-black-08-1-800x800.jpg",
        deliveryCharge: 48,
        quantity: 0
    }
]


export const getProducts = () => products;

export const getProduct = id => products.find(product => product.id === id);