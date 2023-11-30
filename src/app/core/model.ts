export class Categoria {
  codigo: number;
  nome: string;
}

export class Pessoa {
  id: number;
  nome: string;
  cpf:number;
  email:string;
  telefone: string;
  cargo:string;
  departamento:string;
  dataContratacao:Date;
  endereco = new Endereco();
}
export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
  cidade = new Cidade();
}

export class Cidade {
  id: number;
  nome: string;
  estado = new Estado();
}

export class Estado {
  id: number;
  nome: string;
}


