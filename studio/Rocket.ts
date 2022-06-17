import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    constructor ( rocketName: string, capacity: number){
        this.totalCapacityKg = capacity;
        this.name = rocketName;

    }
    sumMass(items: Payload[] ): number {
        let totalMassKg: number = 0;
        for (let i: number = 0; i< items.length; i++) {
            totalMassKg += items[i].massKg;
        }

        return totalMassKg;
    }
    currentMassKg(): number {
        let totalMassKg= this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return totalMassKg;
    }
    canAdd(item: Payload): boolean {
        let massCheck: boolean = true;

        if(this.currentMassKg() + item.massKg > this.totalCapacityKg){
            massCheck = false;

        }
        return massCheck

    }
    addCargo(cargo: Cargo): boolean {
        let massCheck = true;
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
        }
        else {
            massCheck = false;
        }
        return massCheck;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        let massCheck = true;
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
        }
        else {
            massCheck = false;
        }
        return massCheck;
    }
}