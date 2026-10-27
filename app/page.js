/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import receitas from './dados/receitas.json';
import Apresentacao from './components/Apresentacao';
import Filtros from './components/Filtros';
import Resultados from './components/Resultados';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Apresentacao receitas={receitas} />

      <section className={styles.areaReceitas}>
        <Filtros />
        <Resultados receitas={receitas} />
      </section>
    </>
  );
}
