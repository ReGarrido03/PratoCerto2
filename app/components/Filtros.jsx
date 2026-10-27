/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import styles from './Filtros.module.css';

export default function Filtros() {
  return (
    <aside className={styles.filtros} id="filtros">
      <h2>Filtrar receitas</h2>

      <fieldset className={styles.grupoIngredientes}>
        <legend>O que você tem em casa</legend>

        <p>
          <input type="checkbox" id="ing-arroz" />
          <label htmlFor="ing-arroz">arroz</label>
        </p>
        <p>
          <input type="checkbox" id="ing-ovo" />
          <label htmlFor="ing-ovo">ovo</label>
        </p>
        <p>
          <input type="checkbox" id="ing-cebola" />
          <label htmlFor="ing-cebola">cebola</label>
        </p>
        <p>
          <input type="checkbox" id="ing-feijao" />
          <label htmlFor="ing-feijao">feijão</label>
        </p>
        <p>
          <input type="checkbox" id="ing-batata" />
          <label htmlFor="ing-batata">batata</label>
        </p>
        <p>
          <input type="checkbox" id="ing-cenoura" />
          <label htmlFor="ing-cenoura">cenoura</label>
        </p>
        <p>
          <input type="checkbox" id="ing-macarrao" />
          <label htmlFor="ing-macarrao">macarrão</label>
        </p>
        <p>
          <input type="checkbox" id="ing-tomate" />
          <label htmlFor="ing-tomate">tomate</label>
        </p>
        <p>
          <input type="checkbox" id="ing-frango" />
          <label htmlFor="ing-frango">frango</label>
        </p>
        <p>
          <input type="checkbox" id="ing-leite" />
          <label htmlFor="ing-leite">leite</label>
        </p>
      </fieldset>

      <fieldset className={styles.grupoCusto}>
        <legend>Custo máximo por porção</legend>
        <label htmlFor="custo-maximo">Até R$ 5,50</label>
        <input type="range" id="custo-maximo" min="1" max="10" step="0.5" defaultValue="5.5" />
      </fieldset>

      <fieldset className={styles.grupoCaixas}>
        <legend>Tempo de preparo</legend>

        <p>
          <input type="checkbox" id="tempo-curto" />
          <label htmlFor="tempo-curto">até 20 minutos</label>
        </p>
        <p>
          <input type="checkbox" id="tempo-medio" />
          <label htmlFor="tempo-medio">de 20 a 40 minutos</label>
        </p>
        <p>
          <input type="checkbox" id="tempo-longo" />
          <label htmlFor="tempo-longo">mais de 40 minutos</label>
        </p>
      </fieldset>

      <fieldset className={styles.grupoCaixas}>
        <legend>Tipo de refeição</legend>

        <p>
          <input type="checkbox" id="ref-cafe" />
          <label htmlFor="ref-cafe">café da manhã</label>
        </p>
        <p>
          <input type="checkbox" id="ref-almoco" />
          <label htmlFor="ref-almoco">almoço e jantar</label>
        </p>
        <p>
          <input type="checkbox" id="ref-lanche" />
          <label htmlFor="ref-lanche">lanche</label>
        </p>
      </fieldset>

      <button type="button" className={styles.limpar}>Limpar filtros</button>
    </aside>
  );
}
