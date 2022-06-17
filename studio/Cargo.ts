import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor ( mass: number, materialType: string){
        this.massKg = mass;
        this.material = materialType;

    }
}