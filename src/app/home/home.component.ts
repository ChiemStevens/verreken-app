import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../fake-backend/fake-backend.service';
import { Payment } from '../Models/payment';
import { Person } from '../Models/person';
import { SettlePaymentService } from '../settle-payment/settle-payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons : Person[] = [];
  payments : Payment[] = [];
  paymentRequests : Payment[] = [];

  amountPayed : number = 0;
  totalPayment : number = 0;
  personToAdd : Person;

  constructor(fakeBackend : FakeBackendService, private settlePayment : SettlePaymentService) {
    this.persons = fakeBackend.getPersons();
    this.personToAdd = this.persons[0];
  }

  ngOnInit(): void {
  }

  addPayment() {
    if(this.amountPayed != null && this.personToAdd != null) {
      let payment : Payment = new Payment("temp", this.amountPayed, this.personToAdd, this.persons);
      this.payments.push(payment);
      this.paymentRequests = this.settlePayment.calculatePayment(this.payments, this.persons);

      this.totalPayment = 0;
      this.payments.forEach(value => {
        this.totalPayment += value.paymentAmount;
      });
    }
  }

  resetPayment() {
    this.payments = [];
    this.paymentRequests = [];
    this.totalPayment = 0;
  }
}
