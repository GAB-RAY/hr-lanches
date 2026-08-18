import Image from "next/image";
import {
  Clock,
  CreditCard,
  Flame,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Pizza,
  ShieldAlert,
  Store,
  Truck
} from "lucide-react";
import {
  bebidas,
  contato,
  doces,
  docesSemFoto,
  linkWhatsApp,
  mensagens,
  type Produto,
  pizzas,
  pizzasSemFoto,
  salgados
} from "@/lib/dados";

const beneficios = [
  "🍕 Pizza de 30cm",
  "🥤 Coca-Cola gelada",
  "🍰 Bolo de pote",
  "🔥 Promoções diárias",
  "⚡ Entrega na Vila Kennedy",
  "📍 Bangu, Rio de Janeiro"
];

const linhaDoTempo = [
  {
    ano: "2009",
    texto:
      "A HR Lanches nasceu em uma pequena barraca em frente de casa, com receitas preparadas pela família."
  },
  {
    ano: "2013",
    texto:
      "A garagem e um cômodo da casa viraram loja e cozinha, com novos salgados e empadão de frango."
  },
  {
    ano: "2019",
    texto: "As pizzas entraram no cardápio e se tornaram o carro-chefe da casa."
  },
  {
    ano: "Hoje",
    texto:
      "Ao longo dos anos, muitos negócios abriram e fecharam, mas a HR Lanches continuou."
  }
];

function BotaoWhatsApp({
  mensagem,
  children,
  destaque = false
}: {
  mensagem: string;
  children: React.ReactNode;
  destaque?: boolean;
}) {
  return (
    <a
      className={destaque ? "botao botao-destaque" : "botao"}
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} aria-hidden="true" />
      {children}
    </a>
  );
}

function ProdutoCard({
  produto
}: {
  produto: Produto;
}) {
  const mensagemProduto = `Olá! Vim pelo site da HR Lanches e gostaria de pedir: ${produto.nome}.`;

  return (
    <article className="produto-card">
      <div className="produto-imagem">
        <Image src={produto.imagem} alt={produto.nome} fill sizes="(max-width: 768px) 90vw, 260px" />
      </div>
      <div className="barra-fixa-espaco" aria-hidden="true" />
      <div className="produto-info">
        <div>
          <h3>{produto.nome}</h3>
          {produto.nota && <p>{produto.nota}</p>}
        </div>
        <strong>{produto.preco}</strong>
      </div>
      <a className="produto-cta" href={linkWhatsApp(mensagemProduto)} target="_blank" rel="noopener noreferrer">
        Pedir esse item
      </a>
      {produto.gerada && <span className="selo">Representativa</span>}
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <div className="barra-fixa">
        <header className="topo">
        <a className="marca" href="#inicio" aria-label="Voltar para o início">
          <Image src="/images/logo.jpeg" alt="HR Lanches" width={74} height={74} priority />
          <span>HR Lanches</span>
        </a>
        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#promocao">Promoção</a>
          <a href="#historia">História</a>
          <a href="#contato">Contato</a>
        </nav>
        <details className="menu-mobile">
          <summary aria-label="Abrir menu">
            <Menu size={22} />
          </summary>
          <nav aria-label="Navegação mobile">
            <a href="#cardapio">Cardápio</a>
            <a href="#promocao">Promoção</a>
            <a href="#historia">História</a>
            <a href="#contato">Contato</a>
          </nav>
        </details>
        <BotaoWhatsApp mensagem={mensagens.geral}>Pedir agora</BotaoWhatsApp>
      </header>

      <div className="faixa-xadrez" aria-hidden="true" />
      <section className="letreiro" aria-label="Destaques da HR Lanches">
        <div className="letreiro-track">
          {[0, 1, 2, 3].map((grupo) => (
            <div className="letreiro-grupo" aria-hidden={grupo > 0} key={`grupo-${grupo}`}>
              {beneficios.map((beneficio) => (
                <span key={`${grupo}-${beneficio}`}>{beneficio}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
      </div>
      <div className="barra-fixa-espaco" aria-hidden="true" />

      <section id="inicio" className="hero">
        <div className="hero-conteudo">
          <p className="etiqueta etiqueta-contorno">
            <Flame size={14} aria-hidden="true" /> Aberto no horário de funcionamento
          </p>
          <h1>
            <span>HR</span>
            Lanches
          </h1>
          <p>
            Pizza de 30cm, salgados de forno e bolo de pote. Tradição de família em Bangu
            desde 2009, com pedidos direto pelo WhatsApp.
          </p>
          <div className="acoes">
            <BotaoWhatsApp mensagem={mensagens.geral} destaque>
              Pedir agora
            </BotaoWhatsApp>
            <a className="botao botao-secundario" href="#cardapio">
              Ver cardápio
            </a>
          </div>
          <div className="hero-metricas" aria-label="Informações rápidas">
            <span>📍 Rio de Janeiro, RJ</span>
            <span>☎ {contato.whatsapp}</span>
            <span>🍕 Pizza 30cm</span>
          </div>
        </div>
      </section>

      <div className="faixa-xadrez" aria-hidden="true" />

      <section id="promocao" className="secao promocao">
        <div className="promocao-poster">
          <Image src="/images/mascote.jpeg" alt="Mascote promocional HR Lanches" width={360} height={360} />
        </div>
        <div>
          <p className="etiqueta">Promoção oficial</p>
          <h2>A cada 3 pizzas, ganhe 1 refrigerante Convenção.</h2>
          <p>
            Escolha Guaraná ou Abacaxi. A promoção é cumulativa: 3 pizzas = 1
            refrigerante; 6 pizzas = 2; 9 pizzas = 3.
          </p>
          <BotaoWhatsApp mensagem={mensagens.promocao} destaque>
            Quero essa promoção
          </BotaoWhatsApp>
        </div>
      </section>

      <div className="faixa-xadrez" aria-hidden="true" />

      <section id="cardapio" className="secao">
        <div className="cabecalho-secao">
          <p className="etiqueta">Nossos sabores</p>
          <h2>Cardápio</h2>
          <a className="telefone-cardapio" href={linkWhatsApp(mensagens.geral)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={14} aria-hidden="true" />
            {contato.whatsapp}
          </a>
        </div>

        <div className="categoria">
          <h3><Pizza size={18} aria-hidden="true" /> Pizzas</h3>
          <p className="observacao observacao-premium">
            Sabores e preços oficiais do cardápio da HR Lanches.
          </p>
          <div className="grade-produtos">{pizzas.map((produto) => <ProdutoCard key={produto.nome} produto={produto} />)}</div>
          <p className="lista-simples">Também disponíveis: {pizzasSemFoto.join("; ")}.</p>
        </div>

        <div className="categoria">
          <h3>Salgados</h3>
          <div className="grade-produtos">{salgados.map((produto) => <ProdutoCard key={produto.nome} produto={produto} />)}</div>
        </div>

        <div className="categoria">
          <h3>Doces</h3>
          <p className="observacao">Bolos e doces são vendidos em potes, exceto a Torta de Limão.</p>
          <div className="grade-produtos">{doces.map((produto) => <ProdutoCard key={produto.nome} produto={produto} />)}</div>
          <p className="lista-simples">Demais doces em pote: {docesSemFoto.join("; ")} - R$ 10,00 cada.</p>
        </div>

        <div className="categoria">
          <h3>Bebidas</h3>
          <div className="bebidas">
            {bebidas.map((bebida) => (
              <div key={bebida.nome}>
                <span>{bebida.nome}</span>
                <strong>{bebida.preco}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="historia" className="secao historia">
        <div className="cabecalho-secao">
          <p className="etiqueta">Nossa história</p>
          <h2>Uma história feita em família, com trabalho, tradição e muito sabor.</h2>
        </div>
        <div className="timeline">
          {linhaDoTempo.map((item) => (
            <article key={item.ano}>
              <strong>{item.ano}</strong>
              <p>{item.texto}</p>
            </article>
          ))}
        </div>
        <p className="frase-destaque">A HR Lanches continuou.</p>
      </section>

      <div className="faixa-xadrez" aria-hidden="true" />

      <section className="secao atendimento">
        <article>
          <Truck aria-hidden="true" />
          <h2>Entrega e retirada</h2>
          <p>{contato.entrega}. {contato.retirada}.</p>
        </article>
        <article>
          <ShieldAlert aria-hidden="true" />
          <h2>Pagamento seguro</h2>
          <p>
            Aceitamos dinheiro, cartão de crédito, cartão de débito e Pix somente pelo QR
            Code apresentado na máquina. A HR Lanches não possui chave Pix para pagamento antecipado.
          </p>
        </article>
        <article>
          <Clock aria-hidden="true" />
          <h2>Horário</h2>
          <p>{contato.horario}. Pedidos somente durante o horário de funcionamento.</p>
        </article>
      </section>

      <section id="contato" className="secao contato">
        <div>
          <p className="etiqueta">Contato e localização</p>
          <h2>Peça pelo WhatsApp ou retire na Rua Camarões.</h2>
          <ul>
            <li><MessageCircle aria-hidden="true" /> {contato.whatsapp}</li>
            <li><Instagram aria-hidden="true" /> {contato.instagram}</li>
            <li><MapPin aria-hidden="true" /> {contato.endereco}</li>
            <li><CreditCard aria-hidden="true" /> Dinheiro, crédito, débito e Pix na máquina</li>
          </ul>
          <div className="acoes">
            <BotaoWhatsApp mensagem={mensagens.geral} destaque>
              Chamar no WhatsApp
            </BotaoWhatsApp>
            <a className="botao botao-secundario" href={contato.instagramUrl} target="_blank" rel="noopener noreferrer">
              Ver Instagram
            </a>
          </div>
        </div>
        <div className="qr-card">
          <Image src="/images/qr-whatsapp-limpo.jpeg" alt="QR Code oficial do WhatsApp da HR Lanches" width={220} height={220} />
          <span>QR Code oficial do WhatsApp</span>
        </div>
        <iframe
          className="mapa"
          title="Mapa da HR Lanches"
          src="https://www.google.com/maps?q=Rua%20Camar%C3%B5es%203%20Bangu%20Rio%20de%20Janeiro%20RJ&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <div className="faixa-xadrez" aria-hidden="true" />

      <footer>
        <div>
          <Image src="/images/logo.jpeg" alt="HR Lanches" width={64} height={64} />
          <strong>HR Lanches</strong>
        </div>
        <p>{contato.horario}</p>
        <p>{contato.endereco}</p>
        <p>© HR Lanches. Todos os direitos reservados.</p>
        <Store aria-hidden="true" />
      </footer>
    </main>
  );
}
