# Prato Certo — Projeto 2

Site que reúne receitas nutritivas e de baixo custo, organizadas a partir dos ingredientes que a pessoa já tem em casa. Esta é a continuação do Projeto 1, agora migrado para uma arquitetura de componentes com React e Next.js.

**Integrantes**

Otto Martins Mota — RA 10418170
Renan Garrido — RA 10417093
Yuri Milliet da Silva — RA 10417884

---

## Sobre o projeto

O Prato Certo é um site aberto, sem cadastro ou login, em que o usuário marca os ingredientes disponíveis na própria despensa e recebe as receitas que consegue preparar com aquilo, cada uma acompanhada do custo aproximado por porção. Ao abrir uma receita, ele ajusta o número de porções e vê as quantidades e o valor serem recalculados na hora.

A proposta inverte a lógica dos sites de culinária tradicionais. Em vez de organizar o conteúdo por tipo de prato, o que obriga a pessoa a sair para comprar o que falta, o Prato Certo parte do que já existe na cozinha e mostra o caminho a partir dali.

## Por que escolhemos este projeto

A escolha do tema nasceu da busca por uma demanda concreta e próxima da nossa comunidade, e não de um exercício técnico. Ao discutir problemas do dia a dia que poderiam ser enfrentados com uma aplicação simples, percebemos que a alimentação aparecia com frequência, mas por um motivo diferente do esperado: a dificuldade não estava em saber o que é saudável, e sim em transformar o que já existe em casa numa refeição completa sem estourar o orçamento.

Duas constatações orientaram o restante do trabalho. A primeira é que boa parte do desperdício doméstico acontece porque as pessoas não sabem o que preparar com os ingredientes que sobraram, e acabam descartando alimentos ainda bons. A segunda é que as receitas disponíveis na internet quase nunca informam quanto custa o prato, e frequentemente pressupõem ingredientes caros ou de difícil acesso, o que afasta justamente quem mais precisaria delas.

O nome do projeto foi escolhido pelo duplo sentido que carrega. O prato certo é aquele adequado do ponto de vista nutricional, mas também é a escolha certa do ponto de vista do orçamento familiar, e é essa combinação que o site tenta oferecer.

## Caráter extensionista e relação com as ODS

O projeto atende a uma demanda real de famílias que precisam se alimentar bem com recursos limitados. Todo o conteúdo é de acesso livre, sem qualquer barreira de cadastro, de modo que basta um navegador para usar a ferramenta. A abertura para a comunidade também se dá pelo código publicado no GitHub, que pode ser adaptado por outras pessoas à realidade da própria região, e por um formulário no próprio site pelo qual qualquer usuário envia uma receita para o acervo, tornando o conteúdo construído coletivamente.

A proposta se conecta principalmente ao Objetivo de Desenvolvimento Sustentável 2, que trata de garantir o acesso a alimentos seguros, nutritivos e suficientes ao longo de todo o ano, já que o site facilita o planejamento de refeições adequadas com orçamento reduzido. De forma complementar, dialoga com o Objetivo 12, porque o filtro pelos ingredientes disponíveis incentiva o aproveitamento integral do que já está em casa e reduz o desperdício doméstico, e com o Objetivo 3, uma vez que a atenção ao valor nutricional das receitas contribui para a saúde e o bem-estar das famílias atendidas.

## Protótipo

O protótipo foi desenhado antes de qualquer linha de código, em formato de wireframe de baixa fidelidade, sem cores ou imagens definitivas, para que a discussão se concentrasse na estrutura da informação e no fluxo de uso. O site foi organizado em três telas: a listagem de receitas, que é a principal, a apresentação do projeto e o envio de receitas pela comunidade.

<img width="862" height="795" alt="Wireframe da tela principal" src="https://github.com/user-attachments/assets/65a96686-4beb-40e0-a4ed-1dfb0231d9d6" />

A tela principal foi dividida em duas colunas. À esquerda ficam os filtros, com a seleção de ingredientes, o custo máximo por porção, o tempo de preparo e o tipo de refeição, e à direita a listagem de receitas em linhas horizontais, cada uma com miniatura, descrição breve, selos informativos e o custo por porção em destaque. Essa disposição foi escolhida para deixar o filtro sempre visível enquanto o usuário percorre os resultados, já que ele é o elemento central da proposta.

<img width="860" height="726" alt="Wireframe da receita aberta e da apresentação" src="https://github.com/user-attachments/assets/ae5b90ee-b052-4479-9150-bf4261063bb0" />

No Projeto 1, a receita abria em um painel sobreposto à listagem, para não tirar o usuário do contexto da busca. No Projeto 2, essa tela passa a ser uma página própria, com endereço próprio, aproveitando o roteamento dinâmico do Next.js. A mudança mantém a mesma informação, modo de preparo, ingredientes e custos, e ainda permite compartilhar o link de uma receita específica.

<img width="860" height="357" alt="Wireframe do formulário de envio" src="https://github.com/user-attachments/assets/b9ad18a4-1713-4913-800a-3bc98c30352f" />

A última tela traz o formulário pelo qual qualquer pessoa envia uma receita para o acervo, com os dados do autor, as informações do preparo e a autorização de publicação. É por ela que o caráter colaborativo do projeto se concretiza na prática.

## O que muda em relação ao Projeto 1

O Projeto 1 foi construído em HTML, CSS e JavaScript puro, com o acervo de vinte receitas em um arquivo JSON lido diretamente pelo navegador. O site já tinha filtros por ingrediente, custo, tempo e tipo de refeição, ordenação dos resultados, painel de receita com calculadora de porções e uma lista de compras que soma os ingredientes de várias receitas.

Nesta segunda etapa, a mesma aplicação é reconstruída com React e Next.js. A interface deixa de ser montada por concatenação de strings e passa a ser dividida em componentes reutilizáveis, o estado da tela passa a ser controlado por `useState` e `useEffect`, e o acervo deixa de ser lido como arquivo para ser servido por uma rota de API criada dentro do próprio projeto.

## Componentização em React

A interface foi dividida em seis componentes reutilizáveis. O diagrama abaixo mostra quem renderiza quem a partir do `layout.js`, que envolve todas as páginas, e como os dados chegam até a tela.

![Árvore de componentes do projeto](docs/componentes.png)

O critério foi componentizar o que se repete ou é compartilhado. O `Cabecalho` e o `Rodape` ficam no `layout.js` e por isso aparecem nas quatro páginas sem serem reescritos em nenhuma delas, e o `ReceitaCard` é instanciado uma vez para cada receita, recebendo os dados por props. As páginas `/sobre` e `/enviar` montam o próprio conteúdo, porque são usadas uma vez só.

A vantagem em relação ao Projeto 1 aparece na manutenção. Antes, o cabeçalho estava escrito três vezes, uma em cada arquivo HTML, e o card de receita era uma string montada com crases dentro do JavaScript. Agora cada um existe em um lugar só, e mudanças se propagam sozinhas.

## Relatório técnico

### O papel do servidor

O servidor é o processo Node.js que o Next.js sobe com `npm run dev`. Ele tem três papéis nesta aplicação.

| Papel | O que faz | Arquivo responsável |
|---|---|---|
| Entregar as páginas | Identifica a rota, monta o HTML dos componentes de servidor e envia ao navegador | `app/layout.js` e os `page.js` |
| Servir os dados | Lê o acervo e devolve em JSON pelo método GET | `app/api/receitas/route.js` |
| Acessar o arquivo de dados | É o único ponto da aplicação que abre o arquivo do acervo | `app/dados/receitas.json` |

O que o servidor **não** faz, e é bom deixar claro:

| Recurso | Situação no projeto |
|---|---|
| Banco de dados | Não existe. O acervo é um arquivo fixo |
| Login ou sessão | Não existe. O site é aberto, sem cadastro |
| Gravação de dados | Não existe. A API é somente de leitura |
| Outros métodos HTTP | Só o GET foi implementado |

#### Como os dados chegam à tela

| Passo | O que acontece | Onde |
|---|---|---|
| 1 | O usuário abre a página inicial | Navegador |
| 2 | O HTML da página é montado e enviado | Servidor |
| 3 | O `useEffect` dispara `fetch('/api/receitas')` | Navegador |
| 4 | A rota de API lê o `receitas.json` e devolve o JSON | Servidor |
| 5 | O `setReceitas` guarda a resposta e o React redesenha a tela | Navegador |


### Como o JSON é consumido

O acervo sempre foi o mesmo arquivo, `app/dados/receitas.json`, mas a forma de chegar até ele mudou. Na primeira versão da migração, os componentes importavam o arquivo diretamente. Agora o arquivo é servido por uma rota de API e consumido com `fetch`.

| Aspecto | Antes | Agora |
|---|---|---|
| Como o dado chega | `import receitas from './dados/receitas.json'` | `fetch('/api/receitas')` |
| Quem lê o arquivo | Cada página que precisava dele | Só a rota de API |
| Quando é lido | Na compilação, junto com o código | A cada carregamento da página, por HTTP |
| Onde acontece | Servidor, dentro do próprio componente | Servidor na API, navegador no `fetch` |
| Tipo das páginas | Componentes de servidor | Componentes de cliente (`'use client'`) |

O código da rota de API tem cinco linhas:

```js
import receitas from '../../dados/receitas.json';

export async function GET() {
  return Response.json(receitas);
}
```

E o consumo, idêntico nas duas páginas que precisam dos dados:

```js
const [receitas, setReceitas] = useState([]);

useEffect(() => {
  fetch('/api/receitas')
    .then((resposta) => resposta.json())
    .then((dados) => setReceitas(dados));
}, []);
```

| Trecho | Função |
|---|---|
| `useState([])` | Guarda a lista, que começa vazia |
| `useEffect(..., [])` | O array vazio faz o efeito rodar uma única vez, quando a página aparece |
| `fetch('/api/receitas')` | Faz a requisição HTTP à rota de API |
| `.then(resposta => resposta.json())` | Converte a resposta em objeto JavaScript |
| `setReceitas(dados)` | Guarda no estado, e é isso que faz o React redesenhar a tela |

Enquanto a resposta não chega, a lista está vazia e a página mostra "Carregando receitas...". Isso evita que a tela quebre no primeiro instante, antes de os dados existirem.

#### Quem usa o acervo e como

| Arquivo | Como recebe os dados | O que faz com eles |
|---|---|---|
| `app/api/receitas/route.js` | `import` do arquivo JSON | Devolve o acervo completo em JSON |
| `app/page.js` | `fetch` da API | Guarda no estado e repassa por props |
| `app/receitas/[id]/page.js` | `fetch` da API | Usa `find` para achar a receita do id e monta a página |
| `components/Apresentacao.jsx` | Prop `receitas` | Conta o total, calcula o custo médio e usa `find` para a receita da semana |
| `components/Resultados.jsx` | Prop `receitas` | Mostra o total e usa `slice(0, 4)` para exibir as quatro primeiras |
| `components/ReceitaCard.jsx` | Prop `receita`, uma só | Monta o card de uma receita |
| `components/Filtros.jsx` | Não recebe dados | Só a marcação dos filtros, ainda sem lógica |
| `Cabecalho`, `Rodape`, `/sobre`, `/enviar` | Não recebem dados | Conteúdo fixo |

Campos de cada receita usados em cada ponto:

| Arquivo | Campos lidos |
|---|---|
| `Apresentacao.jsx` | `id`, `nome`, `imagem`, `alt`, `preco` |
| `ReceitaCard.jsx` | `id`, `nome`, `imagem`, `alt`, `descricao`, `tempo`, `porcoes`, `selo`, `preco` |
| `receitas/[id]/page.js` | `id`, `nome`, `imagem`, `alt`, `porcoes`, `preco`, `preparo`, `ingredientes` |

Nenhum componente importa o `receitas.json`. O único arquivo do projeto que o abre é a rota de API, o que pode ser conferido com `grep -r "receitas.json" app/`.


### O que é do cliente e o que é do servidor

No Next.js todo componente nasce como componente de servidor. Ele só vira componente de cliente quando o arquivo começa com `'use client'`, o que é necessário para usar estado, efeitos ou eventos do usuário.

| Arquivo | Onde roda | Por quê |
|---|---|---|
| `app/layout.js` | Servidor | Só monta a estrutura comum das páginas |
| `components/Cabecalho.jsx` | Servidor | Conteúdo fixo, importado pelo layout |
| `components/Rodape.jsx` | Servidor | Conteúdo fixo, importado pelo layout |
| `app/sobre/page.js` | Servidor | Conteúdo fixo, sem interação |
| `app/enviar/page.js` | Servidor | Conteúdo fixo, sem interação |
| `app/api/receitas/route.js` | Servidor | É a própria rota de API |
| `app/page.js` | **Cliente** | Usa `useState`, `useEffect` e `fetch` |
| `app/receitas/[id]/page.js` | **Cliente** | Usa `useState`, `useEffect`, `useParams` e `fetch` |
| `components/Apresentacao.jsx` | **Cliente** | Importado pela home, que é de cliente |
| `components/Filtros.jsx` | **Cliente** | Importado pela home, que é de cliente |
| `components/Resultados.jsx` | **Cliente** | Importado pela home, que é de cliente |
| `components/ReceitaCard.jsx` | **Cliente** | Importado pelos `Resultados` |

**Detalhe importante:** a diretiva `'use client'` não vale só para o arquivo onde está escrita. Ela se estende a tudo o que aquele arquivo importa. Por isso os quatro últimos componentes da tabela rodam no navegador mesmo sem declarar a diretiva.

**Como verificamos:** depois de rodar `npm run build`, procuramos trechos de texto de cada componente dentro dos arquivos JavaScript enviados ao navegador.

| Componente | Texto procurado | Encontrado no navegador |
|---|---|---|
| `Apresentacao` | "Receita da semana" | Sim, logo é de cliente |
| `Filtros` | "O que você tem em casa" | Sim, logo é de cliente |
| `Resultados` | "Receitas encontradas" | Sim, logo é de cliente |
| `ReceitaCard` | "por porção" | Sim, logo é de cliente |
| `Cabecalho` | "Buscar receita ou ingrediente" | Não, logo é de servidor |
| `Rodape` | "projeto extensionista" | Não, logo é de servidor |
| `app/sobre/page.js` | "Objetivos de Desenvolvimento" | Não, logo é de servidor |
| `app/enviar/page.js` | "Envie sua receita" | Não, logo é de servidor |

A consequência prática: quem abre a `/sobre` baixa só HTML e CSS, enquanto quem abre a home baixa também o código dos quatro componentes da listagem. Esse é o preço da interatividade naquela tela.


### Rotas da aplicação e mapeamento

O roteamento do Next.js é baseado em pastas. A estrutura de diretórios dentro de `app` é o que define os endereços.

| Convenção | O que o Next.js entende |
|---|---|
| Nome da pasta | Um segmento do endereço |
| `page.js` | Aquela pasta vira uma página acessível |
| `route.js` | Aquela pasta vira uma rota de API |
| `[id]` entre colchetes | Trecho variável do endereço (parâmetro) |
| Pasta sem `page.js` nem `route.js` | Não vira rota, como `components` e `dados` |

As cinco rotas definidas:

| Endereço | Arquivo | Tipo | O que entrega |
|---|---|---|---|
| `/` | `app/page.js` | Página | Listagem de receitas com filtros |
| `/sobre` | `app/sobre/page.js` | Página — **rota simples** | Como funciona e apresentação do projeto |
| `/enviar` | `app/enviar/page.js` | Página | Formulário de envio de receita |
| `/receitas/4` | `app/receitas/[id]/page.js` | Página — **rota dinâmica** | Preparo, ingredientes e custo de uma receita |
| `/api/receitas` | `app/api/receitas/route.js` | Rota de API (GET) | O acervo completo em JSON |

#### Sobre as duas rotas exigidas no enunciado

| Rota | Característica | Comportamento |
|---|---|---|
| `/sobre` | Sem parâmetro | Mostra sempre o mesmo conteúdo |
| `/receitas/[id]` | Com parâmetro | `/receitas/4` e `/receitas/12` usam o mesmo arquivo, que lê o id com `useParams`. Um id inexistente, como `/receitas/999`, exibe "Receita não encontrada" |

A rota dinâmica substituiu o painel sobreposto do Projeto 1. No lugar de um conteúdo escondido dentro da página inicial, cada receita passou a ter endereço próprio, que pode ser compartilhado.

## Como rodar o projeto

O projeto usa Node.js. Com o repositório clonado, instale as dependências e suba o servidor de desenvolvimento:

```
npm install
npm run dev
```

O site fica disponível em `http://localhost:3000`. Quando o projeto é aberto pelo GitHub Codespaces, o acesso é feito pelo link da porta 3000 oferecido pelo próprio ambiente.

Para conferir a rota de API isoladamente, basta abrir `http://localhost:3000/api/receitas` no navegador, que devolve o acervo completo em JSON.

## Uso de Inteligência Artificial

O grupo utilizou ferramentas de IA como apoio durante o desenvolvimento. Esta seção será mantida atualizada ao longo do projeto, detalhando em que etapas e para quais finalidades a ferramenta foi usada. Até o momento, o uso se deu no apoio à organização do protótipo e à revisão da redação deste tutorial.

## Próximas etapas

Esta versão do tutorial documenta a ideação, o protótipo e o ponto de partida da migração. Serão acrescentados, conforme a implementação avançar, a explicação sobre a vantagem da componentização em React, os trechos de código comentados, incluindo a rota de API construída no Next.js, e a conclusão com os aprendizados do grupo.
