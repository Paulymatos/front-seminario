import { Component } from '@angular/core';
import { Funcionarios } from './models/funcionarios';
import { PeopleService } from '../services/people.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people$: Observable<Funcionarios[]>

  displayedColumns = ['nome', 'departamento', 'cidade', 'estado','symbol']


  constructor(private peopleService: PeopleService,
    public dialog: MatDialog) {

    this.people$ = this.peopleService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar os dados')
          return of([])
        })
      )
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
      })
    }
}



