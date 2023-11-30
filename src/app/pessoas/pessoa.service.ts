import { Injectable } from "@angular/core";
import { HttpParams, HttpHeaders, HttpClient } from "@angular/common/http";
import { Pessoa, Estado, Cidade } from "./../core/model";
import { environment } from "./../../environments/environment";

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class PessoaService {
  funcionariosUrl: string;
  estadosUrl: string;

  constructor(private http: HttpClient) {
    this.funcionariosUrl = `${environment.apiUrl}/funcionarios`;
    this.estadosUrl = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;
  }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString(),
      },
    });

    if (filtro.nome) {
      params = params.append("nome", filtro.nome);
    }

    return this.http
      .get<any>(`${this.funcionariosUrl}`, { params })
      .toPromise()
      .then((response) => {
        const pessoas = response.content;

        const retorno = {
          pessoas: pessoas,
          total: response.totalElements,
        };
        return retorno;
      });
  }

  listarTodas(): Promise<any> {
    return this.http
      .get<any>(`${this.funcionariosUrl}`)
      .toPromise()
      .then((response) => response.content);
  }

  excluir(codigo: number): Promise<void> {
    return this.http
      .delete(`${this.funcionariosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(codigo: number, status: boolean): Promise<void> {
    const headers = new HttpHeaders().append(
      "Content-Type",
      "application/json"
    );

    return this.http
      .put(`${this.funcionariosUrl}/${codigo}/ativo`, !status, { headers })
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(this.funcionariosUrl, pessoa).toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(`${this.funcionariosUrl}/${codigo}`).toPromise();
  }

  atualizar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http
      .put<Pessoa>(`${this.funcionariosUrl}/${pessoa.id}`, pessoa)
      .toPromise();
  }

  obterEstados(): Promise<Estado[]> {
    return this.http.get<Estado[]>(this.estadosUrl).toPromise();
  }

  obterCidadesDoEstado(codigoEstado: number): Promise<Cidade[]> {
    return this.http
      .get<Cidade[]>(`${this.estadosUrl}/${codigoEstado}/municipios`)
      .toPromise();
  }
}
