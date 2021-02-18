import { v4 as uuidv4 } from 'uuid';

export const AllProducts = [
    { id: uuidv4(), name: "Billy cleaning robot", price: 600, inStock: 20 },
    { id: uuidv4(), name: "Rosie cleaning robot", price: 900, inStock: 90 },
    { id: uuidv4(), name: "Gregor cleaning robot", price: 500, inStock: 0 },
    { id: uuidv4(), name: "Lisa cleaning robot", price: 300, inStock: 6 },
]