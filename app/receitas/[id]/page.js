/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import Link from 'next/link';
import receitas from '../../dados/receitas.json';
import styles from './receita.module.css';

export default async function Receita({ params }) {
  const { id } = await params;
  const receita = receitas.find((item) => String(item.id) === id);

  if (!receita) {
    return <p className={styles.aviso}>Receita não encontrada.</p>;
  }

  return (
    <article className={styles.painel}>
      <header className={styles.cabecalho}>
        <h2>{receita.nome}</h2>
        <Link href="/" className={styles.voltar}>Voltar às receitas</Link>
      </header>

      <section className={styles.preparo}>
        <figure>
          <img src={receita.imagem} alt={receita.alt} />
          <figcaption>Rendimento base de {receita.porcoes} porções.</figcaption>
        </figure>

        <h3>Modo de preparo</h3>
        <ol>
          {receita.preparo.map((passo) => (
            <li key={passo}>{passo}</li>
          ))}
        </ol>
      </section>

      <aside className={styles.lateral}>
        <section className={styles.calculadora}>
          <h3>Quantas porções?</h3>

          <p className={styles.contador}>
            <button type="button">-</button>
            <span className={styles.porcoes}>{receita.porcoes}</span>
            <button type="button">+</button>
          </p>

          <dl className={styles.custos}>
            <dt>custo estimado</dt>
            <dd>R$ {(receita.preco * receita.porcoes).toFixed(2).replace('.', ',')}</dd>

            <dt>por porção</dt>
            <dd>R$ {receita.preco.toFixed(2).replace('.', ',')}</dd>
          </dl>
        </section>

        <section className={styles.ingredientes}>
          <h3>Ingredientes</h3>

          <ul className={styles.listaIngredientes}>
            {receita.ingredientes.map((ingrediente) => (
              <li key={ingrediente.nome}>
                <span>{ingrediente.nome}</span>
                <span>{String(ingrediente.qtd).replace('.', ',')} {ingrediente.unidade}</span>
              </li>
            ))}
          </ul>

          <button type="button" className={styles.adicionarCompras}>Adicionar à lista de compras</button>
        </section>
      </aside>
    </article>
  );
}
