/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import './globals.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';

export const metadata = {
  title: 'Prato Certo',
  description: 'Receitas nutritivas e de baixo custo a partir do que você já tem em casa.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
