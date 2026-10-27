/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import styles from './enviar.module.css';

export default function Enviar() {
  return (
    <section className={styles.enviar}>
      <header className={styles.cabecalho}>
        <h2>Envie sua receita</h2>
        <p>
          O acervo é construído pela comunidade. Compartilhe um preparo barato
          que funciona na sua casa.
        </p>
      </header>

      <form className={styles.formulario}>
        <fieldset className={styles.duasColunas}>
          <legend>Seus dados</legend>

          <p>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Digite seu nome" />
          </p>

          <p>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="voce@email.com" />
          </p>
        </fieldset>

        <fieldset className={styles.duasColunas}>
          <legend>Sobre a receita</legend>

          <p>
            <label htmlFor="titulo">Nome da receita</label>
            <input type="text" id="titulo" placeholder="Ex.: sopa de legumes" />
          </p>

          <p>
            <label htmlFor="custo">Custo aproximado por porção</label>
            <select id="custo" defaultValue="">
              <option value="">Selecione</option>
              <option value="ate3">Até R$ 3,00</option>
              <option value="3a6">De R$ 3,00 a R$ 6,00</option>
              <option value="acima6">Acima de R$ 6,00</option>
            </select>
          </p>

          <p className={styles.larguraTotal}>
            <label htmlFor="descricao">Ingredientes e modo de preparo</label>
            <textarea id="descricao" rows="6" placeholder="Descreva a receita"></textarea>
          </p>
        </fieldset>

        <footer className={styles.rodapeFormulario}>
          <p>
            <input type="checkbox" id="autorizo" />
            <label htmlFor="autorizo">Autorizo a publicação da receita no site.</label>
          </p>

          <button type="button">Enviar receita</button>
        </footer>
      </form>
    </section>
  );
}
