export const sample_foods = [
    {
        id: '1',
        name: 'Pizza',
        cookTime: '10-20',
        price: 199,
        favourite: false,
        origins: ['italy'],
        stars: 4.5,
        imageURL: 'pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
        type: 'Veg'
    },
    {
        id: '2',
        name: 'Meatball',
        price: 349,
        cookTime: '20-30',
        favourite: true,
        origins: ['persia', 'middle-east', 'china'],
        stars: 5,
        imageURL: 'meatball.jpg',
        tags: ['Lunch', "SlowFood"],
        type: 'Non-Veg'
    },
    {
        id: '3',
        name: 'Burger',
        price: 99,
        cookTime: '5-10',
        favourite: false,
        origins: ['germany'],
        stars: 4,
        imageURL: 'burger.jpg',
        tags: ['Snack', 'Burger', 'FastFood'],
        type: 'Veg'
    },
    {
        id: '4',
        name: 'HotDog',
        price: 149,
        cookTime: '10-15',
        favourite: false,
        origins: ['germany', 'austria'],
        stars: 4.3,
        imageURL: 'hotdog.jpg',
        tags: ['Snack', 'HotDog', 'FastFood'],
        type: 'Non-Veg'
    },
    {
        id: '5',
        name: 'SpringRoll',
        price: 79,
        cookTime: '10-15',
        favourite: false,
        origins: ['china'],
        stars: 4.8,
        imageURL: 'springroll.jpg',
        tags: ['Snack', 'SpringRoll', 'FastFood'],
        type: 'Veg'
    },
    {
        id: '6',
        name: 'Pasta',
        price: 119,
        cookTime: '10-15',
        favourite: false,
        origins: ['italy'],
        stars: 4.1,
        imageURL: 'pasta.jpg',
        tags: ['Snack', 'Pasta', 'FastFood'],
        type: 'Veg'
    }
];

export const sample_tags = [
    {name: 'All', count: 6},
    {name: 'FastFood', count:5},
    {name: 'Lunch', count:2},
    {name: 'Snack', count:4},
    {name: 'SlowFood', count:1},
];

export const sample_users = [
    {
        id: 1,
        name: 'Aadit Kumar Sahoo',
        email: 'aaditkumarsahoo@gmail.com',
        password: '114920',
        address: 'Roorkee, Uttarakhand',
        isAdmin: true,
    },
    {
        id: 2,
        name: 'Srita Shukla',
        email: 'srita_s@ee.iitr.ac.in',
        password: '19189201',
        address: 'Roorkee, Uttarakhand',
        isAdmin: false,
    },
];