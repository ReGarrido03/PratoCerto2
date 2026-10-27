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

A interface foi dividida em seis componentes reutilizáveis. O diagrama abaixo mostra
quem renderiza quem a partir do `layout.js`, que envolve todas as páginas.

![Árvore de componentes do projeto](docs/componentes.png)

O critério foi componentizar o que se repete ou é compartilhado. O `Cabecalho` e o
`Rodape` ficam no `layout.js` e por isso aparecem nas quatro páginas sem serem
reescritos em nenhuma delas, e o `ReceitaCard` é instanciado uma vez para cada receita,
recebendo os dados por props. As páginas `/sobre` e `/enviar` montam o próprio conteúdo,
porque são usadas uma vez só.

## Como rodar o projeto

O projeto usa Node.js. Com o repositório clonado, instale as dependências e suba o servidor de desenvolvimento:

```
npm install
npm run dev
```

O site fica disponível em `http://localhost:3000`. Quando o projeto é aberto pelo GitHub Codespaces, o acesso é feito pelo link da porta 3000 oferecido pelo próprio ambiente.

## Uso de Inteligência Artificial

O grupo utilizou ferramentas de IA como apoio durante o desenvolvimento. Esta seção será mantida atualizada ao longo do projeto, detalhando em que etapas e para quais finalidades a ferramenta foi usada. Até o momento, o uso se deu no apoio à organização do protótipo e à revisão da redação deste tutorial.

## Próximas etapas

Esta versão do tutorial documenta a ideação, o protótipo e o ponto de partida da migração. Serão acrescentados, conforme a implementação avançar, a explicação sobre a vantagem da componentização em React, os trechos de código comentados, incluindo a rota de API construída no Next.js, e a conclusão com os aprendizados do grupo.
