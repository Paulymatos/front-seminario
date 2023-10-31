import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    AppMaterialModule,
    SharedModule




  ]
})
export class PeopleModule { }
