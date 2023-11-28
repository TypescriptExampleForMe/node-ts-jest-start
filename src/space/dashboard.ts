let shipCount = 3;

export function countShips(){
    return shipCount * 3; 
}

export enum lifeForms{
    human='Human', 
    martian='Martian', 
    reptilian='Reptilian', 
    angel='Angel', 
    borg='Borg'
}

export class Alien{
    constructor(private _age:number){}

    greet(lifeForm:lifeForms){
        return `Greeting a ${lifeForm}`
    }
    
}

