import { FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { MessageService } from "primeng/api";

import { PessoaService } from "../pessoa.service";
import { Pessoa } from "../../core/model";
import { ErrorHandlerService } from "../../core/error-handler.service";
import { CalendarioPtBr } from './../../shared/Calendario-ptBr';

@Component({
  selector: "app-pessoa-cadastro",
  templateUrl: "./pessoa-cadastro.component.html",
  styleUrls: ["./pessoa-cadastro.component.css"],
  preserveWhitespaces: true,
})
export class PessoaCadastroComponent implements OnInit {
  cidades: any[];
  estados: any[];
  estadoSelecionado: number;

  pessoa = new Pessoa();
  br = CalendarioPtBr.pt_BR;

  constructor(
    private pessoaService: PessoaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const codigoPessoa = this.route.snapshot.params["codigo"];
    this.carregarEstados();
    if (codigoPessoa) {
      this.carregarPessoa(codigoPessoa);
    }
  }

  get editando() {
    return Boolean(this.pessoa.id);
  }

  carregarPessoa(codigo: number) {
    this.pessoaService
      .buscarPorCodigo(codigo)
      .then((pessoa) => {
        this.pessoa = pessoa;

        this.estadoSelecionado =  this.pessoa.endereco.cidade.estado.id;
      
        if (this.estadoSelecionado) {
          this.buscarCidadesDoEstado();
        }
      })
      .catch((erro) => this.errorHandler.handler(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarPessoa(form);
    } else {
      this.adicionarPessoa(form);
    }
  }

  adicionarPessoa(form: FormControl) {
    this.pessoa.endereco.cidade.estado.id = this.estadoSelecionado;   
    this.pessoa.endereco.cidade.estado.nome = this.estados.find( e => e.id= this.estadoSelecionado).label
    this.pessoa.endereco.cidade.nome = this.cidades.find( c => c.id = this.pessoa.endereco.cidade.id).label

    this.pessoaService
      .adicionar(this.pessoa)
      .then((pessoaAdicionado) => {
        this.messageService.add({
          severity: "success",
          summary: "Funcionario adicionado com sucesso!",
        });

        this.router.navigate(["/funcionarios", pessoaAdicionado.id]);
      })
      .catch((erro) => this.errorHandler.handler(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService
      .atualizar(this.pessoa)
      .then((pessoa) => {
        this.pessoa = pessoa;
        this.messageService.add({
          severity: "success",
          summary: "Funcionario atualizado com sucesso!",
        });
      })
      .catch((erro) => this.errorHandler.handler(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(
      function () {
        this.pessoa = new Pessoa();
      }.bind(this),
      1
    );

    this.router.navigate(["/funcionarios/novo"]);
  }

  carregarEstados() {
    this.pessoaService
      .obterEstados()
      .then((response) => {
        this.estados = response.map((e) => {
          return { label: e.nome, value: e.id };
        });
      })
      .catch((erro) => this.errorHandler.handler(erro));
  }

  buscarCidadesDoEstado() {
    this.pessoaService
      .obterCidadesDoEstado(this.estadoSelecionado)
      .then((response) => {
        this.cidades = response.map((c) => {
          return { label: c.nome, value: c.id };
        });
      })
      .catch((erro) => this.errorHandler.handler(erro));
  }
}
