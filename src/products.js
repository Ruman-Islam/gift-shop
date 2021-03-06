let products = [
    {
        id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
        name: "Flex Tripod",
        price: 50.48,
        ratings: 4.99,
        img: "https://i.postimg.cc/bYSxM1ZZ/tripod.png",
        deliveryCharge: 30,
        quantity: 0,
        description: "Grab your tripod & dive smooth in your videos"
    },
    {
        id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
        name: "Microphone",
        price: 450.45,
        ratings: 5.00,
        img: "https://i.postimg.cc/yNxMnstt/mic.png",
        deliveryCharge: 14,
        quantity: 0,
        description: "The best microphones you can buy today from our hub."
    },
    {
        id: "4bf9798f-63bc-4a83-b0c6-6a3b816fe922",
        name: "Airbuds",
        price: 45.21,
        ratings: 5.00,
        img: "https://i.postimg.cc/8kxz6nJT/airpod.png",
        deliveryCharge: 32,
        quantity: 0,
        description: "Best music needs best earbuds & feel dive into bass."
    },
    {
        id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
        name: "Drone",
        price: 500.78,
        ratings: 4.99,
        img: "https://i.postimg.cc/jdhBbDrB/drone.png",
        deliveryCharge: 25,
        quantity: 0,
        description: "In the market for a drone but don't know where to start?"
    },
    {
        id: "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
        name: "Flash Light",
        price: 55.48,
        ratings: 4.99,
        img: "https://i.postimg.cc/s2ML7KZR/lights.png",
        deliveryCharge: 49,
        quantity: 0,
        description: "Flash light we sell best product all over the market."
    },
    {
        id: "6e5593d3-557b-43cf-8dab-a5140faedfb0",
        name: "Photoshoot set",
        price: 180.20,
        ratings: 3.99,
        img: "https://i.postimg.cc/prH1NHc2/setup.png",
        deliveryCharge: 19,
        quantity: 0,
        description: "There are so many good setup but none of us similar. Grab first."
    },
    {
        id: "9c0c13c2-54e4-4001-809b-afbd9d84037d",
        name: "Vlogging Camera",
        price: 550.48,
        ratings: 4.99,
        img: "https://i.postimg.cc/t4TvGDkV/camera.png",
        deliveryCharge: 15,
        quantity: 0,
        description: "Ours blogging camera is the world's most popular camera"
    },
    {
        id: "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
        name: "Green Screen",
        price: 50.48,
        ratings: 4.99,
        img: "https://i.postimg.cc/JhHTGn9r/single-light.png",
        deliveryCharge: 50,
        quantity: 0,
        description: "Let your audience feel real through green screen."
    },
    {
        id: "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
        name: "Action Camera",
        price: 58.52,
        ratings: 4.99,
        img: "https://i.postimg.cc/1R2LHkrY/action.png",
        deliveryCharge: 46,
        quantity: 0,
        description: "Wordwide shifting available Buyers protection possible!"
    }
]


export const getProducts = () => products;

export const getProduct = id => products.find(product => product.id === id);