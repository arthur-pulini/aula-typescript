let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Exercício 1
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// Exercício 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

//Exercício 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

// Aula 22/02/25
// Exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; 
}

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "2.0 Flex",
    detalhes: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano:", meuCarro.ano);
console.log("Motor:", meuCarro.motor ?? "Não especificado");

//Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
};

console.log(multiplicar(2, 3));   
console.log(multiplicar(5, 4));   
console.log(multiplicar(-2, 8));  
console.log(multiplicar(0, 10));

// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
}

const numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
console.log("Array invertido:", inverterArray(numeros));

const palavras = ["typescript", "é", "muito", "legal"];
console.log("Array original:", palavras);
console.log("Array invertido:", inverterArray(palavras));

// Exercício 4

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

interface Usuario {
    nome: string;
    email: string;
}

class UsuarioRepositorio implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();

repo.salvar({ nome: "Arthur", email: "arthur@email.com" });
repo.salvar({ nome: "Mariana", email: "mariana@email.com" });

console.log(repo.obterTodos());

// Exercício 5

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
    }
}

processarResposta("Usuário cadastrado com sucesso!"); 
processarResposta(true);
processarResposta(false);

// Exercício 6

interface Estudante {
    nome: string;
    curso: string;
}

interface Trabalhador {
    empresa: string;
    cargo: string;
}

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Lucas Silva",
    curso: "Engenharia de Software",
    empresa: "Tech Solutions",
    cargo: "Desenvolvedor Júnior"
};

console.log("Nome:", estudanteTrabalhador.nome);
console.log("Curso:", estudanteTrabalhador.curso);
console.log("Empresa:", estudanteTrabalhador.empresa);
console.log("Cargo:", estudanteTrabalhador.cargo);