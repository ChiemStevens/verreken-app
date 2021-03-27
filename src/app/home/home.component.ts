import { Component, OnInit } from '@angular/core';
import { FakeBackendService } from '../fake-backend/fake-backend.service';
import { Person } from '../Models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons : Person[] = [];

  constructor(fakeBackend : FakeBackendService) {
    this.persons = fakeBackend.getPersons();
  }

  ngOnInit(): void {
  }

  helloWorld() {
    alert('Hello world!');
  }
}
