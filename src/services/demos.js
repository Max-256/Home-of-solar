import a1 from '../images/productImages/a1.jpg';
import b10 from '../images/productImages/b10.png';
import a8 from '../images/productImages/a8.png';
import b2 from '../images/productImages/b2.png';
import i9 from '../images/productImages/i9.png';
import p6 from '../images/productImages/p6.png';
import p3 from '../images/productImages/p3.png';
import i7 from '../images/productImages/i7.png';

const demo_cards = [
    {
      "id": "t1",
      "title": "Lithium ion battery",
      "image": b10,
      "origin": "Japan"
    },
    {
      "id": "t2",
      "title": "MPPT charge controller",
      "image": a8,
      "origin": "Australia"
    },
    {
      "id": "t3",
      "title": "Lead Acid Battery",
      "image": b2,
      "origin": "USA"
    },
    {
      "id": "t4",
      "title": "Heavy duty Inverter",
      "image": i9,
      "origin": "Rusia"
    },
    {
      "id": "t5",
      "title": "Monocrystalline Panel",
      "image": p6,
      "origin": "Switzerland"
    },
    {
      "id": "t6",
      "title": "Polycrystaline panel",
      "image": p3,
      "origin": "Canada"
    },
    {
      "id": "t7",
      "title": "Ac/ Dc Power Inverter",
      "image": i7,
      "origin": "France"
    },
    {
      "id": "t8",
      "title": "Single arm pole",
      "image": a1,
      "origin": "Germany" 
    }
    
]

export function getFakeItems () {
    return demo_cards;
}