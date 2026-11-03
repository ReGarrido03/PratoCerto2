/* Otto Martins Mota - RA 10418170 | Renan Garrido - RA 10417093 | Yuri Milliet da Silva - RA 10417884 */

import receitas from '../../dados/receitas.json';

export async function GET() {
  return Response.json(receitas);
}
