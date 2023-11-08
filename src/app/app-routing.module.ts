import { PessoasModule } from './pessoas/pessoas.module';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";

const router: Routes = [
  {
    path: "pessoas",
    loadChildren: () =>
      import("app/pessoas/pessoas.module").then((m) => m.PessoasModule),
  },
  { path: "pagina-nao-encontrada", component: PaginaNaoEncontradaComponent },
  { path: "**", redirectTo: "pagina-nao-encontrada" },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
