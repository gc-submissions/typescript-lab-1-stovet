import {Product} from './products';

interface InventoryItem{
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [{product:{name: "motor", price: 10.00}, quantity: 10}]

function calcInventoryValue(inv: InventoryItem[]): number