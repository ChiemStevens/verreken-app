import { Injectable } from '@angular/core';
import { Payment } from '../Models/payment';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  constructor() { }

  private persons: Person[] = [
    { name: 'Chiem', paymentAmount: 0, },
    { name: 'Jelmer', paymentAmount: 0 },
    { name: 'Thijs', paymentAmount: 0 },
    { name: 'Ties', paymentAmount: 0 },
    { name: 'Kirsten', paymentAmount: 0 },
    { name: 'Tom', paymentAmount: 0 },
    { name: 'Hanno', paymentAmount: 0 },
    { name: 'Lars', paymentAmount: 0 },
    { name: 'Luke', paymentAmount: 0 },
    { name: 'Joram', paymentAmount: 0 }
  ];

  getPersons() : Person[] {
    return this.persons;
  }

  getPayments() : Payment[] {
    return [];
    //return this.payments;
  }
}
