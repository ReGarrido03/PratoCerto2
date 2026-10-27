/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import ReceitaCard from './ReceitaCard';
import styles from './Resultados.module.css';

export default function Resultados({ receitas }) {
  const visiveis = receitas.slice(0, 4);

  return (
    <section>
      <header className={styles.cabecalho}>
        <h2>Receitas encontradas</h2>
        <p>{receitas.length} resultados para os filtros selecionados</p>
      </header>

      <menu className={styles.ordenacao}>
        <li><button type="button" aria-pressed="true">menor preço</button></li>
        <li><button type="button" aria-pressed="false">mais rápidas</button></li>
        <li><button type="button" aria-pressed="false">mais recentes</button></li>
        <li className={styles.itemCompras}>
          <button type="button" className={styles.abrirCompras}>Lista de compras (0)</button>
        </li>
      </menu>

      <ul className={styles.lista}>
        {visiveis.map((receita) => (
          <ReceitaCard key={receita.id} receita={receita} />
        ))}
      </ul>

      <button type="button" className={styles.verMais}>
        Ver mais receitas ({receitas.length - visiveis.length} restantes)
      </button>
    </section>
  );
}
