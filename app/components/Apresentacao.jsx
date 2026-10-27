/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import Link from 'next/link';
import styles from './Apresentacao.module.css';

export default function Apresentacao({ receitas }) {
  const destaque = receitas.find((receita) => receita.id === 2);

  let soma = 0;
  for (const receita of receitas) {
    soma += receita.preco;
  }
  const media = soma / receitas.length;

  return (
    <section className={styles.apresentacao}>
      <h2>Descubra o que dá para cozinhar com o que já está na sua cozinha</h2>

      <p className={styles.chamada}>
        Marque os ingredientes disponíveis e veja receitas nutritivas com o custo
        por porção calculado na hora.
      </p>

      <Link href="#filtros" className="botao">Começar pelo filtro</Link>

      <dl className={styles.numeros}>
        <dt>receitas no acervo</dt>
        <dd>{receitas.length}</dd>

        <dt>custo médio por porção</dt>
        <dd>R$ {media.toFixed(2).replace('.', ',')}</dd>

        <dt>acesso livre, sem cadastro</dt>
        <dd>100%</dd>
      </dl>

      <article className={styles.destaque}>
        <figure>
          <img src={destaque.imagem} alt={destaque.alt} />
        </figure>
        <p className={styles.etiqueta}>Receita da semana</p>
        <h3>{destaque.nome}</h3>
        <Link href={`/receitas/${destaque.id}`} className={styles.verReceita}>Ver receita</Link>
      </article>
    </section>
  );
}
