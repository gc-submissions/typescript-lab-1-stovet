export interface Product{
    name: string;
    price: number;
}

let products: Product[] = [{name: "Fountain Pen", price: 20}, {name: "Sketch book", price: 12}, {name: "Pencil", price: 3}];

export function calcAverageProductPrice(products: Product[]): number {
    let averagePrice: number = 0;
    let total:number = 0;
    products.forEach(item => {
        total += item.price;
    })
    averagePrice = total / products.length;
    return averagePrice;
}

let averagePrice: number = calcAverageProductPrice(products);
console.log(averagePrice);