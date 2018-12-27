import { Receta } from 'src/app/models/receta.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Ingrediente } from 'src/app/models/ingrediente.model';


export class RecetaResponse {
  public rec_details: Receta;
  public rec_usuarios: Usuario;
  public rec_ingredientes: Ingrediente;
}
