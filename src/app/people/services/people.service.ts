import { Injectable } from '@angular/core';
import { Funcionarios } from '../people/models/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  list():Funcionarios[]{
    return[
      { id: "5", nome: 'joão',departamento:'rh', cidade: 'Blumenau', estado: 'SC' }
    ]
  }
}
