export interface Mountain {
    name: string;
    height: number;
}
let mountains: Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}]

export function findNameOfTallestMountain(mountains: Mountain[]): string {
    let tallest: string= "";
    let tallOneHeight: number = 0;
     mountains.forEach(mountain => {
        if(mountains === []){
            return "";
        }
        //let tallOneName: string = "";
        if(mountain.height > tallOneHeight){
            tallOneHeight = mountain.height;
            tallest = mountain.name;   
        }
    })
     return tallest;
}

//console.log(findNameOfTallestMountain(mountains));