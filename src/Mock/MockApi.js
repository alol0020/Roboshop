import { v4 as uuidv4 } from 'uuid';
   
 import flyer    from "../Assets/Images/MockProducts/flyer.png";
 import grasper    from "../Assets/Images/MockProducts/grasper.png";
 import gripper    from "../Assets/Images/MockProducts/gripper.png";
 import hover    from "../Assets/Images/MockProducts/hover.png";
 import roller    from "../Assets/Images/MockProducts/roller.png";
 import standard  from "../Assets/Images/MockProducts/standard.png";
 import stomper   from "../Assets/Images/MockProducts/stomper.png";
 import walker    from "../Assets/Images/MockProducts/walker.png";

const cleaningDescription = "Med sin unika design klarar den trånga korridorer lika lätt som stora och komplexa miljöer, även där det vistas mycket människor.";
const vacuumDescription = "Det moderna användargränssnittet och fjärrapplikationssystemet ger full kontroll över den nya städassistenten.";


export const AllProducts = [
    { id: uuidv4(), name: "Billy ", description: cleaningDescription, price: 600, inStock: 20 , image:roller},
    { id: uuidv4(), name: "Rosie ", description: cleaningDescription, price: 900, inStock: 90 , image:grasper},
    { id: uuidv4(), name: "Gregor", description: vacuumDescription, price: 500, inStock: 0 , image:flyer},
    { id: uuidv4(), name: "Lisa  ", description: vacuumDescription, price: 300, inStock: 6 , image:walker},
    { id: uuidv4(), name: "Steve  ", description: vacuumDescription, price: 300, inStock: 6 , image:stomper},
]