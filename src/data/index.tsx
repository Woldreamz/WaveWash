import shirt from '../assets/image/shirts_grp.svg'
import pant from '../assets/image/pants_grp.svg'
import bedding from '../assets/image/beddings_grp.svg'
import shoe from '../assets/image/shoes_grp.svg'
import shirt_w from '../assets/image/shirts_grp2.svg'
import pant_w from '../assets/image/pants_grp2.svg'
import bedding_w from '../assets/image/beddings_grp2.svg'
import shoe_w from '../assets/image/shoes_grp2.svg'
import item from '../assets/image/item.svg'

const services = [
    {
        'title': 'Shirt',
        'image': shirt,
        'price': 1000,
        'pcs': 4
    },
    {
        'title': 'Pants',
        'image': pant,
        'price': 1000,
        'pcs': 5
    },
    {
        'title': 'Bedding',
        'image': bedding,
        'price': 2500,
        'pcs': 1
    },
    {
        'title': 'Shoes',
        'image': shoe,
        'price': 1500,
        'pcs': 1
    }
]

export {services};

const services_w = [
    {
        'title': 'Shirt',
        'image': shirt_w,
        'price': 1000,
        'pcs': 4
    },
    {
        'title': 'Pants',
        'image': pant_w,
        'price': 1000,
        'pcs': 2
    },
    {
        'title': 'Bedding',
        'image': bedding_w,
        'price': 2500,
        'pcs': 1
    },
    {
        'title': 'Shoes',
        'image': shoe_w,
        'price': 1500,
        'pcs': 1
    }
]

export {services_w};


const orders = [
    {
        "orderId": 429877,
        "orderDate": "26-09-2001",
        "pickup": "5 saint jhn exo last",
        "total": 2000,
        "cancel": true,
        "confirm": false,
        "pickupSet": false
    },
    {
        "orderId": 95385,
        "orderDate": "26-09-2001",
        "pickup": "5 saint jhn exo last",
        "total": 3000,
        "confirm": true,
        "cancel": false,
        "pickupSet": false,
    },
    {
        "orderId": 328252,
        "orderDate": "26-09-2001",
        "pickup": "5 saint jhn exo last",
        "total": 2500,
        "pickupSet": true,
        "cancel": false,
        "confirm": false,
    },
    {
        "orderId": 2525623,
        "orderDate": "26-09-2001",
        "pickup": "5 saint jhn exo last",
        "total": 1000,
        "cancel": true,
        "confirm": false,
        "pickupSet": false
    },
    {
        "orderId": 537422,
        "orderDate": "26-09-2001",
        "pickup": "5 saint jhn exo last",
        "total": 5500,
        "confirm": true,
        "cancel": false,
        "pickupSet": false
    },
]
export {orders};

const detail = [
    {
        "item": item,
        "title": "Shirt",
        "price": 1500,
        "qty": 2
    },
    {
        "item": item,
        "title": "Pants",
        "price": 2000,
        "qty": 3
    },
    {
        "item": item,
        "title": "Bedding",
        "price": 3000,
        "qty": 1
    }
]
export {detail}