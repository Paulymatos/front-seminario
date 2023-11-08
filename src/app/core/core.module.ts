import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import localePt from "@angular/common/locales/pt";
import { ToastModule } from "primeng/toast";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MessageService, ConfirmationService } from "primeng/api";
import { PessoaService } from "../pessoas/pessoa.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { ErrorHandlerService } from "./error-handler.service";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada.component";

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    ToastModule,
    ConfirmDialogModule,
  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
   
  ],
  exports: [NavbarComponent, ToastModule, ConfirmDialogModule],
  providers: [
    PessoaService,
    ErrorHandlerService,
    JwtHelperService,
    MessageService,
    ConfirmationService,
    { provide: LOCALE_ID, useValue: "pt-BR" },
  ],
})
export class CoreModule {}
