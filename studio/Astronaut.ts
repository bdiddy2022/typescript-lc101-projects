import { Payload } from "./Payload";

export class Astronaut implements Payload{
    massKg: number;
    name: string;
    constructor( mass: number, astroName: string) {
       this.name = astroName;
       this.massKg = mass;
    
    }
 }
