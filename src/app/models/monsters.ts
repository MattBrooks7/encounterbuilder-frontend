import { MONSTERS } from './../mock-files/mock-monsters';


export class Monsters {
    id: number;
    name: string;
    image: string;
constructor (value: any) {
    this.id = value.id;
    this.name = value.name;
}   
}