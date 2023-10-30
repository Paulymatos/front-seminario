import { Component } from '@angular/core';
import { Funcionarios } from './models/funcionarios';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Funcionarios[] = [{ id: "5", nome: 'joão',departamento:'rh', cidade: 'Blumenau', estado: 'SC' }]

  displayedColumns = ['nome','departamento', 'cidade', 'estado']
  constructor() {
    // this.people = []
  }

}
