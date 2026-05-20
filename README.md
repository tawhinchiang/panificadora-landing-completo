# Panificadora Landing Page

Landing page para panificadora desenvolvida com React + Vite, focada em apresentar a empresa, destacar produtos e direcionar pedidos para o WhatsApp.

## Visao geral

O projeto inclui:

- cabecalho com navegacao
- secao principal
- lista de produtos
- area de encomendas
- secao institucional
- galeria
- localizacao
- botao flutuante de WhatsApp
- rodape com contato

## Tecnologias

- React
- Vite
- CSS puro
- lucide-react

## Requisitos

- Node.js 18 ou superior
- npm 9 ou superior

## Como executar localmente

1. Clone o repositorio:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Entre na pasta do projeto:

```bash
cd panificadora-landing-completo
```

3. Instale as dependencias:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador:

```txt
http://localhost:5173/
```

## Scripts disponiveis

```bash
npm run dev
```

Inicia o servidor local de desenvolvimento.

```bash
npm run build
```

Gera a versao de producao na pasta `dist/`.

```bash
npm run preview
```

Abre uma visualizacao local da build gerada.

## Estrutura principal

```txt
src/
  components/
  data/
  styles/
  utils/
public/
  imagens/
```

## Onde editar o conteudo

Os dados principais do site ficam nestes arquivos:

- `src/data/businessInfo.js`
- `src/data/products.js`
- `src/data/gallery.js`

Use esses arquivos para alterar:

- nome da panificadora
- slogan
- endereco
- horario de funcionamento
- link do Instagram
- numero e mensagens do WhatsApp
- produtos e descricoes
- itens da galeria

## Imagens do projeto

Adicione as imagens reais em:

```txt
public/imagens/
```

Nomes esperados atualmente pelo layout:

```txt
hero.jpg
paes.jpg
bolos.jpg
salgados.jpg
doces.jpg
cafe.jpg
encomendas.jpg
galeria-1.jpg
galeria-2.jpg
galeria-3.jpg
galeria-4.jpg
galeria-5.jpg
galeria-6.jpg
```

Se esses arquivos nao existirem, a pagina continua funcionando, mas algumas areas visuais ficarao sem imagem.

## Como subir para o GitHub

Se o repositorio ainda nao estiver conectado ao GitHub:

```bash
git init
git add .
git commit -m "feat: inicializa landing page da panificadora"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```

Depois disso, para enviar novas alteracoes:

```bash
git add .
git commit -m "chore: atualiza conteudo do site"
git push
```

## Sugestao para deploy

Este projeto funciona muito bem em:

- Vercel
- Netlify
- Cloudflare Pages

Fluxo recomendado:

1. subir o projeto para o GitHub
2. conectar o repositorio na plataforma de deploy
3. usar o comando de build `npm run build`
4. publicar a pasta gerada automaticamente pela plataforma

## Observacoes

- O projeto nao usa banco de dados.
- O projeto nao depende de API externa.
- O foco atual e uma landing page estatica com integracoes por link.
