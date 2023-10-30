import { Component} from '@angular/core';
import { Funcionarios } from './models/funcionarios';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent  {
people:Funcionarios[] = [{id:"5",Nome:'joão',Cidade:'Blumenau',Estado:'SC'}]

displayedColumns =['Nome','Cidade','Estado'
]
constructor( ){
  // this.people = []
}

}
