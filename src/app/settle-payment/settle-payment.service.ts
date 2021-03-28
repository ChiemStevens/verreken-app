import { Injectable } from '@angular/core';
import { Payment } from '../Models/payment';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class SettlePaymentService {

  constructor() { }

  calculatePayment(payments : Payment[], persons : Person[]) : Payment[] {

    let paymentRequests : Payment[] = [];
    let excludeList : Person[] = [];

    payments.forEach(payment => {

      payment.payers = persons;
      let amountToPay = payment.paymentAmount / persons.length;

      payment.personThatPayed.paymentAmount += payment.paymentAmount - amountToPay;

      //Staan er nog verzoeken open
      let openPayment = paymentRequests.find(x => x.payers[0] == payment.personThatPayed); //
      while (openPayment != null) {
        if(openPayment != null) {

          console.log(openPayment);
          //het bedrag wordt ervan afgehaald
          let amount = openPayment.paymentAmount - amountToPay;
          console.log(amount);
          if(amount > 0) {
            paymentRequests.splice(paymentRequests.indexOf(openPayment), 1);
            let paymentRequest : Payment = new Payment(payment.name, amount, openPayment.personThatPayed, [openPayment.payers[0]]);
            paymentRequests.push(paymentRequest);
            excludeList.push(openPayment.personThatPayed);
            break;
          }
          else if(amount < 0) {
            paymentRequests.splice(paymentRequests.indexOf(openPayment), 1);
            let paymentRequest : Payment = new Payment(payment.name, -amount, payment.personThatPayed, [openPayment.personThatPayed]);
            paymentRequests.push(paymentRequest);
            excludeList.push(openPayment.personThatPayed);
          }
          else {
            paymentRequests.splice(paymentRequests.indexOf(openPayment), 1);
          }
        }

        openPayment = paymentRequests.find(x => x.payers[0] == payment.personThatPayed);
      }

      persons.forEach(person => {
        //Er word een betaalverzoek gemaakt voor iedereen behalve chiem en Jelmer (Exclude meerdere mensen! TODO!)
        let canSkipPerson : boolean = false;
        for(let i = 0; i < excludeList.length; i++) {
          if(excludeList[i] == person) {
            canSkipPerson = true;
            break;
          }
        }

        if(!canSkipPerson) {
          if(person != payment.personThatPayed) {
            let paymentRequest : Payment = new Payment(payment.name, amountToPay, payment.personThatPayed, [person]);
            paymentRequests.push(paymentRequest);
          }
        }        
      });

      excludeList = [];
    });

    paymentRequests = this.formatPaymentRequests(paymentRequests, persons);

    return paymentRequests;
  }

  private formatPaymentRequests(paymentRequests : Payment[], persons : Person[]) : Payment[] {
    paymentRequests.sort((a,b) => a.payers[0].name.localeCompare(b.payers[0].name));

    let formatedRequests : Payment[] = [];

    paymentRequests.forEach(paymentRequest => {

      let found = formatedRequests.find(x => x.payers[0] == paymentRequest.payers[0]);
      if(found == undefined) {
        formatedRequests.push(paymentRequest);
      }
      else {
        if(paymentRequest.personThatPayed == found.personThatPayed) {
          found.paymentAmount += paymentRequest.paymentAmount;
        }
        else {
          formatedRequests.push(paymentRequest);
        }
      }
    });
    return formatedRequests;
  }
}
