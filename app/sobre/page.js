/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import styles from './sobre.module.css';

export default function Sobre() {
  return (
    <>
      <section className={styles.comoFunciona} id="como-funciona">
        <h2>Como funciona</h2>

        <ol>
          <li>
            <article>
              <p className={styles.numero}>01</p>
              <h3>Marque o que você tem</h3>
              <p className={styles.descricao}>
                Selecione na lateral os ingredientes disponíveis na sua despensa naquele momento.
              </p>
            </article>
          </li>

          <li>
            <article>
              <p className={styles.numero}>02</p>
              <h3>Veja o que dá para fazer</h3>
              <p className={styles.descricao}>
                A lista mostra apenas as receitas possíveis, ordenadas pelo menor custo por porção.
              </p>
            </article>
          </li>

          <li>
            <article>
              <p className={styles.numero}>03</p>
              <h3>Ajuste para a sua família</h3>
              <p className={styles.descricao}>
                Informe quantas pessoas vão comer e o site recalcula quantidades e valor total.
              </p>
            </article>
          </li>
        </ol>
      </section>

      <section className={styles.projeto}>
        <section className={styles.textoProjeto}>
          <h2>Sobre o projeto</h2>
          <p>
            O Prato Certo nasceu da percepção de que muitas famílias desperdiçam
            alimentos por não saber o que preparar com o que já têm em casa, e de que
            receitas na internet raramente informam quanto custa o prato.
          </p>
          <p>
            O site inverte a lógica dos sites de culinária: em vez de organizar por
            tipo de prato, organiza pelo que a pessoa já possui, mostrando o custo
            aproximado de cada preparo.
          </p>
          <a href="https://github.com/ReGarrido03/PratoCerto2" className="botao">Ler o tutorial no GitHub</a>
        </section>

        <aside className={styles.ods}>
          <h3>Objetivos de Desenvolvimento Sustentável</h3>

          <dl>
            <div>
              <dt>ODS 2</dt>
              <dd>Fome zero e agricultura sustentável — acesso a alimentação nutritiva e suficiente.</dd>
            </div>
            <div>
              <dt>ODS 12</dt>
              <dd>Consumo responsável — redução do desperdício doméstico de alimentos.</dd>
            </div>
            <div>
              <dt>ODS 3</dt>
              <dd>Saúde e bem-estar — foco no valor nutricional das refeições.</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
