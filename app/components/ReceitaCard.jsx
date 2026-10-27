/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import Link from 'next/link';
import styles from './ReceitaCard.module.css';

export default function ReceitaCard({ receita }) {
  return (
    <li>
      <article className={styles.receita}>
        <figure>
          <img src={receita.imagem} alt={receita.alt} />
        </figure>

        <section className={styles.descricao}>
          <h3>{receita.nome}</h3>
          <p>{receita.descricao}</p>
          <ul className={styles.selos}>
            <li>{receita.tempo} min</li>
            <li>{receita.porcoes} porções</li>
            <li>{receita.selo}</li>
          </ul>
        </section>

        <footer className={styles.valor}>
          <p>
            <strong>R$ {receita.preco.toFixed(2).replace('.', ',')}</strong>
            <small>por porção</small>
          </p>
          <Link href={`/receitas/${receita.id}`} className={styles.abrirReceita}>Ver receita</Link>
        </footer>
      </article>
    </li>
  );
}
