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
const techPostfix = ["V2.3", "V1.0.1", "version 9 ", "2000", "3000", "L90", "M60", "Deluxe", "Premium", "X-treme", "LIDAR-version", "10hp", "20hp",
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
export const GetRandomProduct = () => {
    const name = names[random(names.length)] + " " + techPostfix[random(techPostfix.length)];
    const image = images[random(images.length)];
    const description = descriptions[random(descriptions.length)];
    const price = Math.floor(randomMin(3000, 18000) / 100) * 100 + 99;
    const inStock = randomMin(0, 50);
    return { id: uuidv4(), name, description, price, inStock, image }
}


export const AllProducts = [
    GetRandomProduct(),
    GetRandomProduct(),
    GetRandomProduct(),
    GetRandomProduct(),
    GetRandomProduct(),
]

