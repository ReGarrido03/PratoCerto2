/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const caminho = path.join(process.cwd(), 'app', 'dados', 'receitas.json');
    const conteudo = await readFile(caminho, 'utf-8');

    return Response.json(JSON.parse(conteudo));
  } catch {
    return Response.json({ erro: 'Não foi possível ler o acervo de receitas.' }, { status: 500 });
  }
}
