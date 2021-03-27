import { Person } from "./person";

export class Payment {
  name!: string;
  paymentAmount!: number;
  personThatPayed!: Person;
  payers: Person[] =[];

  constructor(name : string, paymentAmount : number, personThatPayed : Person, payers : Person[]) {
    this.name = name;
    this.paymentAmount = paymentAmount;
    this.personThatPayed = personThatPayed;
    this.payers = payers;
  }
}