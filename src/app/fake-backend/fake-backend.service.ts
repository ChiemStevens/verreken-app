import { Injectable } from '@angular/core';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  constructor() { }

  private persons: Person[] = [
    { id: 1, name: 'Dr Nice', payment: 0 },
    { id: 2, name: 'Narco', payment: 0 },
    { id: 3, name: 'Bombasto', payment: 0 },
    { id: 4, name: 'Celeritas', payment: 0 },
    { id: 5, name: 'Magneta', payment: 0 },
    { id: 6, name: 'RubberMan', payment: 0 },
    { id: 7, name: 'Dynama', payment: 0 },
    { id: 8, name: 'Dr IQ', payment: 0 },
    { id: 9, name: 'Magma', payment: 0 },
    { id: 10, name: 'Tornado', payment: 0 }
  ];

  getPersons() : Person[] {
    return this.persons;
  }
}
