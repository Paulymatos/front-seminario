import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TableModule } from "primeng/table";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { TooltipModule } from "primeng/tooltip";
import { MessageModule } from "primeng/message";
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from "primeng/inputmask";

import { PessoasRoutingModule } from "./pessoas-routing.module";
import { PessoaCadastroComponent } from "./pessoa-cadastro/pessoa-cadastro.component";
import { PessoasPesquisaComponent } from "./pessoas-pesquisa/pessoas-pesquisa.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    TooltipModule,
    InputMaskModule,
    MessageModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    PessoasRoutingModule,
  ],
  declarations: [PessoaCadastroComponent, PessoasPesquisaComponent],
  exports: [],
})
export class PessoasModule {}
