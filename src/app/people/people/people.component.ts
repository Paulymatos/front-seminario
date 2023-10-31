import { Component } from '@angular/core';
import { Funcionarios } from './models/funcionarios';
import { PeopleService } from '../services/people.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people$: Observable<Funcionarios[]>

  displayedColumns = ['nome','departamento', 'cidade', 'estado']


  constructor(private peopleService:PeopleService) {

    this.people$ = this.peopleService.list()
  }

}
