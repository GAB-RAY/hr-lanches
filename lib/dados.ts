export const contato = {
  nome: "HR Lanches",
  fundacao: "20 de setembro de 2009",
  endereco: "Rua Camarões, nº 3, Bangu, Rio de Janeiro/RJ",
  whatsapp: "(21) 99825-2496",
  whatsappUrl: "https://wa.me/5521998252496",
  instagram: "@hrj_lanches",
  instagramUrl: "https://www.instagram.com/hrj_lanches",
  horario: "Segunda a sábado: 19h30 às 23h30 | Domingo: 21h às 23h30",
  entrega: "Entrega própria somente na Vila Kennedy; taxa consultada pelo WhatsApp",
  retirada: "Retirada disponível no local"
};

export function linkWhatsApp(mensagem: string) {
  return `${contato.whatsappUrl}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagens = {
  geral: "Olá! Vim pelo site da HR Lanches e gostaria de fazer um pedido.",
  promocao:
    "Olá! Vi a promoção de 3 pizzas + refrigerante Convenção e gostaria de fazer meu pedido."
};

export type Produto = {
  nome: string;
  preco: string;
  imagem: string;
  gerada?: boolean;
  nota?: string;
};

export const pizzas = [
  {
    nome: "Frango com Catupiry",
    preco: "R$ 30,00",
    imagem: "/images/pizza-mucarela.jpeg"
  },
  {
    nome: "Frango com Cheddar",
    preco: "R$ 30,00",
    imagem: "/images/pizza-calabresa.jpeg"
  },
  {
    nome: "Calabresa",
    preco: "R$ 25,00",
    imagem: "/images/pizza-frango-catupiry.jpeg"
  },
  {
    nome: "Muçarela",
    preco: "R$ 25,00",
    imagem: "/images/pizza-frango-cheddar.jpeg"
  }
];

export const pizzasSemFoto = [
  "Presunto - R$ 25,00",
  "Presunto com Cheddar - R$ 30,00",
  "Calabresa com Cheddar - R$ 30,00"
];

export const salgados = [
  { nome: "Joelho de Presunto e Queijo", preco: "R$ 7,00", imagem: "/images/empadao-frango-mucarela.jpeg" },
  { nome: "Hambúrguer de Queijo e Presunto", preco: "R$ 10,00", imagem: "/images/joelho-presunto-queijo.jpeg" },
  { nome: "Empadão de Frango com Muçarela", preco: "R$ 10,00", imagem: "/images/hamburguer-cheddar.jpeg" },
  { nome: "Hambúrguer de Cheddar", preco: "R$ 10,00", imagem: "/images/hamburguer-queijo-presunto.jpeg" },
  { nome: "Pizza Fechada de Queijo e Presunto", preco: "R$ 10,00", imagem: "/images/pizza-fechada.jpeg" }
];

export const doces = [
  { nome: "Bolo de Chocolate no pote", preco: "R$ 10,00", imagem: "/images/pudim.jpeg" },
  { nome: "Torta de Limão", preco: "R$ 10,00", imagem: "/images/bolo-chocolate.jpeg" },
  { nome: "Pudim", preco: "R$ 10,00", imagem: "/images/torta-limao.jpeg" },
  {
    nome: "Bolo de Cenoura no pote",
    preco: "R$ 10,00",
    imagem: "/images/bolo-cenoura-pote-chocolate.png",
    gerada: true,
    nota: "Imagem representativa em pote"
  },
  {
    nome: "Bolo Prestígio no pote",
    preco: "R$ 10,00",
    imagem: "/images/bolo-prestigio-pote-chocolate.png",
    gerada: true,
    nota: "Imagem representativa em pote"
  },
  {
    nome: "Pavê de Chocolate no pote",
    preco: "R$ 10,00",
    imagem: "/images/pave-chocolate-pote.png",
    gerada: true,
    nota: "Imagem representativa em pote"
  }
];

export const docesSemFoto = [
  "Pavê de Creme no pote",
  "Pavê Prestígio no pote",
  "Pavê de Chocolate no pote",
  "Pavê de Coco no pote",
  "Pavê Misto no pote (creme e chocolate)"
];

export const bebidas = [
  { nome: "Coca-Cola retornável, somente com casco", preco: "R$ 9,00" },
  { nome: "Convenção Guaraná ou Abacaxi", preco: "R$ 6,00" },
  { nome: "Guaraná Antarctica 1 L", preco: "R$ 6,00" },
  { nome: "Guaracamp Natural", preco: "R$ 2,00" }
];
