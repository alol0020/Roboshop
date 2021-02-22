import { v4 as uuidv4 } from 'uuid';

import flyer from "../Assets/Images/MockProducts/flyer.png";
import grasper from "../Assets/Images/MockProducts/grasper.png";
import gripper from "../Assets/Images/MockProducts/gripper.png";
import hover from "../Assets/Images/MockProducts/hover.png";
import roller from "../Assets/Images/MockProducts/roller.png";
import standard from "../Assets/Images/MockProducts/standard.png";
import stomper from "../Assets/Images/MockProducts/stomper.png";
import walker from "../Assets/Images/MockProducts/walker.png";
const images = [flyer, grasper, gripper, hover, roller, standard, stomper, walker];
const names = ["Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "William", "Sophia", "Elijah", "Isabella", "James", "Charlotte", "Benjamin", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Ethan", "Evelyn"];
const techPostfix = ["V2.3", "V1.0.1", "version 9 ", "2000", "3000", "L90", "M60", "Deluxe", "Premium", "X-treme", "LiDAR-version", "10hp", "20hp",
]
const descriptions = [
    "Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.",
    "Det moderna användargränssnittet och fjärrapplikationssystemet ger full kontroll över den nya städassistenten.",
    " Ett tydligt fokus på automatiserade lösningar hjälper tillverkare förbättra produktivitet, produktkvalitet och säkerheten i arbetsmiljön genom automation. RoboShop har installerat mer än 500 000 industrirobotar världen över.",
    "Roboten har en viss rörlighet, för varje arbetsstycke den ska arbeta med, förses roboten med ett passande verktyg. En robot som används för att flytta en del till en mobiltelefon, måste alltså delvis byggas om och programmeras om när den ska flytta en annan bit.",
    "En industrirobot är en robot som används inom industrin. Det är bäst så, ute i det vilda skulle den inte överleva.",
    "Tool Center Point (TCP) är den punkt på en industrirobot som inte rör sig när man roterar verktyget och som programmeraren har som spatial nollpunkt och referenspunkt vid programmeringen. I regel är TCP belägen på en fysisk punkt på verktyget, till exempel i ändan på ett svetsmunstycke, men kan även vara belägen på ett visst avstånd från verktyget. En robot har typiskt flera TCP, exempelvis för olika verktyg, men bara en TCP kan vara aktiv vid en viss tidpunkt.",
];

const random = (max) => {
    return Math.floor(Math.random() * max);
}
const randomMin = (min, max) => {
    return Math.floor(min + Math.random() * (max - min));
}
export function GetRandomProduct() {
    const name = names[random(names.length)] + " " + techPostfix[random(techPostfix.length)];
    const image = images[random(images.length)];
    const description = descriptions[random(descriptions.length)];
    const price = Math.floor(randomMin(3000, 18000) / 100) * 100 + 99;
    const inStock = randomMin(0, 50);
    return { id: uuidv4(), name, description, price, inStock, image }
}

export function GetRandomProducts(number) {
    let products = [];
    for (let i = 0; i < number; i++) {
        products.push(GetRandomProduct());
    }
    return products;
}


export const AllProducts = JSON.parse('[{"id":"7c2c5be2-0330-49c3-ac23-5bc8aec0b442","name":"Liam 2000","description":"Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.","price":15899,"inStock":27,"image":"/static/media/grasper.baaccb73.png"},{"id":"1d3053d6-b5df-4b1e-998b-f78889e0174b","name":"Benjamin V2.3","description":"Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.","price":9299,"inStock":35,"image":"/static/media/standard.a24b293f.png"},{"id":"aa2e90f4-9793-4bac-aa63-e2ee0fabce6c","name":"Mia Deluxe","description":"En industrirobot är en robot som används inom industrin. Det är bäst så, ute i det vilda skulle den inte överleva.","price":15699,"inStock":3,"image":"/static/media/grasper.baaccb73.png"},{"id":"5880a5f8-7d6e-48c4-bf78-368a115c5b56","name":"Ethan LiDAR-version","description":"En industrirobot är en robot som används inom industrin. Det är bäst så, ute i det vilda skulle den inte överleva.","price":6299,"inStock":24,"image":"/static/media/walker.5968912c.png"},{"id":"267c9601-f62d-4b87-a29f-b68372536cc7","name":"James Deluxe","description":"Det moderna användargränssnittet och fjärrapplikationssystemet ger full kontroll över den nya städassistenten.","price":9099,"inStock":28,"image":"/static/media/gripper.dd911adc.png"},{"id":"6bec6e25-ed1c-43ce-a754-893386f5cbcc","name":"James Deluxe","description":"En industrirobot är en robot som används inom industrin. Det är bäst så, ute i det vilda skulle den inte överleva.","price":9299,"inStock":45,"image":"/static/media/standard.a24b293f.png"},{"id":"84aee205-029e-4802-951f-76296287d57a","name":"James V1.0.1","description":"Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.","price":5699,"inStock":3,"image":"/static/media/hover.2966e8a8.png"},{"id":"7543deb2-7faa-4b40-9df7-ea02a9beb29a","name":"Benjamin LiDAR-version","description":" Ett tydligt fokus på automatiserade lösningar hjälper tillverkare förbättra produktivitet, produktkvalitet och säkerheten i arbetsmiljön genom automation. RoboShop har installerat mer än 500 000 industrirobotar världen över.","price":14299,"inStock":42,"image":"/static/media/hover.2966e8a8.png"},{"id":"7d80e8a8-f7b7-42cd-b37f-2e68c5bdcd0d","name":"Evelyn LiDAR-version","description":"Det moderna användargränssnittet och fjärrapplikationssystemet ger full kontroll över den nya städassistenten.","price":16699,"inStock":42,"image":"/static/media/standard.a24b293f.png"},{"id":"df9436a0-f129-474e-a4ab-7aa0e96f9bb4","name":"Amelia V1.0.1","description":"Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.","price":10399,"inStock":47,"image":"/static/media/flyer.366ba21f.png"}]');

