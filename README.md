# HR Lanches - Landing Page

Landing page front-end da HR Lanches baseada no PRD fornecido. O projeto nao possui back-end, carrinho, checkout, login, painel administrativo, banco de dados ou coleta de dados.

## Como executar

```bash
npm install
npm run dev
```

Depois acesse `http://localhost:3000`.

## Deploy na Vercel

Configuracao recomendada na Vercel:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: deixar automatico
- Node.js: `>=20.9.0`

O projeto nao precisa de `vercel.json`; a Vercel detecta Next.js pelo `package.json`.

## Conteudo implementado

- Header com logo, links ancora, WhatsApp e menu mobile visual.
- Hero com CTA para WhatsApp e CTA para cardapio.
- Beneficios, promocao cumulativa, cardapio visual, doces e bebidas.
- Doces em pote, exceto Torta de Limao.
- Historia em linha do tempo: 2009, 2013, 2019 e Hoje.
- Entrega, retirada, localizacao, formas de pagamento e aviso contra golpes.
- Rodape com contatos, horario, endereco e direitos autorais.

## Checklist de validacao

- CTAs abrem `https://wa.me/5521998252496` com mensagem contextual.
- Nao ha sabores, precos, horarios ou formas de pagamento fora do PRD.
- Nao foi criado back-end, API, login, carrinho ou checkout.
- Links externos usam `noopener noreferrer`.
- Imagens possuem texto alternativo e dimensoes definidas.
- Layout responsivo para mobile e desktop.
