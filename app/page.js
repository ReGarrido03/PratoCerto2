/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

'use client';

import { useEffect, useState } from 'react';
import Apresentacao from './components/Apresentacao';
import Filtros from './components/Filtros';
import Resultados from './components/Resultados';
import styles from './page.module.css';

export default function Home() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetch('/api/receitas')
      .then((resposta) => resposta.json())
      .then((dados) => setReceitas(dados));
  }, []);

  if (receitas.length === 0) {
    return <p className={styles.carregando}>Carregando receitas...</p>;
  }

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
