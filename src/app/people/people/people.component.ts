import { Component } from '@angular/core';
import { Funcionarios } from './models/funcionarios';
import { PeopleService } from '../services/people.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Funcionarios[] = []

  displayedColumns = ['nome','departamento', 'cidade', 'estado']
  // peopleService:PeopleService;

  constructor(private peopleService:PeopleService) {
    // this.peopleService =new PeopleService()
    this.people = this.peopleService.list()
  }

}
