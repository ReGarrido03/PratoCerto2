/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import Link from 'next/link';
import styles from './Cabecalho.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.topo}>
      <Link href="/" className={styles.marca}>
        <img src="/imagens/logo.svg" alt="Logotipo do Prato Certo" />
        <h1>Prato Certo</h1>
      </Link>

      <div className={styles.busca}>
        <input type="search" placeholder="Buscar receita ou ingrediente" />
        <button type="button">Buscar</button>
      </div>

      <nav className={styles.menu}>
        <ul>
          <li><Link href="/">Receitas</Link></li>
          <li><Link href="/sobre">Como funciona</Link></li>
          <li><Link href="/enviar">Enviar receita</Link></li>
        </ul>
      </nav>
    </header>
  );
}
