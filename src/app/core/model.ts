export class Categoria {
  codigo: number;
  nome: string;
}

export class Pessoa {
  codigo: number;
  nome: string;
  cpf:number;
  email:string;
  telefone: string;
  cargo:string;
  departamento:string;
  data:Date;
  ativo = true;
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
  codigo: number;
  nome: string;
  estado = new Estado();
}

export class Estado {
  codigo: number;
  nome: string;
}


