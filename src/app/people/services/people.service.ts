import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionarios } from '../people/models/funcionarios';
import {delay, tap} from 'rxjs/operators'
import{first} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly API = '/assets/people.json';
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Funcionarios[]>(this.API).pipe(
      first(),
      delay(2000),//testar spinner
      tap(listpeople => console.log(listpeople))
    )
  }
}
