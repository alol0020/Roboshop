import { v4 as uuidv4 } from 'uuid';

const cleaningDescription = "Nu kan ni äntligen ta hand om hela hotell eller kontorsbyggnader med heltäckande mattor. Fieldbots Fleet Management system möjliggör kontroll över varje enskild robot i varje hotellrum eller kontor. Roboten laddar upp sig tömmer sitt damm i en dockningsstation vars dammpåse behöver bytas ut ca en gång i månaden.";
const vacuumDescription = "Nu kan ni ta robotdammsugare från hemmiljön till professionell användning och spara både på personalens axlar/nackar samt på era städkostnader.";


export const AllProducts = [
    { id: uuidv4(), name: "Billy ", description: cleaningDescription, price: 600, inStock: 20 },
    { id: uuidv4(), name: "Rosie ", description: cleaningDescription, price: 900, inStock: 90 },
    { id: uuidv4(), name: "Gregor", description: vacuumDescription, price: 500, inStock: 0 },
    { id: uuidv4(), name: "Lisa  ", description: vacuumDescription, price: 300, inStock: 6 },
    { id: uuidv4(), name: "Steve  ", description: vacuumDescription, price: 300, inStock: 6 },
]