/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

'use client';

import { useEffect, useState } from 'react';
import Apresentacao from './components/Apresentacao';
import Filtros from './components/Filtros';
import Resultados from './components/Resultados';
import styles from './page.module.css';

export default function Home() {
  const [receitas, setReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch('/api/receitas')
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('A API respondeu com erro.');
        }
        return resposta.json();
      })
      .then((dados) => setReceitas(dados))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return <p className={styles.aviso}>Carregando receitas...</p>;
  }

  if (erro) {
    return <p className={styles.aviso}>Não foi possível carregar as receitas. Tente novamente mais tarde.</p>;
  }

  if (receitas.length === 0) {
    return <p className={styles.aviso}>Nenhuma receita no acervo por enquanto.</p>;
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
