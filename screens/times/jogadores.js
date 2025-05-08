const jogadores = [
  {
    id: 1,
    nome: 'João',
    sobrenome: 'Silva',
    idade: 28,
    cidade: 'São Paulo',
    posicao: 'Atacante',
    nota: 8.2,
    foto: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 2,
    nome: 'Carlos',
    sobrenome: 'Pereira',
    idade: 30,
    cidade: 'Rio de Janeiro',
    posicao: 'Zagueiro',
    nota: 7.8,
    foto: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    nome: 'Lucas',
    sobrenome: 'Martins',
    idade: 26,
    cidade: 'Belo Horizonte',
    posicao: 'Meio-Campo',
    nota: 7.5,
    foto: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 4,
    nome: 'André',
    sobrenome: 'Lima',
    idade: 27,
    cidade: 'Recife',
    posicao: 'Goleiro',
    nota: 8.0,
    foto: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    id: 5,
    nome: 'Pedro',
    sobrenome: 'Souza',
    idade: 29,
    cidade: 'Fortaleza',
    posicao: 'Lateral',
    nota: 7.1,
    foto: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 6,
    nome: 'Rafael',
    sobrenome: 'Rocha',
    idade: 31,
    cidade: 'Curitiba',
    posicao: 'Zagueiro',
    nota: 7.9,
    foto: 'https://randomuser.me/api/portraits/men/6.jpg'
  },
  {
    id: 7,
    nome: 'Bruno',
    sobrenome: 'Castro',
    idade: 25,
    cidade: 'Manaus',
    posicao: 'Meio-Campo',
    nota: 8.4,
    foto: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    id: 8,
    nome: 'Henrique',
    sobrenome: 'Vieira',
    idade: 32,
    cidade: 'Brasília',
    posicao: 'Lateral',
    nota: 7.7,
    foto: 'https://randomuser.me/api/portraits/men/8.jpg'
  },
  {
    id: 9,
    nome: 'Thiago',
    sobrenome: 'Ferreira',
    idade: 24,
    cidade: 'Salvador',
    posicao: 'Atacante',
    nota: 8.1,
    foto: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    id: 10,
    nome: 'Marcos',
    sobrenome: 'Oliveira',
    idade: 33,
    cidade: 'Natal',
    posicao: 'Meio-Campo',
    nota: 7.6,
    foto: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    id: 11,
    nome: 'Eduardo',
    sobrenome: 'Almeida',
    idade: 28,
    cidade: 'Porto Alegre',
    posicao: 'Zagueiro',
    nota: 7.3,
    foto: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    id: 12,
    nome: 'Leandro',
    sobrenome: 'Moura',
    idade: 27,
    cidade: 'João Pessoa',
    posicao: 'Goleiro',
    nota: 8.0,
    foto: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    id: 13,
    nome: 'Fernando',
    sobrenome: 'Nunes',
    idade: 26,
    cidade: 'Aracaju',
    posicao: 'Lateral',
    nota: 6.9,
    foto: 'https://randomuser.me/api/portraits/men/13.jpg'
  },
  {
    id: 14,
    nome: 'Vitor',
    sobrenome: 'Ribeiro',
    idade: 30,
    cidade: 'Maceió',
    posicao: 'Atacante',
    nota: 8.3,
    foto: 'https://randomuser.me/api/portraits/men/14.jpg'
  },
  {
    id: 15,
    nome: 'Fábio',
    sobrenome: 'Teixeira',
    idade: 31,
    cidade: 'Florianópolis',
    posicao: 'Zagueiro',
    nota: 7.8,
    foto: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    id: 16,
    nome: 'Matheus',
    sobrenome: 'Gomes',
    idade: 29,
    cidade: 'Cuiabá',
    posicao: 'Meio-Campo',
    nota: 8.0,
    foto: 'https://randomuser.me/api/portraits/men/16.jpg'
  },
  {
    id: 17,
    nome: 'Igor',
    sobrenome: 'Barros',
    idade: 28,
    cidade: 'Campo Grande',
    posicao: 'Atacante',
    nota: 7.9,
    foto: 'https://randomuser.me/api/portraits/men/17.jpg'
  },
  {
    id: 18,
    nome: 'Danilo',
    sobrenome: 'Fonseca',
    idade: 30,
    cidade: 'Belém',
    posicao: 'Zagueiro',
    nota: 6.8,
    foto: 'https://randomuser.me/api/portraits/men/18.jpg'
  },
  {
    id: 19,
    nome: 'Diego',
    sobrenome: 'Ramos',
    idade: 27,
    cidade: 'Teresina',
    posicao: 'Meio-Campo',
    nota: 7.5,
    foto: 'https://randomuser.me/api/portraits/men/19.jpg'
  },
  {
    id: 20,
    nome: 'Alex',
    sobrenome: 'Monteiro',
    idade: 32,
    cidade: 'Vitória',
    posicao: 'Goleiro',
    nota: 8.1,
    foto: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    id: 21,
    nome: 'Rodrigo',
    sobrenome: 'Cavalcante',
    idade: 31,
    cidade: 'São Luís',
    posicao: 'Lateral',
    nota: 6.7,
    foto: 'https://randomuser.me/api/portraits/men/21.jpg'
  },
  {
    id: 22,
    nome: 'Gustavo',
    sobrenome: 'Batista',
    idade: 25,
    cidade: 'Palmas',
    posicao: 'Atacante',
    nota: 7.6,
    foto: 'https://randomuser.me/api/portraits/men/22.jpg'
  }
];

export default jogadores;
